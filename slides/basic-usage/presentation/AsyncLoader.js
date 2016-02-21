import React from 'react';

const Item = React.createClass({
  render() {
    return (
      <li>Label: {this.props.item.label}</li>
    );
  },
});

export const AsyncLoader = React.createClass({
  getInitialState() {
    return {
      items: [],
      load: false,
    };
  },

  // Check out the lifecycle docs
  // https://facebook.github.io/react/docs/component-specs.html
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        items: [
          { id: 1, label: 'Item One' },
          { id: 2, label: 'Item Two' },
          { id: 3, label: 'Item Three' },
        ],
      });
    }, 2000);
  },

  start() {
    this.setState({ load: true });
  },

  render() {
    const { items } = this.state;
    return (
      <div>
        {items.length ? null : <h1>Loading...</h1>}
        <ul style={{ color: 'white', margin: '0 auto', width: 300 }}>
          {items.map(item => (
            <Item key={item.id} item={item} />
          ))}
        </ul>
      </div>
    );
  },
});
