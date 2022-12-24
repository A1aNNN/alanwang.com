import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import ExperienceCard from './ExperienceCard'

const experienceList = [
  {
    title: "Bioinformatics Co-op Student @ ",
    titleTwo: "Tokuyama lab",
    location: "📍 Vancouver, BC (2022 - Present)",
    points: [
      "Handle RNA-sequencing data to observe the expression levels of endogenous retroviruses within different samples",
      "Implemented and developed pipelines for data analysis of bulk RNA sequencing as well as single cell RNA sequencing"
    ]
  },
  {
    title: "Computer Science Teaching Assistant @ ",
    titleTwo: "University of British Columbia",
    location: "📍 Vancouver, BC (2020 - 2021)",
    points: [
      "Assisted in the learning and understanding of computational concepts for 600+ non-computer science students",
      "Led weekly labs, each consisting of 30 students",
      "Hosted office hours, lead review sessions, and created video tutorials of the lab assignments for future TAs"
    ],
  },
]

const Experience = () => {
  return (
    <Box display="flex" flexDirection="column" padding="20px" paddingBottom="150px">
      <Text alignSelf="center" className='title' id='experiences' paddingBottom="40px">~ Experiences ~</Text>

      {experienceList.map((experience, index) => {
        return <ExperienceCard
          title={experience.title}
          titleTwo={experience.titleTwo}
          location={experience.location}
          points={experience.points}
          key={index}/>
      })}
    </Box>
  )
}

export default Experience
