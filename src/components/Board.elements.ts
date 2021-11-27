import styled from 'styled-components';
import LogoIcon from '../assets/svg/logo';
import { BsArrowLeftShort } from 'react-icons/bs'
import { MdOutlineFavoriteBorder } from 'react-icons/md';

export const BoardHolder = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 600px;
    position: relative;
    display: grid;
    grid-template-rows: 10% 80% 10%;
    grid-template-areas: 
                        "name"
                        "content"
                        "category";
    position: relative;
`

export const Holder = styled.div`
    color: ${({ theme }) => theme.colors.black};
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem 1rem;
    grid-area: name;
`
export const LogoHolder = styled(LogoIcon)`
    height: 10px;
    width: 10px;
`

export const Header = styled.h1`
    color: ${({ theme }) => theme.colors.black};
    font-weight: 900;
    margin-left: 0.5rem;
`

export const AppContent = styled.div`
    grid-area: content;
    max-width: 100vw;
    height: 100%;
`;

export const CategoryHolder = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 2rem 1rem;
    grid-area: category;

    @media screen and (max-width: 360px) {
        padding: 0 .5rem;
    }
`;

export const DetailsHeader = styled.div<HeaderType>`
    //opacity: ${({ active }) => (active ? '1' : '0')}; 
    color: ${({ theme, shouldBeBlack }) => (shouldBeBlack ? theme.colors.black : theme.colors.white)};
    //padding: 2rem 2rem;
    transition: all 2s, color 0s;
    opacity: 1;
`
export const HeaderOptions = styled.div`
width: 100%;
cursor: pointer;
display: none;
justify-content: flex-start;
align-items: center;
font-size: 1rem;
transition: all .1s;
padding: .5rem 0;
`

interface HeaderType {
    shouldBeBlack: boolean
    active: boolean
}
export const HeaderHeader = styled.h1`
    font-weight: 900;
    font-size: 1.2rem;
    padding: .5rem 1rem;
    pointer-events: none;

    font-size: 1.5rem;

    @media screen and (max-width: 390px) {
        width: 90%;
    }

    @media screen and (max-width: 350px) {
        font-size: 1.2rem;
    }
    transition: all .5s;
    pointer-events: none;
`
export const HeaderSubTitle = styled.h2`
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
    pointer-events: none;
    margin-bottom: 1rem;
`
export const HeaderDesc = styled.div`
    padding: 1rem 1rem;
    display: none;
`

export const OptionsIcon = styled(BsArrowLeftShort)`
    font-size: 3rem;
;
`
export const OptionsText = styled.span`
`

export const ParticipantsAmount = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 1rem;
    display: none;
`
export const ParticipantsText = styled.h3`
    margin-right: .5rem;

`
export const Amount = styled.span`
    font-style: italic;
`
export const UserAction = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 2rem 1rem;
    cursor: pointer;
`
export const ParticipateField = styled.button`
    color: inherit;
    font-family: inherit;
    background-color: transparent;
    border-radius: 25px;
    font-weight: 900;
    cursor: pointer;
`
export const IntrestedField = styled(MdOutlineFavoriteBorder)`
   font-size: 2rem;
`
interface ExpandType {
    left: number,
    top: number,
    height: number,
    width: number,
    bgImage: string,
    active: boolean
}
export const DetailsExpand = styled.div<ExpandType>`
    position: absolute;
    left: ${({ left }) => `${left}px`};
    top: ${({ top }) => `${top}px`};
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
    //z-index: ${({ active }) => (active ? '900' : '700')};
    cursor: pointer;
    //border-radius: ${({ active }) => (active ? '25px' : '0')};
    border-radius: 25px;
    cursor: default;
    transition: all .1s, color 0s;
    opacity: 1;
    padding: 0.3rem;

    z-index: -3;

    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("${({ bgImage }) => bgImage}");

    background-color: black;
    
    &.active {
        z-index:9999999;
        top: 0;
        left:0;
        width: 100%;
        height: 100%;
        opacity: 1;
        cursor: default;
        border-radius: 0;
    }
    &.active ${HeaderOptions} {
        display: flex;
    }
    &.active ${HeaderDesc} {
        display: flex;
    }
    &.active ${ParticipantsAmount} {
        display: flex;
    }
`