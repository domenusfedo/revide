import React, {useState, useEffect, useRef} from 'react';

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
    FormAction,
    Spinner,
    FormError,
    DescriptionIcon,
    TitleIcon
} from './Form.elements';

import {
    StructureData,
    Data,
    ProvidedData,
    ConfigTypes,
    IconTypes
} from './types'

interface IProps {
    header: string,
    initialData: Data[],
    structureData: StructureData
}

enum ActionType {
    action = 'action'
}

const Form: React.FC<IProps> = ({header, initialData, structureData}) => {
    const [isValid, isValidSet] = useState<boolean>(false);
    const [data, dataSet] = useState<Data[]>(initialData);

    const buttonRef = useRef<HTMLButtonElement>(null);

    console.log(structureData.loading)

    const modifyClass = (ref: React.RefObject<HTMLDivElement>, className: string, action: string) => {
        if(action === 'add') {
            ref.current!.classList.add(className);
            ref.current!.children[1].children[0].classList[action](className);
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

    const checkValidation = (actualData: Data[]) => {
        let status = true;
        actualData.map(e => {
            if (!e.isValid) {
                status = false;
                return null;
            }
            return null;
        })
        isValidSet(status);
    }

    const checkLength = (element: any, length: number) => {
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
            message = ' is invalid'
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

    const checkEqual = (provided: number, confirm: string) => {
        let value = false;
        if (data[provided].value === confirm) {
            value = true;
        }
        return value;
    }
    
    const changeHanlder = (value: string, elementPointer: Data, idx: number) => {
        const element = data[idx];

        let error = `${elementPointer.name}`;
        let validationValue = false;
        let isEqual = false

        if(element.config.hasOwnProperty(ConfigTypes.lengthCheck)) {
            error = error + checkLength(element, value.trim().toString().length)
        }

        if(element.config.hasOwnProperty(ConfigTypes.isAlphaNumeric)) {
            error = error + checkAlphanumeric(value);
        }

        if(element.config.hasOwnProperty(ConfigTypes.isMail)) {
            error = error + checkMail(value);
        }

        if(element.config.hasOwnProperty(ConfigTypes.isEqual)) {
            if(!elementPointer.mirror) return
            isEqual = checkEqual(elementPointer.mirror, value)
        }

        if(element.config.isEqual) {
            if(isEqual) {
                validationValue = true;
            }
        } else {
            if(elementPointer.name.trim() === error.trim()) {
                validationValue = true;
            }
        }

        const updatedState = data;
        const updatedObject = data[idx];
        
        updatedObject.isValid = validationValue;
        updatedObject.error = error;
        updatedObject.value = value;

        updatedState[idx] = updatedObject;

        dataSet((prev: Data[]) => ([
            ...prev
        ]))
    }

    const submitHanlder = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if(!isValid) {
            buttonRef.current?.classList.add('shake')

            setTimeout((e) => {
                buttonRef.current?.classList.remove('shake');
            }, 1000)
            
            return;
        }
        
        let dataObject: ProvidedData; //

        Object.keys(data).map((idx: string) => {
            dataObject = {
                ...dataObject,
                [data[parseInt(idx)].name]: data[parseInt(idx)].value, //This can cause the issue
            }
            structureData.submitAction(dataObject)
            return null;
        })
    }

    useEffect(() => {
        checkValidation(data);
    }, [data])

    useEffect(() => {  
        if(structureData.error !== undefined) {
            buttonRef.current?.classList.add('shake')

            setTimeout((e) => {
                buttonRef.current?.classList.remove('shake');
            }, 1000)
        }
    }, [structureData.loading, structureData.error])

    return (
        <>
            <FormHeader>{header}</FormHeader>
            <FormWrapper>
                {initialData.map((element, idx) => {
                    if(!data[idx].isValid && data[idx].value !== '') invalidHandler(element.ref)
                    if(data[idx].isValid && data[idx].value !== '') defaultHandler(element.ref)
                    if(element.mirror && (data[idx].value !== data[element.mirror].value) && data[idx].value !== '') invalidHandler(element.ref)

                    return (
                        <FormHolder key={element.name} onFocus={e => focusHanlder(element.ref)} onBlur={e => blurHanlder(data[idx].value, element.ref)} ref={element.ref}>
                            {/* Should be improved */}
                            {element.name === IconTypes.username ? <UserIcon /> : null}
                            {element.name === IconTypes.password ? <LockIcon /> : null}
                            {element.name === IconTypes.confirm ? <LockIcon /> : null}
                            {element.name === IconTypes.mail ? <MailIcon /> : null}
                            {element.name === IconTypes.title ? <TitleIcon /> : null}
                            {element.name === IconTypes.description ? <DescriptionIcon /> : null}

                            <FormInputHolder>
                                {!element.mirror ? (
                                    <ShadowText>{(data[idx].error.length > 1 && data[idx].value !== '')  ? data[idx].error : element.name}</ShadowText>
                                ) : <ShadowText>{data[idx].value !== '' ? `${data[idx].value === data[element.mirror].value ? 'password confimred' : 'password not confirmed'}` : element.name}</ShadowText>}
                            
                            <FormInput
                                type={element.type}
                                value={data[idx].value}
                                onChange={e => {
                                    changeHanlder(e.target.value.trim().toString(),element, idx)
                                }}
                            ></FormInput>
                            </FormInputHolder>
                        </FormHolder>
                    )
                })}

                {structureData.extra && <FormAction>Forgot Password?</FormAction>}
                <FormButton ref={buttonRef} isValid={isValid} onClick={e => submitHanlder(e)} >
                    {!structureData.loading ? 
                    structureData.buttonLabel 
                    : <Spinner/>}
                </FormButton>
                <FormDirect to={structureData.link}>
                    {structureData.directLabel}
                    <FormDetailAction>{structureData.directLink}</FormDetailAction> 
                </FormDirect>
                <FormError>{structureData.error}</FormError>
            </FormWrapper>
        </>
    );
};

export default Form;