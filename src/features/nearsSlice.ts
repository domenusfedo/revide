import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Near {
    longitude: number,
    latitude: number,
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

interface Own {
    longitude: number,
    latitude: number,
    id: string,
    username: string
}

interface NearsState {
    nears: Near[],
    own: Own
}

const initialState: NearsState = {
    nears: [
        {
            longitude: 312,
            latitude: 3123,
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
    own: {
        longitude: 333,
        latitude: 666,
        id: '1231235672',
        username: 'Testnazwy'
    }
}

const nearsSlice = createSlice({
    name: 'nears',
    initialState,
    reducers: {

    }
})

export const {

} = nearsSlice.actions;

export default nearsSlice.reducer;