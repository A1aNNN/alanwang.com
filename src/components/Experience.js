import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import ExperienceCard from './ExperienceCard'

const experienceList = [
  {
    title: "Bioinformatics Co-op Student @ Tokuyama lab",
    location: "📍 Vancouver, BC (2022 - Present)",
    points: [
      "Handle RNA-sequencing data to observe the expression levels of endogenous retroviruses within different samples",
      "Implemented and developed pipelines for data analysis of bulk RNA sequencing as well as single cell RNA sequencing"
    ]
  },
  {
    title: "Computer Science Teaching Assistant @ University of British Columbia",
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
    <Box display="flex" flexDirection="column" padding="20px">
      <Text alignSelf="center" className='title'>💡 Experiences 💡</Text>

      {experienceList.map((experience, index) => {
        return <ExperienceCard
          title={experience.title}
          location={experience.location}
          points={experience.points}
          key={index}/>
      })}

      {/* <ExperienceCard
        title="Bioinformatics Co-op Student @ Tokuyama lab"
        location="📍 Vancouver, BC (2022 - Present)"
        point1="- Handle RNA-sequencing data to observe the expression levels of endogenous retroviruses within different samples"
        point2="- Implemented and developed pipelines for data analysis of bulk RNA sequencing as well as single cell RNA sequencing"
        />

      <ExperienceCard 
        title="Computer Science Teaching Assistant @ University of British Columbia"
        location="📍 Vancouver, BC (2020 - 2021)"
        point1="- Assisted in the learning and understanding of computational concepts for 600+ non-computer science students"
        point2="- Led weekly labs, each consisting of 30 students"
        point3="- Hosted office hours, lead review sessions, and created video tutorials of the lab assignments for future TAs"
        /> */}
    </Box>
  )
}

export default Experience
