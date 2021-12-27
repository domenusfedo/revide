import React, { useRef, useState } from 'react';

import {
    EventCreatorHolderSize,
    EventCreatorHolder,
    Header,
    SubStatus,
    StatusText
} from './EventCreator.elements';

import {Event} from '../../../../api/fetchEvents'

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

    let element = type === 'another' ? (
        <EventCreatorHolderSize id='main' ref={elementRef} toggle={toggle} onClick={(e) => handleOn(e, pointer)} onMouseLeave={() => handleOff()}>
            <EventCreatorHolder shouldBeBlack={shouldBeBlack} bgTexture={bgImage} toggle={toggle} type={type}>
                <Header type={type}>{event.city}, {event.street}</Header>
                <SubStatus status={status}>
                    <StatusText>Details</StatusText>
                </SubStatus>
            </EventCreatorHolder>
        </EventCreatorHolderSize>
    ) : (
        <EventCreatorHolderSize id='main' ref={elementRef} toggle={toggle}>
            <EventCreatorHolder shouldBeBlack={shouldBeBlack} bgTexture={bgImage} toggle={toggle} type={type}>
                <Header type={type}>{event.city}, {event.street}</Header>
                <SubStatus status={status}>
                    <StatusText>Details</StatusText>
                </SubStatus>
            </EventCreatorHolder>
        </EventCreatorHolderSize>
    )


    return (
        <>
            {element}
        </>
    );
};

export default EventCreator;
