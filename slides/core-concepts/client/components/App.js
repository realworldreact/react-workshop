import React, { PropTypes } from 'react';
import { Link, IndexLink, History, Location } from 'react-router';
import toNumber from 'lodash/toNumber';
import 'normalize.css';

// Using CSS Modules so we assign the styles to a variable
import s from './App.styl';

// Favicon link is in the template, this just makes webpack package it up for us
import './favicon.ico';

export const NotFound = React.createClass({
  render() {
    return (
      <div className={s.page}>
        <h4>Not found</h4>
      </div>
    );
  },
});

/**
 * NOTE: As of 2015-11-09 react-transform does not support a functional
 * component as the base compoenent that's passed to ReactDOM.render, so we
 * still use createClass here.
 */
export const App = React.createClass({
  mixins: [History, Location],

  propTypes: {
    children: PropTypes.any,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  },

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  },

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  },

  onNext() {
    // TODO:
    // Do not call if we are on the last slide
    const next = toNumber(this.props.location.pathname.slice(1)) + 1;
    this.props.history.pushState(null, `/${next}`);
  },

  onPrev() {
    const prev = toNumber(this.props.location.pathname.slice(1)) - 1;
    if (prev < 1) return;
    this.props.history.pushState(null, `/${prev}`);
  },

  toggleFullscreen() {
    // TODO
    console.log('Toggling full screen');
  },

  handleKeyDown(e) {
    const LEFT = 37;
    const RIGHT = 39;
    const F = 70;

    if (e.which === LEFT)
      return this.onPrev();
    else if (e.which === RIGHT)
      return this.onNext();
    else if (e.which === F && e.shiftKey && !e.metaKey && !e.ctrlKey)
      return this.toggleFullscreen();
    else
      return; // Do nothing
  },

  render() {
    return (
      <div className={s.App}>
        {this.props.children}
      </div>
    );
  },
});
