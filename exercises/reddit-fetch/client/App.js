import React, { PropTypes } from 'react';
import 'normalize.css';

// Import CSS and favicon
import './App.css';
import './favicon.ico';

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

export const App = React.createClass({
  getInitialState() {
    return {
      posts: [],
    };
  },

  fetch(subreddit) {
    return fetch(ENDPOINT + subreddit + '.json')
    .then(res =>  res.json())
    .then(json => json.data.children)
    .catch(err => console.error('There was an error fetching.', err));
  },

  handleSubmit(e) {
    e.preventDefault();

    const subreddit = e.target.elements.subreddit.value.trim();
    if (!subreddit) {
      Promise.resolve([]).then(posts => this.setState({ posts }))
      return;
    }

    this.fetch(subreddit)
    .then(posts => this.setState({ posts }))
    .catch(err => console.error(err));
  },

  render() {
    const { posts } = this.state;
    console.log(this.state);
    return (
      <div className='App'>
        <form onSubmit={this.handleSubmit}>
          <input name='subreddit' type='text' placeholder='Enter Reddit...' />
        </form>
        <div className='posts'>
          {posts.map((post, i) => (
            <Post key={i} post={post} />
          ))}
        </div>
      </div>
    );
  },
});
