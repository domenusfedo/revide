import React, { useEffect, useRef, useState } from 'react';
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
    Button,
    Desc,
    DescText
} from './Profile.elements';

interface IProps {
    shouldExpand: boolean,
    shouldExpandSet: React.Dispatch<React.SetStateAction<boolean>>,
    redirectAndExpand: (element: number) => void
}

const Profile:React.FC<IProps> = ({shouldExpand = false, shouldExpandSet, redirectAndExpand}) => {
    const {user} = useSelector((state: RootState) => state.auth)
    const {followed, issues} = useSelector((state: RootState) => state.events);

    const mainButtonRef = useRef<HTMLButtonElement>(null);
    const cancelButtonRef = useRef<HTMLButtonElement>(null);

    const dispatch = useDispatch();
    const [detailsToggle, detailsToggleSet] = useState<boolean>(false)
    const [livechatToggle, livechatToggleSet] = useState<boolean>(false)

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
        if(!detailsToggle) {
            mainButtonRef.current!.innerText = 'On The Spot!';
            cancelButtonRef.current!.innerText = 'Show less';
            detailsToggleSet(true)
            return;
        }

        mainButtonRef.current!.innerText = 'Connecting to live chat...';


        setTimeout(() => {
            livechatToggleSet(true);
            mainButtonRef.current!.innerText = 'Connected!';
            cancelButtonRef.current!.innerText = 'Disconnect';
        }, 500)
    }

    const cancelHanlder = () => {
        if(detailsToggle) {
            detailsToggleSet(!detailsToggle)
            mainButtonRef.current!.innerText = 'Details';
            cancelButtonRef.current!.innerText = 'Dismiss';
            livechatToggleSet(false);
            return;
        }
        dispatch(removeFollowedEvents({
              uid: user.uid,
              event: upcomingEvent
        }))
    }

    const findHanlder = () => {
        redirectAndExpand(0)
    }

    const [headerText, headerTextSet] = useState('')

    useEffect(() => { //should be moved to UI Folder as a EventHeader or something
        if(issues.followedError) {
            headerTextSet(issues.followedError);
        } else {
            headerTextSet("Oops, You don't have any followed event.");
        }
    }, [issues.followedError])

    useEffect(() => {
        setTimeout(() => {
            detailsToggleSet(shouldExpand);
            if(shouldExpand) {
                confirmationHanlder()
            }
        }, 200)

        return () => {
            shouldExpandSet(false)
        }
    }, [])

    useEffect(() => {
        upcomingEventSet(followed[0])
    }, [followed])

    return (
        <Holder>
            <UserData toggle={detailsToggle}>
            <Row toggle={detailsToggle}>
                <UserPic>
                    <UserIcon/>
                </UserPic>
            </Row >
            <Row toggle={detailsToggle}>
                    <UserPersonal toggle={detailsToggle}>
                        <Name>{user.username ? user.username : 'CleverTiger069'}</Name>
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
                    {/* 
                    <SmallStatictics>
                        <DataField>
                            <DataHihglight>2</DataHihglight>
                            <DataNormal>created</DataNormal>
                        </DataField>
                        <DataField>
                            <DataHihglight>100</DataHihglight>
                            <DataNormal>participated</DataNormal>
                        </DataField>      
                    </SmallStatictics> */}
            </Row>
            </UserData>

            <Text>Upcoming event</Text> 
            {/* if now set current Event */}

            <RecentEvent toggle={detailsToggle}>
                <EventHolder>
                    {upcomingEvent ? (
                        <LocationHolder>
                            <Header>{upcomingEvent.title}</Header>
                            <SubHeader>{upcomingEvent.city}, {upcomingEvent.street}</SubHeader>
                            <Desc toggle={detailsToggle}>
                                <DescText toggle={detailsToggle}>{upcomingEvent.description}</DescText>
                            </Desc>
                        </LocationHolder>
                    ) : (
                        <LocationHolder>
                            <Header>{headerText}</Header>
                        </LocationHolder>
                    )}

                    <ButtonsField>
                        {upcomingEvent ? <Button ButtonType='confirm' ref={mainButtonRef} onClick={confirmationHanlder}>Details</Button> : <Button ButtonType='confirm' onClick={findHanlder}>Find Event</Button>}
                        {upcomingEvent && <Button ButtonType='cancel' ref={cancelButtonRef} onClick={cancelHanlder}>Dismiss.</Button>}
                    </ButtonsField> 
                </EventHolder>
            </RecentEvent>
        </Holder>
    );
};

export default Profile;