import React from 'react';

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
        {/* Render based on the passed data */}
      </div>
    );
  },
});

export const App = React.createClass({
  getInitialState() {
    return {
      posts: [],
    };
  },

  handleSubmit(e) {
    e.preventDefault();

    // subreddit is the value that the user input
    const subreddit = e.target.elements.subreddit.value.trim();

    // * If there is no subreddit assume the user emptied out the input. Reset the
    // posts state to an empty array.

    // * If there is a subreddity passed then use the fetchR function defined
    // above to fetch its posts.
    // * Store those posts in state so that we can render links to them
  },

  render() {
    const { posts } = this.state;
    return (
      <div className='App'>
        <form onSubmit={this.handleSubmit}>
          <input name='subreddit' type='text' placeholder='Enter Reddit...' />
        </form>
        <div className='posts'>
          {/* Render your posts here */}
        </div>
        {posts.length ? null : <h2>No reddit posts</h2>}
      </div>
    );
  },
});
