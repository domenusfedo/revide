import styled, { keyframes } from "styled-components";

interface EventCreatorHolderType {
    type: string,
    bgTexture: string;
    postion: string,
}
interface Type {
    type: string,
}
interface Position {
    postion: string,
    toggle: boolean
}

export const EventCreatorHolderSize = styled.div<Position>`
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    position: relative;
    grid-area: ${({ postion }) => postion};
    //display: ${({ toggle }) => (!toggle ? 'block' : 'none')};
    opacity: ${({ toggle }) => (toggle ? 0 : 1)};
    transition: all .5s;
`;

const infinityBg = keyframes`
    0%{
        background-position: 0% 0%;
    }
    50% {
        background-position: 100% 100%;
    }
    100% {
        background-position: 0% 0%;
    }
`

export const EventCreatorHolder = styled.div<EventCreatorHolderType>`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 0;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme, type }) => (type !== 'medium' ? theme.colors.white : theme.colors.black)};
    border-radius: 25px;
    //grid-area: ${({ postion }) => postion};
    padding: 2rem 1rem;
    position: relative;

    transition: all 2s;

    //background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs'  preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1001%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(55%2c 166%2c 134%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c535.02C99.946%2c545.496%2c191.158%2c483.326%2c275.685%2c428.973C360.194%2c374.631%2c434.825%2c308.34%2c486.51%2c222.181C542.691%2c128.528%2c601.223%2c23.866%2c583.329%2c-83.87C565.516%2c-191.116%2c476.605%2c-271.031%2c393.04%2c-340.571C318.794%2c-402.356%2c227.945%2c-433.69%2c134.336%2c-457.505C43.738%2c-480.554%2c-49.154%2c-498.97%2c-139.805%2c-476.132C-232.53%2c-452.772%2c-310.936%2c-395.597%2c-378.799%2c-328.231C-450.854%2c-256.704%2c-535.746%2c-179.185%2c-541.081%2c-77.796C-546.371%2c22.723%2c-461.461%2c101.449%2c-405.825%2c185.334C-358.583%2c256.564%2c-305.636%2c319.033%2c-240.886%2c374.826C-166.325%2c439.073%2c-97.887%2c524.759%2c0%2c535.02' fill='%232c856b'%3e%3c/path%3e%3cpath d='M1440 1147.085C1547.762 1125.0929999999998 1587.589 992.116 1673.88 923.924 1748.5810000000001 864.8910000000001 1868.729 860.418 1910.821 775.017 1952.963 689.515 1890.904 591.177 1884.769 496.052 1877.953 390.368 1929.4560000000001 274.46 1872.767 185.00599999999997 1815.205 94.17500000000001 1700.867 45.04399999999998 1593.658 36.68799999999999 1493.34 28.869000000000028 1409.082 100.73700000000002 1317.177 141.704 1238.569 176.74400000000003 1156.507 201.14800000000002 1093.409 259.677 1025.122 323.019 948.065 395.55899999999997 943.226 488.575 938.423 580.894 1038.224 642.262 1068.971 729.443 1104.224 829.402 1065.115 954.554 1135.511 1033.7939999999999 1208.922 1116.4279999999999 1331.699 1169.187 1440 1147.085' fill='%2347c29f'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1001'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
    background-image: url("${({ bgTexture }) => bgTexture}");

    background-size: cover;
    background-repeat: no-repeat;

    &:hover {
        cursor: pointer;
        background-position: 100% 100%;
    }
    &.active {
        cursor: pointer;
        animation: ${infinityBg} 20s infinite linear;
    }
`;

export const Header = styled.div<Type>`
    z-index: 500;
    font-weight: 900;
    font-size: ${({ type }) => (type !== 'small' ? '1.8rem' : '1.2rem')};

    @media screen and (max-width: 390px) {
        width: 90%;
    }

    @media screen and (max-width: 350px) {
        font-size: 1.2rem;
    }
`;

export const SubHeader = styled.div<Type>`
    z-index: 500;
    font-style: italic;
    font-weight: 400;
    font-size: 1rem;
    @media screen and (max-width: 250px) {
        display: none;
    }
`;

export const Button = styled.div<Type>`
    display: ${({ type }) => (type !== 'high' ? 'none' : 'block')};
    width: ${({ type }) => (type !== 'high' ? '90%' : '60%')};
    z-index: 500;
    position: absolute;
    left: 5%;
    bottom: 10%;
    text-align: center;

    padding: 1rem 1rem;
    border-radius: 10px;

    font-weight: 600;
    font-family: inherit;

    cursor: pointer;

    color: ${({ theme }) => theme.colors.black};

    background-color: ${({ theme }) => theme.colors.white};

    @media screen and (max-width: 390px) {
        width: 90%;
        font-size: .8rem;
        text-align: center;
        padding: 1rem 0;
    }
`;