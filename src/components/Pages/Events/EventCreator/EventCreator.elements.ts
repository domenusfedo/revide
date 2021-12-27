import styled from "styled-components";
import { BsBookmarkHeart } from 'react-icons/bs';

interface EventCreatorHolderType {
    bgTexture: string;
    toggle: boolean,
    shouldBeBlack: boolean,
    type?: string
}
interface Position {
    toggle: boolean
}

interface Type {
    type: string
}

export const EventCreatorHolderSize = styled.div<Position>`
    position: absolute;
    height: 100%;
    width: 100%;
    padding: 0.3rem;
    position: relative;
    opacity: ${({ toggle }) => (!toggle ? 0 : 1)};
    //height: ${({ toggle }) => (!toggle ? '100%' : 0)};
    transition: all .5s;
`;

export const EventCreatorHolder = styled.div<EventCreatorHolderType>`
    width: 100%;
    height: 100%;
    
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    padding: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme, shouldBeBlack }) => (shouldBeBlack ? theme.colors.black : theme.colors.white)};
    border-radius: 25px;
    
    position: relative;

    
    background-image: url("${({ bgTexture }) => bgTexture}");
    filter: ${({ type }) => (type !== 'high' ? 'grayscale(0.3)' : 'grayscale(0)')};
    background-size: cover;
    background-repeat: no-repeat;
    
    &:hover {
        cursor: pointer;
        background-position: 100% 10%;
    }
    transition: all .5s;
    transition: background-position 5s;
`;

export const Header = styled.div<Type>`
    z-index: 500;
    font-weight: 900;
    padding: 1rem 1rem;
    padding-bottom: .7rem;
    pointer-events: none;

    font-size: ${({ theme, type }) => (type === 'high' ? '2rem' : '1.5rem')};

    @media screen and (max-width: 390px) {
        width: 90%;
    }

    @media screen and (max-width: 350px) {
        font-size: ${({ theme, type }) => (type === 'high' ? '2rem' : '1.2rem')};
    }
    transition: all .5s;
`;

export const SubHeader = styled.div<Type>`
    padding: .1rem 1rem;
    pointer-events: none;
    z-index: 500;
    font-style: italic;
    font-weight: 400;
    font-size: 1rem;

    font-size: 1rem;

    @media screen and (max-width: 250px) {
        display: none;
    }
    transition: all .5s;
`;

interface Status {
    status: boolean
}
export const SubStatus = styled.div<Status>`
    position: absolute;
    bottom: 0;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    z-index: 500;
    font-style: italic;
    font-weight: 400;
    font-size: 1rem;
    opacity: ${({ status }) => (status ? .8 : 0)};

    padding: 1rem 2rem;

    color: ${({ theme }) => theme.colors.white};

    transition: all 1s;
    background-color: ${({ theme }) => theme.colors.black};
    width: 100%;
    z-index: 90000;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const StatusText = styled.span`
    margin-right: 1rem;
    width: 90%;
`
export const StatusIcon = styled(BsBookmarkHeart)`
font-size: 2rem;
width: 10%;
`