import React, { useRef, useState } from 'react';

import {
    EventCreatorHolderSize,
    EventCreatorHolder,
    Header,
    SubStatus,
    StatusText,
    Time,
} from './EventCreator.elements';

import {Event} from '../../../../features/eventsSlice'

interface IProps {
    event: Event,
    type?: 'high'
    bgImage: string,
    toggle?: boolean,
    shouldBeBlack?: boolean,
    showDetails: any
    applyClass: () => void,
    pointer: {
        page: number,
        element: number
    }
}


const EventCreator: React.FC<IProps> = ({showDetails, event, type = 'another', bgImage, toggle = true, shouldBeBlack = false, applyClass, pointer}) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const [status, statusSet] = useState<boolean>(false);

    const detailRevealHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, pointer: {page: number, element: number}) => {
        showDetails(e, pointer);
    }

    const handleOn = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, pointer: {page: number, element: number}) => {
        if(status) {
            applyClass();
        }
        detailRevealHandler(e, pointer)
        statusSet(true)
    }

    const handleOff = () => {
        statusSet(false)
    }

    const element = type === 'another' ? (
            <EventCreatorHolder shouldBeBlack={shouldBeBlack} bgTexture={bgImage} toggle={toggle} type={type} onClick={(e) => handleOn(e, pointer)} onMouseLeave={() => handleOff()}>
                <Header type={type}>{event.title}</Header>
                <SubStatus status={status}>
                    <StatusText>Details</StatusText>
                </SubStatus>
            </EventCreatorHolder>
    ) : (
            <EventCreatorHolder shouldBeBlack={shouldBeBlack} bgTexture={bgImage} toggle={toggle} type={type}>
                <Header type={type}>{event ? event.title : "You don't any upcoming events!"}</Header>
                <Time>{event ? 'Time left: 00:00:00:00' : ''}</Time>
            </EventCreatorHolder>
    )

    return (
        <EventCreatorHolderSize id='main' ref={elementRef} toggle={toggle}>
            {element}
        </EventCreatorHolderSize>
    );
};

export default EventCreator;
