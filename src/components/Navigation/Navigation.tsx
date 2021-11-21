import React from 'react';

import {NavigationHolder,IconsHolder, ReportIcon, PostIcon, EventsIcon} from './Navigation.elements';

const Navigation = () => {
    return (
        <NavigationHolder>
            <IconsHolder>
                <PostIcon/>
                <ReportIcon/>
                <EventsIcon/>
            </IconsHolder>
        </NavigationHolder>
    );
};

export default Navigation;