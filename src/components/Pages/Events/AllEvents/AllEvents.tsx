import React from 'react';

import {
    AllEventsHolder,
    HeaderName,
    CloseIcon,
    Header
} from './AllEvents.elements';

interface IProps {
    visible: boolean,
    visibleSet: React.Dispatch<React.SetStateAction<boolean>>
}

const AllEvents:React.FC<IProps> = ({visible, visibleSet}) => {
    return (
        <AllEventsHolder visible={visible}>
            <Header>
                <HeaderName>All events</HeaderName>
                <CloseIcon onClick={() => visibleSet(!visible)}/>
            </Header>
            ...Events Data
        </AllEventsHolder>
    );
};

export default AllEvents;