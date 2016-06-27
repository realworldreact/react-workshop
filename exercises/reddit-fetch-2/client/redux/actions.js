import { UPDATE_POSTS, UPDATE_SEARCH, UPDATE_FILTER } from './types';

export function updateFilterField(filterString) {
  return {
    type: UPDATE_FILTER,
    payload: filterString
  };
}

export function updateSearchField(searchString) {
  return {
    type: UPDATE_SEARCH,
    payload: searchString
  };
}

/**
 * Fetch a subreddit using the Reddit JSON API
 * @param {string} subreddit
 * @return {Promise<Array>}
 */
export const fetchR = (subreddit) => {
  return fetch(`https://www.reddit.com/r/${subreddit}.json`)
  .then(res => res.json())
  .then(json => json.data.children)
  .then(posts => posts || Promise.reject(new Error('Invalid Subreddit')));
};

export function fetchPosts(subreddit) {
  return fetchR(subreddit)
    .then(posts => ({ type: UPDATE_POSTS, payload: posts }))
    .catch(err => {
      console.error(err);
      return { type: UPDATE_POSTS, payload: [] }
    });
}
