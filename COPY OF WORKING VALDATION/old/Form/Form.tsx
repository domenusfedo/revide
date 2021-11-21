import React from 'react';

import {FormWrapper, FormInput, FormDirect, FormDetailAction, ShadowText,LockIcon, FormButton,FormInputHolder, FormHolder, UserIcon, MailIcon, FormAction} from './Form.elements';

interface InputData {
    ref: React.RefObject<HTMLDivElement>,
    value: string,
    shadowText: string,
    iconName: string,
    type: string,
    error: string,
    mirror?: string
}

interface IProps {
    inputs: InputData[];
    data: {
        link: string,
        buttonLabel: string,
        directLabel: string,
        directLink: string,
        extra: boolean
    },
    changeHandler: (value: string, name: string ) => void,
}

const addClass = (ref: React.RefObject<HTMLDivElement>, className: string) => {
    ref.current!.classList.add(className);
    ref.current!.children[1].children[0].classList.add(className);
    ref.current!.children[0].classList.add(className);
}
const removeClass = (ref: React.RefObject<HTMLDivElement>, className: string) => {
    ref.current!.classList.remove(className);
    ref.current!.children[1].children[0].classList.remove(className);
    ref.current!.children[0].classList.remove(className);
}

const focusHanlder = (ref: React.RefObject<HTMLDivElement>) => {
    addClass(ref, 'active')
}

const blurHanlder = (value: string, ref: React.RefObject<HTMLDivElement>) => {
    if(value !== '') return;
    removeClass(ref, 'active')
}

const invalidHandler = (ref: React.RefObject<HTMLDivElement>) => {
    addClass(ref, 'invalid')
}

const defaultHandler = (ref: React.RefObject<HTMLDivElement>) => {
    removeClass(ref, 'invalid')
}


const newChangeHandler = () => {

}

const Form: React.FC<IProps> = ({inputs, data, changeHandler}) => {
    return (
        <FormWrapper>
            {inputs.map((i, idx) => {
                if(i.error !== '') {
                    invalidHandler(i.ref)
                }
                if(i.error.trim().toString() === i.shadowText) {
                    defaultHandler(i.ref)
                }

                if((i.mirror) && (i.ref !== null) && (i.value !== i.mirror)) {
                    invalidHandler(i.ref)
                }
                return (
                    <FormHolder key={i.iconName} onFocus={e => focusHanlder(i.ref)} onBlur={e => blurHanlder(i.value, i.ref)} ref={i.ref}> 
                        {i.iconName === 'username' ? <UserIcon /> : null}
                        {(i.iconName === 'password' || i.iconName === 'confirm') ? <LockIcon /> : null}
                        {i.iconName === 'mail' ? <MailIcon /> : null}
                        <FormInputHolder>
                            {!i.mirror ? (
                            <ShadowText>{(i.error.length > 1 && i.value !== '')  ? i.error : i.shadowText}</ShadowText>
                            ) : <ShadowText>{i.value !== '' ? `${i.value === i.mirror ? 'password confimred' : 'password not confirmed'}` : i.shadowText}</ShadowText>}
                        
                            <FormInput type={i.type} value={i.value} onChange={(e) => {
                                changeHandler(e.target.value.trim().toString(), i.shadowText)
                            }}></FormInput>
                        </FormInputHolder>
                    </FormHolder>
                )
            })}
            
            {data.extra && <FormAction>Forgot Password?</FormAction>}
            <FormButton>{data.buttonLabel}</FormButton>
            <FormDirect to={data.link}>
                {data.directLabel}
                <FormDetailAction>{data.directLink}</FormDetailAction> 
            </FormDirect>
        </FormWrapper>
    );
};

export default Form;