import { Box, Text } from '@chakra-ui/react'
import React from 'react'


//deconstructing

const ExperienceCard = ({title, location, points}) => {
  // console.log(props, 'is the props')

  return (
    <Box display="flex" flexDirection="column">
      <Text>
        {title}
      </Text>
      <Text>
        {location}
      </Text>
      {points.map((point, index) => {
        return <Text key={index}>
          - {point}
        </Text>
      })}
    </Box>
  )
}



export default ExperienceCard
