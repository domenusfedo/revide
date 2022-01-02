import styled, { keyframes } from "styled-components";

interface Toggle {
    toggle: boolean
}

const ColumnField = styled.div<Toggle>`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    //translate: all 1s ease-in-out;
    translate: all .5s linear;
`;

export const Holder = styled.div<Toggle>`
    min-height: ${({ toggle }) => (toggle ? '100.5%' : '0%')};
    width: 100%;
    @media screen and (max-width: 470px) {
        flex-direction: ${({ toggle }) => (!toggle ? 'row' : 'column')};
    }
    transition: all 1s ease-in-out;
    overflow: hidden;
    display: flex;
`

export const ColumnOne = styled(ColumnField) <Toggle>`
    width: 100%;
    @media screen and (max-height: 850px) and (max-width: 470px) {
        flex-grow: 1;
        height: ${({ toggle }) => (!toggle ? '40%' : '50%')};
    }
`

export const ColumnTwo = styled(ColumnField) <Toggle>`
    width: 100%;
    @media screen and (max-height: 850px) and (max-width: 470px) {
        flex-grow: 2;
        height: ${({ toggle }) => (!toggle ? '60%' : '50%')};
    }
`

//Abomination
interface Toggle {
    toggle: boolean
}

const RowField = styled.div<Toggle>`
    display: flex;
    flex-grow: 2;
    flex-direction: row;
    overflow: hidden;
    transition: all .5s ease-in-out;
`;

export const EventField = styled(RowField) <Toggle>`
    flex-grow: ${({ toggle }) => (toggle ? 1 : 0)};
    height: ${({ toggle }) => (toggle ? '100%' : '0%')};
    opacity: ${({ toggle }) => (toggle ? '1' : '0')};
    width: 100%;
`
interface EventCreatorHolderType {
    bgTexture: string;
    toggle: boolean,
    shouldBeBlack: boolean,
}

interface Position {
    toggle: boolean
    type: string
}

interface ShouldBeBlack {
    shouldBeBlack: boolean
}

export const EventCreatorHolderSize = styled.div<Position>`
    position: absolute;
    height: 100%;
    width: 100%;
    padding: ${({ type }) => (type === 'high' ? '0rem' : '0.3rem')};
    position: relative;
`;

export const EventCreatorHolder = styled.div<EventCreatorHolderType>`
    width: 100%;
    height: 100%;
    
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme, shouldBeBlack }) => (shouldBeBlack ? theme.colors.black : theme.colors.white)};
    border-radius: 25px;

    filter: grayscale(0.3);

    
    position: relative;

    background-image: url("${({ bgTexture }) => bgTexture}");
    background-size: cover;
    background-repeat: no-repeat;
    

    @media screen and (max-width: 470px) {
        font-size: .2rem;
    }
`;

const pulse = keyframes`
    0% {
        width: 90%;
    }
    50% {
        width: 100%;
    }
    100% {
        width: 90%;
    }
`

const pulse2 = keyframes`
    0% {
        width: 50%;
    }
    50% {
        width: 60%;
    }
    100% {
        width: 50%;
    }
`

export const LoadingBar = styled.div<ShouldBeBlack>`
    width: 90%;
    background-color: ${({ theme, shouldBeBlack }) => (shouldBeBlack ? theme.colors.black : theme.colors.white)};
    color: transparent;
    border-radius: 5px;
    opacity: .2;

    animation: ${pulse} 2s linear infinite;
    transition: all 1s ease-in-out;
`

export const LoadingBarSmall = styled.div<ShouldBeBlack>`
    width: 50%;
    background-color: ${({ theme, shouldBeBlack }) => (shouldBeBlack ? theme.colors.black : theme.colors.white)};
    color: transparent;
    border-radius: 5px;
    opacity: .2;
    margin-top: .5rem;

    animation: ${pulse2} 2s linear infinite;
    transition: all 1s ease-in-out;
`