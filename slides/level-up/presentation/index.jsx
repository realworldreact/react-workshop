import React from 'react';
import {
  Heading,
  Deck,
  Slide,
  Spectacle,
  List,
  ListItem,
  CodePane,
  Text,
  Link
} from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');


const theme = createTheme({ primary: 'lightgray' });

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={ theme }>
        <Deck
          transition={[ 'zoom', 'slide' ]}
          transitionDuration={ 500 }>
          <Slide transition={[ 'zoom' ]}>
            <Heading
              caps
              fit
              lineHeight={ 1 }
              size={ 1 }>
              Leveling Up
            </Heading>
            <Heading
              caps
              fit
              size={ 2 }>
              Form control and state management
            </Heading>
          </Slide>
          <Slide>
            <List>
              <ListItem>
                <Heading
                  caps
                  size={ 2 }>
                  Controlled Input
                </Heading>
              </ListItem>
              <ListItem>
                <Heading
                  caps
                  size={ 2 }>
                  One-way data flow
                </Heading>
              </ListItem>
              <ListItem>
                <Heading
                  caps
                  size={ 2 }>
                  Container Pattern
                </Heading>
              </ListItem>
              <ListItem>
                <Heading
                  caps
                  size={ 2 }>
                  Talking to Parents
                </Heading>
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={ 4 }>
              Controlled vs Uncontrolled Inputs
            </Heading>
            <Text>
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
                Same as HTMl5 forms
              </ListItem>
              <ListItem>
                The value of the input is immediately rendered
              </ListItem>
              <ListItem>
                Use form action or onSubmit event
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <Link
              href='http://jsbin.com/redigaxugu/edit?js,console,output'
              target='_blank'>
              <CodePane
                lang='jsx'
                source={ require('raw!../assets/uncontrolled.example') } />
            </Link>
          </Slide>
          <Slide>
            <List>
              <ListItem>
                Controlled inputs using `value` and state
              </ListItem>
                React is responsible for the display of the component
              <ListItem>
                If value does not change, input field does not change
              </ListItem>
              <ListItem>
                Allows for special manipulation of the input field using
                Javascript
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <Link
              href='https://jsbin.com/gacomo/edit?js,console,output'
              target='_blank'>
              <CodePane
                lang='jsx'
                source={require('raw!../assets/controlled.example')} />
            </Link>
          </Slide>
          <Slide>
            <Heading size={ 2 }>
              Container Pattern
            </Heading>
            * Dump (presentational) components render state
            * Smart (Container) components manage state and data fetching
          </Slide>
          <Slide>
            <Heading size={ 2 }>
              Dump Components
            </Heading>
            <List>
              <ListItem>
                Only renders props
              </ListItem>
              <ListItem>
                Can render other dump components
              </ListItem>
              <ListItem>
                Renders the same view for the same props
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <Link
              href='https://jsbin.com/runuwi/edit?js,output'
              target='_blank'>
              <CodePane
                lang='jsx'
                source={require('raw!../assets/dump-component.example')} />
            </Link>
          </Slide>
          <Slide>
            <Heading size={ 2 }>
              Smart Components
            </Heading>
            <List>
              <ListItem>
                No or very little view elements
              </ListItem>
              <ListItem>
                May be responsible for API calls
              </ListItem>
              <ListItem>
                May have internal state
              </ListItem>
              <ListItem>
                Passes state down to child components through props
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <Link
              href='https://jsbin.com/tebegi/edit?js,output'
              target='_blank'>
              <CodePane
                lang='jsx'
                source={require('raw!../assets/smart-component.example')} />
            </Link>
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
                Children should no nothing about parent structure
              </ListItem>
              <ListItem>
                Children can send information up through callbacks
              </ListItem>
              <ListItem>
                Callbacks are created by parent passed down as props
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={ 2 }>
            </Heading>
          </Slide>
          <Slide>
            <Heading size={ 2 }>
            </Heading>
          </Slide>
          <Slide>
            <Heading size={ 2 }>
            </Heading>
          </Slide>
          <Slide>
            <Heading size={ 2 }>
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
