import React, {
    useState,
    useEffect,
    useCallback
}                               from 'react';
import { useDebouncedCallback } from 'use-debounce';

import MainLayout               from '../layouts/MainLayout';

import Input                    from '../Input';
import List                     from '../List';
import Loader                   from '../Loader';

import {
    fetchReposData, memoizer
}                               from '../../utils/helpers';
import { Fade }                 from '../../utils/animations';

import './Main.less';

const initialReposData = {
    items : [],
    total : 0
};

export default function Main() {
    const [ searchText, setSearchText ]   = useState('');
    const [ activePage, setActivePage ]   = useState(1);
    const [ isSearching, setIsSearching ] = useState(false);
    const [ reposData, setReposData ]     = useState(initialReposData);

    const [ handleDebouncedChange ] = useDebouncedCallback(text => setSearchText(text.trim()), 500);
    const memoizeFetchReposData     = useCallback(memoizer(fetchReposData), []);

    const fetchData = async () => {
        setIsSearching(true);
        const data = await memoizeFetchReposData({ searchText, activePage });
        setReposData(data);
        setIsSearching(false);
    }

    useEffect(() => {
        if (searchText.length) {
            fetchData();
        } else if (reposData.total) {
            setReposData(initialReposData);
        }
    }, [ searchText, activePage ]);

    const renderList = () => {
        if (!searchText) return (<p>Please input search text</p>);

        return <List items = {reposData.items} />;
    }

    return (
        <MainLayout>
            <header className='Main__header'>
                <h1 className='Main__title'>Search Repositories</h1>
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
                    {isSearching
                        ? <Loader />
                        : renderList()
                    }
                </Fade>
            </div>
            <footer className='Main__footer'>

            </footer>
        </MainLayout>
    )
}
