import { Box, Divider } from '@chakra-ui/react'
import React, {useState} from 'react'
import { SliderData } from './SliderData'
// import {FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'


const ImageSlider = ({ slides }) => {
    const[current, setCurrent] = useState(0)
    const length = slides.length
    
    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    } 

  return (
    <Box className='slider'>
        <ArrowLeftIcon className="left-arrow" onClick={prevSlide}/>
        <ArrowRightIcon className="right-arrow" onClick={nextSlide}/>
        {SliderData.map((slide, index) => {
            return (
                <div className={index === current ? 'slide activate' : 'slide'} key={index}>
                    {index === current && (<img src={slide.image} className="image"/>)}
                </div>
            )
        })}
    </Box>
  )
}

export default ImageSlider
