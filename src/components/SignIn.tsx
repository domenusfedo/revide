import React, {useEffect, useRef, useState} from 'react';

import {Holder} from './SignIn.elements';
import  Form  from './Form/Form';

import {PageBlueprint} from '../theme/globalStyle';

import {Data, ProvidedData, StructureData} from './Form/types'

import { useDispatch, useSelector } from 'react-redux';
import { signInHandler,clearError } from '../features/authSlice';

import { RootState } from '../app/store';
import { useNavigate } from 'react-router';

const SignIn = () => {
    const navigate = useNavigate();
    
    const {isLoading, error, shouldRedirect} = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();
    
    const mailRef = useRef<HTMLDivElement>(null);
    const passwordRef = useRef<HTMLDivElement>(null);

    const onSubmit = (userData: ProvidedData) => {
        const {
            mail,
            password
        } = userData;

        dispatch(clearError())

        dispatch(signInHandler({
            type: 'auth/sigIn',
            payload: {
                mail: mail,
                password: password
            }
        }))
    }

    useEffect(() => {
        if(shouldRedirect) {
            navigate('/board')
        }
    }, [shouldRedirect])
    

    useEffect(() => {
        return () => {
            dispatch(clearError())
        }
    }, [])

    const userSignInData: Data[] = [
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
        }
    ];

    const structureData: StructureData = {
        link: '/signup',
        buttonLabel: 'SIGN IN',
        directLabel: "Don't have an account?",
        directLink: 'Signup',
        extra: true,
        loading: isLoading,
        error: error,
        submitAction: onSubmit
    }
    
    return (
        <PageBlueprint>
            <Holder>
                <Form
                    header='Welcome back!'
                    initialData={userSignInData}
                    structureData={structureData}
                />
            </Holder>
        </PageBlueprint>
    );
};

export default SignIn;