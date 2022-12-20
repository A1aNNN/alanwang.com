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
            title: "For Funz",
            href: "#forFunz"
        }
    ]

    return (
        <Box backgroundColor={{base: "red", md: "yellow", lg: "pink"}} width="100%" className="Navbar">
            {navbarButtons.map((button, index) => {
                return <Link href={button.href}> {button.title} </Link>
            })}
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
