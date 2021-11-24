import { configureStore } from '@reduxjs/toolkit'

import authReducer from '../features/authSlice';
import eventsReducer from '../features/eventsSlice';
import nearReducer from '../features/nearsSlice';


export const store = configureStore({
    reducer: {
        near: nearReducer,
        auth: authReducer,
        events: eventsReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
})


export type RootState = ReturnType<typeof store.getState>;