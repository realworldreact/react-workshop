import React, { PropTypes } from 'react';
import take from 'lodash/take';

const ENDPOINT = 'https://www.reddit.com/r/';

const Counter = React.createClass({
  propTypes: {
    count: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
  },

  render() {
    const { count, onIncrement, onDecrement } = this.props;
    return (
      <div className='Counter'>
        <div className='siteTitle'>
          <h1>{count}</h1>
        </div>
        <div className='controls'>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </div>
      </div>
    );
  },
});

const mapRedditPost = post => post.data;

const Post = React.createClass({
  render() {
    const { permalink, title } = mapRedditPost(this.props.post);
    return (
      <div className='Post'>
        <a href={`https://www.reddit.com${permalink}`} target='_blank'>{title}</a>
      </div>
    );
  },
});

export const RedditFetch = React.createClass({
  getInitialState() {
    return {
      posts: [],
    };
  },

  fetch(subreddit) {
    return fetch(ENDPOINT + subreddit + '.json')
    .then(res =>  res.json())
    .then(json => take(json.data.children, 5)) // only take 5 posts
    .catch(err => console.error('There was an error fetching.', err));
  },

  handleSubmit(e) {
    e.preventDefault();
    const subreddit = e.target.elements.subreddit.value.trim();

    if (!subreddit) {
      Promise.resolve([]).then(posts => this.setState({ posts }));
      return;
    }

    this.fetch(subreddit)
    .then(posts => this.setState({ posts }))
    .catch(err => console.error(err));
  },

  render() {
    const { posts } = this.state;
    return (
      <div className='RedditFetch'>
        <form onSubmit={this.handleSubmit}>
          <input style={{ width: '100%' }} name='subreddit' type='text' placeholder='Enter Reddit...' />
        </form>
        {posts.length ? (
          <div className='posts'>
            {posts.map((post, i) => (
              <Post key={i} post={post} />
            ))}
          </div>
        ) : <h2>No reddit posts</h2>}
      </div>
    );
  },
});
