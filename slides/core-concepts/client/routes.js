import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import toString from 'lodash/toString';

import { App, NotFound } from './components/App.js';

// Need a list of all slides
const context = require.context('./slides', false, /\.js$/);
const slides = context.keys().sort().map(context);

export const routes = (
  <Route path='/' title='App' component={App}>
    <IndexRedirect to='1' />
    {slides.map((module, i) => {
      const Component = module.__esModule ? module.default : module;
      return <Route key={i} path={toString(i + 1)} component={Component} />;
    })}
    <Route path='*' title='404: Not Found' component={NotFound} />
  </Route>
);

export default routes;
