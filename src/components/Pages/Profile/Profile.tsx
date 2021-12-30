import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { Event, removeFollowedEvents } from '../../../features/eventsSlice';

import {
    Holder,
    UserData,
    UserPic,
    UserPersonal,
    Row,
    Name,
    SmallStatictics,
    DataField,
    DataHihglight,
    DataNormal, 
    UserIcon,
    RecentEvent,
    Text,
    EventHolder,
    Header,
    SubHeader,
    LocationHolder,
    ButtonsField,
    Button
} from './Profile.elements';

const Profile = () => {
    const {username, uid} = useSelector((state: RootState) => state.auth)
    const {followed} = useSelector((state: RootState) => state.events);

    const dispatch = useDispatch();

    const [upcomingEvent, upcomingEventSet] = useState<Event>({
        background: '',
        city: '',
        country: '',
        creator: '',
        description: '',
        id: '',
        paricipantAmount: 0,
        shouldBeBlack: false,
        street: '',
        title: '',
        startAt: new Date()
    })

    const confirmationHanlder = () => {
        //check user localization
        //if user's loc === event loc => participany amount increase
    }

    const cancelHanlder = () => {
        dispatch(removeFollowedEvents({
              uid: uid,
              event: upcomingEvent
        }))
    }

    const findHanlder = () => {
        
    }

    useEffect(() => {
        upcomingEventSet(followed[0])
    }, [followed])

    return (
        <Holder>
            <UserData>
                <Row>
                    <UserPic>
                        <UserIcon/>
                    </UserPic>
                </Row>
                <Row>
                    <UserPersonal>
                        <Name>{username ? username : 'CleverTiger069'}</Name>
                        <SmallStatictics>
                            <DataField>
                                <DataHihglight>2</DataHihglight>
                                <DataNormal>created</DataNormal>
                            </DataField>
                            <DataField>
                                <DataHihglight>100</DataHihglight>
                                <DataNormal>participated</DataNormal>
                            </DataField>
                        </SmallStatictics>
                    </UserPersonal>
                </Row>
            </UserData>

            <RecentEvent>
                <Text>Current event</Text>
                <EventHolder>
                    {upcomingEvent ? (
                        <LocationHolder>
                            <Header>{upcomingEvent.title}</Header>
                            <SubHeader>{upcomingEvent.city}, {upcomingEvent.street}</SubHeader>
                        </LocationHolder>
                    ) : (
                        <LocationHolder>
                            <Header>None event to display!</Header>
                        </LocationHolder>
                    )}
                    {/* <Desc>{upcomingEvent.description}</Desc> */}

                    <ButtonsField>
                        {upcomingEvent ? <Button ButtonType='confirm' onClick={confirmationHanlder}>On the spot!</Button> : <Button ButtonType='confirm' onClick={findHanlder}>Find Event</Button>}
                        {upcomingEvent && <Button ButtonType='cancel' onClick={cancelHanlder}>Disclaim.</Button>}
                    </ButtonsField>
                </EventHolder>
            </RecentEvent>
        </Holder>
    );
};

export default Profile;