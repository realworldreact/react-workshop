import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import { store } from './App.jsx';
import { routes } from './routes.js';

// Render the App to the DOM at the <div id='root'></div> element
render(
  <Provider store={ store }>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
