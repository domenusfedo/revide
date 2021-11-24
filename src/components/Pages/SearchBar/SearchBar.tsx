import React from 'react';

import { 
    SearchBarHolder, SearchBarIcon, SearchBarInput, SearchBarInputHolder
} from './SearchBar.elements';

const SearchBar = () => {
    return (
        <SearchBarHolder>
            <SearchBarInputHolder>
                <SearchBarIcon/>
                <SearchBarInput placeholder='Search...'/>
            </SearchBarInputHolder>
        </SearchBarHolder>
    );
};

export default SearchBar;