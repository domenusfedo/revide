import styled from "styled-components";

interface Toggle {
    toggle: boolean
}

const ColumnField = styled.div<Toggle>`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    height: 100%;
    translate: all .5s linear;
`;

export const Holder = styled.div<Toggle>`
    min-height: ${({ toggle }) => (toggle ? '101%' : '0%')};
    width: 100%;
    @media screen and (max-width: 470px) {
        flex-direction: ${({ toggle }) => (!toggle ? 'row' : 'column')};
    }
    transition: all 1s ease-in-out;
    background-color: red;
    overflow: hidden;
`

export const ColumnOne = styled(ColumnField) <Toggle>`
    flex-grow: 1;
    width: 100%;

    @media screen and (max-width: 470px) {
        height: ${({ toggle }) => (!toggle ? '33%' : '50%')}
    }

    @media screen and (max-height: 550px) {
        flex-grow: 1;
    }

    
    background-color: red;
`

export const ColumnTwo = styled(ColumnField) <Toggle>`
    flex-grow: 1;
    width: 100%;

    @media screen and (max-width: 470px) {
        height: ${({ toggle }) => (!toggle ? '66%' : '50%')}
    }

    @media screen and (max-height: 550px) {
        flex-grow: 3;
    }

    background-color: green;
`

const switchPostionAndSize = () => {

}

export const EventPlaceHolder = styled.div`

`