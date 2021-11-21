import React from 'react';

import {MarkerHolder, Marker, CategoryName, CategoryHolder, CategoryExtension} from './Category.elements'

interface CategoryType {
    name?: string,
    marker?: boolean,
    id: string,
    focusedElementSet: React.Dispatch<React.SetStateAction<number>>
}

const Category: React.FC<CategoryType> = ({name, marker, focusedElementSet, id}) => {
    return (
        <>
        {marker && (
            <MarkerHolder>
                <Marker />
            </MarkerHolder>
        )}
        {name && (
            <CategoryHolder id={id} onClick={() => focusedElementSet(parseInt(id))}>
                <CategoryName>{name}</CategoryName>
                <CategoryExtension/>
            </CategoryHolder>
        )}
        </>
    );
};

export default Category;