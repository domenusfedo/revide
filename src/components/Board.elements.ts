import styled from 'styled-components';
import LogoIcon from '../assets/svg/logo';

export const BoardHolder = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 600px;
    position: relative;
    display: grid;
    grid-template-rows: 10% 80% 10%;
    grid-template-areas: 
                        "name"
                        "content"
                        "category";
`

export const Holder = styled.div`
    color: ${({ theme }) => theme.colors.black};
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem 1rem;
    grid-area: name;
`
export const LogoHolder = styled(LogoIcon)`
    height: 10px;
    width: 10px;
`

export const Header = styled.h1`
    color: ${({ theme }) => theme.colors.black};
    font-weight: 900;
    margin-left: 0.5rem;
`

export const AppContent = styled.div`
    grid-area: content;
    height: 100%;
`;

export const CategoryHolder = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 2rem 1rem;
    grid-area: category;

    @media screen and (max-width: 360px) {
        padding: 0 .5rem;
    }
`




// export const ProfileButton = styled.div`
//     background-color: ${({ theme }) => theme.colors.blackVar};
//     width: 3rem;
//     height: 3rem;
//     border-radius: 50%;
//     font-size: 2rem;
// `