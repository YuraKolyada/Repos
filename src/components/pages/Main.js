import React, { useState } from 'react';

import Input               from '../Input';

import './Main.less';

export default function Main() {
    const [ searchText, setSearchText ] = useState('');

    const handleChange = value => setSearchText(value);

    return (
        <div className='Main'>
            <header className='Main__header'>
                <Input
                    name         = 'search'
                    defaultValue = ''
                    onChange     = {handleChange}
                    placeholder  = 'Search'
                    className    = 'Main__search-input'
                />
            </header>
            <footer className='Main__footer'></footer>
       </div>
    )
}
