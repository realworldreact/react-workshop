import React from 'react';
import Posts from './Posts.jsx';

const ENDPOINT = 'https://www.reddit.com/r/';
export default React.createClass({
  displayName: 'RedditAppContainer',

  getInitialState: function() {
    return { posts: [] };
  },

  fetchPosts: function() {
    // modern fetch API
    fetch(ENDPOINT + 'freecodecamp.json')
      .then(res => res.json())
      .then(json => json.data.children)
      .then(posts => posts || Promise.reject(posts))
      .then(posts => posts.slice(0, 4))
      .then(posts => posts.map(x => x.data))
      .then(posts => this.setState({ posts: posts }) )
      .catch(err => console.error('There was an error fetching.', err));
  },

  render: function() {
    const { posts } = this.state;
    return (
      <div className='App'>
        <div className='posts'>
          <Posts
            fetch={ this.fetchPosts }
            posts={ posts }
          />
        </div>
      </div>
    );
  }
});
