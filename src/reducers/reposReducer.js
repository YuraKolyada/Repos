import * as c from '../constants';

export const initionalState = {
    searchText   : '',
    data         : {
        items : [],
        total : 0
    },
    selectedSort : {
        label     : 'Most stars',
        value     : 'most_stars',
        field     : 'stars',
        direction : 'desc'
    },
    isSearching  : false,
    activePage   : 1,
    isFailure    : false,
    errorMessage : ''
};

export const reposReducer = (state, action) => {
    switch (action.type) {
        case c.REPOS_REQUEST:
            return {
                ...state,
                isSearching  : true,
                isFailure    : false,
                errorMessage : ''
            }
        case c.REPOS_SUCCESS:
            return {
                ...state,
                data        : action.payload,
                isSearching : false
            }
        case c.REPOS_ERROR:
            return {
                ...state,
                data        : {
                    items : [],
                    total : 0
                },
                isSearching  : false,
                isFailure    : true,
                errorMessage : action.payload || ''
            }
        case c.SET_ACTIVE_PAGE:
            return {
                ...state,
                activePage: action.payload
            }
        case c.SET_SEARCH_TEXT:
            return {
                ...state,
                searchText : action.payload,
                activePage : 1
            }
        case c.SET_SORTING:
            return {
                ...state,
                selectedSort: action.payload
            }
        default:
            return state;
    }
}
