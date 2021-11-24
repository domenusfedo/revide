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

interface EventsState {
    saved: Event[],
    dashboard: {
        highlightedEvent: Event,
        dashboardEvents: Event[]
    }
}

//Highlighted @FelsonInteligent
const highlightedEvent: Event = {
    createdAt: new Date(),
    editedAt: new Date(),
    location: 'Warsaw, Krakowskie przedmiescie',
    title: 'Fruit Party',
    author: {
        id: '1231235672',
        username: 'Testnazwy' //Can be anyone
    },
    participants: 69,
}

//Pagination @FelsonInteligent Api should response with array of 5 elements: Event based on actual page 1:[1E, 2E, 3E, 4E, 5E] 2:[6E, 7E, 8E, 9E, 10E]
const dashboardEvents: Event[] = [
    {
        createdAt: new Date(),
        editedAt: new Date(),
        location: 'Warsaw, Sadowa',
        title: 'Pac pac',
        author: {
            id: '312312312',
            username: 'testNazwy'
        },
        participants: 69,
    }, {
        createdAt: new Date(),
        editedAt: new Date(),
        location: 'Warsaw, Sadowa',
        title: "Kill 'em all",
        author: {
            id: '312312312',
            username: 'testNazwy'
        },
        participants: 69,
    }, {
        createdAt: new Date(),
        editedAt: new Date(),
        location: 'Warsaw, Sadowa',
        title: "Walky doggy",
        author: {
            id: '312312312',
            username: 'testNazwy'
        },
        participants: 69,
    }, {
        createdAt: new Date(),
        editedAt: new Date(),
        location: 'Warsaw, Sadowa',
        title: "Simple Walk",
        author: {
            id: '312312312',
            username: 'testNazwy'
        },
        participants: 69,
    }, {
        createdAt: new Date(),
        editedAt: new Date(),
        location: 'Warsaw, Sadowa',
        title: "No Walk",
        author: {
            id: '312312312',
            username: 'testNazwy'
        },
        participants: 69,
    }, {
        createdAt: new Date(),
        editedAt: new Date(),
        location: 'Warsaw, Sadowa',
        title: "TyTy Laura",
        author: {
            id: '312312312',
            username: 'testNazwy'
        },
        participants: 69,
    }
]
//Pagination

//Fetch 5 events based on actual page in payload
export const fetchFiveEvents = createAsyncThunk(
    'fetch/allEvents',
    async () => {
        //fetch 5 elements: Event based on actual page 1:[1E, 2E, 3E, 4E, 5E]
        //replace in state / or add to chunks 1:[1E, 2E, 3E, 4E, 5E] 2:[6E, 7E, 8E, 9E, 10E]
        //if fetched element === {}; fetched element = {title: 'It can be Your event' <- incentive to create an Event <- when clikced redirect to Add new Event}
        //part of state.events
    }
)

const initialState: EventsState = {
    saved: [], //User's created/saved events visible in Profile section
    dashboard: {
        highlightedEvent,
        dashboardEvents //This should be always array of 5 elements
    }
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