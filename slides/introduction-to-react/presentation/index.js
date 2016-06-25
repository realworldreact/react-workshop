import React from 'react';
import preloader from 'spectacle/lib/utils/preloader';
import CodeSlide from 'spectacle-code-slide';
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Code,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text,
} from 'spectacle';
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

// Custom CSS
require('./index.css');

import theme, { reactBlue } from './theme.js';

const images = {
  city: require('../assets/city.jpg'),
  kat: require('../assets/kat.png'),
  logo: require('../assets/rwr-logo.svg'),
  markdown: require('../assets/markdown.png'),
};

preloader(images);

import { CounterContainer } from './Counter.js';
import { Toggle } from './Toggle.js';

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck progress='bar' controls={false} transition={['zoom', 'slide']} transitionDuration={500}>

          <Slide transition={['zoom']} bgColor='primary'>
            <Image width={600} src={images.logo} />
          </Slide>

          <Slide transition={['zoom']} bgColor='primary'>
            <Image width={600} src={images.logo} />
          </Slide>

          {/* Start actual slideshow */}

          <Slide transition={['zoom']} bgColor='primary'>
            <Heading size={1} fit lineHeight={1} textColor={reactBlue}>
              React.js
            </Heading>
            <Heading size={1} fit lineHeight={1.5}>
              An introduction
            </Heading>
            <div style={{ margin: '0 0 20px' }}>--------</div>
            <Text textColor='white' textSize='1.5em' margin='20px 0px 0px' bold>Ian Sinnott</Text>
          </Slide>

          <Slide notes={`
          * No questions yet, more to come
          `.trim()}>
            <Heading size={4} caps lineHeight={1.5} textColor={reactBlue}>
              An introduction to React
            </Heading>
            <List textColor='white'>
              <Appear><ListItem>Why React</ListItem></Appear>
              <Appear><ListItem>JSX</ListItem></Appear>
              <Appear><ListItem>Components & composition</ListItem></Appear>
              <Appear><ListItem>Props</ListItem></Appear>
              <Appear><ListItem>State</ListItem></Appear>
              <Appear><ListItem>Events</ListItem></Appear>
            </List>
          </Slide>

          <Slide notes={`
          * Declarative means you no longer have to write dom plumbing
          * Server folks should get this since its how they normally render
          * XSS protection built in
          * You can drop react into any existing app
          * Its fun! This can not be stressed enough. This is good for morale and recruiting
          * This is just the start. I will plan another talk for convincing your boss to adopt react
          `.trim()}>
            <Heading size={1} caps lineHeight={1.5}>
              Why React
            </Heading>
            <List textColor='white'>
              <Appear><ListItem>Declarative</ListItem></Appear>
              <Appear><ListItem>Painless iteration path</ListItem></Appear>
              <Appear><ListItem>Fun</ListItem></Appear>
            </List>
          </Slide>

          <Slide notes={`
          * Very similar to HTML
          `.trim()}>
            <Heading size={1} caps lineHeight={1.5}>JSX</Heading>
            <Heading size={4} caps lineHeight={1.5} textColor='white'>
              A rich templating language
            </Heading>
            <List textColor='white'>
              <Appear><ListItem>Tag Syntax (looks like HTML)</ListItem></Appear>
              <Appear><ListItem>First class JavaScript</ListItem></Appear>
              <Appear><ListItem>Has some gotchas, but not dealbreakers</ListItem></Appear>
            </List>
          </Slide>

          <CodeSlide
            transition={['zoom', 'fade']}
            lang='jsx'
            code={require('raw!./jsx.example')}
            margin='20px auto'
            ranges={[
              { loc: [0, 1], title: "JSX" },
              { loc: [0, 5], note: "Render to the dom" },
              { loc: [6, 20] },
              { loc: [21, 39], title: 'Composition' },
              { loc: [26, 31], note: 'HorizontalNav' },
              { loc: [31, 37], note: 'DropdownMenu' },
              { loc: [21, 39] },
              // ...
            ]}
          />

          <Slide
            transition={['zoom', 'fade']}
            bgColor='primary'
            notes={`
              * This is all just js
              * We'll talk a lot more about this later, so for now don't worry
            `.trim()}>
            <Heading size={4} caps lineHeight={1.5} textColor='white'>
              First class JavaScript
            </Heading>
            <CodePane
              lang='jsx'
              source={require('raw!./jsx4.example')}
              margin='20px auto'
            />
          </Slide>

          <Slide
            transition={['zoom', 'fade']}
            bgColor='primary'
            notes={`
              * Note that there are ways around the if else issue
            `.trim()}>
            <Heading size={4} caps lineHeight={1.5} textColor='white'>
              JSX Gotchas
            </Heading>
            <List textColor='white'>
              <Appear><ListItem><code>className</code>, <code>htmlFor</code></ListItem></Appear>
              <Appear><ListItem>No if-else (expressions only)</ListItem></Appear>
              <Appear><ListItem>Must wrap consecutive tags</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={['zoom', 'fade']}>
            <Heading size={1} caps fit lineHeight={1.5} textColor='white'>
              Components
            </Heading>
          </Slide>

          <Slide>
            <Heading size={4} caps lineHeight={1.5} textColor='white'>
              Components: Groups of JSX and JavaScript
            </Heading>
          </Slide>

          <Slide>
            <CodePane
              lang='jsx'
              source={require('raw!./component.example')}
              margin='20px auto'
            />
          </Slide>

          <Slide notes={`
            * For presentations we will use React.createClass syntax for simplicity
            * There will be exercises and of course you can use any syntax you prefer
          `.trim()}>
            <Heading size={4} caps lineHeight={1.5} textColor='white'>
              Creating Components
            </Heading>
            <List textColor='white'>
              <Appear><ListItem>Original <code>React.createClass</code></ListItem></Appear>
              <Appear><ListItem>ES6 class syntax, i.e. extned <code>React.Component</code></ListItem></Appear>
              <Appear><ListItem>Functional</ListItem></Appear>
            </List>
            <Appear>
              <Heading size={4} caps lineHeight={1.5} textColor='white'>
                Don't worry about it
              </Heading>
            </Appear>
          </Slide>

          <Slide>
            <Heading size={4} caps lineHeight={1.5} textColor='white'>
              Benefits
            </Heading>
            <Appear>
              <List textColor='white'>
                <ListItem>Encapsulation</ListItem>
                <ListItem>Composability</ListItem>
              </List>
            </Appear>
          </Slide>

          <Slide notes={`
            * Encapsulation is a benefit, but it does tend to fly in the face of what many people used to think was best practices
            * View-related functionality is key here. Only the functionality necessary for our UI is encompassed by React
            * Putting data binding here is a tease. we won't be talking about it yet but we will later
          `.trim()}>
            <Heading size={4} caps lineHeight={1.5} textColor='white'>
              Encapsulation
            </Heading>
            <Text textColor='white'>Markup & view-related functionality together at last</Text>
            <Appear>
              <List textColor='white'>
                <ListItem>HTML (JSX)</ListItem>
                <ListItem>Derived values</ListItem>
                <ListItem>Event handlers</ListItem>
                <ListItem>Modularized, testable</ListItem>
              </List>
            </Appear>
          </Slide>

          <Slide notes={`
            * Someone likely already implemented something you need
          `.trim()}>
            <Heading size={4} caps lineHeight={1.5} textColor='white'>
              Composition
            </Heading>
            <Text textColor='white'>Combine and re-use components</Text>
            <Appear>
              <List textColor='white'>
                <ListItem>DRYer code</ListItem>
                <ListItem>Utilities for the UI</ListItem>
                <ListItem>Modularized, testable</ListItem>
                <ListItem>Large and vibrant ecosystem</ListItem>
              </List>
            </Appear>
          </Slide>

          <Slide notes={`
          `.trim()}>
            <Heading size={4} caps lineHeight={1.5} textColor='white'>
              Rendering to the DOM
            </Heading>
            <Appear>
              <CodePane
                lang='jsx'
                source={require('raw!./render.example')}
                margin='20px auto'
              />
            </Appear>
          </Slide>

          <Slide>
            <Heading size={1} caps fit lineHeight={1} textColor={reactBlue}>
              Data
            </Heading>
            <Heading size={4} fit lineHeight={1} textColor='white'>
              (data) => markup
            </Heading>
          </Slide>

          <Slide notes={`
          `.trim()}>
            <Heading size={4} caps lineHeight={1.5} textColor='white'>
              Props
            </Heading>
            <List textColor='white'>
              <Appear><ListItem>Component doesn't care where they come from</ListItem></Appear>
              <Appear><ListItem>Important when integrating with frameworks</ListItem></Appear>
            </List>
          </Slide>

          <Slide notes={`
          `.trim()}>
            <CodePane
              lang='jsx'
              source={require('raw!./props.example')}
              margin='20px auto'
            />
          </Slide>

          <Slide notes={`
            * State is used to model interactivity and change over time
            * State should be as small as possible
            * State should be JSON serializable
          `.trim()}>
            <Heading size={4} caps lineHeight={1.5} textColor='white'>
              State
            </Heading>
            <List textColor='white'>
              <Appear><ListItem>Interactivity</ListItem></Appear>
              <Appear><ListItem>Change over time</ListItem></Appear>
            </List>
            <Appear>
              <Heading size={4} caps lineHeight={1.5} textColor='white'>
                Examples
              </Heading>
            </Appear>
            <Appear>
              <List textColor='white'>
                <Appear><ListItem>Value of a <code>{'<input />'}</code> tag</ListItem></Appear>
                <Appear><ListItem>UI loading state</ListItem></Appear>
                <Appear><ListItem>Unread message count</ListItem></Appear>
              </List>
            </Appear>
          </Slide>

          <Slide>
            <Toggle />
          </Slide>

          <CodeSlide
            transition={[]}
            lang='jsx'
            code={require('raw!./state.example')}
            ranges={[
              { loc: [0, 100], title: 'Stateful Components' },
              { loc: [1, 6], note: 'Define the initial state' },
              { loc: [13, 25] },
              { loc: [14, 15], note: 'Access state' },
              { loc: [18, 22], note: 'Set attributes based on state' },
              { loc: [17, 18], note: 'Set up an event handler to update state' },
              { loc: [7, 12], note: 'Set up an event handler to update state' },
              // ...
            ]}
          />

          <Slide notes={`
          `.trim()}>
            <CodePane
              lang='jsx'
              source={require('raw!./state.example')}
              margin='20px auto'
            />
          </Slide>

          <Slide notes={`
          `.trim()}>
            <Heading size={4} fit caps lineHeight={1} textColor='white'>
              Rule of thumb
            </Heading>
            <Appear>
              <Heading size={1} fit caps lineHeight={1} textColor={reactBlue}>
                Use props...
              </Heading>
            </Appear>
            <Appear>
              <Heading size={4} fit caps lineHeight={1} textColor='white'>
                ...until you need state
              </Heading>
            </Appear>
          </Slide>

          <Slide notes={`
          `.trim()}>
            <Heading size={1} caps lineHeight={1.5} textColor='white'>
              Events
            </Heading>
            <List textColor='white'>
              <Appear><ListItem>Attached directly to components</ListItem></Appear>
              <Appear><ListItem>Aggregated by React</ListItem></Appear>
              <Appear><ListItem>Standardized across all browsers</ListItem></Appear>
            </List>
          </Slide>

          <Slide notes={`
          `.trim()}>
            <CodePane
              lang='jsx'
              source={require('raw!./events.example')}
              margin='20px auto'
            />
          </Slide>

          <Slide>
            <Heading size={1} caps fit lineHeight={1.5}>
              Exercise
            </Heading>
            <Heading size={1} caps fit lineHeight={1.5}>
              Build a simple counter
            </Heading>
          </Slide>

          <Slide notes={`
          * Explain the project, demo the app
          `.trim()}>
            <Heading size={1} caps lineHeight={1.5}>
              Counter
            </Heading>
            <CounterContainer />
          </Slide>

          <Slide transition={['spin', 'slide']}>
            <Heading size={1} caps fit lineHeight={1.5}>
              Questions?
            </Heading>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
