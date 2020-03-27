import api from '../apiSingleton';

export async function fetchReposData(callback, searchText, page) {
    try {
        const { items, total_count } = await api.repos.list({ q: searchText, page });

        callback({ items, total: total_count });
    } catch (e) {
        console.warn(e);
    }
}
