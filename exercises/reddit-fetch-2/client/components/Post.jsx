import React from 'react';

export default React.createClass({
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
