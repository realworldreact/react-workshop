# **React.js**

## Basics

---

# **Basics**

* Forms & React
* Form Events
* State II
* Array Methods
* Displaying JSON Data
* Async data fetching

---

# **Forms & React**

Forms are a necessity in web apps

^ At some point you're going to want user input

---

# **More Events**

* React standardizes events with `SyntheticEvent`
* Function just like you would expect
* Can `preventDefault`, `stopPropagation` and access event `target`

^ We've already seen event handlers in react. Forms are much the same

^ That last one, event target will prove to be very useful.

^ Students may have heard that many React apps don't use jQuery. `e.target` is a really important helper in this regard.

---

# **Form Events**

```js
const Form = React.createClass({
  getInitialState() {
    email: '',
  },

  handleSubmit(e) {
    e.preventDefault();
    const email = e.target.elements.email.value.trim();
    this.setState({ email });
  },

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name='email' type='email' placeholder='Email...' />
        <button type='submit'>Sign up</button>
      </form>
    );
  },
});
```

---

# **State II**

* Your app will eventually want to display a list of data
* State can be a convenient place to store your lists for rendering

```js
const Form = React.createClass({
  getInitialState() {
    email: '',
    errors: [],
  },

  handleSubmit(e) {
    e.preventDefault();
    const email = e.target.elements.email.value.trim();

    if (!email) {
      this.setState({
        errors: this.state.errors.concat(['Please enter an email']),
      });
    }

    this.setState({ email, errors: [] });
  },

  render() {
    const { email, errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input name='email' type='email' placeholder='Email...' />
        <button type='submit'>Sign up</button>
        {email && <p>Your email is {email}</p>}
        {errors.map((err, i) => (
          <div key={i} className='alert-error'>{err}</div>
        ))}
      </form>
    );
  },
});
```

^ Last presentation we saw basic state. We can (and should) also use state to hold data structures necessary to render the UI

^ The list of data can be shopping cart items, todos, images, etc

^ Can expand this form to have two inputs to demonstrate the necessity of an array instead of just a string value for errors

---

# **Array Methods**

A quick detour...

* Array.prototype.concat
* Array.prototype.map
* Array.prototype.filter
* Array.prototype.reduce

^ Brief sidetrack to talk about Array methods in JS

^ Everyone should have seen these methods in the code assessment

^ We won't be using reduce much here, but it appears often in the wild

^ We almost never use forEach when building react components

---

# **Keys**

^ Let them ask about this when React warns about it

---

# **Displaying JSON Data**

```js
const Item = React.createClass({
  render() {
    return (
      <li>Label: {this.props.item.label}</li>
    );
  },
});

const App = React.createClass({
  getInitialState() {
    items: [],
  },

  componentDidMount() {
    this.setState({
      items: [
        { id: 1, label: 'Item One' },
        { id: 2, label: 'Item Two' },
        { id: 3, label: 'Item Three' },
      ],
    });
  },

  render() {
    const { items } = this.state;
    return (
      <div className='App'>
        <ul>
          {items.map((items, i) => (
            <Item key={item.id} item={item} />
          ))}
        </ul>
      </div>
    );
  },
});
```

---

# **Async Data Fetching**

Use lifecycle hooks

^ So that was fun, but our data almost never comes from in memory. We need to get it from a server somehow.

```js
const Item = React.createClass({
  render() {
    return (
      <li>Label: {this.props.item.label}</li>
    );
  },
});

const App = React.createClass({
  getInitialState() {
    items: [],
  },

  componentDidMount() {
    this.request = $.getJSON('/api/items', items => {
      this.setState({ items });
    });
  },

  componentWillUnmount() {
    this.request.abort();
  },

  render() {
    const { items } = this.state;
    return (
      <div className='App'>
        <ul>
          {items.map((items, i) => (
            <Item key={item.id} item={item} />
          ))}
        </ul>
      </div>
    );
  },
});
```

---

# **Adding a loading state**

```js
const Item = React.createClass({
  render() {
    return (
      <li>Label: {this.props.item.label}</li>
    );
  },
});

const App = React.createClass({
  getInitialState() {
    loading: false,
    items: [],
  },

  componentDidMount() {
    this.setState({ loading: true }); // Start loading here
    this.request = $.getJSON('/api/items', items => {
      this.setState({ items, loading: false });
    });
  },

  componentWillUnmount() {
    this.request.abort();
  },

  render() {
    const { items, loading } = this.state;
    return (
      <div className='App'>
        {loading ? <strong>Loading...</strong> : (
          <ul>
            {items.map((items, i) => (
              <Item key={item.id} item={item} />
            ))}
          </ul>
        )}
      </div>
    );
  },
});
```

---

# **Exercise: Fetch Subreddits based on user input**

Reddit JSON API:

```
https://www.reddit.com/r/${SUBREDDIT}.json
```

Example:

```
https://www.reddit.com/r/reactjs.json
```

^ Use forms, events, array methods, async data loading

^ To get the JSON endpoint for any subreddit just go to it in the browser and then add `.json` to the URL 

^ Try not to be distracted by enticing reddit headlings ;)

---

# **Questions?**

