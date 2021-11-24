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
    height: 90%;
    display: flex;
    flex-direction: column;
    transition: all .5s linear;
`;

export const HighlightField = styled.div<Toggle>`
    height: 100%;
    display: flex;
    flex-grow: ${({ toggle }) => (toggle ? 0 : 2)};
    height: ${({ toggle }) => (!toggle ? '100%' : '0%')};
    transition: all .5s linear;
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
    flex-grow: ${({ toggle }) => (toggle ? 4 : 3)};
    flex-direction: column;
    transition: all .5s;
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

`

export const RowTwo = styled(RowField) <Toggle>`
    flex-grow: ${({ toggle }) => (toggle ? 1 : 0)};
    height: ${({ toggle }) => (toggle ? '10%' : '0%')};
`

export const RowThree = styled(RowField) <Toggle>`
    
    flex-grow: 3;
`
export const RowFour = styled(RowField) <Toggle>`
    flex-grow: 1;
    height: ${({ toggle }) => (toggle ? '100%' : '0%')};
`
export const RowFive = styled(RowField) <Toggle>`
    flex-grow: 1;
`
export const RowSix = styled(RowField) <Toggle>`
    flex-grow: 1;
`

export const ColumnOne = styled(ColumnField) <Toggle>`
    flex-grow: 1;
`
export const ColumnTwo = styled(ColumnField) <Toggle>`
    flex-grow: 1;
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