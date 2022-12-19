import { Box, Link, Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { MoonIcon } from '@chakra-ui/icons'


const Navbar = () => {
    // variable called isDesktop
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    const navbarButtons = [
        {
            title: "About me",
            href: "#aboutMe"},
        {
            title: "Experiences",
            href: "#experiences"
        },
        {
            title: "forFunz",
            href: "#forFunz"
        }
    ]

    return (
        <Box backgroundColor={{base: "red", md: "yellow", lg: "pink"}} width="100%">
            {navbarButtons.map((button, index) => {
                return <Link href={button.href}> {button.title} </Link>
            })}
        </Box>
    )


//     return (
//         <Box backgroundColor={{base: "red", md: "yellow", lg: "pink"}} width="100%">
//             <Text> <MoonIcon/> Navbar </Text>
//             <Link href="#aboutMe"> About Me </Link>
//             <Link href="#experiences"> Experiences </Link>
//             <Link href="#forFunz"> For Funz </Link>
//             {/* Ternary operator or conditional rendering (in react bc uses ternary to conditionally render a component) */}
//             {/* If lg and is true, then going to display Test component, if not true then display Test2 component */}
//             {isDesktop ? <Test/> : <Test2/>}
//         </Box>
//   )
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
