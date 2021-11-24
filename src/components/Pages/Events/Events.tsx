import React from 'react';

import SearchBar from '../SearchBar/SearchBar';
import HighlightedEvent from './HighlightedEvent/HighlightedEvent';
import MediumEvent from './MediumEvent/MediumEvent';

import {
    EventsHolder,
    EventsField,
    SearchField,
    Mark,
    MarkHeader,
    MarkOption,
    SmallOne,
    SmallTwo,
    Pagiantion
} from './Events.elements'

interface IProps {

}

const elements = [
    {
        title: 'First Event',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget nibh quis ligula luctus commodo sit amet eu nibh. Proin non dolor congue nisi pharetra condimentum. Nulla orci elit, interdum ac suscipit in, convallis nec ex.',
        price: '$10',
        subTitle: 'Warsaw, Krakowskie Przedmiescie',
        id: 1,
    },{
        title: 'Second Event',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget nibh quis ligula luctus commodo sit amet eu nibh. Proin non dolor congue nisi pharetra condimentum. Nulla orci elit, interdum ac suscipit in, convallis nec ex.',
        price: 'FREE',
        subTitle: 'Warsaw, Krakowskie Przedmiescie',
        id: 2,
    },{
        title: 'Third Event',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget nibh quis ligula luctus commodo sit amet eu nibh. Proin non dolor congue nisi pharetra condimentum. Nulla orci elit, interdum ac suscipit in, convallis nec ex.',
        price: 'FREE',
        subTitle: 'Warsaw, Krakowskie Przedmiescie',
        id: 3,
    },{
        title: 'Fourth Event',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget nibh quis ligula luctus commodo sit amet eu nibh. Proin non dolor congue nisi pharetra condimentum. Nulla orci elit, interdum ac suscipit in, convallis nec ex.',
        price: '$10',
        subTitle: 'Warsaw, Krakowskie Przedmiescie',
        id: 4,
    }
]

const dummyEventData = {
    name: 'Fruit Party',
    graphic: 'dummyGraphic 4 possibility',
    place: 'Warsaw, Krakowskie Przedmiescie',

}

const Events = () => {
    return (
        <EventsHolder>
            <SearchField>
                <SearchBar></SearchBar>
            </SearchField>

            <EventsField>
                <HighlightedEvent/>
                <MediumEvent/>
                <SmallOne>
                    {/* <SmallEvent/> */}
                </SmallOne>
                <SmallTwo>
                    {/* <SmallEvent/> */}
                </SmallTwo>
                <Mark>
                    <MarkHeader>Your Events</MarkHeader>
                    <MarkOption>See all</MarkOption>
                </Mark>
                <Pagiantion>o o o</Pagiantion>
            </EventsField>
        </EventsHolder>
    );
};

export default Events;