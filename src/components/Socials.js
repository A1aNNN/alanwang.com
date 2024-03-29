import { Box, Icon } from '@chakra-ui/react'
import React from 'react'
// import linkedin from my-react-app/images/linkedin.png

const Socials = () => {
  return (
    <Box display="flex" flexDirection="row" pb="20px">
      <a href="https://www.youtube.com/channel/UCn7MYfcMZiYSfkL90S5TI6g" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/800px-YouTube_full-color_icon_%282017%29.svg.png" alt="Youtube" class="socials"/>
      </a>

      <a href="https://www.linkedin.com/in/alan-wang-a577b81b5/" target="_blank">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="Linkedin" class="socials linkedin"/>
      </a>

      <a href="https://github.com/A1aNNN" target="_blank">
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" class="socials"/>
      </a>

    </Box>

  )
}

export default Socials
