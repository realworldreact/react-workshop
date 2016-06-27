import reducer from './reducer.js';
import { compose, applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise';

// updateSearch
const initialState = {
  searchString: '',
  filterString: '',
  posts: []
};
// redux store
export default function createOurReducer() {
  return createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(promiseMiddleware),
      window.devToolsExtension ?
        window.devToolsExtension() :
        f => f
    )
  );
}
