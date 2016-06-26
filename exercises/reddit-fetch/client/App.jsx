import React from 'react';

const ENDPOINT = 'https://www.reddit.com/r/';

const fetchR = (subreddit) => {
  return fetch(ENDPOINT + subreddit + '.json')
  .then(res =>  res.json())
  .then(json => json.data.children)
  .catch(err => console.error('There was an error fetching.', err));
};

const Post = React.createClass({
  render() {
    const { permalink, title } = this.props.post.data;
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

  handleSubmit(e) {
    e.preventDefault();
    const subreddit = e.target.elements.subreddit.value.trim();

    if (!subreddit) {
      Promise.resolve([]).then(posts => this.setState({ posts }));
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
