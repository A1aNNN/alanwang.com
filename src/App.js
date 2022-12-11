// import logo from './logo.svg';
import './App.css';
// import Box from "./components/Box";


// import * as React from 'react'

// 1. import `ChakraProvider` component
import { Box, ChakraProvider } from '@chakra-ui/react'

// Components
import Navbar from './components/Navbar';
import TitleName from "./components/Titlename"
import SpinningWords from './components/SpinningWords';
import Intro from './components/Intro';
import Experience from './components/Experience';
import Fun from './components/Fun';
import Footer from './components/Footer';
import Socials from "./components/Socials"
import ImageSlider from './components/ImageSlider';
import SliderData from './components/SliderData';





function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return <ChakraProvider>
    <Box display="flex" backgroundColor="#f2e5d9" height="auto" width="100%" flexDirection="Column" alignItems="center">
      
      <Navbar/>
      <TitleName/>
      <SpinningWords/>
      <Intro/>
      <Experience/>
      <Fun/>
      <ImageSlider slides={SliderData}/>
      <Socials/>
      <Footer/>
      
    </Box>

  </ChakraProvider>;
}

export default App;
