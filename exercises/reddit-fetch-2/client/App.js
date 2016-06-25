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

// PostList has been refactored into its own exportable component so that we can
// use it with the Router
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
      loading: false,
    };
  },

  componentDidMount() {
    // We will need to fetch any subreddit that is already in the URL bar when
    // the component mounts
  },

  componentDidUpdate(prevProps, prevState) {
    // We will want to fetch the current sub reddit if it has changed. I.e. if
    // the user has input a new subreddit to fetch
  },

  // Fetch the sub reddit and update state. Note that now instead of reading
  // from the input field we are reading from the URL params provided to us by
  // react router
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

    // If there is no subreddit (i.e. the input field is empty) then redirec the
    // user to the home page '/'

    // If we do have a subreddit then redirect the user to /r/:subreddit using
    // the router
  },

  render() {
    const { posts } = this.state;
    return (
      <div className='App'>
        <form onSubmit={this.handleSubmit}>
          <input name='subreddit' type='text' placeholder='Enter Reddit...' />
        </form>

        {/* We will need to pass down the posts as we did before... */}
        {this.props.children}
        {this.state.loading && <h1>Loading...</h1>}
      </div>
    );
  },
});
