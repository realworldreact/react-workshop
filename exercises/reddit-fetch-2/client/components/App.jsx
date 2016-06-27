import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts, updateSearchField, updateFilterField } from '../redux/actions.js';

function mapStateToProps(state) {
  return {
    searchString: state.searchString,
    filterString: state.filterString,
    posts: state.posts
  };
}

export const App = connect(mapStateToProps)(React.createClass({

  // This is how we can access the router from within our component
  contextTypes: {
    router: React.PropTypes.object,
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

  // Fetch the sub reddit and update state
  fetchSubreddit() {
    const subreddit = this.props.params.r;
    this.props.dispatch(fetchPosts(subreddit));
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
    this.props.dispatch(updateFilterField(value));
  },

  handleSearchChange(e) {
    const { value } = e.target;
    const updateSearchAction = updateSearchField(value);
    this.props.dispatch(updateSearchAction);
  },

  render() {
    const { filterString, posts } = this.props;
    const filtersPosts = posts.filter(function(post) {
      return (new RegExp(filterString, 'i')).test(post.data.title);
    });
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
        <input
          name='filter'
          type='text'
          value={ this.props.filterString }
          onChange={ this.handleFilterChange}
        />
        {React.cloneElement(this.props.children, { posts: filtersPosts })}
      </div>
    );
  },
}));
