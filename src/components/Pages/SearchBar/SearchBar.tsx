import React from 'react';

import { 
    SearchBarHolder, SearchBarIcon, SearchBarInput, SearchBarInputHolder
} from './SearchBar.elements';

interface IProps {
    onFocusHandler: any
}

const SearchBar: React.FC<IProps> = ({onFocusHandler}) => {
    return (
        <SearchBarHolder onFocus={() => onFocusHandler(true)} onBlur={() => onFocusHandler(false)}>
            <SearchBarInputHolder>
                <SearchBarIcon/>
                <SearchBarInput placeholder='Search...'/>
            </SearchBarInputHolder>
        </SearchBarHolder>
    );
};

export default SearchBar;