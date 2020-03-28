import api from '../apiSingleton';

export async function fetchReposData({ searchText, activePage }) {
    const { items, total_count } = await api.repos.list({
        q    : searchText,
        page : activePage,
        sort : 'stars'
    });

    return { items, total: total_count };
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
