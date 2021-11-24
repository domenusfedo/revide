import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa'
import { IoMdMailOpen } from 'react-icons/io'

export const Holder = styled.div`
    width: 90%;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem 0;
    width: 100%;
    height: 100vh;
`;

export const Header = styled.h1`
    color: ${({ theme }) => theme.colors.black};
    font-weight: 900;
    font-size: 2rem;
    text-align: center;
`;

export const ConfirmationHolder = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.primary};
    z-index: 500;
`;