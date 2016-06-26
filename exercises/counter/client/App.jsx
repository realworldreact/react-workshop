import React from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';
// var createStore = require('redux').createStore;

// type
// action {
//   type: 'INC'
// }
// action {
//   type: 'DEC'
// }
// reducer(state, action) => state
//
// action types
const INC = 'INC';
const DEC = 'DEC';
const initialState = {
  count: 0
};

function reducer(state, action) {
  state = state || initialState;
  if (action.type === INC) {
    return {
      ...state,
      count: state.count + 1
    };
  }
  if (action.type === DEC) {
    return {
      ...state,
      count: state.count <= 0 ? 0 : state.count - 1
    };
  }
  return state;
}

export const store = createStore(reducer);
// typeof store.subscribe === 'function'
// typeof store.dispatch === 'function'

// store.dispatch({ type: INC });

const App = React.createClass({
  handleIncrement() {
    this.props.dispatch({ type: INC });
  },

  handleDec() {
    this.props.dispatch({ type: DEC });
  },

  render() {
    return (
      <div className='App Counter'>
        <img src='https://facebook.github.io/react/img/logo.svg' alt='React Logo' />
        <h1>{this.props.count}</h1>
        <div>
          <button onClick={this.handleIncrement}>+</button>
          <button onClick={ this.handleDec }>-</button>
        </div>
      </div>
    );
  },
});

export const ConnectedApp = connect(
  (state) => state)
)(App);
// const createConnectComponent = connect(
//   state => state
//);
// export const ConnectApp = createConnectedComponent(
//   App
// );
