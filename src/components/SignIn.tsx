import React, {useRef} from 'react';

import {Holder} from './SignIn.elements';
import  Form  from './Form/Form';

import {PageBlueprint} from '../theme/globalStyle';

import {Data, StructureData} from './Form/types'
import { useDispatch } from 'react-redux';
import { RootState } from '../app/store';

const SignIn = () => {
    const dispatch = useDispatch();
    
    const usernameRef = useRef<HTMLDivElement>(null);
    const passwordRef = useRef<HTMLDivElement>(null);

    const onSubmit = (userData: { value: string, type: string }[]) => {
        console.log(userData)
        //if userData !== null

        //Connect with API (axios)

        //Fetch & store Token (redux)

        //Redirect to /board
    }

    const userSignInData: Data[] = [
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
        }
    ];

    const structureData: StructureData = {
        link: '/signup',
        buttonLabel: 'SIGN IN',
        directLabel: "Don't have an account?",
        directLink: 'Signup',
        extra: true,
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