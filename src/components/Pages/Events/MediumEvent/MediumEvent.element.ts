import styled from "styled-components";
import { FaWalking } from 'react-icons/fa'

export const EventHolder = styled.div`
    width: 95%;
    height: 95%;
    min-width: 180px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.black};
    border-radius: 25px;
    padding: 2rem 1rem;
    position: relative;
    grid-area: medium;
`;

export const Header = styled.div`
    top: 0;
    transform: translate(0, 50%);
    position: absolute;
    z-index: 500;
    font-weight: 900;
    font-size: 2rem;

    @media screen and (max-width: 390px) {
        width: 90%;
    }

    @media screen and (max-width: 350px) {
        display: none;
    }
`;

export const SubHeader = styled.div`
    position: absolute;
    top: 35%;
    transform: translate(0, 50%);
    width: 90%;
    z-index: 500;
    font-style: italic;
    font-weight: 400;
    font-size: 1.2rem;

    @media screen and (max-width: 535px) {
        top: 35%;
    }

    @media screen and (max-width: 390px) {
        width: 80%;
    }

    @media screen and (max-width: 350px) {
        display: none;
    }
`;

export const Button = styled.div`
    width: 90%;
    z-index: 500;
    position: absolute;
    left: 5%;
    bottom: 10%;
    transform: translate(0%, 0);

    padding: 1rem 2rem;
    border-radius: 10px;

    font-weight: 600;
    font-family: inherit;

    cursor: pointer;

    text-align: center;

    background-color: ${({ theme }) => theme.colors.white};

    @media screen and (max-width: 350px) {
        display: none;
    }
`;

export const OutdoorImage = styled(FaWalking)`
    opacity: inherit.5;
    z-index: 1;
    font-size: 20rem;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    color: ${({ theme }) => theme.colors.secondary};
`;