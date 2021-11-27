import React, { useEffect, useRef, useState } from 'react';

import {
    EventCreatorHolderSize,
    EventCreatorHolder,
    Header,
    SubHeader,
    SubStatus,
    StatusText
} from './EventCreator.elements'

interface IProps {
    event: any,
    type?: 'high'
    bgImage: string,
    toggle?: boolean,
    shouldBeBlack?: boolean,
    showDetails: any
    applyClass: () => void
}


const EventCreator: React.FC<IProps> = ({showDetails, event, type = 'another', bgImage, toggle = true, shouldBeBlack = false, applyClass}) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const [status, statusSet] = useState<boolean>(false)

    const detailRevealHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        showDetails(e, bgImage, shouldBeBlack);
    }

    const handleOn = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if(status) {
            applyClass();
        }
        detailRevealHandler(e)
        statusSet(true)
    }

    const handleOff = () => {
        statusSet(false)
    }

    return (
        <EventCreatorHolderSize id='main' ref={elementRef} toggle={toggle} onClick={(e) => handleOn(e)} onMouseLeave={() => handleOff()}>

            <EventCreatorHolder shouldBeBlack={shouldBeBlack} bgTexture={bgImage} toggle={toggle}>
                <Header type={type}>{event.location.city}</Header>
                <SubHeader type={type}>{event.location.street.name}</SubHeader>
                <SubStatus status={status}>
                    <StatusText>View</StatusText>
                </SubStatus>
            </EventCreatorHolder>

        </EventCreatorHolderSize>
    );
};

export default EventCreator;
