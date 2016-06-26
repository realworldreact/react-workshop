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

  // This is how we can access the router from within our component
  contextTypes: {
    router: React.PropTypes.object,
  },

  getInitialState() {
    return {
      posts: [],
    };
  },

  // Make sure to fetch on initial load to support deep linking
  componentDidMount() {
    if (this.props.params.r) {
      this.fetchSubreddit();
    }
  },

  // Make sure to fetch every time the URL changes
  componentDidUpdate(prevProps, prevState) {
    const { params } = this.props;
    if (params.r && params.r !== prevProps.params.r) {
      this.fetchSubreddit();
    }
  },

  // Fetch teh sub reddit and update state
  fetchSubreddit() {
    const subreddit = this.props.params.r;

    fetchR(subreddit)
    .then(posts => this.setState({ posts }))
    .catch(err => {
      this.setState({ posts: [] });
      console.error(err);
    });
  },

  // When the form is submitted simply redirect the user to the appropriate page
  handleSubmit(e) {
    e.preventDefault();
    const subreddit = e.target.elements.subreddit.value.trim();
    const { router } = this.context;

    if (!subreddit) {
      router.push('/');
      return;
    }

    router.push(`/r/${subreddit}`);
  },

  render() {
    const { posts } = this.state;
    return (
      <div className='App'>
        <form onSubmit={this.handleSubmit}>
          <input name='subreddit' type='text' placeholder='Enter Reddit...' />
        </form>
        {React.cloneElement(this.props.children, { posts })}
      </div>
    );
  },
});
