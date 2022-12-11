import { Box, Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { MoonIcon } from '@chakra-ui/icons'


const Navbar = () => {
    // variable called isDesktop
    const isDesktop = useBreakpointValue({ base: false, lg: true })

    return (
        <Box backgroundColor={{base: "red", md: "yellow", lg: "pink"}} width="100%">
        <Text>
            <MoonIcon/>
            Navbar
        </Text>
        {/* Ternary operator or conditional rendering (in react bc uses ternary to conditionally render a component) */}
        {/* If lg and is true, then going to display Test component, if not true then display Test2 component */}
        {isDesktop ? <Test/> : <Test2/>}
        </Box>
  )
}

const Test = () => {
    return (
        <div>
          Hello
        </div>
    )
}

const Test2 = () => {
    return (
        <div>
            SSSSSSSSSSS
        </div>
    )
}


export default Navbar
