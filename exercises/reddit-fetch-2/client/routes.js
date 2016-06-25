import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App, PostList } from './App.js';

const Home = () => (
  <div className='Home'>
    <h1>Home Page</h1>
  </div>
);

const NotFound = (props) => (
  <div className='Home'>
    <h1>{props.location.pathname} not found...</h1>
  </div>
);

export const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    {/*
      We'll want to add some new routes here. We'll want to add a route for the
      PostList we've imported above, as well as a catch-all route to act as a
      client-side 404.
    */}
  </Route>
);
