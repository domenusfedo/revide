import React from 'react';

import outdoor from '../../../../assets/svg/outdoor';


import {
    EventHolder,
    Header,
    Button,
    SubHeader,
    OutdoorImage 
} from './MediumEvent.element'

const dummyEventData = {
    name: 'Walk away boy',
    graphic: 'outdoor',
    place: 'Warsaw, Krakowskie Przedmiescie',
}

const MediumEvent = () => {
    return (
        <EventHolder>
            <OutdoorImage />
            <Header>{dummyEventData.name}</Header>
            <SubHeader>{dummyEventData.place}</SubHeader>
            <Button>More Details...</Button>
        </EventHolder>
    );
};

export default MediumEvent;
