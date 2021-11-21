import React, {useState, useRef, useEffect} from 'react';

import {Holder, Header} from './SignIn.elements';
import  Form  from './Form/Form';

import {PageBlueprint} from '../theme/globalStyle';

import {SigninType, Input, StructureData} from './Form/types'

const SignUp = () => {
    const userRef = useRef<HTMLDivElement>(null);
    const passwordRef = useRef<HTMLDivElement>(null);
    const passwordConfirmRef = useRef<HTMLDivElement>(null);
    const mailRef = useRef<HTMLDivElement>(null);

    const [userSignUpData, userSignUpDataSet] = useState<SigninType>({
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
        },
        confirm: {
            value: '',
            error: '',
            isValid: false,
            config: {

            }
        },
        mail: {
            value: '',
            error: '',
            isValid: false,
            config: {
                isMail: true
            }
        }
    });

    const inputs: Input[] = [
        {
            ref: userRef,
            value: userSignUpData.username.value,
            shadowText: 'username',
            iconName: 'username',
            type: 'text',
            error: userSignUpData.username.error,
        },
        {
            ref: passwordRef,
            value: userSignUpData.password.value,
            shadowText: 'password',
            iconName: 'password',
            type: 'password',
            error: userSignUpData.password.error,
        },
        {
            ref: passwordConfirmRef,
            value: userSignUpData.confirm.value,
            shadowText: 'confirm',
            iconName: 'confirm',
            type: 'password',
            error: userSignUpData.confirm.error,
            mirror: userSignUpData.password.value,
        },
        {
            ref: mailRef,
            value: userSignUpData.mail.value,
            shadowText: 'mail',
            iconName: 'mail',
            type: 'mail',
            error: userSignUpData.mail.error,
        }
    ];

    const structureData: StructureData = {
        link: '/signin',
        buttonLabel: 'SIGN UP',
        directLabel: "Already have an account?",
        directLink: 'Signin',
        extra: false
    }

    return (
        <PageBlueprint>
            <Holder>
                <Form
                    header='Welcome back!'
                    data={userSignUpData}
                    dataSet={userSignUpDataSet}
                    inputs={inputs}
                    structureData={structureData}
                />
            </Holder>
        </PageBlueprint>
    );
};

export default SignUp;