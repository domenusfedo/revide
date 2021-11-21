import styled from 'styled-components';
import { BiMessageSquareAdd } from 'react-icons/bi'

export const BoardHolder = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 600px;
    /* display: flex;
    justify-content: flex-start;
    flex-direction: column;
    //padding: 2rem 2rem;
    align-items: center; */
    /* grid-template-rows: 10rem max-content;
    grid-template-areas: 
                        "fake"
                        "right"; */
                        position: relative;
`

export const Holder = styled.div`
    color: ${({ theme }) => theme.colors.black};
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1rem;
`

export const Header = styled.h1`
    color: ${({ theme }) => theme.colors.black};
    font-weight: 900;
`

export const ReportButton = styled(BiMessageSquareAdd)`
    color: ${({ theme }) => theme.colors.black};
    font-size: 2rem;
`

export const CategoryHolder = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    padding: 2rem 1rem;
    padding-top: 0;
`
export const NavHolder = styled.div`
    position: absolute;
    width: 100%;
    height: 10rem;
    max-width: 568px;
`

export const ElementsHolder = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    /* grid-template-rows: 10rem max-content;
    grid-template-areas: 
                        "fake"
                        "right"; */
`

export const FakeSpot = styled.div`
    height: 10rem;
    /* grid-area: fake; */
`;

export const RightSpot = styled.div`
    /* grid-area: right; */
`;