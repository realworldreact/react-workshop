import React from 'react';
import preloader from 'spectacle/lib/utils/preloader';
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

import { FormValues } from './FormValues.js';
import { TodoList } from './TodoList.js';
import { AsyncLoader } from './AsyncLoader.js';
import { RedditFetch } from './RedditFetch.js';

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['zoom', 'slide']} transitionDuration={500}>

          <Slide transition={['zoom']} bgColor='primary'>
            <Image width={600} src={images.logo} />
          </Slide>

          <Slide transition={['slide']} bgColor='primary'>
            <Heading size={4} textColor='white'>Building real-world applications with React.js</Heading>
            <p>With</p>
            <Heading size={4} textColor='white'>Ian Sinnott & Berkeley Martinez</Heading>
            <p>Sponsored by</p>

            <div className='logos'>
              <img src={require('../assets/makersquare.png')} />
              <img src={require('../assets/RCG-logo.png')} />
              <img src={require('../assets/talener.png')} />
            </div>
          </Slide>

          <Slide transition={['slide']} bgColor='primary'>
            <div className='logos secondary'>
              <img className='makersquare' src={require('../assets/makersquare.png')} />
            </div>
          </Slide>

          <Slide transition={['slide']} bgColor='primary'>
            <div className='logos secondary'>
              <img src={require('../assets/talener.png')} />
            </div>
          </Slide>

          <Slide transition={['slide']} bgColor='primary'>
            <div className='logos secondary'>
              <img src={require('../assets/RCG-logo.png')} />
            </div>
          </Slide>

          <Slide transition={['slide']} bgColor='primary'>
            <Heading size={4} textColor='white'>Now let's get to work</Heading>
            <Image src='http://i.giphy.com/qFYVytzjixPKo.gif' />
          </Slide>


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
          * At some point you're GOING to need forms
          * Multiple ways to use forms
          `.trim()}>
            <Heading size={1} caps lineHeight={1.5}>
              Basic Usage
            </Heading>
            <List textColor='white'>
              <Appear><ListItem>Forms & React</ListItem></Appear>
              <Appear><ListItem>Form Events</ListItem></Appear>
              <Appear><ListItem>State II</ListItem></Appear>
              <Appear><ListItem>Array Methods</ListItem></Appear>
              <Appear><ListItem>Loading Async JSON Data</ListItem></Appear>
            </List>
          </Slide>

          <Slide notes={`
          * Look at programmatic use of a form value
          * Now that we can work with it we can do anythign we want (email collection for instance)
          `.trim()}>
            <Heading size={1} caps lineHeight={1.5}>
              Forms & React
            </Heading>
            <Heading size={4} caps lineHeight={1.5} textColor='white'>
              You're going to use them a lot
            </Heading>
            <FormValues />
          </Slide>

          {/* <Slide transition={['zoom', 'fade']} bgColor='primary' notes='<ul><li>talk about that</li><li>and that</li></ul>'> */}
          {/*   <CodePane */}
          {/*     lang='jsx' */}
          {/*     source={require('raw!./FormValues.example')} */}
          {/*     margin='20px auto' */}
          {/*   /> */}
          {/* </Slide> */}

          <Slide notes={`
          * We've already seen event handlers in react. Forms are much the same
          * That last one, event target will prove to be very useful.
          * Students may have heard that many React apps don't use jQuery. e.target is a really important helper in this regard.
          `.trim()}>
            <Heading size={1} caps lineHeight={1.5}>
              More Events
            </Heading>
            <List textColor='white'>
              <Appear><ListItem>React standardizes events with <code>SyntheticEvent</code></ListItem></Appear>
              <Appear><ListItem>Function just like you would expect</ListItem></Appear>
              <Appear><ListItem>Can <code>preventDefault</code>, <code>stopPropagation</code> and access event <code>target</code></ListItem></Appear>
            </List>
          </Slide>



          <Slide notes={`
          * Turns out state can be a good place to store lists that change
          `.trim()}>
            <Heading size={1} caps lineHeight={1.5}>
              State II
            </Heading>
            <Heading size={4} caps lineHeight={1.5} textColor='white'>
              Eventually you're coing to want to render a list
            </Heading>
          </Slide>

          <Slide notes={`
          * Classic example: List of stuff
          * Go into the source of TodoList.js. Show them around
          * Live code the reset button
          `.trim()}>
            <Heading size={1} caps lineHeight={1.5}>
              List of stuff
            </Heading>
            <TodoList />
          </Slide>

          <Slide>
            <Heading size={1} caps lineHeight={1.5}>
              To the text editor!
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} caps lineHeight={1.5}>
              Array methods
            </Heading>
            <Heading size={4} caps lineHeight={1.5} textColor='white'>
              A quick detour...
            </Heading>
          </Slide>

          <Slide notes={`
          * They should all know these already
          * We won't be using reduce much here, but it appears often in the wild
          `.trim()}>
            <List textColor='white'>
              <ListItem>Array.prototype.concat</ListItem>
              <ListItem>Array.prototype.map</ListItem>
              <ListItem>Array.prototype.filter</ListItem>
              <ListItem>Array.prototype.reduce</ListItem>
            </List>
          </Slide>









          <Slide>
            <Heading size={1} caps lineHeight={1.5}>
              Loading Async JSON Data
            </Heading>
          </Slide>

          <Slide notes={`
          * Walk through the code
          `.trim()}>
            <AsyncLoader />
          </Slide>

          <Slide notes={`
          * Walk through the code
          * Explain how contrived in-memory data is
          `.trim()}>
            <Heading size={1} caps lineHeight={1.5}>
              To the text editor!
            </Heading>
          </Slide>





          <Slide>
            <Heading size={1} caps fit lineHeight={1.5}>
              Exercise
            </Heading>
            <Heading size={1} caps fit lineHeight={1.5}>
              Fetch from the Reddit API
            </Heading>
          </Slide>

          <Slide notes={`
          * Explain the project, demo the app
          `.trim()}>
            <Heading size={1} caps lineHeight={1.5}>
              Reddit API
            </Heading>
            <Heading size={1} fit lineHeight={1.5} textFont='monospace'>
              <Link style={{ color: '#dadada' }} href='https://www.reddit.com/r/reactjs.json' target='_blank'>
                https://www.reddit.com/r/<span style={{ color: reactBlue }}>SUBREDDIT</span>.json
              </Link>
            </Heading>
          </Slide>

          <Slide notes={`
          * Explain the project, demo the app
          `.trim()}>
            <Heading size={1} caps lineHeight={1.5}>
              Reddit Fetcher
            </Heading>
            <RedditFetch />
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
