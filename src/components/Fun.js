import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Fun = () => {
  return (
    <Box display="flex" flexDirection="column" padding="20px" id='forFunz' paddingBottom="100px">
      <Text alignSelf="center" className='title'>~ For funz ~</Text>
      <Text alignSelf="center" className='forFunContent'>Some stuff that I've made for fun in my free time :^)</Text>
    </Box>
  )
}

export default Fun
