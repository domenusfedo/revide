import styled from "styled-components";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

export const EventsHolder = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 1rem;
    display: grid;
    grid-template-rows: 12% 88%;
    grid-template-areas: "search"
                         "events";
    color: ${({ theme }) => theme.colors.black};

    @media screen and (max-width: 360px) {
        padding: 0 .5rem;
    }
`;

export const SearchField = styled.div`
    width: 100%;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: search;
`;

interface Toggle {
    toggle: boolean
}

export const EventsField = styled.div<Toggle>`
    width: 100%;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    grid-area: events;

    transition: all 1s;

    position: relative;
    //40% 10% 25% 25%;
    display: grid;
    grid-template-rows: ${({ toggle }) => (!toggle ? '40% 10% 25% 25% 0% 0%' : '0% 10% 25% 25% 35% 5%')};
    grid-template-areas: "high high"
                         "mark mark"
                         "medium small1"
                         "medium small2"
                         "another1 another2"
                         "pag pag";
    grid-template-columns: 50% 50%;

    @media screen and (max-width: 400px) {
        grid-template-rows: ${({ toggle }) => (!toggle ? '40% 10% 25% 25% 0% 0%' : '0% 10% 25% 25% 35% 5%')};
        grid-template-columns: 50% 50%;
        grid-template-areas: "high high"
                             "mark mark"
                             "medium medium"
                             "small1 small2"
                             "another1 another2"
                             "pag pag";
    }
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

export const Pagination = styled.div<Toggle>`
    width: 100%;
    height: 100%;
    //display: ${({ toggle }) => (!toggle ? 'none' : 'block')};
    opacity: ${({ toggle }) => (!toggle ? 0 : 1)};
    grid-area: pag;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 7rem;
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