import React, {useState, useEffect, useRef} from 'react';

import SearchBar from '../../SearchBar/SearchBar';

import {
    EventsHolder,
    EventsField,
    SearchField,

    HighlightField,
    HighLightMarkField,
    MarkField,
    Mark,
    MarkHeader,
    MarkOption,

    RestField,
    RowOne,
    RowThree,
    ColumnOne,
    ColumnTwo,
    RowFour,
    RowFive,
    RowSix,
    RowSeven,
    RowEight,

    Loading,
    Spinner,
    
} from './Events.elements'

import EventCreator from './EventCreator/EventCreator';

import {getEvents} from '../../../api/fetchEvents'
import {Event} from '../../../features/eventsSlice'
import { Details } from '../../Board';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';


interface IProps {
    detailToggleSet: React.Dispatch<React.SetStateAction<boolean>>
    applyClass: () => void

    detailsElement: Details,
    detailsElementSet: React.Dispatch<React.SetStateAction<Details>>,
}

const Events:React.FC<IProps> = ({detailsElementSet, applyClass}) => {
    const [toggleEvents, toggleEventsSet] = useState<boolean>(false);

    const {followed} = useSelector((state: RootState) => state.events)

    const [page, pageSet] = useState(1);
    const [events, eventsSet] = useState<Event[][]>([]);
    const [loading, loadingSet] = useState(false);

    const [scrollPos, scrollPosSet] = useState(0);

    const begRef = useRef<HTMLDivElement>(null);

    const [terms, termsSet] = useState('')

    const scrollHandler = (e: any) => {
        const {scrollTop, clientHeight, scrollHeight} = e?.currentTarget;
        scrollPosSet(scrollTop)

        if(loading) return;

        if((scrollHeight - scrollTop).toFixed() <= clientHeight) {
            pageSet(page + 1);
        }
    }

    const showDetails = (e: any, pointer: {page: number, element: number}) => {
        const element = e.target.closest('div#main')
        const {offsetLeft, offsetTop, offsetWidth, offsetHeight} = element;

        detailsElementSet({
            position: {
                top: offsetTop - scrollPos, //scrollTo variable
                left: offsetLeft,
                width: offsetWidth,
                height: offsetHeight,
                bgImage: events[pointer.page][pointer.element].background
            },
            information: {
                city: events[pointer.page][pointer.element].city,
                street: events[pointer.page][pointer.element].street,
                description: events[pointer.page][pointer.element].description,
                shouldBeBlack: events[pointer.page][pointer.element].shouldBeBlack,
                paricipantAmount: events[pointer.page][pointer.element].paricipantAmount,
                creator: events[pointer.page][pointer.element].creator,
                title: events[pointer.page][pointer.element].title,
                background: events[pointer.page][pointer.element].background,
                country: events[pointer.page][pointer.element].country,
                id: events[pointer.page][pointer.element].id,
                startAt: events[pointer.page][pointer.element].startAt
            }
        })
    }

    const hideEvents = async () => {
        begRef.current?.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        toggleEventsSet(!toggleEvents)
    }

    useEffect(() => {
        const loadEvents = async () => {
                loadingSet(true);
                const newEvents = await getEvents(page);
                eventsSet((state: Event[][]) => ([
                    ...state,
                    newEvents
                ]));
                loadingSet(false);
        }
        loadEvents();
    }, [page])

    return (
        <EventsHolder>
            <SearchField>
                <SearchBar onFocusHandler={toggleEventsSet} value={terms} changeHandler={termsSet}></SearchBar>
            </SearchField>

            <EventsField toggle={toggleEvents}>
                <HighlightField toggle={toggleEvents}>
                    <HighLightMarkField toggle={toggleEvents}>
                        <Mark>
                            <MarkHeader toggle={toggleEvents}>Upcoming Event</MarkHeader>
                        </Mark>
                    </HighLightMarkField>
                    <EventCreator pointer={{page: -1, element: 0}} applyClass={applyClass} showDetails={showDetails} event={followed[0]} type='high' bgImage="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1001%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(55%2c 166%2c 134%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c478.025C100.968%2c475.146%2c208.504%2c510.974%2c296.416%2c461.232C385.565%2c410.79%2c426.51%2c307.371%2c467.504%2c213.502C507.916%2c120.966%2c527.912%2c24.548%2c531.195%2c-76.374C535.059%2c-195.157%2c549.8%2c-321.394%2c488.21%2c-423.036C422.771%2c-531.029%2c309.916%2c-607.287%2c188.49%2c-641.937C67.509%2c-676.46%2c-60.524%2c-652.516%2c-180.221%2c-613.777C-297.474%2c-575.829%2c-426.839%2c-529.883%2c-488.119%2c-422.957C-547.72%2c-318.961%2c-491.992%2c-190.528%2c-491.485%2c-70.665C-491.065%2c28.816%2c-517.002%2c127.345%2c-485.394%2c221.672C-451.625%2c322.448%2c-401.463%2c428.816%2c-307.482%2c478.451C-214.977%2c527.306%2c-104.571%2c481.007%2c0%2c478.025' fill='%232c856b'%3e%3c/path%3e%3cpath d='M1440 1094.513C1540.421 1078.415 1633.556 1048.238 1724.4560000000001 1002.623 1825.2930000000001 952.0219999999999 1957.978 920.287 1997.656 814.673 2037.527 708.546 1918.779 604.838 1916.483 491.492 1913.676 352.9 2068.966 198.235 1982.967 89.517 1898.59-17.149 1718.9569999999999 84.57600000000002 1583.658 70.745 1479.586 60.105999999999995 1384.563 4.601999999999975 1280.776 17.732999999999947 1165.548 32.31200000000001 1044.444 63.64299999999997 965.613 148.942 885.999 235.08800000000002 876.123 360.44399999999996 857.083 476.18899999999996 837.674 594.177 812.361 715.53 853.967 827.6320000000001 897.034 943.671 977.5609999999999 1052.997 1090.203 1104.295 1198.5529999999999 1153.638 1322.445 1113.357 1440 1094.513' fill='%2347c29f'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1001'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e"/>
                </HighlightField>

                <MarkField toggle={toggleEvents}>
                    <Mark>
                        <MarkHeader toggle={false} >Explore</MarkHeader>
                        <MarkOption onClick={(e) => hideEvents()}>{toggleEvents ? 'Hide all' : 'See all'}</MarkOption>
                    </Mark>
                </MarkField>

                <RestField toggle={toggleEvents} onScroll={e => scrollHandler(e)} ref={begRef}>
                    {/* {events && events.map((e, idx: number) => {
                        let shouldToggle = toggleEvents
                        let extraElements = true
                        if(idx === 0) {
                            shouldToggle = true
                            extraElements = toggleEvents
                        }
                        
                        return (
                            <RowOne toggle={shouldToggle} key={idx}>
                                 <ColumnOne toggle={shouldToggle}>
                                    <RowThree toggle={shouldToggle}>
                                        {e[0] && <EventCreator pointer={{page: idx, element: 0}} shouldBeBlack={e[0].shouldBeBlack} applyClass={applyClass} showDetails={showDetails} toggle={shouldToggle} event={e[0]} bgImage={e[0].background}/>}
                                    </RowThree>

                                    <RowFour toggle={extraElements}>
                                    {e[1] && <EventCreator pointer={{page: idx, element: 1}} shouldBeBlack={e[1].shouldBeBlack} applyClass={applyClass} showDetails={showDetails} toggle={shouldToggle} event={e[1]} bgImage={e[1].background}/>}
                                    </RowFour>

                                    <RowFive toggle={extraElements}>
                                        {e[4] && <EventCreator pointer={{page: idx, element: 4}} shouldBeBlack={e[4].shouldBeBlack} applyClass={applyClass} showDetails={showDetails} toggle={shouldToggle} event={e[4]}  bgImage={e[4].background}/>}
                                    </RowFive>
                                 </ColumnOne>
   
                                 <ColumnTwo toggle={shouldToggle}>
                                    <RowSix toggle={extraElements}>
                                    {e[3] && <EventCreator pointer={{page: idx, element: 3}} shouldBeBlack={e[3].shouldBeBlack} applyClass={applyClass} showDetails={showDetails} toggle={shouldToggle} event={e[3]} bgImage={e[3].background}/>}
                                    </RowSix>
                                    <RowSeven toggle={extraElements}>
                                        {e[2] && <EventCreator pointer={{page: idx, element: 2}} shouldBeBlack={e[2].shouldBeBlack} applyClass={applyClass} showDetails={showDetails} toggle={shouldToggle} event={e[2]}  bgImage={e[2].background}/>}
                                    </RowSeven>
                                    <RowEight toggle={extraElements}>
                                        {e[5] && <EventCreator pointer={{page: idx, element: 5}} shouldBeBlack={e[5].shouldBeBlack} applyClass={applyClass} showDetails={showDetails} toggle={shouldToggle} event={e[5]} bgImage={e[5].background}/>}
                                    </RowEight>
                                 </ColumnTwo>
                             </RowOne>
                       )
                    })} */}
                </RestField>
                <Loading>
                    <Spinner loading={loading}/>
                </Loading>
            </EventsField>
        </EventsHolder>
    );
};

export default Events;