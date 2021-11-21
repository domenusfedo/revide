import React, {useState, useRef, useEffect} from 'react';

import {Holder, Header} from './SignIn.elements';
import  Form  from './Form/Form';

import {PageBlueprint} from '../theme/globalStyle';

import {LoginType, Input, StructureData} from './Form/types'

const SignIn = () => {
    const userRef = useRef<HTMLDivElement>(null);
    const passwordRef = useRef<HTMLDivElement>(null);

    const [userSignInData, userSignInDataSet] = useState<LoginType>({
        username: {
            value: '',
            error: '',
            isValid: false,
            config: {
                lengthCheck: {
                    min: 3,
                    max: 9
                },
                isAlphaNumeric: true
            }
        },
        password: {
            value: '',
            error: '',
            isValid: false,
            config: {
                lengthCheck: {
                    min: 6,
                    max: 9
                },
                isAlphaNumeric: true,
            }
        }
    });

    const inputs: Input[] = [
        {
            ref: userRef,
            value: userSignInData.username.value,
            shadowText: 'username',
            iconName: 'username',
            type: 'text',
            error: userSignInData.username.error
        },
        {
            ref: passwordRef,
            value: userSignInData.password.value,
            shadowText: 'password',
            iconName: 'password',
            type: 'password',
            error: userSignInData.password.error
        }
    ];

    const structureData: StructureData = {
        link: '/signup',
        buttonLabel: 'SIGN IN',
        directLabel: "Don't have an account?",
        directLink: 'Signup',
        extra: true
    }
    
    return (
        <PageBlueprint>
            <Holder>
                <Form
                    header='Welcome back!'
                    data={userSignInData}
                    dataSet={userSignInDataSet}
                    inputs={inputs}
                    structureData={structureData}
                />
            </Holder>
        </PageBlueprint>
    );
};

export default SignIn;