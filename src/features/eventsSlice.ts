import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { app } from "../firebase";

import firebase from 'firebase/app';

import { deleteField } from "firebase/firestore";

export interface Event {
    country: string,
    city: string,
    street: string,
    paricipantAmount: number,
    description: string,
    background: string,
    shouldBeBlack: boolean,
    creator: string,
    title: string,
    id: string,
    startAt: Date
}

interface FetchedFromFireBaseEvent {
    country: string,
    city: string,
    street: string,
    paricipantAmount: number,
    description: string,
    background: string,
    shouldBeBlack: boolean,
    creator: string,
    title: string,
    id: string,
    startAt: {
        seconds: number,
        nanoseconds: number
    }
}

interface EventsState {
    followed: Event[],
    issues: {
        followedError: string | undefined,
        addError: string | undefined,
        removeError: string | undefined
    }
}

export const fetchFollowedEvents = createAsyncThunk(
    'fetch/followedEvents',
    async (args: string, { dispatch }) => {
        await app.firestore().collection(args).doc('followedEvents').get()
            .then(res => res.data())
            .then(doc => {
                const obj: any = doc; //IDK WHY Firebase returning object instead of array //NOT my fault //In real backend connecting this will not appear
                const array: FetchedFromFireBaseEvent[] = Object.keys(obj).map(e => obj[e]) //basicaly same object(cos we are sending to firebase with Event Interface structure) however firebase create timestamp

                const newArray: Event[] = array.map(e => {
                    const convertedObj = {
                        ...e,
                        startAt: new Date(e.startAt.seconds) //Here we are converting it to App Event Interface
                    }
                    return convertedObj;
                })

                newArray.sort((a, b) => a.startAt.getTime() - b.startAt.getTime()) //and now we have sorted array of Events

                dispatch(fetchFollowed(newArray))
            })
            .catch(err => {
                const error = err as Error;

                dispatch(setError({
                    where: 'removeError',
                    message: error.message
                })) //Sorry we couldn't fetch Your events
            });

    }
)

export const addFollowedEvents = createAsyncThunk(
    'fetch/followedEvents',
    async (args: {
        uid: string,
        event: Event
    }, { dispatch }) => {
        await app.firestore().collection(args.uid).doc('followedEvents').update({
            [args.event.id]: args.event
        }).then(res => {
            dispatch(addToFollowed(args.event))
        }).catch(err => {
            const error = err as Error;

            dispatch(setError({
                where: 'addError',
                message: error.message
            })) //Sorry we couldn't add to follow
        });

    }
)

export const removeFollowedEvents = createAsyncThunk(
    'fetch/followedEvents',
    async (args: {
        uid: string,
        event: Event
    }, { dispatch }) => {
        try {
            await app.firestore().doc(`${args.uid}/followedEvents`).update({
                [args.event.id]: deleteField()
            }).then(() => {
                dispatch(deleteFromFollowed(args.event))
            }).catch((err: firebase.FirebaseError) => {
                throw new Error(err.message)
            })

        } catch (err) {
            const error = err as Error;

            dispatch(setError({
                where: 'removeError',
                message: error.message
            })) //Sorry we couldn't delete
        }
    }
)

const initialState: EventsState = {
    followed: [],
    issues: {
        followedError: undefined,
        addError: undefined,
        removeError: undefined
    }
}

const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        addToFollowed: (state, action: PayloadAction<Event>) => {
            if (state.issues.removeError) {
                clearError({
                    where: 'addError'
                })
            }

            state.followed = [...state.followed, action.payload]
            state.followed.sort((a, b) => a.startAt.getTime() - b.startAt.getTime())
        },

        deleteFromFollowed: (state, action: PayloadAction<Event>) => {
            if (state.issues.removeError) {
                clearError({
                    where: 'removeError'
                })
            }

            state.followed = state.followed.filter(e => e.id !== action.payload.id)
        },

        fetchFollowed: (state, action: PayloadAction<Event[]>) => {
            if (state.issues.removeError) {
                clearError({
                    where: 'followedError'
                })
            }

            state.followed = [...action.payload]
        },
        setError: (state, action: PayloadAction<{ where: keyof EventsState['issues'], message: string }>) => {
            state.issues[action.payload.where] = action.payload.message
        },
        clearError: (state, action: PayloadAction<{ where: keyof EventsState['issues'], clearAll?: boolean }>) => {
            if (action.payload.clearAll) {
                state.issues = {
                    addError: undefined,
                    followedError: undefined,
                    removeError: undefined
                }
            }
            state.issues[action.payload.where] = undefined;
        }
    }
})

export const {
    addToFollowed,
    deleteFromFollowed,
    fetchFollowed,
    setError,
    clearError
} = eventsSlice.actions;

export default eventsSlice.reducer;