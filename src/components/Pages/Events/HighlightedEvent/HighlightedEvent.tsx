import React from 'react';

import outdoor from '../../../../assets/svg/outdoor';


import {
    HighlightedEventHolder,
    Header,
    Button,
    SubHeader,
    OutdoorImage 
} from './HighlightedEvent.elements'

const dummyEventData = {
    name: 'Fruit Party',
    graphic: 'outdoor',
    place: 'Warsaw, Krakowskie Przedmiescie',
}

const HighlightedEvent = () => {
    return (
        <HighlightedEventHolder>
            <OutdoorImage />
            <Header>{dummyEventData.name}</Header>
            <SubHeader>{dummyEventData.place}</SubHeader>
            <Button>More Details...</Button>
        </HighlightedEventHolder>
    );
};

export default HighlightedEvent;
