import styled from "styled-components";

import { FaSearch } from 'react-icons/fa'

export const SearchBarHolder = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem 0;
    color: ${({ theme }) => theme.colors.black};
`;

export const SearchBarInputHolder = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.whiteVar};
    width: 100%;
    padding: 1.2rem 1rem;
    border-radius: 25px;
`;

export const SearchBarIcon = styled(FaSearch)`
    color: ${({ theme }) => theme.colors.blackVar};
    font-size: 1.5rem;
    margin-right: 0.5rem;
`;

export const SearchBarInput = styled.input`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.blackVar};
    font-size: 1.5rem;
    font-family: inherit;
    outline: none;

    &::placeholder {
        color: ${({ theme }) => theme.colors.blackVar};
        font-size: 1.5rem;
    }
`;