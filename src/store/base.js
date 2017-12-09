import axios from 'axios';

const HOST = '/api/';

export default function fetch(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(HOST + url, { params })
        .then((res) => {
            resolve(res.data);
        }).catch(err => reject(err));
    });
}

export function fetchTopics(tab, { page = 0, limit = 0 } = {}) {
    return fetch(`topics`, { page, limit });
}
