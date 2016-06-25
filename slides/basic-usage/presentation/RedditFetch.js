import React, { PropTypes } from 'react';
import take from 'lodash/take';

const ENDPOINT = 'https://www.reddit.com/r/';

const Post = React.createClass({
  render() {
    const { permalink, title } = this.props.post.data;
    return (
      <div className='Post'>
        <a style={{ color: 'lightblue' }} href={`https://www.reddit.com${permalink}`} target='_blank'>{title}</a>
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
