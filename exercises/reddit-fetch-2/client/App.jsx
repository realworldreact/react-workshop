import React from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';

// reducer(state) => state || {}
// middleware
// f => f === function(f) { return f; }

// actionCreator(..any) => Action

// updateSearch
const UPDATE_SEACH = 'UPDATE_SEARCH';
const initialState = {
  search: ''
};

function updateSearchField(searchString) {
  return {
    type: UPDATE_SEACH,
    searchString: searchString
  };
}

function postsReducer(state = {}, action) {
  // state = state || {};
  if (action.type === UPDATE_SEACH) {
    console.log('foo', action);
    // return Object.assign({}, state, { searchString: action.searchString });
    return {
      ...state,
      searchString: action.searchString,
      isStringUpdate: true
    };
  }
  return state;
}

// redux store
export const store = createStore(
  postsReducer,
  initialState,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

/**
 * Fetch a subreddit using the Reddit JSON API
 * @param {string} subreddit
 * @return {Promise<Array>}
 */
const fetchR = (subreddit) => {
  return fetch(`https://www.reddit.com/r/${subreddit}.json`)
  .then(res => res.json())
  .then(json => json.data.children)
  .then(posts => posts || Promise.reject(new Error('Invalid Subreddit')));
};

const Post = React.createClass({
  propTypes: {
    post: React.PropTypes.shape({
      data: React.PropTypes.object.isRequired,
    }).isRequired,
  },

  render() {
    const { permalink, title } = this.props.post.data;
    return (
      <div className='Post'>
        <a href={`https://www.reddit.com${permalink}`} target='_blank'>{title}</a>
      </div>
    );
  },
});

export const PostList = React.createClass({
  render() {
    const { posts } = this.props;
    return (
      <div className='posts'>
        {posts.map((post, i) => (
          <Post key={i} post={post} />
        ))}
        {posts.length ? null : <h2>No reddit posts</h2>}
      </div>
    );
  },
});

function mapStateToProps(state) {
  return { searchString: state.searchString };
}
export const App = connect(mapStateToProps)(React.createClass({

  // This is how we can access the router from within our component
  contextTypes: {
    router: React.PropTypes.object,
  },

  getInitialState() {
    return {
      posts: [],
      filterString: ''
    };
  },

  // Make sure to fetch on initial load to support deep linking
  componentDidMount() {
    if (this.props.params.r) {
      this.fetchSubreddit();
    }
  },

  // Make sure to fetch every time the URL changes
  componentDidUpdate(prevProps, prevState) {
    const { params } = this.props;
    if (params.r && params.r !== prevProps.params.r) {
      this.fetchSubreddit();
    }
  },

  // Fetch teh sub reddit and update state
  fetchSubreddit() {
    const subreddit = this.props.params.r;

    fetchR(subreddit)
    .then(posts => this.setState({ posts }))
    .catch(err => {
      this.setState({ posts: [] });
      console.error(err);
    });
  },

  // When the form is submitted simply redirect the user to the appropriate page
  handleSubmit(e) {
    e.preventDefault();
    const subreddit = e.target.elements.subreddit.value.trim();
    const { router } = this.context;

    if (!subreddit) {
      router.push('/');
      return;
    }

    router.push(`/r/${subreddit}`);
  },

  handleFilterChange(e) {
    const { value } = e.target;
    this.setState({ filterString: value });
  },

  handleSearchChange(e) {
    const { value } = e.target;
    const updateSearchAction = updateSearchField(value);
    this.props.dispatch(updateSearchAction);
  },

  render() {
    const { posts, filterString } = this.state;
    /*
    const filtersPosts = posts.filter(function(post) {
      return (new RegExp(search, 'i')).test(post.data.title);
    });
    */
   const filtersPosts = posts;
    return (
      <div className='App'>
        <form onSubmit={ this.handleSubmit }>
          <input
            name='subreddit'
            type='text'
            value={ this.props.searchString }
            onChange={ this.handleSearchChange }
            placeholder='Enter Reddit...'
          />
        </form>
        {/*
        <input
          name='filter'
          type='text'
          value={ filterString }
          onChange={ this.handleFilterChange}
        />
        */}
        {React.cloneElement(this.props.children, { posts: filtersPosts })}
      </div>
    );
  },
}));
