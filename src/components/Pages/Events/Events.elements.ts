import styled from "styled-components";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

interface Toggle {
    toggle: boolean
}

export const EventsHolder = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    transition: all .5s linear;
    &::-webkit-scrollbar {display:none;}
`;
export const Loading = styled.div`
    width: 100%;
    min-height: 1.5rem;
    text-align: center;
    font-style: italic;
`;
export const SearchField = styled.div`
    width: 100%;
    height: 10%;
    padding: 0;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    grid-area: search;
`;

export const EventsField = styled.div<Toggle>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: all .5s linear;
    overflow: hidden;
    &::-webkit-scrollbar {display:none;}
`;

export const HighlightField = styled.div<Toggle>`
    display: flex;
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
    display: flex;
    flex-grow: 4;
    flex-grow: ${({ toggle }) => (toggle ? 4 : 3)};
    flex-direction: column;
    transition: all .5s;
    overflow-y: ${({ toggle }) => (toggle ? 'scroll' : 'hidden')};

    &::-webkit-scrollbar {display:none;}
`;


const ColumnField = styled.div<Toggle>`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    transition: all .5s;
    height: 100%;
    width:100%;
`;
const RowField = styled.div<Toggle>`
    display: flex;
    flex-grow: 1;
    flex-direction: row;
    transition: all .5s;
    height: 100%;
    width:100%;
`;

export const RowOne = styled(RowField) <Toggle>`
    height: ${({ toggle }) => (toggle ? '100%' : '0%')};
    flex-grow: 4;
    min-height: 101%;
    //overflow: auto;
    padding: 1rem 0;
    overflow: ${({ toggle }) => (toggle ? 'auto' : 'hidden')};

    @media screen and (max-width: 370px) {
        flex-direction: column;
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
`
export const RowFour = styled(RowField) <Toggle>`
    flex-grow: 1;
    height: ${({ toggle }) => (toggle ? '50%' : '0%')};
    @media screen and (max-width: 370px) {
        height: ${({ toggle }) => (toggle ? '100%' : '0%')};
    }
`
export const RowFive = styled(RowField) <Toggle>`
    flex-grow: 1;
`
export const RowSix = styled(RowField) <Toggle>`
    flex-grow: 1;
`
export const RowSeven = styled(RowField) <Toggle>`
    flex-grow: ${({ toggle }) => (toggle ? 1 : 0)};
    height: ${({ toggle }) => (toggle ? '100%' : '0%')};
`

export const ColumnOne = styled(ColumnField) <Toggle>`
    flex-grow: 1;
    order: 2;

`
export const ColumnTwo = styled(ColumnField) <Toggle>`
    flex-grow: 1;
    order: 1;
`
//Rest

export const Pagination = styled.div<Toggle>`
    width: 100%;
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
`;

export const PaginationJump = styled.input`
    color: ${({ theme }) => theme.colors.black};
    font-family: inherit;
    text-align: center;
    background: transparent;
    font-size: 1.5rem;
    width: 30%;
    font-weight: 600;
`;