import React from 'react';
import { Text } from 'spectacle';

export default React.createClass({
  displayName: 'Uncontrolled',
  getInitialState() {
    return {};
  },

  handleSubmit: function(e) {
    e.preventDefault();
    const value = e.target.myInput.value;
    this.setState({ submitted: value });
  },

  handleChange: function(e) {
    console.log('value changed', e.target.value);
  },

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <Text textColor='secondary'>Uncontrolled</Text>
          <input
            name='myInput'
            onChange={ this.handleChange }
            type='text'
          />
        </form>
        <div style={{ height: '10px' }} />
        <Text textColor='secondary'>Last Value Submitted</Text>
        <input
          placeholder='No value submitted'
          type='text'
          value={ this.state.submitted }
        />
      </div>
    );
  }
});
