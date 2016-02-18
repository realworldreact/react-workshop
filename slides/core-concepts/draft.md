# **React.js**

## An introduction

---

# **Core concepts**

* Why React
* JSX
* Components & composition
* Props
* Children
* State
* Event handling basics

^ Fairly quick slide since all will be explained in time

^ No questions or comments yet, more to come in other presentations

---

# **Why React?**

* Declarative > Imperative
* Composability
* Reusability
* Render on client and server

^ Probably don't need much convincing since you're already here, but it's good to be able to vocalize why this is good tech

---

# **JSX**

* Tag syntax
  * Exceptions: `for` and `class`
* Props !== HTML attributes
* Brackets
* Gotchas
  * If / else
  * More: https://facebook.github.io/react/docs/jsx-gotchas.html

^ Very similar to HTML, in fact almost exactly the same in terms of tag syntax

---

# **Components**

A group of JSX and JavaScript

* Encapsulation
* Composition

^ Like custom HTML tags that can do whatever you want

^ Touch on what components let you do and why they are important

---

# **Components**

What's it look like:

```js
const App = React.createClass({
  render() {
    return (
      <div className='App'>
        <h1>Hey there</h1>
        <p>I'm a component</p>
      </div>
    );
  },
});
```

---

# **Components**

Three ways to write components

* Original `React.createClass`
* ES6 class syntax, i.e. extned `React.Component`
* Functional

## Don't worry about it

^ We are not going to cover the various ways syntax to write components because it's not important. This is not something you should care about yet and you can always learn it on your own later

^ For presentations we will use React.createClass syntax for simplicity

^ There will be exercises and of course you can use any syntax you prefer

---

# **Encapsulation**

Markup & view-related functionality together at last

* HTML (JSX)
* Derived values
* Event handlers
* Modularized, testable

^ Encapsulation is a benefit, but it does tend to fly in the face of what many people used to think was best practices

^ View-related functionality is key here. Only the functionality necessary for our UI is encompassed by React

^ Putting data binding here is a tease. we won't be talking about it yet but we will later

---

# **Composition**

Combine and re-use components

* DRYer code
* Utilities for the UI
* Large and vibrant ecosystem

^ I.e. you now have utilities you can use in all your UIs

^ Can export components as modules

^ Someone likely already implemented something you need

---

# **Data**

## **(data) => markup**

---

# **Props**

* Component doesn't care where they come from
* Important when integrating with frameworks

---

# **Props**

```js
const Header = React.createClass({
  render() {
    return (
      <div className='Header'>
        <img src='/images/logo.png' alt='Logo' />
        <h1>{this.props.title}</h1>
      </div>
    );
  },
});

render(<App title='My Super App'>, document.getElementById('app'));
```

---

# **State**

* Interactivity
* Change

Examples:

* Value of a `<input />` tag
* Whether the UI is loading or not
* Unread message count

^ State is used to model interactivity and change over time

^ State should be as small as possible

^ State should be JSON serializable

---

### **Rule of thumb**

# Use props...

...until you need state.

Keep state as minimal as possible

^ Default to props. Data can always be migrated into state later

^ Don't worry too much about it now, the WHY will be explained later

---

# **State**

```js
const Toggle = React.createClass({
  getInitialState() {
    return {
      isOn: false,
    };
  },

  toggle(e) {
    this.setState({
      isOn: !this.state.isOn,
    });
  },

  render() {
    const { isOn } = this.state;
    return (
      <div
        style={{ color: isOn ? 'green' : 'black' }}
        onClick={this.toggle}>
        {isOn ? 'On' : 'Off'}
      </div>
    );
  },
});
```

---

# **Children**

Adding custom markup to components

```js
const Alert = React.createClass({

  // Other Alert functionality... 

  render() {
    return (
      <div className={'Alert ' + this.props.type}>
        {this.props.children}
      </div>
    );
  }
});

<Alert type='error'>
  <strong>Warning</strong> You must be logged in to do that.
</Alert>
```

^ Maybe leave this one out for the second presentation

---

# **Event handling**

* Attached directly to components
* Aggregated by React
* Standardized across all browsers

^ This will feel very odd for anyone coming from a Backbone background. 

^ Basically works like old-schole `onclick` attributes work: You attach directly to an element

---

# **Event handling**

```js
<button onClick={() => console.log('Clicked')}>
  Click Me!
</button>
```

---

# **Exercise: Counter**

^ May be too easy for some, bare with us. Still much to come

^ Take your time. We're here to help. What's key is solidifying the concepts in your mind

---

# **Questions?**

