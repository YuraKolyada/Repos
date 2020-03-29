import ApiClient      from './ApiClient.js';
import ReposAPI       from './Repos.js';

export default function ({ apiPrefix } = {}) {
    if (!apiPrefix) {
        throw new Error('[apiPrefix] required');
    }

    const api = new ApiClient({ prefix: apiPrefix });

    return {
        apiClient : api,
        repos     : new ReposAPI({ apiClient: api })
    };
}
