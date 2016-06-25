import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import { routes } from './routes.js';

// Render the App to the DOM at the <div id='root'></div> element
render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById('root')
);
