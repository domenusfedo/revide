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
                //Need to learn how to convert firebase.firestore.DocumentData to typed object
                //And order by date

                const obj: any = doc;
                const array: Event[] = [];

                Object.keys(obj).map(e =>
                    array.push(
                        obj[e] as Event
                    )
                )

                // array.sort((a, b) => new Date(a.startAt).getMilliseconds() - new Date(b.startAt).getMilliseconds())

                dispatch(fetchFollowed(array))
                //array.sort((a, b) => new Date(a.startAt).getMilliseconds() - new Date(b.startAt).getMilliseconds())
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