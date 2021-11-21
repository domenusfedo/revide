// import React, {useState, useRef, useEffect} from 'react';
// import {PageBlueprint} from '../theme/globalStyle';

// import {Holder, Header } from './SignIn.elements';

// import {Form} from './index'

// const SignUp = () => {
//     const userRef = useRef<HTMLDivElement>(null);
//     const passwordRef = useRef<HTMLDivElement>(null);
//     const passwordConfirmRef = useRef<HTMLDivElement>(null);
//     const mailRef = useRef<HTMLDivElement>(null);

//     interface Test {
//         username: {
//             value: string,
//             error: string,
//             [config: string]: any
//         },
//         password: {
//             value: string,
//             error: string,
//             [config: string]: any
//         },
//         confirm: {
//             value: string,
//             error: string,
//             [config: string]: any
//         },
//         mail: {
//             value: string,
//             error: string,
//             [config: string]: any
//         }
//     }

//     const [userSignUpData, userSignUpDataSet] = useState<Test>({
//         username: {
//             value: '',
//             error: '',
//             config: {
//                 lengthCheck: {
//                     min: 3,
//                     max: 6
//                 },
//                 isAlphaNumeric: true
//             }
//         },
//         password: {
//             value: '',
//             error: '',
//             config: {
//                 lengthCheck: {
//                     min: 6,
//                     max: 9
//                 },
//                 isEqual: false,
//                 isAlphaNumeric: true
//             }
//         },
//         confirm: {
//             value: '',
//             error: '',
//             config: {
//                 isEqual: false
//             }
//         },
//         mail: {
//             value: '',
//             error: '',
//             config:{
//                 isMail: false
//             }
//         }
//     })
//     type Keys = keyof typeof userSignUpData;
    
//     const checkLength = (element: Test['username' | 'password' | 'confirm' | 'mail'], name: string, length: number) => {
//         let message = ''
//         if(length < element.config.lengthCheck.min) {
//             message = ' too short'
//         }
//         if(length > element.config.lengthCheck.max) {
//             message = ' too long'
//         }
//         if(length < element.config.lengthCheck.max && length > element.config.lengthCheck.min) {
//             message = ''
//         }
//         return message
//     }

//     const checkAlphanumeric = (element: Test['username' | 'password' | 'confirm' | 'mail'], name: string, value: string) => {
//         let message = ''
//         if( /[^a-zA-Z0-9]/.test( value ) ) {
//             message = ' has forbidden character'
//          } else {
//             message = ''
//          }
//          return message
//     }


//     const changeHandler = (value: string, name: string) => {
//         const element = userSignUpData[name as Keys];
//         let error = `${name}`;

//         if(userSignUpData[name as Keys].config.hasOwnProperty('lengthCheck')) {
//             error = error + checkLength(element, name, value.trim().toString().length)
//         }
//         if(userSignUpData[name as Keys].config.hasOwnProperty('isAlphaNumeric')) {
//             error = error + checkAlphanumeric(element, name, value);
//         }

//         userSignUpDataSet((prevState) => ({
//             ...prevState,
//             [name]: {
//                 ...prevState[name as Keys],
//                 error: error,
//                 value: value
//             }
//         }));
//     }

//     const inputs = [
//         {
//             ref: userRef,
//             value: userSignUpData.username.value,
//             shadowText: 'username',
//             iconName: 'username',
//             type: 'text',
//             error: userSignUpData.username.error
//         },
//         {
//             ref: passwordRef,
//             value: userSignUpData.password.value,
//             shadowText: 'password',
//             iconName: 'password',
//             type: 'password',
//             error: userSignUpData.password.error
//         },
//         {
//             ref: passwordConfirmRef,
//             value: userSignUpData.confirm.value,
//             shadowText: 'confirm',
//             iconName: 'confirm',
//             type: 'password',
//             error: userSignUpData.confirm.error,
//             mirror: userSignUpData.password.value,
//         },
//         {
//             ref: mailRef,
//             value: userSignUpData.mail.value,
//             shadowText: 'mail',
//             iconName: 'mail',
//             type: 'email',
//             error: userSignUpData.mail.error
//         }
//     ];

//     const data = {
//         link: '/signin',
//         buttonLabel: 'SIGN UP',
//         directLabel: "Already have an Account?",
//         directLink: 'Signin',
//         extra: false
//     }
    
//     return (
//         <PageBlueprint>
//             <Holder>
//                 <Header>Nice to meet You!</Header>
//                 <Form 
//                     inputs={inputs}
//                     data={data}
//                     changeHandler={changeHandler}
//                 />
//             </Holder>
//         </PageBlueprint>
//     );
// };

// export default SignUp;