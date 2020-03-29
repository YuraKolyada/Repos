export const REPOS_REQUEST   = 'REPOS_REQUEST';
export const REPOS_SUCCESS   = 'REPOS_SUCCESS';
export const REPOS_ERROR     = 'REPOS_ERROR';

export const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';
export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
export const SET_SORTING     = 'SET_SORTING';

export const SORT_OPTIONS = [
    {
        label     : 'Best match',
        value     : 'best_match',
        field     : '',
        direction : 'desc'
    },
    {
        label     : 'Most stars',
        value     : 'most_stars',
        field     : 'stars',
        direction : 'desc'
    },
    {
        label     : 'Fewest stars',
        value     : 'fewest_stars',
        field     : 'stars',
        direction : 'asc'
    },
    {
        label     : 'Most forks',
        value     : 'most_forks',
        field     : 'forks',
        direction : 'desc'
    },
    {
        label     : 'Fewest forks',
        value     : 'fewest_forks',
        field     : 'forks',
        direction : 'asc'
    },
    {
        label     : 'Recently updated',
        value     : 'recently_updated',
        field     : 'updated',
        direction : 'desc'
    },
    {
        label     : 'Least recently updated',
        value     : 'least_recently_updated',
        field     : 'updated',
        direction : 'asc'
    }
];
