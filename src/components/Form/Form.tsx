import React, {useState, useEffect, isValidElement} from 'react';

import {
    FormWrapper,
    FormHeader, 
    FormHolder,
    ShadowText,
    FormInputHolder,
    UserIcon,
    LockIcon,
    MailIcon,
    FormInput,
    FormButton,
    FormDirect,
    FormDetailAction,
    FormAction
} from './Form.elements';

import {
    LoginType,
    SigninType,
    Input,
    StructureData,
    InputData
} from './types'

interface IProps {
    header: string,
    data: InputData,
    dataSet: React.Dispatch<React.SetStateAction<LoginType>> | React.Dispatch<React.SetStateAction<SigninType>>,
    inputs: Input[],
    structureData: StructureData
}


const Form: React.FC<IProps> = ({header, data, dataSet, inputs, structureData}) => {
    const [isValid, isValidSet] = useState<boolean>(false);
    
    const modifyClass = (ref: React.RefObject<HTMLDivElement>, className: string, action: string) => {
        if(action === 'add') {
            ref.current!.classList.add(className);
            ref.current!.children[1].children[0].classList.add(className);
            ref.current!.children[0].classList.add(className);
        } else {
            ref.current!.classList.remove(className);
            ref.current!.children[1].children[0].classList.remove(className);
            ref.current!.children[0].classList.remove(className);
        }
    }

    const invalidHandler = (ref: React.RefObject<HTMLDivElement>) => {
        modifyClass(ref, 'invalid', 'add')
    }
    
    const defaultHandler = (ref: React.RefObject<HTMLDivElement>) => {
        modifyClass(ref, 'invalid', 'remove')
    }

    const focusHanlder = (ref: React.RefObject<HTMLDivElement>) => {
        modifyClass(ref, 'active', 'add')
    }
    
    const blurHanlder = (value: string, ref: React.RefObject<HTMLDivElement>) => {
        if(value !== '') return;
        modifyClass(ref, 'active', 'remove')
    }

    const checkLength = (element: any, name: string, length: number) => {
        let message = ''
        if(element.config.lengthCheck.min && length < element.config.lengthCheck.min) {
            message = ' too short'
        }
        if(element.config.lengthCheck.max && length > element.config.lengthCheck.max) {
            message = ' too long'
        }
        if((length < element.config.lengthCheck.max && length > element.config.lengthCheck.min)) {
            message = ''
        }
        return message
    }

    const checkAlphanumeric = (value: string) => {
        let message = ''
        if( /[^a-zA-Z0-9]/.test( value ) ) {
        message = ' and invalid'
        } else {
        message = ''
        }
        return message
    }

    const checkMail = (value: string) => {
        let message = ''
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(value) ) {
            message = ' is invalid'
        } else {
            message = ''
        }
        return message
    }

    const checkValidation = () => {

    }

    const changeHanlder = (value: string, name: string) => {
        const element = data[name as keyof typeof data];
        let error = `${name}`;
        let validationValue = false;

        if(data[name as keyof typeof data].config.hasOwnProperty('lengthCheck')) {
            error = error + checkLength(element, name, value.trim().toString().length)
        }

        if(data[name as keyof typeof data].config.hasOwnProperty('isAlphaNumeric')) {
            error = error + checkAlphanumeric(value);
        }

        if(data[name as keyof typeof data].config.hasOwnProperty('isMail')) {
            error = error + checkMail(value);
        }

        
        if(name.trim() === error.trim()) {
            validationValue = true;
        }

        
        dataSet((prev: any) => ({
            ...prev,
            [name as keyof typeof data]: {
                ...prev[name as keyof typeof data],
                isValid: validationValue,
                error: error,
                value: value
            }
        }))

        checkValidation();
    }

    const submitHandler = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(!isValid) return
        console.log('Redirect valid')
    }

    useEffect(() => {
        //console.log(data)
    }, [data])

    return (
        <>
            <FormHeader>{header}</FormHeader>
            <FormWrapper>
                {inputs.map(i => {
                    if(i.error !== '') {
                        invalidHandler(i.ref)
                    }
                    if(i.error.trim().toString() === i.shadowText) {
                        defaultHandler(i.ref)
                    }
    
                    if((i.mirror) && (i.ref !== null) && (i.value !== i.mirror)) {
                        invalidHandler(i.ref)
                    }

                    //console.log(i.iconName, 'is', data[i.iconName as keyof typeof data].isValid)
                    // if(!data[i.iconName as keyof typeof data].isValid) {
                    //     checkValidation()
                    // }
                   
                    return (
                        <FormHolder key={i.iconName} onFocus={e => focusHanlder(i.ref)} onBlur={e => blurHanlder(i.value, i.ref)} ref={i.ref}>
                            {i.iconName === 'username' ? <UserIcon /> : null}
                            {(i.iconName === 'password' || i.iconName === 'confirm') ? <LockIcon /> : null}
                            {i.iconName === 'mail' ? <MailIcon /> : null}
                            <FormInputHolder>
                            {!i.mirror ? (
                            <ShadowText>{(i.error.length > 1 && i.value !== '')  ? i.error : i.shadowText}</ShadowText>
                            ) : <ShadowText>{i.value !== '' ? `${i.value === i.mirror ? 'password confimred' : 'password not confirmed'}` : i.shadowText}</ShadowText>}
                            
                            <FormInput
                                type={i.type}
                                value={i.value}
                                onChange={e => {
                                    changeHanlder(e.target.value.trim().toString(),i.shadowText)
                                }}
                            ></FormInput>
                            </FormInputHolder>
                        </FormHolder>
                    )
                })}

            {structureData.extra && <FormAction>Forgot Password?</FormAction>}
            <FormButton onClick={e => submitHandler(e)} isValid={isValid}>{structureData.buttonLabel}</FormButton>
            <FormDirect to={structureData.link}>
                {structureData.directLabel}
                <FormDetailAction>{structureData.directLink}</FormDetailAction> 
            </FormDirect>
            </FormWrapper>
        </>
    );
};

export default Form;