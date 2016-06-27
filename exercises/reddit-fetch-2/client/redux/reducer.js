import { UPDATE_POSTS, UPDATE_SEARCH, UPDATE_FILTER } from './types';

export default function postsReducer(state = {}, action) {
  const { type, payload } = action;
  // state = state || {};
  if (type === UPDATE_SEARCH) {
    // return Object.assign({}, state, { searchString: action.searchString });
    return {
      ...state,
      searchString: payload,
      isStringUpdate: true
    };
  }
  if (type === UPDATE_FILTER) {
    return {
      ...state,
      filterString: payload
    };
  }

  if (type === UPDATE_POSTS) {
    return {
      ...state,
      posts: payload
    };
  }
  return state;
}
