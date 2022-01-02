import styled from 'styled-components';
import { FaUserAlt } from 'react-icons/fa';

interface Toggle {
    toggle: boolean
}
export const Holder = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const UserData = styled.div<Toggle>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: ${({ toggle }) => (!toggle ? '1rem' : '0')};


    height: ${({ toggle }) => (!toggle ? '100%' : '0%')};

    transition: all .5s ease-in-out;
`

export const Text = styled.span`
    flex-grow: 0.2;
    padding: 1rem;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 600;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media screen and (min-height: 812px) {
        font-size: 1.2rem;
    }

    @media screen and (min-height: 650px) {
        font-size: 1.2rem;
    }

`

export const RecentEvent = styled.div<Toggle>`
    display: flex;
    height: 100%;
    padding: 1rem;
    transition: all .5s ease-in-out;
`;
export const EventHolder = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1001%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(55%2c 166%2c 134%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c478.025C100.968%2c475.146%2c208.504%2c510.974%2c296.416%2c461.232C385.565%2c410.79%2c426.51%2c307.371%2c467.504%2c213.502C507.916%2c120.966%2c527.912%2c24.548%2c531.195%2c-76.374C535.059%2c-195.157%2c549.8%2c-321.394%2c488.21%2c-423.036C422.771%2c-531.029%2c309.916%2c-607.287%2c188.49%2c-641.937C67.509%2c-676.46%2c-60.524%2c-652.516%2c-180.221%2c-613.777C-297.474%2c-575.829%2c-426.839%2c-529.883%2c-488.119%2c-422.957C-547.72%2c-318.961%2c-491.992%2c-190.528%2c-491.485%2c-70.665C-491.065%2c28.816%2c-517.002%2c127.345%2c-485.394%2c221.672C-451.625%2c322.448%2c-401.463%2c428.816%2c-307.482%2c478.451C-214.977%2c527.306%2c-104.571%2c481.007%2c0%2c478.025' fill='%232c856b'%3e%3c/path%3e%3cpath d='M1440 1094.513C1540.421 1078.415 1633.556 1048.238 1724.4560000000001 1002.623 1825.2930000000001 952.0219999999999 1957.978 920.287 1997.656 814.673 2037.527 708.546 1918.779 604.838 1916.483 491.492 1913.676 352.9 2068.966 198.235 1982.967 89.517 1898.59-17.149 1718.9569999999999 84.57600000000002 1583.658 70.745 1479.586 60.105999999999995 1384.563 4.601999999999975 1280.776 17.732999999999947 1165.548 32.31200000000001 1044.444 63.64299999999997 965.613 148.942 885.999 235.08800000000002 876.123 360.44399999999996 857.083 476.18899999999996 837.674 594.177 812.361 715.53 853.967 827.6320000000001 897.034 943.671 977.5609999999999 1052.997 1090.203 1104.295 1198.5529999999999 1153.638 1322.445 1113.357 1440 1094.513' fill='%2347c29f'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1001'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
    background-size: cover;
    background-repeat: no-repeat;
    padding: 2rem 1rem;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    transition: all .2s ease-in-out;
    
    @media screen and (min-height: 500px) {
        /* padding: 1rem 1rem; */
    }
`;

export const Row = styled.div<Toggle>`
    opacity: ${({ toggle }) => (!toggle ? '1' : '0')};
    height: 50%;
    overflow: hidden;
    transition: all .2s ease-in-out;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const UserPic = styled.div`
    background-color: ${({ theme }) => theme.colors.blackVar};
    width: 100px;
    height: 100px;
    border-radius: 50%;

    overflow: auto;
    position: relative;

    @media screen and (max-height: 716px){
        width: 60px;
        height: 60px;
    }

    transition: all .2 ease-in-out;
`

export const UserIcon = styled(FaUserAlt)`
    width: 90%;
    height: 90%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    color: ${({ theme }) => theme.colors.black};
    transition: all .2 ease-in-out;
`

export const UserPersonal = styled.div<Toggle>`
    color: ${({ theme }) => theme.colors.black};
    height: 100%;
    /* height: ${({ toggle }) => (!toggle ? '100%' : '0%')}; */

    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    /* height: ${({ toggle }) => (!toggle ? '100%' : '0%')}; */
