import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App, PostList } from './App.jsx';

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
    <Route path='r/:r' component={PostList} />

    <Route path='*' component={NotFound} />
  </Route>
);
