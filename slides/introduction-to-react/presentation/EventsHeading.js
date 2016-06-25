import React from 'react';
import please from 'pleasejs';
import throttle from 'lodash/throttle';

const style = {
  fontSize: 16,
  display: 'block',
  margin: 0,
  padding: 0,
  lineHeight: 1,
  transform: 'scale(18)',
  transformOrigin: 'center top 0px',
};

const spanStyles = {
  transition: 'color 0.2s ease-out, transform 0.2s ease-out',
  transform: 'translateY(0)',
  display: 'inline-block',
};

const randomTop = (range) => {
  const top = Math.round(Math.random() * (range * 2) - range); // -10 < x < 10
  return `translateY(${top}px)`;
};

export class EventsHeading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      e: { color: 'white', transform: 'translateY(0px)' },
      v: { color: 'white', transform: 'translateY(0px)' },
      e2: { color: 'white', transform: 'translateY(0px)' },
      n: { color: 'white', transform: 'translateY(0px)' },
      t: { color: 'white', transform: 'translateY(0px)' },
      s: { color: 'white', transform: 'translateY(0px)' },
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.randomizeColors);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.randomizeColors);
  }

  randomizeColors = () => {
    const [ e, v, e2, n, t, s ] = please.make_color({
      colors_returned: 6,
      full_random: true,
    });

    const range = 5;

    this.setState({
      e: { color: e, transform: randomTop(range) },
      v: { color: v, transform: randomTop(range) },
      e2: { color: e2, transform: randomTop(range) },
      n: { color: n, transform: randomTop(range) },
      t: { color: t, transform: randomTop(range) },
      s: { color: s, transform: randomTop(range) },
    });
  };

  render() {
    const { e, v, e2, n, t, s } = this.state;
    return (
      <div onClick={this.randomizeColors}>
        <h1 style={style}>
          <span style={{ ...spanStyles, ...e }}>E</span>
          <span style={{ ...spanStyles, ...v }}>V</span>
          <span style={{ ...spanStyles, ...e2 }}>E</span>
          <span style={{ ...spanStyles, ...n }}>N</span>
          <span style={{ ...spanStyles, ...t }}>T</span>
          <span style={{ ...spanStyles, ...s }}>S</span>
        </h1>
      </div>
    );
  }
}
