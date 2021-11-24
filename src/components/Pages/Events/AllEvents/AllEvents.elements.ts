import styled from "styled-components";
import { IoClose } from 'react-icons/io5';

interface Visible {
    visible: boolean;
}
export const AllEventsHolder = styled.div<Visible>`
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.white};
    background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(3) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 95%, 1)'/><path d='M27.26 5.415c-.55 0-.9.55-.65 1l2.45 4.75c.2.5.85.5 1.15.1l3.15-4.5c.3-.4 0-1.05-.55-1.1zM10.689 8.068c-.406-.051-.822.31-.778.748l.5 5.3c.05.5.6.8 1.05.5l4.55-3.05c.45-.3.4-.95-.05-1.15l-5.1-2.3a.605.605 0 0 0-.172-.048zM2.406 24.584a.635.635 0 0 0-.345.081l-4.75 2.4c-.45.2-.5.85-.1 1.15l4.45 3.15c.4.3 1 0 1.1-.5l.3-5.55c0-.412-.31-.712-.655-.73zm40 0a.635.635 0 0 0-.345.081l-4.75 2.4c-.45.2-.5.85-.1 1.15l4.45 3.15c.4.3 1 0 1.1-.5l.3-5.55c0-.412-.31-.712-.655-.73zm-22.17 3.108a.744.744 0 0 0-.675.723l.4 5.55c.05.5.6.8 1.05.5l4.45-2.95c.45-.25.4-.9-.05-1.15l-4.8-2.6a.702.702 0 0 0-.376-.073z'  stroke-width='1' stroke='none' fill='hsla(0, 0%, 93%, 1)'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
    transform: ${({ visible }) => (visible ? 'translateY(0)' : 'translateY(100vh)')};
    transition: all .5s ease-in-out;
`;


export const Header = styled.div`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
`;

export const HeaderName = styled.h1`
    font-weight: 900;
`;

export const CloseIcon = styled(IoClose)`
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.white};
`;