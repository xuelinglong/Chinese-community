import fetch from './../base';

export const NOTETYPE = {
    topic: 'topic',
    cream: 'cream',
    weex: 'weex',
    share: 'share',
    ask: 'ask',
    recruit: 'recruit'
};

export function fetchTopics(type, { page = 0 } = {}) {
    return fetch(`topics`, { page });
}
