import React, {useState, useEffect} from 'react';

import {
    PostHolder,
    PostTitle,
    PostTitleHolder,
    PostSubTitle,
    PostDesc,
    PostOverline,
    ExampleImage,
    CloseField,
    CloseText,
    CloseIcon,
    FavIcon,
    PostButton,
    Horizontal
} from './PostElement.elements'

interface Post {
    title: string,
    subTitle: string,
    desc: string,
    price: string,
    id: number,
}

const PostElement: React.FC<Post> = ({title, subTitle, desc, price, id}) => {
    const [active, activeSet] = useState<boolean>(false)

    const changeMode = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.currentTarget.closest('div#id')?.classList.toggle('active');
    }

    return (
        <PostHolder amount={id} onClick={e => {
            if(active) return
            changeMode(e)
            activeSet(true)}} id='id'>
            <PostTitleHolder active={active}>
                <CloseField active={active} onClick={(e) => {
                    changeMode(e)
                    activeSet(false)}}>
                    <CloseIcon/>
                    <CloseText>events</CloseText>
                </CloseField>

                <ExampleImage active={active}>{price}</ExampleImage>

                <PostOverline active={active}>{price}</PostOverline>
                <PostTitle active={active}>{title.toUpperCase()}</PostTitle>
                <PostSubTitle active={active}>{subTitle}</PostSubTitle>

                <PostDesc active={active}>Participants: 56</PostDesc>

                <PostDesc active={active}>{desc}</PostDesc>
                <Horizontal>
                    <PostButton active={active}>PARTICIPATE</PostButton>
                    <FavIcon active={active}/>
                </Horizontal>
            </PostTitleHolder>
        </PostHolder>
    );
};

export default PostElement;