import React, {useEffect, useRef, useState} from 'react';

import {Holder, ConfirmationHolder} from './SignIn.elements';
import  Form  from './Form/Form';

import {PageBlueprint} from '../theme/globalStyle';

import {Data, ProvidedData, StructureData} from './Form/types'
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';

import { clearError, signUpHandler } from '../features/authSlice';

const SignUp = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const {isLoading, isAuth, error, shouldRedirect} = useSelector((state: RootState) => state.auth);

    const usernameRef = useRef<HTMLDivElement>(null);
    const passwordRef = useRef<HTMLDivElement>(null);
    const confirmRef = useRef<HTMLDivElement>(null);
    const mailRef = useRef<HTMLDivElement>(null);

    const onSubmit = (userData: ProvidedData) => {

        dispatch(clearError());

       dispatch(signUpHandler({
           type: 'auth/signUp',
           payload: {
               mail: userData.mail,
               password: userData.password,
               username: userData.username
           }
       }))

    }
   
    const userSignUpData: Data[] = [
        {
            ref: usernameRef,
            name: 'username',
            value: '',
            type: 'text',
            error: '',
            isValid: false,
            mirror: false,
            config: {
                lengthCheck: {
                    min: 3,
                    max: 9
                },
                isAlphaNumeric: true
            }
        },
        {
            ref: passwordRef,
            name: 'password',
            value: '',
            type: 'password',
            error: '',
            isValid: false,
            mirror: false,
            config: {
                lengthCheck: {
                    min: 6,
                    max: 9
                },
                isAlphaNumeric: true
            }
        },
        {
            ref: confirmRef,
            name: 'confirm',
            value: '',
            type: 'password',
            error: '',
            mirror: 1,
            isValid: false,
            config: {
                isEqual: true
            }
        },
        {
            ref: mailRef,
            name: 'mail',
            value: '',
            type: 'mail',
            error: '',
            isValid: false,
            mirror: false,
            config: {
                isMail: true
            }
        }
    ];

    const structureData: StructureData = {
        link: '/signin',
        buttonLabel: 'SIGN UP',
        directLabel: "Already have an account?",
        directLink: 'Signin',
        extra: false,
        loading: isLoading,
        error: error,
        submitAction: onSubmit
    }

    useEffect(() => {
        if(shouldRedirect) {
            navigate('/signin')
        }
    }, [shouldRedirect])

    useEffect(() => {
        return () => {
            dispatch(clearError())
        }
    }, [])

    return (
        <PageBlueprint>
            <Holder>
                <Form
                    header='Nice to meet You!'
                    initialData={userSignUpData}
                    structureData={structureData}
                />
            </Holder>
        </PageBlueprint>
    );
};

export default SignUp;