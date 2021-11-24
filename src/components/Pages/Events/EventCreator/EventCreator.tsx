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
    event: Event,
    type: 'small' | 'medium' | 'high',
    position: 'high' | 'medium' | 'small1' | 'small2' | 'another1' | 'another2', 
    bgImage: string,
    toggle?: boolean
}

const EventCreator: React.FC<IProps> = ({event, type, bgImage, position, toggle= false}) => {
    const elementRef = useRef<HTMLDivElement>(null)

    const clickAnimation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        elementRef.current?.classList.toggle('active');
    }

    return (
        <EventCreatorHolderSize ref={elementRef} toggle={toggle} postion={position} onClick={e => clickAnimation(e)}>
            <EventCreatorHolder bgTexture={bgImage} type={type} postion={position} toggle={toggle}>
                <Header type={type}>{event.title}</Header>
                <SubHeader type={type}>{event.location}</SubHeader>
                <Button type={type}>More Details...</Button>
            </EventCreatorHolder>
        </EventCreatorHolderSize>
    );
};

export default EventCreator;
