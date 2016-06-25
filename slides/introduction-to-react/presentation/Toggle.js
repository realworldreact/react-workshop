import React from 'react';

export const Toggle = React.createClass({
  getInitialState() {
    return {
      isOn: false,
    };
  },

  toggle() {
    this.setState({
      isOn: !this.state.isOn,
    });
  },

  render() {
    const { isOn } = this.state;
    return (
      <div
        onClick={this.toggle}
        style={{
          fontSize: 70,
          lineHeight: 8,
          fontWeight: 'bold',
          background: isOn ? 'yellow' : 'gray',
          color: isOn ? 'purple' : 'white',
        }}>
        {isOn ? 'On' : 'Off'}
      </div>
    );
  },
});
