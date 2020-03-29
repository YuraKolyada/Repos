import api from '../apiSingleton';

const AVAILABLE_TOTAL_SEARCH_RESULTS = 1000;

export async function fetchReposData({ searchText, activePage, selectedSort }) {
    const { items, total_count } = await api.repos.list({
        q     : searchText,
        page  : activePage,
        sort  : selectedSort.field,
        order : selectedSort.direction
    });
    const total = total_count > AVAILABLE_TOTAL_SEARCH_RESULTS
        ? AVAILABLE_TOTAL_SEARCH_RESULTS
        : total_count;

    return { items, total };
}

export function memoizer(callback) {
    const cachedResults = {};

    return async args => {
        try {
            const key = JSON.stringify(args);
        
            if (!cachedResults[key]) {
                cachedResults[key] = await callback(args);
            }

            return cachedResults[key];
        } catch (e) {
            throw e;
        }
    }
}
