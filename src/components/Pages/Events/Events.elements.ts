import styled, { keyframes } from "styled-components";

interface Toggle {
    toggle: boolean
}

export const EventsHolder = styled.div`
    width: 100%;
    max-width:100vw;
    height: 100%;
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    transition: all .5s linear;
    &::-webkit-scrollbar {
        display:none;
    }
    overflow: hidden;
`;
export const SearchField = styled.div`
    width: 100%;
    max-width:100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const EventsField = styled.div<Toggle>`
    width: 100%;
    max-width:100vw;
    display: flex;
    height: 100%;
    flex-direction: column;
    transition: all .5s linear;
    overflow: hidden;
    &::-webkit-scrollbar {display:none;}
`;

export const HighlightField = styled.div<Toggle>`
    display: flex;
    flex-direction: column;
    max-width:100vw;
    overflow: hidden;
    //flex-grow: 3;
    height: ${({ toggle }) => (!toggle ? '100%' : '0%')};
    opacity: ${({ toggle }) => (toggle ? 0 : 1)};
    cursor: ${({ toggle }) => (toggle ? 'pointer' : 'default')};
    transition: all .4s ease-in-out;

    & div div div{
        //padding: ${({ toggle }) => (toggle && '0 0')};
    }

    @media screen and (max-width: 470px) {
        height: ${({ toggle }) => (!toggle ? '50%' : '0%')};
    }
`;

//Mark
export const MarkField = styled.div<Toggle>`
    padding: 1rem 0;
    display: flex;
    flex-grow: 1;
    color: ${({ theme }) => theme.colors.black};
    transition: all .5s linear;
`;
export const HighLightMarkField = styled.div<Toggle>`
    padding: 1rem 0;
    z-index: 0;
    color: ${({ theme }) => theme.colors.black};
`;

export const Mark = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-area: mark;
    z-index: 1000;
`;

export const MarkHeader = styled.div<Toggle>`
    font-weight: 600;
    color: ${({ theme }) => theme.colors.black};
    font-size: 1.2rem;

    translate: all .4s ease-in-out;

    @media screen and (max-height: 650px) {
        font-size: 1rem;
    }
`;
export const MarkOption = styled.div`
    font-weight: 300;
    font-size: 1.2rem;
    cursor: pointer;
    @media screen and (max-width: 350px) {
        font-size: 1rem;
    }

    @media screen and (max-height: 650px) {
        font-size: 1rem;
    }
`;
//Mark

//Rest
export const RestField = styled.div<Toggle>`
    width:100%;
    height: 100%;
    display: flex;
    flex-grow: ${({ toggle }) => (toggle ? 4 : 3)};
    flex-direction: column;
    transition: all .5s;
    overflow-y: ${({ toggle }) => (toggle ? 'scroll' : 'hidden')};

    &::-webkit-scrollbar {display:none;}
    transition: opacity 1s;
`;

export const Loading = styled.div`
    width: 100%;
    max-width:100vw;
    min-height: 1.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-style: italic;
    color: ${({ theme }) => theme.colors.black};

    @media screen and (max-height: 640px) {
        min-height: 1.2rem;
    }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

interface LoadingStatus {
    loading: boolean
}

export const Spinner = styled.div<LoadingStatus>`
    opacity: ${({ loading }) => (loading ? '.8' : 0)};
    border: 5px solid ${({ theme }) => theme.colors.black};
    border-top: 5px solid ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    width: 25px;
    height: 25px;
    animation: ${spin} 1s linear infinite;
    transition: opacity .5s;
    max-width:100vw;

    @media screen and (max-height: 630px) {
        border: 1.5px solid ${({ theme }) => theme.colors.black};
        border-top: 1.5px solid ${({ theme }) => theme.colors.white};
        width: 10px;
        height: 10px;
        padding: .1rem;
    }
`;

interface TestType {
    left: number,
    top: number,
    height: number,
    width: number
}
export const Test = styled.div<TestType>`
    position: absolute;
    left: ${({ left }) => `${left}px`};
    top: ${({ top }) => `${top}px`};
    width: ${({ width }) => (`${width}px`)};
    height: ${({ height }) => (`${height}px`)};
    background-color: black;
    z-index: 700;

    &.active {
        width: 100%;
        height: 100%;
    }
`