`

export const Name = styled.span`
    height: 50%;
    font-weight: 900;
    font-size: 1.2rem;

    @media screen and (max-height: 640px) {
        font-size: 1rem;
    }
`

export const SmallStatictics = styled.div`
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.black};
    text-align: center;
`

export const DataField = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &:nth-child(1) {
        margin-right: 1rem;
    }
`

export const DataHihglight = styled.span`
    font-weight: 900;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.primary};

    @media screen and (max-height: 640px) {
        font-size: .8rem;
    }
`
export const DataNormal = styled.span`
    @media screen and (max-height: 640px) {
        font-size: .8rem;
    }
`

export const Header = styled.span`
    /* display: flex;
    flex-grow:0.5; */

    font-weight: 600;
    font-size: 1.4rem;
    text-align: center;

    @media screen and (min-height: 850px) {
        font-size: 1.4rem;
    }

    @media screen and (max-height: 590px) {
        font-size: 1.2rem;
    }
`

export const SubHeader = styled.span`
    font-weight: 400;
    margin-top: .5rem;
    font-style: italic;
    text-align: center;

    @media screen and (min-height: 850px) {
        font-size: 1.2rem;
    }

    @media screen and (max-height: 590px) {
        font-size: .8rem;
    }
`

export const Desc = styled.div<Toggle>`
    //opacity: ${({ toggle }) => (toggle ? '1' : '0')};
    width: 100%;
    height: ${({ toggle }) => (toggle ? '100%' : '0%')};
    /* opacity: ${({ toggle }) => (toggle ? '1' : '0')};
    z-index: ${({ toggle }) => (toggle ? '1' : '-3')};
    text-align: center;
    display: flex;
    position: absolute;
    bottom: 0;
    transform: ${({ toggle }) => (toggle ? 'translateY(0)' : 'translateY(-500px)')};
    transition: all .5 ease-in-out; */
    overflow: hidden;
    position: relative;
    transition: all .2 ease-in-out;
`

export const DescText = styled.span<Toggle>`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    max-width: 400px;
    height: 100%;
    opacity: ${({ toggle }) => (toggle ? '1' : '0')};
    padding: 1rem;
    text-align: center;
    transition: all .2 ease-in-out;

    @media screen and (max-height: 620px) {
        font-size: .8rem;
    }
`

// export const Desc = styled.span<Toggle>`
//     display: flex;
//     text-align: center;
//     font-size: 1rem;
//     max-width: 400px;

//     opacity: ${({ toggle }) => (toggle ? '1' : '0')};
//     height: ${({ toggle }) => (toggle ? '100%' : '0%')};
//     margin: ${({ toggle }) => (toggle ? '2rem 0' : '0 0')};
//     z-index: ${({ toggle }) => (toggle ? '1' : '-3')};

//     transition: all .2s ease-in-out;

//     @media screen and (max-height: 590px) {
//         font-size: .8rem;
//     }
// `

export const ButtonsField = styled.span`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    flex-grow: 1;
`

interface Type {
    ButtonType: string
}
export const Button = styled.button<Type>`
    width: 100%;
    max-width: 400px;
    margin-top: .5rem;

    border-radius: 10px;
    padding: .8rem 0;

    font-size: .8rem;

    outline: none;

    cursor: pointer;
    color: ${({ theme, ButtonType }) => (ButtonType !== 'confirm' ? theme.colors.white : theme.colors.black)};

    font-weight: ${({ ButtonType }) => (ButtonType === 'confirm' ? '900' : '400')};
    font-style: ${({ ButtonType }) => (ButtonType !== 'confirm' && 'italic')};
    background: ${({ theme, ButtonType }) => (ButtonType !== 'confirm' && 'transparent')};

    @media screen and (min-height: 812px) {
        padding: 1rem 0;
        font-size: 1rem;
    }

    @media screen and (max-height: 590px) {
        padding: .5rem 0;
    }
`

export const LocationHolder = styled.div`
     width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    flex-grow:8;
    position: relative;
    overflow: hidden;
`