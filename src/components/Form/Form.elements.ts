import styled, { keyframes } from "styled-components";
import { NavLink } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa'
import { AiFillMail } from 'react-icons/ai'
import { GrTextAlignLeft } from 'react-icons/gr'
import { MdTitle } from 'react-icons/md'

export const FormWrapper = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 2rem;
    width: 100%;
    max-width: 400px;

    @media screen and (max-height: 670px) {
        padding-top: 1rem;
    }
`;

export const FormHeader = styled.h1`
    color: ${({ theme }) => theme.colors.black};
    font-weight: 900;
    font-size: 2rem;
    text-align: center;

    @media screen and (max-height: 700px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 270px) {
        font-size: 1.5rem;
    }
`;

export const FormInput = styled.input`
    width: 100%;
    height: 100%;
    background-color: transparent;
    z-index: 20;
    font-family: inherit;
    outline: none;
    font-weight: 500;
    font-size: 1.2rem;
    margin-left: 0.5rem;
    padding: 0 0.5rem;
`;
export const FormHolder = styled.div`
    padding: 1rem 2rem;
    padding-bottom: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 1rem 0rem;
    border-bottom: 2px solid ${({ theme }) => theme.colors.blackVar};
    width: 100%;
    height: 4rem;
    transition: all .5s;

    &.active {
        border-bottom: 2px solid ${({ theme }) => theme.colors.primaryVar};
    }
    &.invalid {
        border-bottom: 2px solid ${({ theme }) => theme.colors.red};
    }

    @media screen and (max-width: 430px) {
        width: 90%;
    }

    @media screen and (max-height: 700px) {
        padding: 1rem 1rem;
        margin: .5rem 0rem;
    }

    @media screen and (max-width: 270px) {
        padding: 1rem 1rem;
        margin: .5rem 0rem;
    }
`;
export const FormInputHolder = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    position: relative;
    height: 100%;
    background-color: transparent;
    height: 5rem;
`;

export const ShadowText = styled.span`
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-weight: 600;
    color: red;
    transition: .3s;
    z-index: 10;
    color: ${({ theme }) => theme.colors.blackVar};

    &.active {
        top: 16%;
    }

    @media screen and (max-height: 700px) {
        font-size: .8rem;
    }

    @media screen and (max-width: 270px) {
        font-size: .8rem;
    }
`;

export const FormDirect = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    margin: 1rem 0;
    font-style: italic;
    font-size: 0.9rem;
    transition: all .2s;
    width: 100%;
    text-align: center;
    cursor: pointer;
`;
export const FormDetailAction = styled.span`
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    margin-left: 0.5rem;
    &:hover {
        color: ${({ theme }) => theme.colors.primaryVar};
    }
`

interface FormActionProps {
    isBlack: boolean,
    isSensitive: boolean,
    isError?: boolean
}

export const FormAction = styled.span<FormActionProps>`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    height: 25px;
    font-style: italic;
    font-size: 0.9rem;
    transition: all .2s;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: auto;

    color: ${({ theme, isBlack }) => (isBlack ? theme.colors.black : theme.colors.white)};
    color: ${({ theme, isError }) => (isError && theme.colors.red)};

    &:empty:before {
        content: "\200b"
    }

    &:hover {
        color: ${({ theme, isSensitive, isBlack }) => ((isSensitive && isBlack) && theme.colors.primaryVar)};
        cursor: ${({ theme, isSensitive }) => (isSensitive && 'pointer')};
    }
`;
type Valid = {
    isValid: boolean,
}

const shake = keyframes`
 0% {transform: translate(0)}
  1% {transform: translate(-3px)}
  2% {transform: translate(5px)}
  3% {transform: translate(-8px)}
  4% {transform: translate(8px)}
  5% {transform: translate(-5px)}
  6% {transform: translate(3px)}
  7% {transform: translate(0)}
`

export const FormButton = styled.button<Valid>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    width: 90%;
    font-family: inherit;
    font-weight: 600;
    border-radius: 25px;
    padding: 2rem 0;
    margin: 1rem 0;
    font-size: 1.1rem;
    cursor: pointer;
    translate: all 5s;
    background-color: ${({ theme, isValid }) => (isValid ? theme.colors.primaryVar : theme.colors.blackVar)};

    @media screen and (max-width: 430px) {
        width: 90%;
        padding: 1.5rem 1rem;
    }

    &.shake {
        animation: ${shake} 8s;
    }

    @media screen and (max-height: 700px) {
        font-size: .5rem;
        padding: 1rem 0;
        border-radius: 15px;
    }

    @media screen and (max-width: 270px) {
        font-size: .5rem;
        padding: 1rem 0;
        border-radius: 15px;
    }

    @media screen and (max-height: 670px) {
        padding: .5rem;
    }
`;

export const UserIcon = styled(FaUser)`
    color: ${({ theme }) => theme.colors.blackVar};
    height: 1rem;
    width: 1rem;
    transition: all .5s;

    &.active {
        color: ${({ theme }) => theme.colors.primaryVar};
    }
    &.invalid {
        color: ${({ theme }) => theme.colors.red};
    }
`;
export const LockIcon = styled(FaLock)`
    color: ${({ theme }) => theme.colors.blackVar};
    height: 1rem;
    width: 1rem;

    &.active {
        color: ${({ theme }) => theme.colors.primaryVar};
    }
    &.invalid {
        color: ${({ theme }) => theme.colors.red};
    }
`;
export const MailIcon = styled(AiFillMail)`
    color: ${({ theme }) => theme.colors.blackVar};
    height: 1rem;
    width: 1rem;

    &.active {
        color: ${({ theme }) => theme.colors.primaryVar};
    }
    &.invalid {
        color: ${({ theme }) => theme.colors.red};
    }
`;

export const TitleIcon = styled(MdTitle)`
 color: ${({ theme }) => theme.colors.blackVar};
    height: 1rem;
    width: 1rem;

    &.active {
        color: ${({ theme }) => theme.colors.primaryVar};
    }
    &.invalid {
        color: ${({ theme }) => theme.colors.red};
    }
`;
export const DescriptionIcon = styled(GrTextAlignLeft)`
 color: ${({ theme }) => theme.colors.blackVar};
    height: 1rem;
    width: 1rem;

    &.active {
        color: ${({ theme }) => theme.colors.primaryVar};
    }
    &.invalid {
        color: ${({ theme }) => theme.colors.red};
    }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
    border: 5px solid ${({ theme }) => theme.colors.priamry};
    border-top: 5px solid ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    width: 25px;
    height: 25px;
    animation: ${spin} 1s linear infinite;
`;

export const FormError = styled.h3`
   color: ${({ theme }) => theme.colors.red};
   text-align: center;
`;

//Dynamic styled icons

export const UserActionField = styled.div`
    height: fit-content;
    display: flex;
    width: 100%;
    padding: 1rem;

    @media screen and (max-height: 670px) {
        padding: 0rem;
    }
`

interface IsRight {
    isRight: boolean
}

export const Column = styled.div<IsRight>`
    width: 50%;
    text-align: ${({ isRight }) => (isRight ? 'right' : 'left')};
`