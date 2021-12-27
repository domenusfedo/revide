import styled, { keyframes } from "styled-components";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

interface Toggle {
    toggle: boolean
}

export const EventsHolder = styled.div`
    width: 100%;
    max-width:100vw;
    height: 100%;
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    transition: all .5s linear;
    &::-webkit-scrollbar {display:none;}
`;
export const SearchField = styled.div`
    width: 100%;
    max-width:100vw;
    height: 10%;
    padding: 0;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
`;

export const EventsField = styled.div<Toggle>`
    width: 100%;
    max-width:100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: all .5s linear;
    overflow: hidden;
    &::-webkit-scrollbar {display:none;}
`;

export const HighlightField = styled.div<Toggle>`
    display: flex;
    max-width:100vw;
    flex-grow: 3;
    height: ${({ toggle }) => (!toggle ? '70%' : '0%')};
    opacity: ${({ toggle }) => (toggle ? 0 : 1)};
    cursor: ${({ toggle }) => (toggle ? 'pointer' : 'default')};
    transition: all .5s linear;
    margin-top: ${({ toggle }) => (!toggle ? '1rem' : 0)};


    & div div div{
        display: ${({ toggle }) => (toggle ? 'none' : 'block')};
        padding: ${({ toggle }) => (toggle && '0 0')};
    }

    @media screen and (max-width: 350px) {
        height: ${({ toggle }) => (!toggle ? '40%' : '0%')};
    }
`;

//Mark
export const MarkField = styled.div<Toggle>`
    height: 10%;
    padding: 1rem 0;
    display: flex;
    flex-grow: 1;
    color: ${({ theme }) => theme.colors.black};
    transition: all .5s linear;
`;
export const Mark = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-area: mark;

`;
export const MarkHeader = styled.div`
    font-weight: 600;
    font-size: 1.5rem;
    @media screen and (max-width: 350px) {
        font-size: 1.2rem;
    }
`;
export const MarkOption = styled.div`
    font-weight: 300;
    font-size: 1.2rem;
    cursor: pointer;
    @media screen and (max-width: 350px) {
        font-size: 1rem;
    }
`;
//Mark

//Rest
export const RestField = styled.div<Toggle>`
    height: 100%;
    width:100%;
    display: flex;
    flex-grow: ${({ toggle }) => (toggle ? 4 : 3)};
    flex-direction: column;
    transition: all .5s;
    overflow-y: ${({ toggle }) => (toggle ? 'scroll' : 'hidden')};

    &::-webkit-scrollbar {display:none;}
    transition: opacity 1s;
`;

//Rest Structure
const ColumnField = styled.div<Toggle>`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    transition: all .5s;
    height: 100%;
`;
const RowField = styled.div<Toggle>`
    display: flex;
    flex-grow: 2;
    flex-direction: row;
    transition: all .5s;
`;

export const RowOne = styled(RowField) <Toggle>`
    min-height: ${({ toggle }) => (toggle ? '101%' : '0%')};
    width:100%;
    padding: .2rem 0;
    @media screen and (max-width: 470px) {
        flex-direction: ${({ toggle }) => (!toggle ? 'row' : 'column')};
    }
`
export const ColumnOne = styled(ColumnField) <Toggle>`
    flex-grow: 1;
    order: 1;
    width: 100%;

    @media screen and (max-width: 470px) {
        height: ${({ toggle }) => (!toggle ? '33%' : '50%')}
    }
`
export const ColumnTwo = styled(ColumnField) <Toggle>`
    flex-grow: 1;
    order: 2;
    width: 100%;

    @media screen and (max-width: 470px) {
        flex-grow: 2;
        height: ${({ toggle }) => (!toggle ? '66%' : '50%')}
    }
`
//Rest Structure
//Left Rest
export const RowThree = styled(RowField) <Toggle>`
        flex-grow: 1;
        height: ${({ toggle }) => (toggle ? '100%' : '0%')};
    `
export const RowFour = styled(RowField) <Toggle>`
        flex-grow: ${({ toggle }) => (toggle ? 1 : 0)};
        height: ${({ toggle }) => (toggle ? '100%' : '0%')};
    `
export const RowFive = styled(RowField) <Toggle>`
        flex-grow: ${({ toggle }) => (toggle ? 1 : 0)};
        height: ${({ toggle }) => (toggle ? '100%' : '0%')};

        //Must be Better solution (based on windows size we should decrease amount of fetching elements)
        @media screen and (max-width: 470px) {
            display: none;
        }
`
//Left Rest
//Right Rest
export const RowSix = styled(RowField) <Toggle>`
    flex-grow: 1;
    height: ${({ toggle }) => (toggle ? '100%' : '0%')};
`
export const RowSeven = styled(RowField) <Toggle>`
    flex-grow: 1;
    height: ${({ toggle }) => (toggle ? '100%' : '0%')};
`
export const RowEight = styled(RowField) <Toggle>`
    flex-grow: ${({ toggle }) => (toggle ? 1 : 0)};
    height: ${({ toggle }) => (toggle ? '100%' : '0%')};

    @media screen and (max-width: 470px) {
        display: none;
    }
`
//Right rest
//Rest

export const Loading = styled.div`
    width: 100%;
    max-width:100vw;
    min-height: 1.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-style: italic;
    color: ${({ theme }) => theme.colors.black};
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

interface LoadingStatus {
    loading: boolean
}

export const Spinner = styled.div<LoadingStatus>`
    opacity: ${({ loading }) => (loading ? '.8' : 0)};
    border: 5px solid ${({ theme }) => theme.colors.black};
    border-top: 5px solid ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    width: 25px;
    height: 25px;
    animation: ${spin} 1s linear infinite;
    transition: opacity .5s;
    max-width:100vw;

    @media screen and (max-height: 630px) {
        border: 1.5px solid ${({ theme }) => theme.colors.black};
        border-top: 1.5px solid ${({ theme }) => theme.colors.white};
        width: 10px;
        height: 10px;
        padding: .1rem;
    }
`;

interface TestType {
    left: number,
    top: number,
    height: number,
    width: number
}
export const Test = styled.div<TestType>`
    position: absolute;
    left: ${({ left }) => `${left}px`};
    top: ${({ top }) => `${top}px`};
    width: ${({ width }) => (`${width}px`)};
    height: ${({ height }) => (`${height}px`)};
    background-color: black;
    z-index: 700;

    &.active {
        width: 100%;
        height: 100%;
    }
`