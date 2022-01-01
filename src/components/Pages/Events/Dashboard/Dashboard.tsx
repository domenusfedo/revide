import React from 'react';

import {Event} from '../../../../features/eventsSlice'

import {
    Holder,
    ColumnOne,
    ColumnTwo,
    EventField
} from './Dashboard.elements'

import EventCreator from '../EventCreator/EventCreator' 

interface IProps {
    toggle: boolean,
    page: number,
    chunk: Event[],
    main: boolean,
    showDetails: any,
    applyClass: () => void,
}

const Dashboard: React.FC<IProps> = ({toggle, page, chunk, main, showDetails, applyClass}) => {
    const toggleMode = main ? main : true;
    
    return (
        <Holder toggle={toggleMode}>
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
        </Holder>
    );
};

export default Dashboard;

 {/* {chunk.map((e: Event, idx: number) => {
                    if(idx < 5) return null;
                    return (
                        <></>
                        // <EventCreator event={e} toggle={toggle} type={idx} showDetails={showDetails} page={page} applyClass={applyClass}></EventCreator>
                    )
                }
                )} */}

{/* // <EventPlaceHolder count={idx}>

                    // </EventPlaceHolder> */}

 {/* <RowThree toggle={shouldToggle}>
                    {e[5] && <EventCreator pointer={{page: idx, element: 0}} shouldBeBlack={e[0].shouldBeBlack} applyClass={applyClass} showDetails={showDetails} toggle={shouldToggle} event={e[0]} bgImage={e[0].background}/>}
                </RowThree>

                <RowFour toggle={extraElements}>
                {e[1] && <EventCreator pointer={{page: idx, element: 1}} shouldBeBlack={e[1].shouldBeBlack} applyClass={applyClass} showDetails={showDetails} toggle={shouldToggle} event={e[1]} bgImage={e[1].background}/>}
                </RowFour>

                <RowFive toggle={extraElements}>
                    {e[4] && <EventCreator pointer={{page: idx, element: 4}} shouldBeBlack={e[4].shouldBeBlack} applyClass={applyClass} showDetails={showDetails} toggle={shouldToggle} event={e[4]}  bgImage={e[4].background}/>}
                </RowFive> */}