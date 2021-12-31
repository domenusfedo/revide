import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { app } from "../firebase";

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
    dashboard: {}
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
                console.log(err)
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
            console.log(err)
        });

    }
)

export const removeFollowedEvents = createAsyncThunk(
    'fetch/followedEvents',
    async (args: {
        uid: string,
        event: Event
    }, { dispatch }) => {
        await app.firestore().doc(`${args.uid}/followedEvents`).update({
            [args.event.id]: deleteField()
        }).then(() => {
            dispatch(deleteFromFollowed(args.event))
        }).catch(err => {
            console.log(err)
        })

    }
)

const initialState: EventsState = {
    followed: [],
    dashboard: {}
}

const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        addToFollowed: (state, action: PayloadAction<Event>) => {
            state.followed = [...state.followed, action.payload]
            state.followed.sort((a, b) => a.startAt.getTime() - b.startAt.getTime())
        },

        deleteFromFollowed: (state, action: PayloadAction<Event>) => {
            state.followed = state.followed.filter(e => e.id !== action.payload.id)
        },

        fetchFollowed: (state, action: PayloadAction<Event[]>) => {
            state.followed = [...action.payload]
        }
    }
})

export const {
    addToFollowed,
    deleteFromFollowed,
    fetchFollowed
} = eventsSlice.actions;

export default eventsSlice.reducer;