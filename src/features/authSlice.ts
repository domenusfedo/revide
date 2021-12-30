import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import firebase from 'firebase/app';
import { app } from '../firebase';

interface AuthState {
    isAuth: boolean,
    token: string | undefined,
    uid: string,
    error: string | undefined
    username: string | undefined,
    isLoading: boolean,
    shouldRedirect: boolean
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
    uid: '',
    error: '',
    username: undefined,
    isLoading: false,
    shouldRedirect: false
}

export const signInHandler = createAsyncThunk(
    'auth/signIn',
    async (action: PayloadAction<SignInType>) => {
        if (!action.payload.password || !action.payload.mail) return;

        try {
            const res = await app.auth().signInWithEmailAndPassword(action.payload.mail, action.payload.password)
                .catch((err: firebase.FirebaseError) => {
                    throw new Error(err.message)
                })

            const user = res.user;
            const token = await user?.getIdToken();
            const uid = user?.uid as string;
            const username = user?.displayName;

            return {
                isAuth: true,
                token: token!.toString(),
                uid: uid,
                error: undefined,
                username: username,
                isLoading: false,
                shouldRedirect: true
            }
        } catch (err) {
            const error = err as Error;

            return {
                isAuth: false,
                token: undefined,
                uid: '',
                error: error.message,
                username: undefined,
                isLoading: false,
                shouldRedirect: false
            }
        }
    }
)

export const signUpHandler = createAsyncThunk(
    'auth/signUp',
    async (action: PayloadAction<SignUpType>) => {
        if (!action.payload.username || !action.payload.password || !action.payload.mail) return;

        try {
            const res = await app.auth().createUserWithEmailAndPassword(action.payload.mail, action.payload.password)
                .then(data => {
                    app.auth().currentUser?.updateProfile({
                        displayName: action.payload.username
                    })
                    return data;
                })
                .then((data) => {
                    app.firestore().collection(data.user?.uid as string).doc('followedEvents').set({})
                    return data;
                })
                .catch((err: firebase.FirebaseError) => {
                    throw new Error(err.message)
                })

            const user = res.user;

            const token = await user?.getIdToken();
            const uid = user?.uid as string;

            return {
                isAuth: true,
                token: token,
                uid: uid,
                error: undefined,
                username: action.payload.username,
                shouldRedirect: true
            }
        } catch (err) {
            const error = err as Error;

            return {
                isAuth: false,
                token: undefined,
                uid: '',
                error: error.message,
                username: undefined,
                shouldRedirect: false
            }
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = undefined;
            state.shouldRedirect = false;
        }
    },
    extraReducers: builder => {
        //Sin In
        builder.addCase(signInHandler.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(signInHandler.fulfilled, (state, action) => {
            state.isLoading = false;
            if (action.payload === undefined) return;

            state.isLoading = false;
            state.shouldRedirect = action.payload?.shouldRedirect;
            state.isAuth = action.payload?.isAuth;
            state.error = action.payload.error;
            state.token = action.payload.token;
            state.username = action.payload.username as string;
            state.uid = action.payload.uid;
        })

        //Sign Up
        builder.addCase(signUpHandler.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(signUpHandler.fulfilled, (state, action) => {
            state.isLoading = false;
            if (action.payload === undefined) return;

            console.log(action)

            state.shouldRedirect = action.payload?.shouldRedirect;
            state.isAuth = action.payload?.isAuth;
            state.error = action.payload.error;
            state.token = action.payload.token;
            state.username = action.payload.username;
            state.uid = action.payload.uid;
        })
    }
});

export const {
    clearError
} = authSlice.actions
export default authSlice.reducer