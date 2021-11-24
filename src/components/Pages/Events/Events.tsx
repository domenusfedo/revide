import React, {useState} from 'react';

import SearchBar from '../SearchBar/SearchBar';

import {
    EventsHolder,
    EventsField,
    SearchField,

    HighlightField,
    MarkField,
    Mark,
    MarkHeader,
    MarkOption,

    RestField,

    RowOne,
    RowTwo,
    RowThree,
    ColumnOne,
    ColumnTwo,
    RowFour,

    Pagination,
    PaginationItem,
    PaginationJump,
    RowFive,
    RowSix,
    RowSeven
    
} from './Events.elements'

import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';

import EventCreator from './EventCreator/EventCreator';

interface IProps {

}

const Events = () => {
    const {dashboard} = useSelector((state: RootState ) => state.events);

    const [toggleEvents, toggleEventsSet] = useState<boolean>(false);
    const [actualPage, actualPageSet] = useState<number>(1);

    const detailsHanlder = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, idx: number) => {
        e.currentTarget?.classList.toggle('active');
    }

    return (
        <EventsHolder>
            <SearchField>
                <SearchBar></SearchBar>
            </SearchField>

            <EventsField toggle={toggleEvents}>
                <HighlightField toggle={toggleEvents}>
                    <EventCreator toggle={toggleEvents} event={dashboard.highlightedEvent} type='high' bgImage="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1001%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(55%2c 166%2c 134%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c478.025C100.968%2c475.146%2c208.504%2c510.974%2c296.416%2c461.232C385.565%2c410.79%2c426.51%2c307.371%2c467.504%2c213.502C507.916%2c120.966%2c527.912%2c24.548%2c531.195%2c-76.374C535.059%2c-195.157%2c549.8%2c-321.394%2c488.21%2c-423.036C422.771%2c-531.029%2c309.916%2c-607.287%2c188.49%2c-641.937C67.509%2c-676.46%2c-60.524%2c-652.516%2c-180.221%2c-613.777C-297.474%2c-575.829%2c-426.839%2c-529.883%2c-488.119%2c-422.957C-547.72%2c-318.961%2c-491.992%2c-190.528%2c-491.485%2c-70.665C-491.065%2c28.816%2c-517.002%2c127.345%2c-485.394%2c221.672C-451.625%2c322.448%2c-401.463%2c428.816%2c-307.482%2c478.451C-214.977%2c527.306%2c-104.571%2c481.007%2c0%2c478.025' fill='%232c856b'%3e%3c/path%3e%3cpath d='M1440 1094.513C1540.421 1078.415 1633.556 1048.238 1724.4560000000001 1002.623 1825.2930000000001 952.0219999999999 1957.978 920.287 1997.656 814.673 2037.527 708.546 1918.779 604.838 1916.483 491.492 1913.676 352.9 2068.966 198.235 1982.967 89.517 1898.59-17.149 1718.9569999999999 84.57600000000002 1583.658 70.745 1479.586 60.105999999999995 1384.563 4.601999999999975 1280.776 17.732999999999947 1165.548 32.31200000000001 1044.444 63.64299999999997 965.613 148.942 885.999 235.08800000000002 876.123 360.44399999999996 857.083 476.18899999999996 837.674 594.177 812.361 715.53 853.967 827.6320000000001 897.034 943.671 977.5609999999999 1052.997 1090.203 1104.295 1198.5529999999999 1153.638 1322.445 1113.357 1440 1094.513' fill='%2347c29f'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1001'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e"/>
                </HighlightField>

                <MarkField toggle={toggleEvents}>
                    <Mark>
                        <MarkHeader>Explore</MarkHeader>
                        <MarkOption onClick={() => toggleEventsSet(!toggleEvents)}>{toggleEvents ? 'Hide all' : 'See all'}</MarkOption>
                    </Mark>
                </MarkField>

                <RestField toggle={toggleEvents}>
                     <RowOne toggle={toggleEvents}>
                         <ColumnOne toggle={toggleEvents}>
                            <RowThree toggle={toggleEvents} onClick={e => detailsHanlder(e, 0)}>
                                <EventCreator event={dashboard.dashboardEvents[0]} type='medium' shouldBeBlack={true} bgImage="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1007%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(242%2c 200%2c 73%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c451.159C83.214%2c454.444%2c122.656%2c344.818%2c194.096%2c302.02C268.972%2c257.163%2c373.149%2c263.587%2c427.33%2c195.155C484.877%2c122.472%2c515.272%2c18.579%2c488.875%2c-70.29C462.878%2c-157.815%2c355.601%2c-187.373%2c293.756%2c-254.541C234.506%2c-318.89%2c212.537%2c-417.652%2c133.854%2c-455.866C51.227%2c-495.995%2c-54.383%2c-505.364%2c-136.03%2c-463.277C-215.709%2c-422.204%2c-234.423%2c-319.795%2c-279.937%2c-242.567C-316.547%2c-180.447%2c-365.57%2c-125.395%2c-377.104%2c-54.219C-388.757%2c17.693%2c-380.564%2c94.002%2c-344.759%2c157.446C-310.291%2c218.521%2c-237.876%2c241.596%2c-184.492%2c287.076C-120.549%2c341.552%2c-83.937%2c447.846%2c0%2c451.159' fill='%23ebb511'%3e%3c/path%3e%3cpath d='M1440 962.899C1516.901 956.54 1598.571 948.2139999999999 1657.402 898.284 1713.796 850.423 1712.509 765.492 1748.646 700.954 1789.276 628.393 1879.226 579.487 1882.438 496.387 1885.692 412.20500000000004 1824.7640000000001 337.75800000000004 1764.978 278.405 1707.848 221.68900000000002 1633.118 187.144 1554.324 170.64999999999998 1479.618 155.012 1404.373 167.839 1330.618 187.48000000000002 1255.191 207.56599999999997 1171.031 223.80399999999997 1123.171 285.466 1075.848 346.43600000000004 1081.78 431.275 1081.489 508.454 1081.231 576.8389999999999 1103.591 639.439 1121.589 705.413 1143.368 785.246 1133.8519999999999 884.222 1198.196 936.255 1262.5529999999999 988.298 1357.516 969.719 1440 962.899' fill='%23f6da84'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1007'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e"/>
                            </RowThree>
                            <RowFour toggle={toggleEvents} onClick={e => detailsHanlder(e, 1)}>
                                <EventCreator event={dashboard.dashboardEvents[1]} type='small' bgImage="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1017%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(166%2c 56%2c 76%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c571.344C104.813%2c563.632%2c167.009%2c453.956%2c258.47%2c402.187C357.442%2c346.166%2c503.648%2c354.668%2c558.655%2c255.129C613.324%2c156.202%2c563.719%2c30.05%2c522.217%2c-75.083C486.572%2c-165.381%2c412.306%2c-229.553%2c341.224%2c-295.672C277.287%2c-355.145%2c205.91%2c-398.528%2c129.349%2c-440.521C31.668%2c-494.098%2c-57.725%2c-581.222%2c-168.988%2c-575.519C-286.59%2c-569.491%2c-394.492%2c-497.629%2c-472.772%2c-409.659C-551.577%2c-321.099%2c-595.913%2c-205.101%2c-603.856%2c-86.821C-611.476%2c26.641%2c-574.941%2c138.382%2c-516.113%2c235.701C-461.461%2c326.112%2c-372.692%2c384.514%2c-284.127%2c442.11C-195.101%2c500.006%2c-105.91%2c579.137%2c0%2c571.344' fill='%23852d3d'%3e%3c/path%3e%3cpath d='M1440 1008.712C1528.392 1017.957 1621.1390000000001 1006.233 1696.46 959.06 1772.1779999999999 911.639 1816.7649999999999 830.279 1854.334 749.22 1892.076 667.788 1923.808 581.094 1912.93 492.003 1901.934 401.947 1847.603 326.48 1793.798 253.43200000000002 1735.892 174.81599999999997 1678.316 91.92200000000003 1589.069 52.315999999999974 1493.714 9.999000000000024 1386.33 9.455000000000041 1283.487 26.966999999999985 1171.159 46.09400000000005 1046.83 68.61200000000002 974.8109999999999 156.911 903.159 244.76100000000002 905.517 370.66999999999996 910.796 483.91200000000003 915.401 582.702 945.2280000000001 679.278 1002.906 759.614 1054.495 831.469 1138.992 864.996 1215.844 908.794 1288.388 950.136 1356.956 1000.027 1440 1008.712' fill='%23c2495f'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1017'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e"/>
                            </RowFour>
                            <RowFour toggle={toggleEvents} onClick={e => detailsHanlder(e, 4)}>
                                <EventCreator event={dashboard.dashboardEvents[4]} type='small' bgImage="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1006%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(51%2c 74%2c 82%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c305.282C65.524%2c316.405%2c137.581%2c336.833%2c195.339%2c303.953C253.5%2c270.844%2c273.553%2c198.362%2c297.56%2c135.891C320.298%2c76.722%2c334.181%2c15.77%2c330.401%2c-47.505C326.368%2c-115.013%2c317.836%2c-185.967%2c275.197%2c-238.46C232.043%2c-291.587%2c163.812%2c-314.962%2c97.969%2c-333.653C32.601%2c-352.209%2c-35.041%2c-359.947%2c-101.41%2c-345.369C-171.01%2c-330.081%2c-247.499%2c-308.068%2c-287.375%2c-249.011C-326.578%2c-190.95%2c-303.767%2c-113.898%2c-304.995%2c-43.852C-306.059%2c16.866%2c-321.861%2c80.301%2c-294.093%2c134.308C-266.753%2c187.483%2c-208.602%2c214.108%2c-156.911%2c244.159C-107.381%2c272.954%2c-56.484%2c295.694%2c0%2c305.282' fill='%23293b42'%3e%3c/path%3e%3cpath d='M1440 864.441C1501.881 858.581 1563.419 864.731 1621.335 842.163 1689.115 815.751 1776.627 793.259 1799.709 724.274 1823.189 654.098 1740.531 591.55 1729.681 518.35 1718.906 445.656 1782.238 360.544 1737.19 302.483 1692.708 245.152 1600.357 268.311 1528.402 258.929 1468.015 251.05599999999998 1409.973 244.37900000000002 1349.546 251.94 1278.9 260.779 1197.577 255.933 1147.541 306.58299999999997 1097.1979999999999 357.54499999999996 1099.991 438.889 1094.3220000000001 510.299 1088.965 577.781 1091.493 644.888 1115.665 708.119 1140.97 774.315 1171.325 847.96 1235.165 878.729 1298.096 909.06 1370.452 871.0260000000001 1440 864.441' fill='%233d5962'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1006'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e"/>
                            </RowFour>
                         </ColumnOne>

                         <ColumnTwo toggle={toggleEvents}>
                            <RowFive toggle={toggleEvents} onClick={e => detailsHanlder(e, 3)}>
                                <EventCreator event={dashboard.dashboardEvents[3]} type='small' bgImage="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1002%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(170%2c 42%2c 106%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c699.945C129.191%2c701.191%2c193.017%2c539.305%2c301.235%2c468.731C408.423%2c398.829%2c575.562%2c403.497%2c631.247%2c288.281C686.815%2c173.306%2c583.534%2c45.099%2c567.19%2c-81.55C550.519%2c-210.729%2c602.2%2c-351.821%2c534.296%2c-462.97C463.439%2c-578.951%2c331.742%2c-647.592%2c200.286%2c-682.113C70.879%2c-716.096%2c-69.341%2c-707.266%2c-191.939%2c-653.686C-307.157%2c-603.331%2c-371.679%2c-488.4%2c-456.125%2c-395.235C-542.795%2c-299.617%2c-678.004%2c-227.839%2c-694.005%2c-99.783C-709.995%2c28.189%2c-610.382%2c139.402%2c-536.103%2c244.83C-472.758%2c334.738%2c-381.37%2c391.781%2c-297.526%2c462.959C-198.87%2c546.711%2c-129.406%2c698.697%2c0%2c699.945' fill='%23882255'%3e%3c/path%3e%3cpath d='M1440 956.8399999999999C1522.492 959.652 1616.143 986.248 1681.718 936.12 1747.251 886.024 1737.076 786.038 1764.98 708.413 1790.066 638.628 1851.719 575.627 1837.464 502.853 1823.2640000000001 430.363 1750.161 387.551 1692.969 340.801 1644.176 300.916 1591.505 267.578 1530.466 251.902 1470.916 236.608 1409.957 240.173 1349.756 252.65699999999998 1285.188 266.047 1217.037 279.749 1170.568 326.536 1122.844 374.586 1108.165 444.033 1093.922 510.241 1078.766 580.693 1066.087 652.492 1085.516 721.887 1106.912 798.307 1142.497 876.152 1208.645 919.995 1275.081 964.029 1360.342 954.125 1440 956.8399999999999' fill='%23cc327f'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1002'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e"/>
                            </RowFive>
                            <RowSix toggle={toggleEvents} onClick={e => detailsHanlder(e, 2)}>
                                <EventCreator event={dashboard.dashboardEvents[2]} type='small' shouldBeBlack={true} bgImage="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1114%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(0%2c 200%2c 238%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c309.487C64.692%2c304.496%2c136.017%2c331.652%2c190.232%2c296.006C244.377%2c260.406%2c258.685%2c188.779%2c277.773%2c126.854C294.813%2c71.573%2c292.832%2c15.477%2c294.526%2c-42.346C296.598%2c-113.081%2c337.316%2c-198.729%2c288.819%2c-250.263C239.783%2c-302.369%2c150.473%2c-261.591%2c79.519%2c-270.817C22.237%2c-278.265%2c-30.37%2c-304.802%2c-87.866%2c-299.244C-154.1%2c-292.841%2c-221.288%2c-278.365%2c-273.189%2c-236.72C-330.362%2c-190.845%2c-381.969%2c-128.957%2c-390.784%2c-56.186C-399.552%2c16.196%2c-350.647%2c79.987%2c-319.54%2c145.929C-288.842%2c211.006%2c-274.129%2c294.103%2c-210.078%2c326.888C-146.237%2c359.565%2c-71.506%2c315.003%2c0%2c309.487' fill='%2300a0be'%3e%3c/path%3e%3cpath d='M1440 1181.042C1552.7069999999999 1162.0520000000001 1618.436 1048.959 1716.454 990.171 1818.8310000000001 928.768 1963.5549999999998 929.047 2027.856 828.4649999999999 2093.152 726.328 2065.538 592.528 2047.279 472.68600000000004 2029.147 353.676 2000.109 233.918 1923.167 141.33300000000003 1845.38 47.73000000000002 1732.7559999999999-5.412000000000035 1617.492-44.48299999999995 1498.32-84.87900000000002 1367.399-132.30899999999997 1250.075-86.82600000000002 1134.458-42.004999999999995 1071.507 80.63400000000001 1012.885 189.90300000000002 963.5319999999999 281.895 946.466 384.051 941.511 488.328 936.9449999999999 584.401 961.625 674.406 985.432 767.594 1014.5160000000001 881.4390000000001 1009.483 1015.581 1096.407 1094.642 1185.578 1175.7469999999998 1321.137 1201.069 1440 1181.042' fill='%231fdbff'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1114'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e"/>
                            </RowSix>
                            <RowSeven toggle={toggleEvents} onClick={e => detailsHanlder(e, 5)}>
                                <EventCreator event={dashboard.dashboardEvents[5]} type='small' shouldBeBlack={true} bgImage="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1034%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(255%2c 178%2c 234%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c324.322C69.163%2c316.896%2c141.953%2c348.717%2c204.359%2c317.989C269.172%2c286.075%2c319.55%2c224.817%2c341.723%2c156.06C362.952%2c90.228%2c328.68%2c22.558%2c321.826%2c-46.272C314.578%2c-119.06%2c341.503%2c-199.767%2c300.274%2c-260.189C258.26%2c-321.762%2c175.083%2c-333.318%2c106.322%2c-362.099C28.479%2c-394.682%2c-46.436%2c-456.515%2c-129.18%2c-439.945C-212.794%2c-423.2%2c-277.077%2c-350.814%2c-319.477%2c-276.828C-358.139%2c-209.365%2c-356.666%2c-128.282%2c-352.281%2c-50.65C-348.555%2c15.315%2c-314.185%2c71.695%2c-296.199%2c135.27C-274.16%2c213.169%2c-302.893%2c321.568%2c-234.651%2c365.124C-166.346%2c408.72%2c-80.569%2c332.972%2c0%2c324.322' fill='%23ff7edc'%3e%3c/path%3e%3cpath d='M1440 987.3199999999999C1538.406 993.87 1636.693 1044.408 1729.013 1009.713 1828.027 972.5029999999999 1907.174 889.604 1953.301 794.417 1999.941 698.171 2007.859 586.113 1984.904 481.655 1962.864 381.35900000000004 1887.063 307.813 1827.92 223.865 1761.484 129.56599999999997 1729.412-17.460000000000036 1616.533-41.21600000000001 1501.812-65.36000000000001 1420.024 76.32799999999997 1309.25 114.707 1206.358 150.35500000000002 1067.5149999999999 93.17700000000002 994.768 174.204 922.219 255.01100000000002 966.837 383.895 970.1179999999999 492.44100000000003 972.855 582.98 976.841 671.973 1012.332 755.31 1048.5149999999999 840.2719999999999 1093.528 928.7819999999999 1174.699 972.817 1254.157 1015.923 1349.8029999999999 981.316 1440 987.3199999999999' fill='%23ffe6f8'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1034'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e"/>
                            </RowSeven>
                         </ColumnTwo>
                     </RowOne>
                </RestField>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>more...</div>
            </EventsField>
        </EventsHolder>
    );
};

export default Events;