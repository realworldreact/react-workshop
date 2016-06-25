import React from 'react';
import { Text } from 'spectacle';

const ENDPOINT = 'https://www.reddit.com';
const Post = React.createClass({
  display: 'Post',
  propTypes: {
    href: React.PropTypes.string,
    title: React.PropTypes.string
  },

  render() {
    const href = this.props.href;
    const title = this.props.title;
    return (
      <div className='Post'>
        <a
          href={ ENDPOINT + href }
          target='_blank'
          >
          <Text textColor='secondary'>
            { title }
          </Text>
        </a>
      </div>
    );
  }
});

export default React.createClass({
  displayName: 'Posts',
  propTypes: {
    posts: React.PropTypes.array,
    fetch: React.PropTypes.func
  },

  renderPosts(posts, fetch) {
    // check if posts is empty
    if (!posts.length) {
      return <button onClick={ fetch }>Fetch some posts!</button>;
    }
    return posts.map(post => (
      <Post
        href={ post.permalink }
        key={ post.title }
        title={ post.title }
      />
    ));
  },

  render() {
    const { fetch, posts } = this.props;
    return (
      <div className='App'>
        <div className='posts'>
          { this.renderPosts(posts, fetch) }
        </div>
      </div>
    );
  }
});
