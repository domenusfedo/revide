import React, {useRef, useEffect, useState} from 'react';

import {PageBlueprint} from '../theme/globalStyle';
import {BoardHolder, Header, Holder, AppContent, CategoryHolder,LogoHolder} from './Board.elements'

import Category from './Category/Category';
import PostElement from './PostElement/PostElement';

import {    
    Events
} from './index'
 

const Board = () => {
    const [focusedElement, focusedElementSet] = useState(0);
    const categoryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(categoryRef) {
            categoryRef.current!.children[0].classList.remove('active');
            categoryRef.current!.children[1].classList.remove('active');
            categoryRef.current!.children[2].classList.remove('active');
            categoryRef.current!.children[3].classList.remove('active');

            categoryRef.current!.children[focusedElement].classList.add('active');
        }
        
    }, [categoryRef, focusedElement])

    return (
        <PageBlueprint>
            <BoardHolder>
                    <Holder>
                        <LogoHolder />
                        <Header>Revide.</Header>
                    </Holder>

                    <AppContent>
                        {focusedElement === 0 && <Events />}
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