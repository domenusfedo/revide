import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Event {
    createdAt: Date,
    editedAt: Date,
    location: any,
    title: string,
    author: {
        id: string,
        username: string
    },
    participants: number,
}

interface DashboardEvents {
    high: Event,
    medium: Event,
    small: Event[]
}

interface EventsState {
    events: Event[],
    saved: Event[],
    dashboard: DashboardEvents
}

//Dummy data
const dashboardEvents: DashboardEvents = {
    high: {
        createdAt: new Date(),
        editedAt: new Date(),
        location: 'Warsaw, Krakowskie przedmiescie',
        title: 'Fruit Party',
        author: {
            id: '1231235672',
            username: 'Testnazwy' //Can be anyone
        },
        participants: 69,
    },
    medium: {
        createdAt: new Date(),
        editedAt: new Date(),
        location: 'Warsaw, Sadowa',
        title: "Kill 'em all",
        author: {
            id: '1231235672',
            username: 'Testnazwy' //only logged user
        },
        participants: 12,
    },
    small: [
        {
            createdAt: new Date(),
            editedAt: new Date(),
            location: 'Warsaw, Sadowa',
            title: "Walky doggy",
            author: {
                id: '1231235672',
                username: 'Testnazwy' //only logged user
            },
            participants: 3,
        },
        {
            createdAt: new Date(),
            editedAt: new Date(),
            location: 'Warsaw, Sadowa',
            title: "Simple walk",
            author: {
                id: '1231235672',
                username: 'Testnazwy' //only logged user
            },
            participants: 7,
        }
    ]
}
//Dummy data

export const fetchDashboardEvents = createAsyncThunk(
    'fetch/dashboardEvents',
    async () => {
        //fetch dashboard events data
        //part of state.dashboard
    }
);

export const fetchAllEvents = createAsyncThunk(
    'fetch/allEvents',
    async () => {
        //fetch all events data
        //part of state.events
    }
)

const initialState: EventsState = {
    events: [
        {
            createdAt: new Date(),
            editedAt: new Date(),
            location: 'Warsaw',
            title: 'Fruit Party',
            author: {
                id: '1231235672',
                username: 'Testnazwy'
            },
            participants: 69,
        }
    ],
    saved: [],
    dashboard: dashboardEvents
}

const eventsSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {

    },
    extraReducers: {
        //async actions
    }
})

export const {

} = eventsSlice.actions;

export default eventsSlice.reducer;