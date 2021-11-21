// import React, {useState, useRef, useEffect} from 'react';

// import {Holder, Header} from './SignIn.elements';
// import  Form  from './Form/Form';

// import {PageBlueprint} from '../theme/globalStyle';

// const SignIn = () => {
//     const userRef = useRef<HTMLDivElement>(null);
//     const passwordRef = useRef<HTMLDivElement>(null);

//     const [userSignInData, userSignInDataSet] = useState({
//         username: {
//             value: '',
//             error: '',
//             config: {
//                 lengthCheck: {
//                     min: 3,
//                     max: 9
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
//                 isAlphaNumeric: true,
//             }
//         }
//     })

//     type DataStructure = typeof userSignInData;
//     type Keys = keyof typeof userSignInData;
    
//     const checkLength = (config: {min: number, max: number}, length: number) => {
//         let message = '';

//         if(length < config.min) {
//             message = ' too short';
//         }

//         if(length > config.max) {
//             message = ' too long';
//         }

//         return message
//     }

//     const checkAlphanumeric = (value: string) => {
//         let message = '';

//         if( /[^a-zA-Z0-9]/.test( value ) ) {
//             message = ' has forbidden character'
//          }

//          return message;
//     }

//     const changeHandler = (value: string, name: string) => {
//         let error = `${name}`;

//         if(userSignInData[name as Keys].config.hasOwnProperty('lengthCheck')) {
//             error = error + ' ' + checkLength(userSignInData[name as Keys].config.lengthCheck, value.length)
//         }

//         if(userSignInData[name as Keys].config.hasOwnProperty('isAlphaNumeric')) {
//             error = error + ' ' + checkAlphanumeric(value);
//         }
        
//         userSignInDataSet((prevState) => ({
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
//             value: userSignInData.username.value,
//             shadowText: 'username',
//             iconName: 'username',
//             type: 'text',
//             error: userSignInData.username.error
//         },
//         {
//             ref: passwordRef,
//             value: userSignInData.password.value,
//             shadowText: 'password',
//             iconName: 'password',
//             type: 'password',
//             error: userSignInData.password.error
//         }
//     ];

//     const data = {
//         link: '/signup',
//         buttonLabel: 'SIGN IN',
//         directLabel: "Don't have an account?",
//         directLink: 'Signup',
//         extra: true
//     }

//     return (
//         <PageBlueprint>
//             <Holder>
//                 <Header>Welcome back!</Header>
//                 <Form 
//                     inputs={inputs}
//                     data={data}
//                     changeHandler={changeHandler}
//                 />
//             </Holder>
//         </PageBlueprint>
//     );
// };

// export default SignIn;

// //userRef.current?.className = 'hidden'