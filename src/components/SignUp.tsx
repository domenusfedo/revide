import React, {useRef} from 'react';

import {Holder} from './SignIn.elements';
import  Form  from './Form/Form';

import {PageBlueprint} from '../theme/globalStyle';

import {Data, StructureData} from './Form/types'

const SignUp = () => {
    const usernameRef = useRef<HTMLDivElement>(null);
    const passwordRef = useRef<HTMLDivElement>(null);
    const confirmRef = useRef<HTMLDivElement>(null);
    const mailRef = useRef<HTMLDivElement>(null);

    const onSubmit = (userData: { value: string, type: string }[]) => {
        console.log(userData)

        //if userData !== null

        //Connect with API (axios)

        //Fetch & store Token (redux)

        //Redirect to /board
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
        submitAction: onSubmit
    }

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