import createTheme from 'spectacle/lib/themes/default';
import merge from 'lodash/merge';

export const reactBlue = '#00d8ff';

const { screen, print } = createTheme({
  primary: '#222',
  secondary: reactBlue,
  tertiary: 'white',
  quartenary: reactBlue,
});

// Can use this merging strategy to override defaults. For source, see:
// https://github.com/FormidableLabs/spectacle/blob/master/src/themes/default/screen.js
merge(screen, {
  global: {},
  fullscreen: {},
  controlls: {},
  progress: {
    bar: {
      container: {
        height: '5px',
      },
      bar: {
        borderRadius: '3px',
      },
    },
  },
  components: {
    codePane: {
      pre: {
        margin: 'auto',
        fontSize: '1.5rem',
        fontWeight: 'normal',
        minWidth: '100%',
        maxWidth: 800,
      },
      code: {
        textAlign: 'left',
        fontWeight: 'normal',
      },
    },
  },
});

export default {
  screen,
  print,
};
