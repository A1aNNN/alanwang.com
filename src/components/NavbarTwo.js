import { useRef } from "react"
import {FaTimes, FaBars} from "react-icons/fa"
import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import "../App.css"


const NavbarTwo = () => {
    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }


  return (
    <header>
        <Text className="name">Alan Wang</Text>
        <nav ref={navRef}>
            <a href="#aboutMe">About me</a>
            <a href="#experiences">Experiences</a>
            <a href="#forFunz">For Funz</a>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes/>
            </button>

        </nav>

        <button className="nav-btn" onClick={showNavbar}>
            <FaBars/>
        </button>
    </header>
  )
}

export default NavbarTwo
