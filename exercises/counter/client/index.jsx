import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Import the App component
import { store, ConnectedApp } from './App.jsx';

// Render the App to the DOM at the <div id='root'></div> element
render(
  <Provider store={ store }>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);
