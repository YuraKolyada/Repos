import Base from './Base.js';

class Repos extends Base {
    list(params) {
        return this.apiClient.get('search/repositories', params);
    }
}

export default Repos;
