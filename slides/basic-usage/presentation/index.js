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

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['zoom', 'slide']} transitionDuration={500}>

          <Slide transition={['zoom']} bgColor='primary'>
            <Image width={100} src={images.logo} />
            <Heading size={1} fit lineHeight={1} textColor={reactBlue}>
              React.js
            </Heading>
            <Heading size={1} fit>
              Basic Usage
            </Heading>
            <div style={{ margin: '20px 0' }}>--------</div>
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
              <Appear><ListItem>Displaying JSON Data</ListItem></Appear>
              <Appear><ListItem>Async Data Fetching</ListItem></Appear>
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

          <Slide transition={['zoom', 'fade']} bgColor='primary' notes='<ul><li>talk about that</li><li>and that</li></ul>'>
            <CodePane
              lang='jsx'
              source={require('raw!./FormValues.example')}
              margin='20px auto'
            />
          </Slide>

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

          <Slide transition={['zoom', 'fade']} bgColor='primary' notes='<ul><li>talk about that</li><li>and that</li></ul>'>
            <CodePane
              lang='jsx'
              source={require('raw!./FormValues2.example')}
              margin='20px auto'
            />
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

























          <Slide transition={['slide']} bgColor='black' notes='You can even put notes on your slide. How awesome is that?'>
            <Image src={images.kat.replace('/', '')} margin='0px auto 40px' height='293px'/>
            <Heading size={2} caps fit textColor='primary' textFont='primary'>
              Wait what?
            </Heading>
          </Slide>


          <Slide transition={['slide']} bgImage={images.city.replace('/', '')} bgDarken={0.75}>
            <Appear fid='1'>
              <Heading size={1} caps fit textColor='primary'>
                Full Width
              </Heading>
            </Appear>
            <Appear fid='2'>
              <Heading size={1} caps fit textColor='tertiary'>
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid='3'>
              <Heading size={1} caps fit textColor='primary'>
                Background Imagery
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={['zoom', 'fade']} bgColor='primary'>
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor='secondary' bgColor='white' margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor='secondary' bgColor='white' margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['slide']} bgColor='black'>
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={['spin', 'zoom']} bgColor='tertiary'>
            <Heading caps fit size={1} textColor='primary'>
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace('/', '')})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>

          <Slide transition={['slide', 'spin']} bgColor='primary'>
            <Heading caps fit size={1} textColor='tertiary'>
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor='secondary'>
              Combinable Transitions
            </Heading>
          </Slide>

          <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={['slide']} bgColor='primary'>
            <Heading size={1} caps fit textColor='tertiary'>
              Your presentations are interactive
            </Heading>
          </Slide>

          <Slide transition={['spin', 'slide']} bgColor='tertiary'>
            <Heading size={1} caps fit lineHeight={1.5} textColor='primary'>
              Made with love in Seattle by
            </Heading>
            <Link href='http://www.formidablelabs.com'><Image width='100%' src={images.logo}/></Link>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
