import React, { PropTypes } from 'react';
import 'normalize.css';

// Import CSS and favicon
import './App.css';

class Counter extends React.Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
  };

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
  }
}

export class App extends React.Component {
  state = {
    count: 0,
  };

  constructor(props) {
    super(props);
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  onIncrement = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  onDecrement = () => {
    const { count } = this.state;
    if (count === 0) return; // Don't go below zero
    this.setState({ count: count - 1 });
  };

  handleKeyDown = (e) => {
    const LEFT = 37;
    const RIGHT = 39;
    const UP = 38;
    const DOWN = 40;

    if (e.which === LEFT || e.which === DOWN) {
      return this.onDecrement();
    } else if (e.which === RIGHT || e.which === UP) {
      return this.onIncrement();
    } else {
      return; // Do nothing
    }
  };

  render() {
    return (
      <div className='App'>
        <Counter
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
          count={this.state.count} />
      </div>
    );
  }
}
