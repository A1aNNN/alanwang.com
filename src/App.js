// import logo from './logo.svg';
import './App.css';
// import Box from "./components/Box";


// import * as React from 'react'

// 1. import `ChakraProvider` component
import { Box, ChakraProvider } from '@chakra-ui/react'

// Components
import TitleName from "./components/Titlename"
import WordsTypewriter from './components/WordsTypewriter';
import Intro from './components/Intro';
import Experience from './components/Experience';
import Fun from './components/Fun';
import Footer from './components/Footer';
import Socials from "./components/Socials"
import ImageSlider from './components/ImageSlider';
import SliderData from './components/SliderData';
import NavbarTwo from './components/NavbarTwo';
import Projects from './components/Projects';






function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return <ChakraProvider>
    <Box display="flex" height="auto" width="100%" flexDirection="Column" alignItems="center">
      
      <NavbarTwo/>
      <TitleName/>
      {/* <WordsTypewriter/> */}
      <Intro/>
      <Experience/>
      <Projects/>
      <Fun/>
      <ImageSlider slides={SliderData}/>
      <Socials/>
      <Footer/>
      
    </Box>

  </ChakraProvider>;
}

export default App;
