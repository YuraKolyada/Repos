import React, { useState, useEffect } from 'react';
import { useDebouncedCallback }       from 'use-debounce';

import MainLayout                     from '../layouts/MainLayout';

import Input                          from '../Input';
import List                           from '../List';
import Loader                         from '../Loader';

import { fetchReposData }             from '../../utils/helpers';
import { Fade }                       from '../../utils/animations';

import './Main.less';

const initialReposData = {
    items : [],
    total : 0
};

export default function Main() {
    const [ searchText, setSearchText ] = useState('');
    const [ activePage, setActivePage ] = useState(1);
    const [ loading, setLoading ]       = useState(false);
    const [ reposData, setReposData ]   = useState(initialReposData);

    const handleChange = text => setSearchText(text);
    const [ handleDebouncedChange ] = useDebouncedCallback(handleChange, 500);

    const fetchData = async () => {
        setLoading(true);
        await fetchReposData(setReposData, searchText, activePage);
        setLoading(false);
    }

    useEffect(() => {
        if (searchText.length) {
            fetchData();
        } else if (reposData.total) {
            setReposData(initialReposData);
        }
    }, [ searchText, activePage ]);

    return (
        <MainLayout>
            <header className='Main__header'>
                <Input
                    name         = 'search'
                    defaultValue = ''
                    onChange     = {handleDebouncedChange}
                    placeholder  = 'Search'
                    className    = 'Main__search-input'
                />
            </header>
            <div className='Main__content'>
                <Fade
                    in
                    appear
                    mountOnEnter
                    unmountOnExit
                >
                    {loading
                        ? <Loader />
                        : <List items = {reposData.items} />
                    }
                </Fade>
            </div>
            <footer className='Main__footer'>

            </footer>
        </MainLayout>
    )
}
