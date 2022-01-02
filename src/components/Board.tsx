import React, {useRef, useEffect, useState} from 'react';

import {PageBlueprint} from '../theme/globalStyle';
import {
    BoardHolder, 
    Header, 
    Holder, 
    AppContent, 
    CategoryHolder,
    LogoHolder, 
    DetailsExpand, 
    DetailsHeader, 
    HeaderHeader, 
    HeaderSubTitle, 
    HeaderOptions, 
    OptionsIcon, 
    OptionsText,
    HeaderDesc,
    HighlightedText,
    LeftSide,
    RightSide,
    UserAction,
    ParticipateField,
    IntrestedField,
    LogoSVGHolder
} from './Board.elements'

import Category from './UI/Category/Category';

import {    
    Events,
    Profile
} from './index'

import { Event, fetchFollowedEvents, addFollowedEvents, removeFollowedEvents } from '../features/eventsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';

export interface Details {
    position: {
        top: number,
        left: number,
        width: number,
        height: number,
        bgImage: string
    },
    information: Event
}
 

const Board = () => {
    const {user} = useSelector((state: RootState) => state.auth)
    const {followed} = useSelector((state: RootState) => state.events)
    const dispatch = useDispatch();
    
    const [focusedElement, focusedElementSet] = useState(0);
    const [detailToggle, detailToggleSet] = useState(false);

    const categoryRef = useRef<HTMLDivElement>(null);
    const detailsRef = useRef<HTMLDivElement>(null);

    const [detailsElement, detailsElementSet] = useState<Details>({
        position: {
            top: 0,
            left: 0,
            width: 0,
            height: 0,
            bgImage: ''
        },
        information: {
            city: '',
            street: '',
            description: '',
            paricipantAmount: 0,
            shouldBeBlack: false,
            creator: '',
            title: '',
            background: '',
            country: '',
            id: '',
            startAt: new Date()
        }
    });

    useEffect(() => {
        if(categoryRef) {
            categoryRef.current!.children[0].classList.remove('active');
            categoryRef.current!.children[1].classList.remove('active');
            categoryRef.current!.children[2].classList.remove('active');

            categoryRef.current!.children[focusedElement].classList.add('active');
        }
        
    }, [categoryRef, focusedElement])

    const hideDetails = () => {
        detailsRef.current?.classList.remove('active');
    }

    const applyClass = () => {
        detailsRef.current?.classList.toggle('active');
    }

    const followHandler = () => {
        dispatch(addFollowedEvents({
            event: detailsElement.information,
            uid: user.uid
        }))
    }

    const unFollowHandler = () => {
        dispatch(removeFollowedEvents({
            event: detailsElement.information,
            uid: user.uid
        }))
    }

    const [isFollowed, isFollowedSet] = useState(false);

    useEffect(() => {
        isFollowedSet(false)
        followed.map(e => {
           if(e.id === detailsElement.information.id) {
                isFollowedSet(true)
           }
           return null;
        })
    }, [detailsElement, followed])

    useEffect(() => {
        dispatch(fetchFollowedEvents(user.uid))
    }, [])

    return (
        <PageBlueprint>
            <BoardHolder>
                    <Holder>
                        <LogoHolder> 
                            <LogoSVGHolder/>
                        </LogoHolder>
                        <Header>Revide.</Header>
                    </Holder>
                    
                    <AppContent>
                        {focusedElement === 0 && <Events detailToggleSet={detailToggleSet} detailsElement={detailsElement} detailsElementSet={detailsElementSet} applyClass={applyClass}/>}
                        {focusedElement === 2 && <Profile />}
                    </AppContent>

                    {focusedElement === 0 && <DetailsExpand active={detailToggle} bgImage={detailsElement.information.background} top={detailsElement.position.top} left={detailsElement.position.left} width={detailsElement.position.width} height={detailsElement.position.height} ref={detailsRef}>
                        <DetailsHeader shouldBeBlack={detailsElement.information.shouldBeBlack} active={detailToggle}>
                            <HeaderOptions onClick={() => hideDetails()}>
                                <OptionsIcon></OptionsIcon>
                                <OptionsText>events</OptionsText>
                            </HeaderOptions>
                            <HeaderHeader>{detailsElement.information.title}</HeaderHeader>
                            <HeaderSubTitle>{detailsElement.information.city}, {detailsElement.information.street}</HeaderSubTitle>
                            
                            <HighlightedText> 
                                <LeftSide>Participants:</LeftSide>
                                <RightSide>{detailsElement.information.paricipantAmount}</RightSide>
                            </HighlightedText>

                            <HeaderDesc>
                                {detailsElement.information.description}
                            </HeaderDesc>

                            <HighlightedText>
                                <LeftSide>Created by</LeftSide>
                                <RightSide>{detailsElement.information.creator}</RightSide>
                            </HighlightedText>
                            {!isFollowed ? ( 
                                <UserAction onClick={followHandler}>
                                    <IntrestedField/>
                                    <ParticipateField>FOLLOW</ParticipateField>
                                </UserAction>
                            ) : (
                                <UserAction onClick={unFollowHandler}>
                                    <IntrestedField/>
                                    <ParticipateField>UNFOLLOW</ParticipateField>
                                </UserAction>
                            )}
                        </DetailsHeader>
                    </DetailsExpand>}

                    <CategoryHolder ref={categoryRef}>
                        <Category name='events' id='0' focusedElementSet={focusedElementSet}/>
                        <Category name='add' id='1' focusedElementSet={focusedElementSet}/>
                        <Category name='me' id='2' focusedElementSet={focusedElementSet}/>
                    </CategoryHolder>
            </BoardHolder>
        </PageBlueprint>
    );
};

export default Board;