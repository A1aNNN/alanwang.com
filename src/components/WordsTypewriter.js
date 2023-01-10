import { Box, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Typewriter from "typewriter-effect"
// import { Typewriter } from "react-simple-typewriter"


// const WordsTypewriter = () => {
//   return (
//     <div>
//       <Typewriter
//         words={[
//           "UBC Biochemistry.",
//           "👋",
//           "Caffeine enthusiast."
//         ]}
//         loop="5"/>
//     </div>
//   )
// }

// export default WordsTypewriter



const WordsTypewriter = () => {
  const [state] = useState({
    title: "Hi,",
    titleTwo: "my name is",
    titleThree: "Alan Wang"
  });

  return(
    <Box className='typer' display="flex" flexDirection={{base: "column", md: "column", lg: "row"}} paddingTop="20px" alignItems="center">
      <div>
        <Text paddingBottom={{base: "10px", md: "10px", lg: "0px"}} paddingRight="10px">I'm a</Text>
      </div>
      <div className='text' id='WordsTypewriter'>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                "Biochemistry undergrad.",
                "former swimmer.",
                "coffee enthusiast.",
                "tetris wannabe"
              ],
            }}/>
        </div>
    </Box>
  )
};

export default WordsTypewriter
