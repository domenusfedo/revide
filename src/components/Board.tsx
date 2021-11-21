import React, {useRef, useEffect, useState} from 'react';

import {PageBlueprint} from '../theme/globalStyle';
import {FakeSpot, RightSpot, BoardHolder, Header, Holder, ReportButton,CategoryHolder, ElementsHolder, NavHolder } from './Board.elements'

import Category from './Category/Category';
import PostElement from './PostElement/PostElement';

const Board = () => {
    const [fousedElement, focusedElementSet] = useState(1);
    const categoryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(categoryRef) {
            categoryRef.current!.children[0].classList.remove('active');
            categoryRef.current!.children[1].classList.remove('active');
            categoryRef.current!.children[2].classList.remove('active');

            categoryRef.current!.children[fousedElement].classList.add('active');
        }
        
    }, [categoryRef, fousedElement])

    const elements = [
        {
            title: 'First Event',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget nibh quis ligula luctus commodo sit amet eu nibh. Proin non dolor congue nisi pharetra condimentum. Nulla orci elit, interdum ac suscipit in, convallis nec ex.',
            price: '$10',
            subTitle: 'Warsaw, Krakowskie Przedmiescie',
            id: 1,
        },{
            title: 'Second Event',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget nibh quis ligula luctus commodo sit amet eu nibh. Proin non dolor congue nisi pharetra condimentum. Nulla orci elit, interdum ac suscipit in, convallis nec ex.',
            price: 'FREE',
            subTitle: 'Warsaw, Krakowskie Przedmiescie',
            id: 2,
        },{
            title: 'Third Event',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget nibh quis ligula luctus commodo sit amet eu nibh. Proin non dolor congue nisi pharetra condimentum. Nulla orci elit, interdum ac suscipit in, convallis nec ex.',
            price: 'FREE',
            subTitle: 'Warsaw, Krakowskie Przedmiescie',
            id: 3,
        },{
            title: 'Fourth Event',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget nibh quis ligula luctus commodo sit amet eu nibh. Proin non dolor congue nisi pharetra condimentum. Nulla orci elit, interdum ac suscipit in, convallis nec ex.',
            price: '$10',
            subTitle: 'Warsaw, Krakowskie Przedmiescie',
            id: 4,
        }
    ]

    return (
        <PageBlueprint>
            <BoardHolder>
                {/* <NavHolder> */}
                    <Holder>
                        <Header>Revide.</Header>
                        <ReportButton/>
                    </Holder>

                    <CategoryHolder ref={categoryRef}>
                        <Category marker={true} id='0' focusedElementSet={focusedElementSet}/>
                        <Category name='Events' id='1' focusedElementSet={focusedElementSet}/>
                        <Category name='Near me' id='2' focusedElementSet={focusedElementSet}/>
                    </CategoryHolder>
                {/* </NavHolder> */}
                {/* <ElementsHolder> */}
                    {/* <FakeSpot></FakeSpot>
                    <RightSpot> */}
                {fousedElement === 1 && (
                        elements.map((e, idx)=> (
                            <PostElement
                                title={e.title}
                                desc={e.desc}
                                price={e.price}
                                subTitle={e.subTitle}
                                id={idx + 1}
                                key={idx}
                        />
                        ))
                    )}
                    {fousedElement === 2 && (
                        <span/>
                    )}
                    {/* </RightSpot> */}
                {/* </ElementsHolder> */}
            </BoardHolder>
        </PageBlueprint>
    );
};

export default Board;