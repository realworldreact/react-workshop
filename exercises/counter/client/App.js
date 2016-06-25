import React from 'react';
import 'normalize.css';

export const App = React.createClass({
  getInitialState() {
    return {
      count: 0, // The initial count
    };
  },

  handleIncrement() {
    console.log('This is where the increment code should go...');
  },

  render() {
    return (
      <div className='App Counter'>
        <img src='https://facebook.github.io/react/img/logo.svg' alt='React Logo' />
        <h1>{this.state.count}</h1>
        <div>
          <button onClick={this.handleIncrement}>+</button>
          <button>-</button>
        </div>
      </div>
    );
  },
});
