import { Box, Image, Text} from '@chakra-ui/react'
import { Highlight } from '@chakra-ui/react'
import React from 'react'
import WordsTypewriter from './WordsTypewriter';
import Alan from "/Users/alanbyron/Desktop/alanwang.com-master/src/images/alanheadshot.jpg"

const Titlename = () => {
  return (
    <Box display="flex" flexDirection="row" padding="80px 0px 25px" alignItems="center">
      <Box display="flex" flexDirection="column" alignItems="center"  w={{base: "500px", md: "550px", lg: "575px"}}>
        <Text className='name'>Hi, my name is</Text>
        <Text fontWeight="bold" className='name highlight'>Alan Wang.</Text>
        <WordsTypewriter/>
      </Box>
      <Box>
        <Image src={Alan} alt='Alan Headshot' boxSize="400px" objectFit="cover" borderRadius="full" paddingLeft="25px" display={{base: "none", md: "initial"}}/>
      </Box>
    </Box>
  )
}

export default Titlename
