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
  .catch(err => console.error('There was an error fetching.', err));
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

export const App = React.createClass({
  getInitialState() {
    return {
      posts: [],
    };
  },


  handleSubmit(e) {
    e.preventDefault();
    const subreddit = e.target.elements.subreddit.value.trim();

    if (!subreddit) {
      this.setState({ posts: [] });
      return;
    }

    fetchR(subreddit)
    .then(posts => this.setState({ posts }))
    .catch(err => console.error(err));
  },

  render() {
    const { posts } = this.state;
    return (
      <div className='App'>
        <form onSubmit={this.handleSubmit}>
          <input name='subreddit' type='text' placeholder='Enter Reddit...' />
        </form>
        <PostList posts={posts} />
      </div>
    );
  },
});
