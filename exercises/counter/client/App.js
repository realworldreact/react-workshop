import React, { PropTypes } from 'react';
import 'normalize.css';

// Import CSS and favicon
import './App.css';
import './favicon.ico';

const Counter = React.createClass({
  propTypes: {
    count: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
  },

  render() {
    const { count, onIncrement, onDecrement } = this.props;
    return (
      <div className='Counter'>
        <div className='siteTitle'>
          <h1>{count}</h1>
        </div>
        <div className='controls'>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </div>
      </div>
    );
  },
});

export const App = React.createClass({
  getInitialState() {
    return {
      count: 0,
    };
  },
  onIncrement() {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  },
  onDecrement() {
    const { count } = this.state;
    if (count === 0) return; // Don't go below zero
    this.setState({ count: count - 1 });
  },
  render() {
    return (
      <div className='App'>
        <Counter
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
          {...this.state} />
      </div>
    );
  },
});
