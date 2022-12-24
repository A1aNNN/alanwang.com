import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Intro = () => {
  return (
    <Box display="flex" flexDirection="column" padding="20px" paddingBottom="150px">
     <Text alignSelf="center" className="title" id='aboutMe'>
      ~ About me ~
     </Text>
     
     <Text className='aboutMeContent'>
        A 4th year UBC biochem student, just trying his best out here. I currently work in bioinformatics studying endogenous retroviruses,
         but I'm looking to venture out and expand into the world of tech!
        <br/>
        Being a retired swimmer, my hobbies outside of academics and work highlight the idea of staying active. Catch me
         at the gym doing anything but cardio! 
      </Text>
    </Box>
  )
}

export default Intro
