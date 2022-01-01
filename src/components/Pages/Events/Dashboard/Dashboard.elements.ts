import styled from "styled-components";

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