import { Box, Text } from '@chakra-ui/react'
import React from 'react'


//deconstructing

const ExperienceCard = ({title, location, point1, point2}) => {
  // console.log(props, 'is the props')

  return (
    <Box display="flex" flexDirection="column">
      <Text>
        {title}
      </Text>
      <Text>
        {location}
      </Text>
      <Text>
        {point1}
      </Text>
      <Text>
        {point2}
      </Text>
    </Box>
  )
}



export default ExperienceCard
