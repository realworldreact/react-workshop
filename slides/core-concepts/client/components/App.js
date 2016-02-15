import React, { PropTypes } from 'react';
import { Link, IndexLink, History } from 'react-router';
import 'normalize.css';

// Using CSS Modules so we assign the styles to a variable
import s from './App.styl';
import logo from './react-logo.png';

// Favicon link is in the template, this just makes webpack package it up for us
import './favicon.ico';

const Counter = React.createClass({
  propTypes: {
    count: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
  },

  render() {
    const { count, onIncrement, onDecrement } = this.props;
    return (
      <div className={s.Counter}>
        <div className={s.siteTitle}>
          <h1>{count}</h1>
        </div>
        <div className={s.controls}>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </div>
      </div>
    );
  },
});

export const Home = React.createClass({
  onIncrement() {
    this.setState({ count: count + 1 });
  },
  onDecrement() {
    this.setState({ count: count - 1 });
  },
  render() {
    return (
      <div className={s.page}>
        <Counter
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
          {...this.state} />
      </div>
    );
  },
});

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
  mixins: [History],

  propTypes: {
    children: PropTypes.any,
  },

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  },

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  },

  onNext() {
    // TODO:
    // 1. Get current slide number
    // 2. Add one to it
    // 3. Call this.history.pushState appropriately
    this.history.goForward();
  },

  onPrev() {
    // TODO:
    // 1. Check if there is a pervious slide
    // 2. If so then go to it
    this.history.goBack();
  },

  handleKeyDown(e) {
    const LEFT = 37;
    const RIGHT = 39;

    if (e.which === LEFT) {
      return this.onPrev();
    } else if (e.which === RIGHT) {
      return this.onNext();
    } else {
      return; // Do nothing
    }
  },

  render() {
    return (
      <div className={s.App}>
        <nav className={s.nav}>
          <IndexLink to='/' activeClassName={s.active}>Home</IndexLink>
          <Link to='/about' activeClassName={s.active}>About</Link>
        </nav>
        {this.props.children}
      </div>
    );
  },
});
