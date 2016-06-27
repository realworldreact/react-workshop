import React from 'react';
import Post from './Post.jsx';

export default React.createClass({
  renderPosts(posts) {
    return posts.map((post, i) => (
      <Post key={i} post={post} />
    ));
  },

  render() {
    const { posts = [] } = this.props;
    return (
      <div className='posts'>
        { this.renderPosts(posts) }
        {posts.length ? null : <h2>No reddit posts</h2>}
      </div>
    );
  },
});

