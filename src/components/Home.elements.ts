import styled, { keyframes } from 'styled-components';

import LogoIcon from '../assets/svg/logo';

export const Holder = styled.div`
    width: 100%;
    height: 100vh;
    background-color: transparent;
    padding: 0 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const NameHolder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-bottom: 2rem;
`;

export const LogoSVGHolder = styled(LogoIcon)`
   width: 100%;
   height: 100%;
`
export const LogoHolder = styled.div`
    height: 50px;
    width: 50px;

    @media screen and (max-height: 630px) {
        height: 25px;
        width: 25px;
    }
`

export const Header = styled.h1`
    margin-left: 0.5rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.black};
`;

export const NavLinkElement = styled.div`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
    font-size: 1.3rem;
    text-decoration: none;
    outline: none;
    padding: 2rem 1rem;
    border-radius: 25px;
    border: none;
    font-weight: bold;
    transition: all .5s;
    width: 100%;
    max-width: 300px;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    cursor: pointer;

    @media screen and (max-height: 600px) {
        padding: 1rem 1rem;
    }
`;

export const BackText = styled.span`
    width: 100%;
    z-index: 100;
    height: 25px;
    text-align: center;
    font-weight: 900;

    display: flex;
    justify-content: center;
    align-items: center;
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

export const Alerts = styled.span`
    margin-top: 2rem;
    font-size: 1.5rem;
    font-weight: 600;
    height: 2rem;
    text-align: center;
    width: 100%;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.black};
`

export const Terms = styled.span`
    position: absolute;
    bottom: 5%;
    cursor: pointer;
    font-weight: bold;
    z-index: 100;
    color: ${({ theme }) => theme.colors.black};
`