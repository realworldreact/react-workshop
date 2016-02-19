import React, { PropTypes } from 'react';
import 'normalize.css';

// Import CSS and favicon
import './App.css';
import './favicon.ico';

const ENDPOINT = 'https://www.reddit.com/r/';

const Post = React.createClass({
  propTypes: {
    post: PropTypes.shape({
      permalink: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  },
  render() {
    const { permalink, title } = this.props.post;
    return (
      <div className='Post'>
        <a href={`https://www.reddit.com${permalink}`} target='_blank'>{title}</a>
      </div>
    );
  },
});

/**
 * This is just a super barebones example of representing a loading state. The
 * reason for separating it out into its own component is to demonstrate how
 * simple it will now be to update the loading spinner to be more user friendly.
 */
const LoadingSpinner = () => (
  <h1>Loading...</h1>
);

const PostList = React.createClass({
  propTypes: {
    posts: PropTypes.array.isRequired,
  },

  getInitialState() {
    return {
      filter: '',
    };
  },

  handleChange(e) {
    const filter = e.target.value.toLowerCase().trim();
    this.setState({ filter });
  },

  render() {
    const { filter } = this.state;
    const posts = this.props.posts.filter(x => {
      return x.title.toLowerCase().indexOf(filter) !== -1;
    });
    return (
      <div className='PostList'>
        <input
          type='text'
          className='filter'
          value={filter}
          onChange={this.handleChange}
          placeholder='Filter...'
        />
        <div className='posts'>
          {posts.map((post, i) => (
            <Post key={i} post={post} />
          ))}
        </div>
      </div>
    );
  },
});

const App = React.createClass({
  propTypes: {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    subreddit: PropTypes.string.isRequired,
  },

  render() {
    const {
      handleSubmit,
      handleChange,
      posts,
      loading,
      subreddit,
    } = this.props;

    return (
      <div className='App'>
        <form onSubmit={handleSubmit}>
          <input
            name='subreddit'
            type='text'
            placeholder='Enter Reddit...'
            value={subreddit}
            onChange={handleChange}
          />
        </form>
        {loading && <LoadingSpinner />}
        {posts.length ? <PostList posts={posts} /> : <h2>No reddit posts</h2>}
      </div>
    );
  },
});

export const AppContainer = React.createClass({
  getInitialState() {
    return {
      loading: false,
      subreddit: '',
      posts: [],
    };
  },

  fetch(subreddit) {
    return fetch(ENDPOINT + subreddit + '.json')
    .then(res => res.json())
    .then(json => json.data.children)
    .catch(err => {
      console.error('There was an error fetching.', err);
    });
  },

  handleSubmit(e) {
    e.preventDefault();
    const { subreddit } = this.state;

    if (!subreddit) {
      Promise.resolve([]).then(posts => this.setState({ posts }));
      return;
    }

    // We only care about passing down post data, not top-level meadata. That's
    // whay the first `.then` is for
    this.setState({ loading: true });
    this.fetch(subreddit)
    .then(posts => posts || Promise.reject(posts))
    .then(posts => posts.map(x => x.data))
    .then(posts => this.setState({ posts, loading: false }))
    .catch(err => {
      this.setState({ posts: [], loading: false });
      console.error(err);
    });
  },

  handleChange(e) {
    const subreddit = e.target.value.trim();
    this.setState({ subreddit });
  },

  // Container components do not handle markup, they simply define functionality
  // and pass props
  render() {
    return (
      <App
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        {...this.state}
      />
    );
  },
});
