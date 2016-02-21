import React from 'react';

/**
 * @module FormValues
 */
export const FormValues = React.createClass({
  getInitialState() {
    return {
      val: '',
    };
  },

  handleSubmit(e) {
    e.preventDefault();
    const val = e.target.elements.input.value.trim();
    this.setState({ val });
  },

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name='input'
            type='text'
            placeholder='Type something...'
            style={{ padding: 10, width: '100%' }}
          />
        </form>
        <pre style={{
          backgroundColor: '#111',
          border: '1px solid black',
          padding: 10,
          color: '#999',
        }}>
          Input value:{' '}
          <span style={{ color: 'white' }}>{this.state.val}</span>
        </pre>
      </div>
    );
  },
});
