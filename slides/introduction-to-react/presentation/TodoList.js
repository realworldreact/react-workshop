import React from 'react';

export const TodoList = React.createClass({
  getInitialState() {
    return {
      stuff: [],
    };
  },

  handleSubmit(e) {
    e.preventDefault();
    const input = e.target.elements.input;
    const val = input.value.trim();
    const { stuff } = this.state;
    const thing = {
      id: stuff.length,
      val,
    };

    // Add the thing
    this.setState({ stuff: [ ...stuff, thing ] });

    // Reset the input
    input.value = '';
  },

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name='input'
            type='text'
            placeholder='Type some stuff...'
            style={{ padding: 10, width: '100%' }}
          />
        </form>
        <ul style={{ textAlign: 'left' }}>
          {this.state.stuff.map(thing => (
            <li key={thing.id}>{thing.val}</li>
          ))}
        </ul>
        <button style={{ color: 'black' }}>Reset</button>
      </div>
    );
  },
});
