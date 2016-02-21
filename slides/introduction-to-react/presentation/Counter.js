import React, { PropTypes } from 'react';

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
          <button style={{
            fontWeight: 'bold',
            color: 'black',
            width: 50,
            height: 50,
          }}
          onClick={onDecrement}>-</button>
          <button style={{
            fontWeight: 'bold',
            color: 'black',
            width: 50,
            height: 50,
          }}
          onClick={onIncrement}>+</button>
        </div>
      </div>
    );
  },
});

export const CounterContainer = React.createClass({
  getInitialState() {
    return {
      count: 0,
    };
  },
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  },
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
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
  handleKeyDown(e) {
    const UP = 38;
    const DOWN = 40;

    if (e.which === DOWN) {
      return this.onDecrement();
    } else if (e.which === UP) {
      return this.onIncrement();
    } else {
      return; // Do nothing
    }
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

