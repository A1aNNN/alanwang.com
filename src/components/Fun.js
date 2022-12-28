import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Fun = () => {
  return (
    <Box display="flex" flexDirection="column" padding="20px" id='forFunz'>
      <Text alignSelf="center" className='title'>~ For funz ~</Text>
      <Text alignSelf="center" className='forFunContent'>Take a scroll below to some stuff I've made for fun:^)</Text>
    </Box>
  )
}

export default Fun
