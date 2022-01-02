import React from 'react';

import {Event} from '../../../../features/eventsSlice'

import {
    Holder,
    ColumnOne,
    ColumnTwo,
    EventField,
    EventCreatorHolder,
    EventCreatorHolderSize,
    LoadingBar,
    LoadingBarSmall 
} from './Dashboard.elements'

import EventCreator from '../EventCreator/EventCreator' 
import {infoPattern} from '../../../../api/fetchEvents'

interface IProps {
    toggle: boolean,
    page: number,
    chunk: Event[] | null,
    main: boolean,
    showDetails: any,
    applyClass: () => void,
}

const Dashboard: React.FC<IProps> = ({toggle, page, chunk, main, showDetails, applyClass}) => {
    const toggleMode = main ? main : true;
    
    return (
        <Holder toggle={toggleMode}>
            {chunk ? (
                <>
                    <ColumnOne toggle={toggleMode}>
                    <EventField toggle={toggleMode}>
                    {chunk[0] && <EventCreator pointer={{page: page, element: 0}} shouldBeBlack={chunk[0].shouldBeBlack} applyClass={applyClass} showDetails={showDetails} toggle={main} event={chunk[0]}  bgImage={chunk[0].background}/>}
                    </EventField>

                    <EventField toggle={toggle}>
                        {chunk[1] && <EventCreator pointer={{page: page, element: 1}} shouldBeBlack={chunk[1].shouldBeBlack} applyClass={applyClass} showDetails={showDetails} toggle={main} event={chunk[1]}  bgImage={chunk[1].background}/>}
                    </EventField>

                    <EventField toggle={toggle}>
                        {chunk[4] && <EventCreator pointer={{page: page, element: 4}} shouldBeBlack={chunk[4].shouldBeBlack} applyClass={applyClass} showDetails={showDetails} toggle={main} event={chunk[4]}  bgImage={chunk[4].background}/>}
                    </EventField>
                </ColumnOne>
                <ColumnTwo toggle={toggleMode}>
                    <EventField toggle={toggleMode}>
                        {chunk[3] && <EventCreator pointer={{page: page, element: 3}} shouldBeBlack={chunk[3].shouldBeBlack} applyClass={applyClass} showDetails={showDetails} toggle={main} event={chunk[3]}  bgImage={chunk[3].background}/>}
                    </EventField>
                    <EventField toggle={toggleMode}>
                        {chunk[2] && <EventCreator pointer={{page: page, element: 2}} shouldBeBlack={chunk[2].shouldBeBlack} applyClass={applyClass} showDetails={showDetails} toggle={main} event={chunk[2]}  bgImage={chunk[2].background}/>}
                    </EventField>
                    <EventField toggle={toggle}>
                        {chunk[5] && <EventCreator pointer={{page: page, element: 5}} shouldBeBlack={chunk[5].shouldBeBlack} applyClass={applyClass} showDetails={showDetails} toggle={main} event={chunk[5]}  bgImage={chunk[5].background}/>}
                    </EventField>
                </ColumnTwo>
            </>
            ) : (
                <>
                <ColumnOne toggle={toggleMode}>
                    <EventField toggle={toggleMode}>
                        <EventCreatorHolderSize id='main' toggle={toggle} type={'another'}>
                            <EventCreatorHolder shouldBeBlack={infoPattern[0].shouldBeBlack} bgTexture={infoPattern[0].bg} toggle={toggle}>
                                <LoadingBar shouldBeBlack={infoPattern[0].shouldBeBlack}>loading</LoadingBar>
                                {/* <LoadingBarSmall shouldBeBlack={infoPattern[0].shouldBeBlack}>loading</LoadingBarSmall> */}
                            </EventCreatorHolder>
                        </EventCreatorHolderSize>
                    </EventField>
                    <EventField toggle={toggle}>
                        <EventCreatorHolderSize id='main' toggle={toggle} type={'another'}>
                            <EventCreatorHolder shouldBeBlack={infoPattern[1].shouldBeBlack} bgTexture={infoPattern[1].bg} toggle={toggle}>
                                <LoadingBar shouldBeBlack={infoPattern[1].shouldBeBlack}>loading</LoadingBar>
                                {/* <LoadingBarSmall shouldBeBlack={infoPattern[1].shouldBeBlack}>loading</LoadingBarSmall> */}
                            </EventCreatorHolder>
                        </EventCreatorHolderSize>
                    </EventField>
                    <EventField toggle={toggle}>
                        <EventCreatorHolderSize id='main' toggle={toggle} type={'another'}>
                            <EventCreatorHolder shouldBeBlack={infoPattern[4].shouldBeBlack} bgTexture={infoPattern[4].bg} toggle={toggle}>
                                <LoadingBar shouldBeBlack={infoPattern[4].shouldBeBlack}>loading</LoadingBar>
                                {/* <LoadingBarSmall shouldBeBlack={infoPattern[4].shouldBeBlack}>loading</LoadingBarSmall> */}
                            </EventCreatorHolder>
                        </EventCreatorHolderSize>    
                    </EventField>
                </ColumnOne>
                <ColumnTwo toggle={toggleMode}>
                    <EventField toggle={toggleMode}>
                        <EventCreatorHolderSize id='main' toggle={toggle} type={'another'}>
                            <EventCreatorHolder shouldBeBlack={infoPattern[3].shouldBeBlack} bgTexture={infoPattern[3].bg} toggle={toggle}>
                                <LoadingBar shouldBeBlack={infoPattern[3].shouldBeBlack}>loading</LoadingBar>
                                {/* <LoadingBarSmall shouldBeBlack={infoPattern[3].shouldBeBlack}>loading</LoadingBarSmall> */}
                            </EventCreatorHolder>
                        </EventCreatorHolderSize>
                    </EventField>
                    <EventField toggle={toggleMode}>
                        <EventCreatorHolderSize id='main' toggle={toggle} type={'another'}>
                            <EventCreatorHolder shouldBeBlack={infoPattern[2].shouldBeBlack} bgTexture={infoPattern[2].bg} toggle={toggle}>
                                <LoadingBar shouldBeBlack={infoPattern[2].shouldBeBlack}>loading</LoadingBar>
                                {/* <LoadingBarSmall shouldBeBlack={infoPattern[2].shouldBeBlack}>loading</LoadingBarSmall> */}
                            </EventCreatorHolder>
                        </EventCreatorHolderSize>
                    </EventField>
                    <EventField toggle={toggle}>
                        <EventCreatorHolderSize id='main' toggle={toggle} type={'another'}>
                            <EventCreatorHolder shouldBeBlack={infoPattern[5].shouldBeBlack} bgTexture={infoPattern[5].bg} toggle={toggle}>
                                <LoadingBar shouldBeBlack={infoPattern[5].shouldBeBlack}>loading</LoadingBar>
                                {/* <LoadingBarSmall shouldBeBlack={infoPattern[5].shouldBeBlack}>loading</LoadingBarSmall> */}
                            </EventCreatorHolder>
                        </EventCreatorHolderSize>
                    </EventField>
                </ColumnTwo>
                </>
            )}
        </Holder>
    );
};

export default Dashboard;