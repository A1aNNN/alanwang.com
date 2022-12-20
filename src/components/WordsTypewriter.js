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
    <Box className='typer' display="flex" flexDirection="row">
      <div>
        <Text paddingRight="10px">I'm a</Text>
      </div>
      <div className='text' id='WordsTypewriter'>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                "UBC Biochemistry.",
                "former swimmer.",
                "coffee enthusiast.",
                "tetris wannabe"
              ],
            }}/>
        </div>
    </Box>
    // <div>
    //   <div>
    //     <h2>
    //       <div className='title'>{state.title}</div>
    //       <div className='titleTwo'>{state.titleTwo}</div>
    //       <div className='titleThree'>{state.titleThree}</div>
    //     </h2>

    //     <div className='text' id='WordsTypewriter'>
    //       <Typewriter
    //         options={{
    //           autoStart: true,
    //           loop: true,
    //           delay: 40,
    //           strings: [
    //             "UBC Biochemistry.",
    //             ":^)",
    //             "Coffee enthusiast."
    //           ],
    //         }}/>
    //     </div>
    //   </div>
    // </div>
  )
};

export default WordsTypewriter
