

import React, {useState} from "react";
import { experiences } from "./skillDesc";
import Experience from "./experience";
import kakashi from '../images/kakashi-susanoo.jpg'
const ExperienceCarousel = () => {





  return (
    <div className="carousel-container">
    <div className="images-container"
    
   >
      {experiences.map((experience) => {
        return (
       <Experience
       title='bruh'
       image=kakashi
       description='pls work'
       />
        )
      })}
    </div>
    </div>
  )
}

export default ExperienceCarousel