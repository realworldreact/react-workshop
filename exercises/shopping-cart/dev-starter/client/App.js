import React from 'react';
import 'normalize.css';

// Import CSS and favicon
import './App.css';
import './favicon.ico';

export const App = React.createClass({
  render() {
    return (
      <div className='App'>
        <img src='https://facebook.github.io/react/img/logo.svg' alt='React Logo' />
        <p>Big wins</p>
      </div>
    );
  },
});
