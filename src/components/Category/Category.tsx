import React from 'react';

import {
    CategoryName, 
    CategoryHolder, 
    CategoryExtension,
    HomeIcon,
    NearIcon,
    AddIcon,
    ProfileIcon
} from './Category.elements'

interface CategoryType {
    name?: string,
    id: string,
    focusedElementSet: React.Dispatch<React.SetStateAction<number>>
}

const Category: React.FC<CategoryType> = ({name, focusedElementSet, id}) => {
    return (
        <CategoryHolder id={id} onClick={() => focusedElementSet(parseInt(id))}>
            {name === 'events' && <HomeIcon/>}
            {name === 'near' && <NearIcon/>}
            {name === 'add' && <AddIcon/>}
            {name === 'profile' && <ProfileIcon/>}
            <CategoryName>{name}</CategoryName>
            <CategoryExtension/>
        </CategoryHolder>
    );
};

export default Category;