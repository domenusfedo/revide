import styled from 'styled-components';
import { BiCategory } from 'react-icons/bi';
import { RiHomeLine } from 'react-icons/ri';
import { MdOutlineNearMe } from 'react-icons/md';
import { BiMessageSquareAdd } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';

export const CategoryName = styled.span`
    color: ${({ theme }) => theme.colors.blackVar};
    font-size: 1rem;
    font-weight: 600;
`

export const CategoryExtension = styled.div`
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: transparent;
    font-size: 1rem;
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
    transition: all .6s;
    outline: none;
    width: 100%;
    max-width: 300px;

    &.active ${CategoryExtension} {
        transform: translateY(0);
        opacity: 1;
    }
`

export const Icon = styled.div`
    color: ${({ theme }) => theme.colors.blackVar};
    font-size: 1rem;
`;

export const HomeIcon = styled(RiHomeLine)`
    color: ${({ theme }) => theme.colors.blackVar};
    font-size: 1.7rem;
`;

export const NearIcon = styled(MdOutlineNearMe)`
    color: ${({ theme }) => theme.colors.blackVar};
    font-size: 1.7rem;
`;

export const AddIcon = styled(BiMessageSquareAdd)`
    color: ${({ theme }) => theme.colors.blackVar};
    font-size: 1.7rem;
`;

export const ProfileIcon = styled(CgProfile)`
    color: ${({ theme }) => theme.colors.blackVar};
    font-size: 1.7rem;
`;