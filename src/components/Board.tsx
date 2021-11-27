import React, {useRef, useEffect, useState, useCallback} from 'react';

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
    ParticipantsAmount,
    Amount,
    ParticipantsText,
    UserAction,
    ParticipateField,
    IntrestedField
} from './Board.elements'

import Category from './Category/Category';

import {    
    Events,
} from './index'
import Profile from './Pages/Profile/Profile';

interface Position {
    top: number,
    left: number,
    width: number,
    height: number,
    bgImage: string
}
 

const Board = () => {
    const [focusedElement, focusedElementSet] = useState(0);
    const [detailToggle, detailToggleSet] = useState(false);

    const categoryRef = useRef<HTMLDivElement>(null);
    const detailsRef = useRef<HTMLDivElement>(null);

    const [detailsElement, detailsElementSet] = useState<any>({
        position: {
            top: 0,
            left: 0,
            width: 0,
            height: 0,
            bgImage: ''
        },
        information: {
            title: '',
            street: '',
            desc: '',
            shouldBeBlack: false
        }
    });

    useEffect(() => {
        if(categoryRef) {
            categoryRef.current!.children[0].classList.remove('active');
            categoryRef.current!.children[1].classList.remove('active');
            categoryRef.current!.children[2].classList.remove('active');
            categoryRef.current!.children[3].classList.remove('active');

            categoryRef.current!.children[focusedElement].classList.add('active');
        }
        
    }, [categoryRef, focusedElement])

    const hideDetails = () => {
        detailsRef.current?.classList.remove('active');
    }

    const applyClass = () => {
        detailsRef.current?.classList.toggle('active');
    }

    useEffect(() => {
        
    }, [])

    return (
        <PageBlueprint>
            <BoardHolder>
                    <Holder>
                        <LogoHolder />
                        <Header>Revide.</Header>
                    </Holder>
                    {/* //{detailToggle &&  */}
                    <DetailsExpand active={detailToggle} bgImage={detailsElement.position.bgImage} top={detailsElement.position.top} left={detailsElement.position.left} width={detailsElement.position.width} height={detailsElement.position.height} ref={detailsRef}>
                        <DetailsHeader shouldBeBlack={detailsElement.information.shouldBeBlack} active={detailToggle}>
                            <HeaderOptions onClick={() => hideDetails()}>
                                <OptionsIcon></OptionsIcon>
                                <OptionsText>events</OptionsText>
                            </HeaderOptions>
                            <HeaderHeader>{detailsElement.information.title}</HeaderHeader>
                            <HeaderSubTitle>{detailsElement.information.street}</HeaderSubTitle>
                            
                            <ParticipantsAmount>
                                <ParticipantsText>Participants:</ParticipantsText>
                                <Amount>69</Amount>
                            </ParticipantsAmount>

                            <HeaderDesc>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, repudiandae harum in architecto totam quam aspernatur exercitationem error sint velit cumque maiores reprehenderit animi tempore, fugiat laboriosam vero, impedit ab.
                            </HeaderDesc>

                            <UserAction>
                                <IntrestedField/>
                                <ParticipateField>PARTICIPATE</ParticipateField>
                            </UserAction>

                        </DetailsHeader>
                    </DetailsExpand>
                    
                    <AppContent>
                        {focusedElement === 0 && <Events detailToggleSet={detailToggleSet} detailsElement={detailsElement} detailsElementSet={detailsElementSet} applyClass={applyClass}/>}
                        {focusedElement === 2 && <Profile />}
                    </AppContent>

                    <CategoryHolder ref={categoryRef}>
                        <Category name='events' id='0' focusedElementSet={focusedElementSet}/>
                        <Category name='near' id='1' focusedElementSet={focusedElementSet}/>
                        <Category name='profile' id='2' focusedElementSet={focusedElementSet}/>
                        <Category name='add' id='3' focusedElementSet={focusedElementSet}/>
                    </CategoryHolder>
            </BoardHolder>
        </PageBlueprint>
    );
};

export default Board;