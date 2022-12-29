import React from 'react'
import { Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, 
    Box, 
    Text
  } from '@chakra-ui/react'


  const projects = [
    {title: "Personal website",
    description: "My personal website that you're currently viewing.", 
    tags:
    ["React", 
    "CSS", 
    "Javascript"]}, 

    {title: "Single cell RNA sequencing pipeline",
    description: "A scRNAseq pipeline for clustering cells by similar gene expression profiles.", 
    tags:
    ["R",
    "Bash",
    "Python"
    ]}
  ]

const Projects = () => {

  return (
    <Box Box display="flex" flexDirection="column" paddingBottom="150px">
        <Text alignSelf="center" className='title' paddingBottom="30px">~ Projects ~</Text>

        <Accordion allowMultiple className="accordion" w={{base: "450px", md: "600px", lg: "950px"}}>
            <Box>
            {projects.map((project, index) => {
                return <AccordionItem key={index}>
                    <AccordionButton>
                        <Box>
                            {project.title}
                        </Box>
                        <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel>
                        {project.description}
                        <Box display="flex" flexDirection="row">
                            {project.tags.map((tag, index) => {
                                return <Box key={index} p="5px" margin="10px" className="tag" borderRadius="6px">
                                    {tag}
                                </Box>
                            })}
                        </Box>
                    </AccordionPanel>
                </AccordionItem>
            })}
            </Box>
        </Accordion>
    </Box>
  )
}

export default Projects