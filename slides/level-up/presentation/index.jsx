import React from 'react';
import {
  Heading,
  Deck,
  Slide,
  Spectacle,
  List,
  ListItem,
  CodePane,
  Text
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import CodeSlide from 'spectacle-code-slide';
import UncontrolledForm from './Uncontrolled-Form.jsx';
import ControlledForm from './Controlled-Form.jsx';
import RedditApp from './Reddit-App.jsx';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const reactBlue = '#00d8ff';

const theme = createTheme({
  primary: '#222',
  secondary: reactBlue,
  tertiary: 'white',
  quartenary: reactBlue
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={ theme }>
        <Deck
          transition={[ 'zoom', 'slide' ]}
          transitionDuration={ 500 }
          >
          <Slide transition={[ 'zoom' ]}>
            <Heading
              caps={ true }
              fit={ true }
              lineHeight={ 1 }
              size={ 1 }
              >
              Leveling Up
            </Heading>
            <Heading
              caps={ true }
              fit={ true }
              size={ 2 }
              >
              state management
            </Heading>
          </Slide>
          <Slide>
            <List>
              <ListItem>
                <Heading
                  caps={ true }
                  size={ 2 }
                  >
                  Controlled Input
                </Heading>
              </ListItem>
              <ListItem>
                <Heading
                  caps={ true }
                  size={ 2 }
                  >
                  One-way data flow
                </Heading>
              </ListItem>
              <ListItem>
                <Heading
                  caps={ true }
                  size={ 2 }
                  >
                  Container Pattern
                </Heading>
              </ListItem>
              <ListItem>
                <Heading
                  caps={ true }
                  size={ 2 }
                  >
                  Talking to Parents
                </Heading>
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={ 2 }>
              Controlled vs Uncontrolled Inputs
            </Heading>
            <Text textColor='tertiary'>
              Controlling the value of inputs using React vs classical style
              uncontrolled inputs
            </Text>
          </Slide>
          <Slide>
            <List>
              <ListItem>
                Uncontrolled forms (Classic HTML style)
              </ListItem>
              <ListItem>
                Same as HTML5 forms
              </ListItem>
              <ListItem>
                The value of the input is immediately rendered
              </ListItem>
              <ListItem>
                Use form action or onSubmit event
              </ListItem>
            </List>
          </Slide>
          <CodeSlide
            code={ require('raw!../assets/uncontrolled.example') }
            lang='jsx'
            ranges={[
              { loc: [18, 25] },
              { loc: [18, 19], title: 'A Function' },
              { loc: [9, 14] },
              { loc: [11, 12], note: 'grab the value' },
              { loc: [12, 13], note: 'store the value on submit' },
              { loc: [27, 32], note: 'display the value on next render' }
            ]}
            textSize={ 20 }
            transition={['zoom', 'fade']}
          />
          <Slide>
            <UncontrolledForm />
          </Slide>
          <Slide>
            <List>
              <ListItem>
                Value comes from props
              </ListItem>
              <ListItem>
                Unchangable
              </ListItem>
              <ListItem>
                Manipulatable with JavaScript!
              </ListItem>
            </List>
          </Slide>
          <CodeSlide
            code={ require('raw!../assets/controlled.example') }
            lang='jsx'
            ranges={[
              { loc: [25, 33] },
              { loc: [30, 31], title: 'Input Component Value'},
              { loc: [30, 31], note: 'a string'},
              { loc: [28, 29], title: 'Input onChange Handler' },
              { loc: [28, 29], note: 'a function' },
              { loc: [17, 21], note: 'store value on every keystroke' },
              { loc: [6, 10], note: 'initial value for input components' }
            ]}
            textSize={ 20 }
            transition={['zoom', 'fade']}
          />
          <Slide>
            <ControlledForm />
          </Slide>
          <CodeSlide
            code={ require(
              'raw!../assets/controlled-with-url-formatter.example'
            ) }
            lang='jsx'
            ranges={[
              { loc: [2, 3] },
              { loc: [5, 24] },
              { loc: [6, 11] },
              { loc: [20, 21] },
              { loc: [22, 23] },
              { loc: [39, 43] },
              { loc: [41, 42], note: 'format value before storing value' }
            ]}
            textSize={ 20 }
            transition={['zoom', 'fade']}
          />
          <Slide>
            <Heading size={ 2 }>
              Container Pattern
            </Heading>
            <List>
              <ListItem>
                Container components
              </ListItem>
              <ListItem>
                Presentational Components
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={ 2 }>
              Presentational Components
            </Heading>
            <List>
              <ListItem>
                Only renders data coming form props
              </ListItem>
              <ListItem>
                Can render other presentational components
              </ListItem>
              <ListItem>
                Renders the same view for the same props
              </ListItem>
            </List>
          </Slide>
          <CodeSlide
            code={require('raw!../assets/presentational-component.example')}
            lang='jsx'
            ranges={[
              { loc: [4, 6], title: 'Presents a Post' },
              { loc: [6, 10], note: 'only renders props' },
              { loc: [12, 14], note: 'only renders props' },
              { loc: [16, 20], note: 'only renders props' },
              { loc: [17, 18], note: 'only renders props' },
              { loc: [20, 23] },
              { loc: [21, 22] },
              { loc: [28, 31], title: 'Presents a List of Posts' },
              { loc: [31, 35], note: 'only renders props' },
              { loc: [50, 51], note: 'only renders props' },
              { loc: [51, 52], note: 'only renders props' },
              { loc: [53, 58] },
              { loc: [55, 56], note: 'sends posts to method' },
              { loc: [36, 37] },
              { loc: [38, 41] },
              { loc: [41, 42] },
              { loc: [42, 47] }
            ]}
            textSize={ 20 }
            transition={['zoom', 'fade']}
          />
          <Slide>
            <Heading size={ 2 }>
              Container Components
            </Heading>
            <List>
              <ListItem>
                No rendered data
              </ListItem>
              <ListItem>
                May fetch
              </ListItem>
              <ListItem>
                May Store
              </ListItem>
              <ListItem>
                Passes State
              </ListItem>
            </List>
          </Slide>
          <CodeSlide
            code={require('raw!../assets/container-component.example')}
            lang='jsx'
            ranges={[
              { loc: [4, 6], title: 'Container Contains a Component' },
              { loc: [24, 25] },
              { loc: [26, 34] },
              { loc: [28, 32], note: 'pass data to presentational component' },
              { loc: [30, 31], note: 'an array' },
              { loc: [29, 30], note: 'a function' },
              { loc: [11, 22] },
              { loc: [13, 14] },
              { loc: [3, 4] },
              { loc: [14, 19] },
              { loc: [19, 20] },
              { loc: [28, 32], note: 'pass data to presentational component' }
            ]}
            textSize={ 20 }
            transition={['zoom', 'fade']}
          />
          <Slide>
            <RedditApp />
          </Slide>
          <Slide>
            <Heading size={ 2 }>
              Talking to Parents
            </Heading>
          </Slide>
          <Slide>
            <Heading size={ 2 }>
              How do I call setState on parents?
            </Heading>
          </Slide>
          <Slide>
            <Heading size={ 2 }>
              Use callbacks!
            </Heading>
            <List>
              <ListItem>
                Children should know nothing about parent structure
              </ListItem>
              <ListItem>
                Children can send information up through callbacks
              </ListItem>
              <ListItem>
                Callbacks are created by parent passed down as props
              </ListItem>
            </List>
          </Slide>
          <CodeSlide
            code={require('raw!../assets/container-component.example')}
            lang='jsx'
            ranges={[
              { loc: [29, 30], title: 'Passing around functions' },
              { loc: [11, 22] },
              { loc: [19, 20] }
            ]}
            textSize={ 20 }
            transition={['zoom', 'fade']}
          />
          <Slide>
            <Heading size={ 1 }>
              Exercise
            </Heading>
            <Heading size={ 2 }>
              Redit Fetcher: Add real time filtering
            </Heading>
            <hr />
            <CodePane
              lang='js'
              source={require('raw!../assets/filtering.example')}
            />
          </Slide>
          <Slide>
            <Heading size={ 2 }>
              Questions?
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
