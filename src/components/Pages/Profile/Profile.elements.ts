import styled from 'styled-components';
import { FaUserAlt } from 'react-icons/fa';

export const UserData = styled.div`
    width: 100%;
    padding: 0 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`

export const UserPic = styled.div`
    background-color: ${({ theme }) => theme.colors.blackVar};
    width: 100px;
    height: 100px;
    border-radius: 100%;
    overflow: hidden;
    position: relative;

    @media screen and (min-width: 386px) {
        width: 130px;
        height: 130px;
    }

    @media screen and (max-height: 640px) {
        width: 70px;
        height: 70px;
    }
`

export const UserIcon = styled(FaUserAlt)`
    width: 90%;
    height: 90%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    color: ${({ theme }) => theme.colors.black};
`

export const UserPersonal = styled.div`
    height: 100%;
    color: ${({ theme }) => theme.colors.black};
    margin-top: 1rem;
`

export const Name = styled.span`
    font-weight: 900;
    font-size: 1.8rem;

    @media screen and (max-height: 640px) {
        font-size: 1.4rem;
    }
`

export const SmallStatictics = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: .5rem;
    color: ${({ theme }) => theme.colors.black};
    text-align: center;
`

export const DataField = styled.div`
    display: flex;
    flex-direction: column;
`

export const DataHihglight = styled.span`
    font-weight: 900;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.primary};

    @media screen and (max-height: 640px) {
        font-size: 1rem;
    }
`
export const DataNormal = styled.span`

`