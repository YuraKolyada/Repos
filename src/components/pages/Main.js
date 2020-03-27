import React, { useState, useEffect } from 'react';
import { useDebouncedCallback }       from 'use-debounce';

import Input                          from '../Input';

import { fetchReposData }             from '../../utils/helpers';

import './Main.less';

const initialReposData = {
    items : [],
    total : 0
};

export default function Main() {
    const [ searchText, setSearchText ] = useState('');
    const [ activePage, setActivePage ] = useState(1);
    const [ reposData, setReposData ]   = useState(initialReposData);

    const handleChange = text => setSearchText(text);
    const [ handleDebouncedChange ] = useDebouncedCallback(handleChange, 500);

    useEffect(() => {
        if (searchText.length) {
            fetchReposData(setReposData, searchText, activePage);
        } else if (reposData.total) {
            setReposData(initialReposData);
        }
    }, [ searchText, activePage ]);

    return (
        <div className='Main'>
            <header className='Main__header'>
                <Input
                    name         = 'search'
                    defaultValue = ''
                    onChange     = {handleDebouncedChange}
                    placeholder  = 'Search'
                    className    = 'Main__search-input'
                />
            </header>
            <footer className='Main__footer'></footer>
       </div>
    )
}
