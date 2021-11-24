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

export const EventsField = styled.div`
    width: 100%;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    grid-area: events;

    position: relative;

    display: grid;
    grid-template-rows: 40% 10% 25% 25%;
    grid-template-columns: 50% 50%;
    grid-template-areas: "high high"
                         "mark mark"
                         "medium small1"
                         "medium small2";

    @media screen and (max-width: 400px) {
        grid-template-rows: 30% 10% 30% 30%;
        grid-template-columns: 50% 50%;
        grid-template-areas: "high high"
                             "mark mark"
                             "medium medium"
                             "small1 small2";
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
    @media screen and (max-width: 350px) {
        font-size: 1rem;
    }
`;