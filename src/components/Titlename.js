import { Box, Image, Text} from '@chakra-ui/react'
import { Highlight } from '@chakra-ui/react'
import React from 'react'
import Headshot from "../images/52657236.png"
import WordsTypewriter from './WordsTypewriter';

const Titlename = () => {
  return (
    <Box display="flex" flexDirection="row" padding="80px 0px 25px">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Text className='name'>Hi, my name is</Text>
        <Text fontWeight="bold" className='name highlight'>Alan Wang.</Text>
        <WordsTypewriter/>
      </Box>

{/* Fix this squished image */}
      {/* <Image src={Headshot} borderRadius="100%" boxSize="150px" position="absolute" right="200px"/> */}
    </Box>
  )
}

export default Titlename
