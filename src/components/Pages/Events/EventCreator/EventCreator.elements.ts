import styled, { keyframes } from "styled-components";

interface EventCreatorHolderType {
    type: string,
    bgTexture: string;
    postion: string,
    toggle: boolean
}
interface Type {
    type: string,
}
interface Position {
    postion: string,
    toggle: boolean
}

export const EventCreatorHolderSize = styled.div<Position>`
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 0.3rem;
    position: relative;
    opacity: ${({ toggle }) => (toggle ? 0 : 1)};
    transition: all .5s;
`;

export const EventCreatorHolder = styled.div<EventCreatorHolderType>`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    padding: 0;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme, type }) => (type !== 'medium' ? theme.colors.white : theme.colors.black)};
    border-radius: 25px;
    padding: 1.5rem 1rem;
    position: relative;

    
    background-image: url("${({ bgTexture }) => bgTexture}");
    
    background-size: cover;
    background-repeat: no-repeat;
    
    &:hover {
        cursor: pointer;
        background-position: 100% 100%;
    }
    transition: all .5s;
`;

export const Header = styled.div<Type>`
    z-index: 500;
    font-weight: 900;
    font-size: ${({ type }) => (type !== 'small' ? '1.8rem' : '1.2rem')};

    @media screen and (max-width: 390px) {
        width: 90%;
    }

    @media screen and (max-width: 350px) {
        font-size: 1.2rem;
    }
    transition: all .5s;
`;

export const SubHeader = styled.div<Type>`
    z-index: 500;
    font-style: italic;
    font-weight: 400;
    font-size: 1rem;
    @media screen and (max-width: 250px) {
        display: none;
    }
    transition: all .5s;
`;

export const Button = styled.div<Type>`
    display: ${({ type }) => (type !== 'high' ? 'none' : 'block')};
    width: ${({ type }) => (type !== 'high' ? '90%' : '60%')};
    z-index: 500;
    position: absolute;
    left: 5%;
    bottom: 10%;
    text-align: center;

    padding: 1rem 1rem;
    border-radius: 10px;

    font-weight: 600;
    font-family: inherit;

    cursor: pointer;

    color: ${({ theme }) => theme.colors.black};

    background-color: ${({ theme }) => theme.colors.white};

    @media screen and (max-width: 390px) {
        width: 90%;
        font-size: .8rem;
        text-align: center;
        padding: 1rem 0;
    }
    transition: all .5s;
`;