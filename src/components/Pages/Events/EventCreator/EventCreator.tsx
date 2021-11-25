import React, { useRef } from 'react';

import { Event } from '../../../../features/eventsSlice';

import {
    EventCreatorHolderSize,
    EventCreatorHolder,
    Header,
    Button,
    SubHeader
} from './EventCreator.elements'

interface IProps {
    event: any,
    type: 'small' | 'medium' | 'high'
    bgImage: string,
    toggle?: boolean,
    shouldBeBlack?: boolean,
}

const EventCreator: React.FC<IProps> = ({event, type, bgImage, toggle = true, shouldBeBlack = false}) => {
    const elementRef = useRef<HTMLDivElement>(null)

    return (
        <EventCreatorHolderSize ref={elementRef} toggle={toggle}>
            <EventCreatorHolder shouldBeBlack={shouldBeBlack} bgTexture={bgImage} toggle={toggle}>
                <Header >{event.location.city}</Header>
                <SubHeader >{event.location.street.name}</SubHeader>
                <Button type={type}>More Details...</Button>
            </EventCreatorHolder>
        </EventCreatorHolderSize>
    );
};

export default EventCreator;
