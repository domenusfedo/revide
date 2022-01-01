import React from 'react';

import {Event} from '../../../../features/eventsSlice'

import {
    Holder,
    ColumnOne,
    ColumnTwo,
    EventPlaceHolder
} from './Dashboard.elements'

interface IProps {
    toggle: boolean,
    page: number,
    chunk: Event[]
}

const Dashboard: React.FC<IProps> = ({toggle, page, chunk}) => {
    //divide array 2
    
    return (
        <Holder toggle={toggle}>
            <ColumnOne toggle={toggle}>
                {chunk.map((e: Event, idx: number) => {
                    if(idx >= 3) return null;
                    return (
                        <span>{e.title}</span>
                    )
                }
                )}
            </ColumnOne>
            <ColumnTwo toggle={toggle}>
            {chunk.map((e: Event, idx: number) => {
                    if(idx < 3) return null;
                    return (
                        <span>{e.title}</span>
                    )
                }
                )}
            </ColumnTwo>
        </Holder>
    );
};

export default Dashboard;

// <EventPlaceHolder count={idx}>

                    // </EventPlaceHolder>

 {/* <RowThree toggle={shouldToggle}>
                    {e[0] && <EventCreator pointer={{page: idx, element: 0}} shouldBeBlack={e[0].shouldBeBlack} applyClass={applyClass} showDetails={showDetails} toggle={shouldToggle} event={e[0]} bgImage={e[0].background}/>}
                </RowThree>

                <RowFour toggle={extraElements}>
                {e[1] && <EventCreator pointer={{page: idx, element: 1}} shouldBeBlack={e[1].shouldBeBlack} applyClass={applyClass} showDetails={showDetails} toggle={shouldToggle} event={e[1]} bgImage={e[1].background}/>}
                </RowFour>

                <RowFive toggle={extraElements}>
                    {e[4] && <EventCreator pointer={{page: idx, element: 4}} shouldBeBlack={e[4].shouldBeBlack} applyClass={applyClass} showDetails={showDetails} toggle={shouldToggle} event={e[4]}  bgImage={e[4].background}/>}
                </RowFive> */}