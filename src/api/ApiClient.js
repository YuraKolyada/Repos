import queryString from 'query-string';
import config      from '../config.js';

const DEFAULT_ERROR = {
    'message' : 'Server unavailable. Please check your connection and try again.'
};

export default class ApiClient {
    constructor({ prefix = 'v1/' } = {}) {
        this.prefix = prefix;
    }

    async get(url, params) {
        return this.request({
            url,
            params,
            method : 'GET'
        });
    }

    async post(url, payload = {}) {
        return this.request({
            url,
            method : 'POST',
            body   : payload
        });
    }

    async request({ url, method, params = {}, body }) {
        const query = Object.keys(params).length ? `?${queryString.stringify(params)}` : '';

        let response;

        try {
            response = await fetch(
                `${config.apiUrl}${this.prefix}${url}${query}`,
                {
                    method,
                    headers : {
                        'Content-Type' : 'application/json'
                    },
                    body : method !== 'GET' && body ? JSON.stringify(body) : undefined
                }
            );
        } catch (err) {
            throw DEFAULT_ERROR;
        }

        if (response.status >= 500) throw DEFAULT_ERROR;

        const json = await response.json();

        if (response.status >= 400) throw json;

        return json;
    }
}
