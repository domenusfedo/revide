import { createSlice } from '@reduxjs/toolkit'

interface AuthState {

}

const initialState: AuthState = {

}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    }
});

export const {

} = authSlice.actions
export default authSlice.reducer