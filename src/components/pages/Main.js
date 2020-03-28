import React, {
    useEffect,
    useCallback,
    useReducer
}                               from 'react';
import { useDebouncedCallback } from 'use-debounce';

import MainLayout               from '../layouts/MainLayout';

import Input                    from '../Input';
import List                     from '../List';
import Loader                   from '../Loader';
import Pagination               from '../Pagination';

import {
    reposReducer,
    initionalState
}                               from '../../reducers/reposReducer';

import * as c                   from '../../constants';

import {
    fetchReposData, memoizer
}                               from '../../utils/helpers';

import './Main.less';

export default function Main() {
    const [ state, dispatch ] = useReducer(reposReducer, initionalState);
    const { searchText, activePage, isSearching, data, isFailure, errorMessage } = state;

    const handleChangeSearchText = text => dispatch({ type: c.SET_SEARCH_TEXT, payload: text.trim() });
    const handleChangeActivePage = page => dispatch({ type: c.SET_ACTIVE_PAGE, payload: page });
    const [ handleDebouncedChangeText ] = useDebouncedCallback(handleChangeSearchText, 500);
    const memoizeFetchReposData = useCallback(memoizer(fetchReposData), []);

    const fetchData = async () => {
        try {
            dispatch({ type: c.REPOS_REQUEST });
            const data = await memoizeFetchReposData({ searchText, activePage });
            dispatch({ type: c.REPOS_SUCCESS, payload: data });
        } catch (e) {
            dispatch({ type: c.REPOS_ERROR, payload: e && e.message });
        }
    }

    useEffect(() => {
        if (searchText.length) fetchData();
    }, [ searchText, activePage ]);

    const renderListOrMessage = () => {
        if (!searchText) return <p>Please input search text</p>;
        if (isFailure) return <p className='Main__error-message'>{errorMessage}</p>;
        if (searchText && !data.total) return renderMessageNotFoundRepos(searchText);

        return <List items = {data.items || []} />;
    }

    const renderFooter = () => {
        if (!searchText || !data.total) return null;
    
        return (
            <footer className='Main__footer'>
                <Pagination
                    current   = {activePage}
                    total     = {data.total}
                    onChange  = {handleChangeActivePage}
                    className = 'Main__pagination'
                />
            </footer>
        );
    }

    const renderHeader = () => {
        return (
            <header className='Main__header'>
                <h1 className='Main__title'>Search Repositories</h1>
                <Input
                    name         = 'search'
                    defaultValue = ''
                    onChange     = {handleDebouncedChangeText}
                    placeholder  = 'Search'
                    className    = 'Main__search-input'
                />
            </header>
        );
    }

    return (
        <MainLayout>
            {renderHeader()}
            <div className='Main__content'>
                {isSearching
                    ? <Loader />
                    : renderListOrMessage()
                }
            </div>
            {renderFooter()}
        </MainLayout>
    )
}

function renderMessageNotFoundRepos(searchText) {
    return (
        <p className='Main__message-not-found'>
            Sorry, no repository was found at your request
            <strong>{searchText}</strong>
        </p>
    )
}
