import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Charmeleon from "../images/charmeleon.png"

const Titlename = () => {
  return (
    <Box display="flex" flexDirection="row" padding="20px">
      <Box display="flex" flexDirection="column">
        <Text className='name'>Hi, my name is</Text>
        <Text fontWeight="bold" className='name'>Alan Wang</Text>
      </Box>

      <Image src={Charmeleon} borderRadius="100%" boxSize="200px"/>
    </Box>
  )
}

export default Titlename
