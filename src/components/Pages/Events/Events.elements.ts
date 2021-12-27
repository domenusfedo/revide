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
    max-width:100vw;
    display: flex;
    flex-grow: 4;
    flex-grow: ${({ toggle }) => (toggle ? 4 : 3)};
    flex-direction: column;
    transition: all .5s;
    overflow-y: ${({ toggle }) => (toggle ? 'scroll' : 'hidden')};

    &::-webkit-scrollbar {display:none;}
    transition: opacity 1s;
`;


const ColumnField = styled.div<Toggle>`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    transition: all .5s;
    height: 100%;
    width:100%;
    max-width:100vw;
`;
const RowField = styled.div<Toggle>`
    display: flex;
    flex-grow: 1;
    flex-direction: row;
    transition: all .5s;
    height: 100%;
    width:100%;
    max-width:100vw;
`;

export const RowOne = styled(RowField) <Toggle>`
    height: ${({ toggle }) => (toggle ? '100%' : '0%')};
    flex-grow: 4;
    min-height: 100.5%;
    max-width:100vw;
    padding: .2rem 0;
    overflow: ${({ toggle }) => (toggle ? 'auto' : 'hidden')};
    @media screen and (max-width: 370px) {
        flex-direction: ${({ toggle }) => (!toggle ? 'row' : 'column')}
    }
`

export const FakeRow = styled.div`
    display: flex;
    flex-grow: 4;
    flex-direction: row;
    transition: all .5s;
    min-height: 100%;
    width:100%;
`

export const RowThree = styled(RowField) <Toggle>`
    flex-grow: 3;
    max-width:100vw;
`
export const RowFour = styled(RowField) <Toggle>`
    flex-grow: 1;
    max-width:100vw;
    height: ${({ toggle }) => (toggle ? '50%' : '0%')};
    @media screen and (max-width: 370px) {
        height: ${({ toggle }) => (toggle ? '100%' : '0%')};
    }
`
export const RowFive = styled(RowField) <Toggle>`
    flex-grow: 1;
    max-width:100vw;
`
export const RowSix = styled(RowField) <Toggle>`
    flex-grow: 1;
    max-width:100vw;
`
export const RowSeven = styled(RowField) <Toggle>`
    flex-grow: ${({ toggle }) => (toggle ? 1 : 0)};
    height: ${({ toggle }) => (toggle ? '100%' : '0%')};
`

export const ColumnOne = styled(ColumnField) <Toggle>`
    flex-grow: 1;
    max-width:100vw;
    order: 2;
`
export const ColumnTwo = styled(ColumnField) <Toggle>`
    flex-grow: 1;
    max-width:100vw;
    order: 1;
`
//Rest

export const Pagination = styled.div<Toggle>`
    width: 100%;
    max-width:100vw;
    opacity: ${({ toggle }) => (!toggle ? 0 : 1)};
    grid-area: pag;
    display: flex;
    justify-content: center;
    flex-grow: 1;
    align-items: center;
`;

interface Status {
    type: 'left' | 'right'
}
export const PaginationItem = styled(BsFillArrowRightCircleFill) <Status>`
    color: ${({ theme }) => theme.colors.black};
    transform: ${({ type }) => (type === 'left' ? 'rotateZ(-180deg)' : 'rotateZ(0)')};
    font-size: 1.8rem;
    font-weight: 600;
    max-width:100vw;
`;

export const PaginationJump = styled.input`
    color: ${({ theme }) => theme.colors.black};
    font-family: inherit;
    text-align: center;
    background: transparent;
    font-size: 1.5rem;
    width: 30%;
    max-width:100vw;
    font-weight: 600;
`;

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