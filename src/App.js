// import logo from './logo.svg';
import './App.css';
// import Box from "./components/Box";


// import * as React from 'react'

// 1. import `ChakraProvider` component
import { Box, ChakraProvider } from '@chakra-ui/react'

// Components
import Socials from "./components/Socials"
import TitleName from "./components/Titlename"
import Intro from './components/Intro';
import Experience from './components/Experience';
import Fun from './components/Fun';
import Footer from './components/Footer';



function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return <ChakraProvider>
    <Box display="flex" backgroundColor="tan" height="auto" width="100%" flexDirection="Column">

      <Socials/>
      <TitleName/>
      <Intro/>
      <Experience/>
      <Fun/>
      <Footer/>
      
    </Box>

  </ChakraProvider>;
}

export default App;
