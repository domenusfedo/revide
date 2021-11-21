import styled from "styled-components";
import { GiCampfire } from 'react-icons/gi';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

export const Post = styled.div``;

interface PostHolderType {
    amount: number
}
interface Active {
    active: boolean
}

export const PostTitleHolder = styled.div<Active>`
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    transform: ${({ active }) => (active ? 'translateY(0)' : 'translateY(-2rem)')};
`;
export const PostTitle = styled.h1<Active>`
    font-size: 2.2rem;
    font-weight: 900;
    transition: all 2s;
`;
export const PostSubTitle = styled.h2<Active>`
    font-size: 1.2rem;
    font-weight: 600;
    max-width: ${({ active }) => (!active ? '300px' : '100%')};
    text-align: left;
    margin-bottom: ${({ active }) => (!active ? 0 : '2rem')};
`;
export const PostDesc = styled.h4<Active>`
    margin: 0;
    padding: 0;
    font-weight: normal;
    width: 80%;
    opacity: ${({ active }) => (active ? 1 : 0)};
    display: ${({ active }) => (!active ? 'none' : 'block')};
    text-align: left;
    transition: all 2s;
    margin-bottom: 2rem;
`;
export const PostOverline = styled.span<Active>`
    font-size: 1rem;
    opacity: ${({ active }) => (active ? 1 : 0)};
    height: ${({ active }) => (!active ? 0 : 'auto')};
    transition: all 1s;
`;


export const PostButton = styled.button<Active>`
    display: ${({ active }) => (!active ? 'none' : 'block')};
    color: ${({ theme }) => theme.colors.primary};
    padding: .5rem 1rem;
    font-size: 1.8rem;
`;

export const ExampleImage = styled(GiCampfire) <Active>`
    transition: all .5s;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: ${({ active }) => (!active ? 0 : '8rem')};
    color: ${({ theme }) => theme.colors.white};
    opacity: ${({ active }) => (active ? 1 : 0)};
    margin: ${({ active }) => (!active ? 0 : '2rem 0')};
`

export const PostHolder = styled.div<PostHolderType>`
    border-top-right-radius: 50px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    padding: 2rem 1rem;
    width: 100%;
    transform: translateY(${({ amount }) => ('-' + (amount - 1) * 100 + 'px')});
    height:15rem;
    transition: all .4s;
    position: absolute;
    top: ${({ amount }) => (((amount - 1) * 18) + 10) + 'rem'};
    left: 0;
    z-index: 300;
    cursor: pointer;
    display: flex;

    &:nth-child(1){
        transform: translateY(0);
        top: 10rem;
    }

    &:nth-child(even) {
        background-color: ${({ theme }) => theme.colors.secondary};
    }

    &.active {
        height: 100vh;
        width: 100vw;
        top: 0;
        z-index: 301;
        border-top-right-radius: 0;
        transform: translateY(0);
    }
`;

export const CloseField = styled.div<Active>`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    opacity: ${({ active }) => (!active ? 0 : 1)};
    transform: ${({ active }) => (!active ? 'translateX(-50px)' : 'translateX(0)')};
    pointer-events: ${({ active }) => (!active ? 'none' : 'all')};
    z-index: 500;
    transition: all .3s;

`;
export const CloseIcon = styled(IoMdArrowRoundBack)`
    color: ${({ theme }) => theme.colors.white};
    font-size: 2rem;
`;
export const CloseText = styled.span`
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.5rem;
    font-style: italic;
    width: 100%;
`;

export const FavIcon = styled(MdFavoriteBorder) <Active>`
    display: ${({ active }) => (!active ? 'none' : 'block')};
    color: ${({ theme }) => theme.colors.white};
    font-size: 2rem;
    margin-left: 1rem;
`;

export const Horizontal = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;