import createTheme from 'spectacle/lib/themes/default';
import merge from 'lodash/merge';

export const reactBlue = '#00d8ff';

const { screen, print } = createTheme({
  primary: '#222',
  secondary: reactBlue,
  tertiary: 'white',
  quartenary: reactBlue,
});

// Can use this merging strategy to override defaults
merge(screen.global, {});

export default {
  screen,
  print,
};
