import styled from "styled-components";
import { FaWalking } from 'react-icons/fa'

export const HighlightedEventHolder = styled.div`
    width: 95%;
    height: 95%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 0;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.black};
    border-radius: 25px;
    grid-area: high;
    padding: 2rem 1rem;
    position: relative;
`;

export const Header = styled.div`
    top: 0;
    transform: translate(0, 50%);
    position: absolute;
    z-index: 500;
    font-weight: 900;
    font-size: 2rem;
`;

export const SubHeader = styled.div`
    position: absolute;
    top: 24%;
    transform: translate(0, 50%);
    z-index: 500;
    font-style: italic;
    font-weight: 400;
    font-size: 1.2rem;
`;

export const Button = styled.div`
    z-index: 500;
    position: absolute;
    left: 5%;
    bottom: 10%;

    padding: 1rem 2rem;
    border-radius: 10px;

    font-weight: 600;
    font-family: inherit;

    cursor: pointer;

    background-color: ${({ theme }) => theme.colors.white};
`;

export const OutdoorImage = styled(FaWalking)`
    opacity: inherit.5;
    z-index: 1;
    font-size: 20rem;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    color: ${({ theme }) => theme.colors.primaryVar};
`;