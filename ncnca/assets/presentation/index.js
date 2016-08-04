// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
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
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#3e92cc",
  secondary: "#D8315B",
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              NEW NCNCA.org
            </Heading>
            <Heading size={1} fit caps>
              Demo and intro
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              What we are doing?
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                building new NCNCA.org
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                building new Calendar
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="secondary">
                helping with Planning
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              NCNCA.org
            </Heading>
            <Appear>
              <Heading size={2} caps fit textColor="tertiary">
                90/10
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              90% is Calendar
            </Heading>
            <Appear>
              <Heading size={2} caps fit textColor="tertiary">
                Let't see what are those 10%
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              already solved
            </Heading>
            <Heading size={2} caps fit textColor="secondary">
              problems
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              Survey
            </Heading>
            <Heading size={2} caps fit textColor="white">
              results
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={1} fit caps textColor="white">
              103 responses
            </Heading>
            <Heading size={1} fit caps textColor="black">
              93 racers | 7 officials | 3 other
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={1} fit caps textColor="white">Racer</Heading>
            <Heading size={1} fit caps textColor="white">problems</Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={1} fit caps textColor="white">Promoter</Heading>
            <Heading size={1} fit caps textColor="white">problems</Heading>
          </Slide>


          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Calendars
            </Heading>
            <Appear>
              <Heading size={2} caps fit textColor="tertiary">
                Planning Document
              </Heading>
            </Appear>
            <Appear>
              <Heading size={2} caps fit textColor="tertiary">
                AND new addition to it
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Short term plan
            </Heading>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Beta by end of August
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="secondary">
                obctober for bugfixes
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="white">
                Live in November
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              Long term plan
            </Heading>
            <Appear fid="3"><Heading size={1} caps fit textColor="white">Tools for Promoters</Heading></Appear>
            <Appear fid="3"><Heading size={1} caps fit textColor="white">Tools for Racers</Heading></Appear>
            <Appear fid="3"><Heading size={1} caps fit textColor="white">Subscriptions to Calendar</Heading></Appear>
            <Appear fid="3"><Heading size={1} caps fit textColor="white">Integration with BikeReg</Heading></Appear>
            <Appear fid="3"><Heading size={1} caps fit textColor="white">Integration with Google/Apple calendar</Heading></Appear>

            {/*<List style={{color: 'white', listStyleType:'none'}}>
              <Appear><ListItem>Tools for Promoters</ListItem></Appear>
              <Appear><ListItem>Tools for Racers</ListItem></Appear>
              <Appear><ListItem>Subscriptions to Calendar</ListItem></Appear>
              <Appear><ListItem>Integration with Bikereg</ListItem></Appear>
            </List>*/}

          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              <span style={{color: '#3e92cc'}}>Q</span><span>/</span><span style={{color: '#D8315B'}}>A</span>
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} fit lineHeight={1} textColor="white">
              <span style={{color: '#D8315B'}}>a</span><span>@</span><span style={{color: '#3e92cc'}}>rcn.io</span>
            </Heading>
          </Slide>


          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>I always here for you even if you don't need it</Quote>
              <Cite>My wife Helen</Cite>
            </BlockQuote>
          </Slide>

          

        </Deck>
      </Spectacle>
    );
  }
}
