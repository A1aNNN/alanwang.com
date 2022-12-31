import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import { Box } from '@chakra-ui/react';


const Youtube = () => {
  return (
    <Container className='youtube'>
        <div className="ratio ratio-16x9 youtubeVideo">
            <iframe src="https://www.youtube.com/embed/0N3PAzlHetk" title="My Handstand Pushup Progression" allowfullscreen></iframe>
        </div>
        <Box pl="20px" className="youtubeText">
            I've been trying to practice my handstands this past year.
            This is how I attempted to learn the handstand pushup.
        </Box>
    </Container>
  )
}

export default Youtube


{/* <iframe width="320" height="560" src="https://www.youtube.com/embed/0N3PAzlHetk" title="My Handstand Pushup Progression" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}