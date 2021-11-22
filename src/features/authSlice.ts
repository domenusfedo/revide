import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { auth } from '../firebase';

interface AuthState {
    isAuth: boolean,
    token: string | undefined,
    uid: string | undefined,
    error: string | undefined,
    user: string | undefined,
    isLoading: boolean
}

interface SignInType {
    mail: string,
    password: string
}

interface SignUpType {
    username: string,
    mail: string,
    password: string
}

const initialState: AuthState = {
    isAuth: false,
    token: undefined,
    uid: undefined,
    error: '',
    user: undefined,
    isLoading: false
}

export const signInHandler = createAsyncThunk(
    'auth/signIn',
    async (action: PayloadAction<SignInType>) => {
        try {
            const res = await auth.signInWithEmailAndPassword(action.payload.mail, action.payload.password)

            const userData = await res.user
            const token = await userData?.getIdToken();
            const uid = await userData?.uid;
            const username = userData?.displayName;

            return {
                isLoading: false,
                isAuth: true,
                token: token,
                uid: uid,
                username: username,
                error: undefined
            }
        } catch (err) {
            return {
                isLoading: false,
                isAuth: false,
                token: undefined,
                uid: undefined,
                username: undefined,
                error: `Err: ${err}`
            }
        }
    }
)

export const signUpHandler = createAsyncThunk(
    'auth/signUp',
    async (action: PayloadAction<SignUpType>) => {
        try {
            const res = await auth.createUserWithEmailAndPassword(action.payload.mail, action.payload.password)
            res.user?.updateProfile({
                displayName: action.payload.username
            })

            const token = res.user?.getIdToken().toString();
            const user = res.user?.displayName?.toString();

            return {
                isLoading: false,
                isAuth: true,
                user: user,
                token: token,
                error: undefined
            }
        } catch (err) {
            return {
                isLoading: false,
                isAuth: false,
                token: undefined,
                user: undefined,
                error: `Err: ${err}`
            }
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = undefined
        }
    },
    extraReducers: builder => {
        //Sin In
        builder.addCase(signInHandler.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(signInHandler.fulfilled, (state, action) => {
            console.log(action.payload)
            state.isLoading = action.payload?.isLoading;
            state.isAuth = action.payload?.isAuth;
            state.error = action.payload.error;
            state.token = action.payload.token;
            state.uid = action.payload.uid;
        })

        //Sign Up
        builder.addCase(signUpHandler.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(signUpHandler.fulfilled, (state, action) => {
            console.log(action.payload)
            state.isLoading = action.payload?.isLoading;
            state.token = action.payload?.token;
            state.user = action.payload?.user;
            state.error = action.payload?.error;
        })
    }
});

export const {
    clearError
} = authSlice.actions
export default authSlice.reducer