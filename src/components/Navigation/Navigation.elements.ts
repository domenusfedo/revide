import styled from "styled-components";
import { MdEditCalendar, MdOpacity, MdQuestionAnswer } from 'react-icons/md'

export const NavigationHolder = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const IconsHolder = styled.div`
    width: 100%;
    height: 5rem;
    padding: 1rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 500px;
`;

export const ReportIcon = styled(MdOpacity)`
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.white};
`

export const PostIcon = styled(MdQuestionAnswer)`
 font-size: 3rem;
    color: ${({ theme }) => theme.colors.white};
`

export const EventsIcon = styled(MdEditCalendar)`
 font-size: 3rem;
    color: ${({ theme }) => theme.colors.white};
`