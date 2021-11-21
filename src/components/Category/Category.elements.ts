import styled from 'styled-components'
import { BiCategory } from 'react-icons/bi'


export const MarkerHolder = styled.div`
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Marker = styled(BiCategory)`
    color: ${({ theme }) => theme.colors.black};
    font-size: 1.5rem;
`;

export const CategoryName = styled.span`
    color: ${({ theme }) => theme.colors.black};
    font-size: 1.2rem;
    font-weight: 600;
`

export const CategoryExtension = styled.div`
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: transparent;
    z-index: 100;
    background-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-8px);
    opacity: 0;
    transition: all .6s;
`

export const CategoryHolder = styled.div`
    margin: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    height: 2rem;
    transition: all .6s;
    outline: none;

    &.active ${CategoryExtension} {
        transform: translateY(0);
        opacity: 1;
    }
`