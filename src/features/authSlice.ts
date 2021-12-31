import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import firebase from 'firebase/app';
import { app } from '../firebase';

interface AuthState {
    isAuth: boolean,
    user: {
        token: string | undefined,
        uid: string,
        username: string | undefined,
    }
    error: string | undefined
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
    user: {
        token: undefined,
        uid: '',
        username: undefined,
    },
    error: undefined,
    isLoading: false,
    shouldRedirect: false
}

export const signInHandler = createAsyncThunk(
    'auth/signIn',
    async (action: PayloadAction<SignInType>, { dispatch }) => {
        if (!action.payload.password || !action.payload.mail) return;
        dispatch(setLoading(true))

        try {
            const res = await app
                .auth().signInWithEmailAndPassword(action.payload.mail, action.payload.password)
                .catch((err: firebase.FirebaseError) => {
                    throw new Error(err.message)
                })

            const user = res.user;
            const token = await user?.getIdToken();
            const uid = user?.uid as string;
            const username = user?.displayName;

            dispatch(setUser({
                isAuth: true,
                error: undefined,
                isLoading: false,
                shouldRedirect: true,
                user: {
                    token: token!.toString(),
                    uid: uid,
                    username: username?.toString()
                }
            }))
        } catch (err) {
            const error = err as Error;
            console.log('wtf3')

            dispatch(setUser({
                isAuth: false,
                error: error.message,
                isLoading: false,
                shouldRedirect: false,
                user: {
                    token: undefined,
                    uid: '',
                    username: undefined
                }
            }))
        }
    }
)

export const signUpHandler = createAsyncThunk(
    'auth/signUp',
    async (action: PayloadAction<SignUpType>, { dispatch }) => {
        if (!action.payload.username || !action.payload.password || !action.payload.mail) return;
        dispatch(setLoading(true))

        try {
            const res = await app
                .auth().createUserWithEmailAndPassword(action.payload.mail, action.payload.password)
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

            dispatch(setUser({
                isAuth: true,
                error: undefined,
                isLoading: false,
                shouldRedirect: true,
                user: {
                    token: token!.toString(),
                    uid: uid,
                    username: action.payload.username
                }
            }))
        } catch (err) {
            const error = err as Error;

            dispatch(setUser({
                isAuth: false,
                error: error.message,
                isLoading: false,
                shouldRedirect: false,
                user: {
                    token: undefined,
                    uid: '',
                    username: undefined
                }
            }))
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<AuthState>) => {
            state.error = action.payload.error;
            state.isAuth = action.payload.isAuth;
            state.isLoading = action.payload.isLoading;
            state.shouldRedirect = action.payload.shouldRedirect;
            state.user = action.payload.user;

            // state = { //Why this is not working?
            //     isAuth: action.payload.isAuth,
            //     error: action.payload.error,
            //     isLoading: action.payload.isLoading,
            //     shouldRedirect: action.payload.shouldRedirect,
            //     user: action.payload.user
            // }
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        clearError: (state) => {
            state.error = undefined;
            state.shouldRedirect = false;
        }
    }
});

export const {
    clearError,
    setLoading,
    setUser,
} = authSlice.actions
export default authSlice.reducer