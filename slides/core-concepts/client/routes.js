import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import { App, NotFound } from './components/App.js';

import Intro from './slides/1-intro.js';
import About from './slides/2-about.js';
import FurtherReading from './slides/3-further-reading.js';

// Need a list of all slides

export const routes = (
  <Route path='/' title='App' component={App}>
    <IndexRedirect to='1' />
    <Route path='1' component={Intro} />
    <Route path='2' component={About} />
    <Route path='3' component={FurtherReading} />
    <Route path='*' title='404: Not Found' component={NotFound} />
  </Route>
);

export default routes;
