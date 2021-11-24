import styled from "styled-components";

export const EventsHolder = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 1rem;
    display: grid;
    grid-template-rows: 12% 88%;
    grid-template-areas: "search"
                         "events";
    color: ${({ theme }) => theme.colors.black};
`;

export const SearchField = styled.div`
    width: 100%;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: search;
`;

export const EventsField = styled.div`
    width: 100%;
    padding: 0;
    width: 100%;
    height: 100%;
    grid-area: events;

    position: relative;

    display: grid;
    grid-template-rows: 35% 10% 25% 25% 5%;
    grid-template-areas: "high high"
                         "mark mark"
                         "medium small1"
                         "medium small2"
                         "pag pag";

    /* @media screen and (max-width: 316px) {
        grid-template-areas: "high high"
                         "mark mark"
                         "medium medium"
                         "medium medium"
                         "pag pag";
    } */
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
   font-weight: 900;
   font-size: 1.5rem;
`;
export const MarkOption = styled.div`
    font-weight: 600;
    font-size: 1.2rem;
`;

export const SmallOne = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 95%;
    height: 95%;
    border-radius: 25px;
    background-color: ${({ theme }) => theme.colors.red};
    grid-area: small1;

    /* @media screen and (max-width: 316px) {
        display: none;
    } */
`;
export const SmallTwo = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 25px;
    width: 95%;
    height: 95%;
    background-color: ${({ theme }) => theme.colors.accent};
    grid-area: small2;

    /* @media screen and (max-width: 316px) {
        display: none;
    } */
`;
export const Pagiantion = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    grid-area: pag;
`;