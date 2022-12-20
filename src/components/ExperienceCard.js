import { Box, Text } from '@chakra-ui/react'
import React from 'react'


//deconstructing

const ExperienceCard = ({title, location, points}) => {
  // console.log(props, 'is the props')

  return (
    <Box display="flex" flexDirection="column">
      <Text className='experienceTitle'>
        {title}
      </Text>
      <Text className='experienceLocation'>
        {location}
      </Text>
      {points.map((point, index) => {
        return <Text key={index} className="experienceText">
          - {point}
        </Text>
      })}
    </Box>
  )
}



export default ExperienceCard
