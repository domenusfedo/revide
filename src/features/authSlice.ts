import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
    isAuth: boolean,
    token: string | null
}

const initialState: AuthState = {
    isAuth: false,
    token: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        //After successful signin/signup set isAuth to true and set token
        //After logout set is Auth to false and remove token
    }
});

export const {

} = authSlice.actions
export default authSlice.reducer