import React from 'react';

import { 
    SearchBarHolder, SearchBarIcon, SearchBarInput, SearchBarInputHolder
} from './SearchBar.elements';

interface IProps {
    onFocusHandler: any,
    value: string,
    changeHandler: React.Dispatch<React.SetStateAction<string>>
}


const SearchBar: React.FC<IProps> = ({onFocusHandler, value, changeHandler}) => {
    return (
        <SearchBarHolder onFocus={() => onFocusHandler(true)} onBlur={() => value === '' && onFocusHandler(false)}>
            <SearchBarInputHolder>
                <SearchBarIcon/>
                <SearchBarInput placeholder='Search...' value={value} onChange={(e) => changeHandler(e.target.value)}/>
            </SearchBarInputHolder>
        </SearchBarHolder>
    );
};

export default SearchBar;