import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Headshot from "../images/52657236.png"

const Titlename = () => {
  return (
    <Box display="flex" flexDirection="row" padding="20px" paddingBottom="150px" paddingTop="80px">
      <Box display="flex" flexDirection="column">
        <Text className='name'>Hi, my name is</Text>
        <Text fontWeight="bold" className='name'>Alan Wang</Text>
      </Box>

{/* Fix this squished image */}
      <Image src={Headshot} borderRadius="100%" boxSize="150px"/>
    </Box>
  )
}

export default Titlename
