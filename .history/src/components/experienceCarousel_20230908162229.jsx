

import React, {useState} from "react";
import { experiences } from "./skillDesc";
import Experience from "./experience";

const ExperienceCarousel = () => {





  return (
    <div className="carousel-container">
    <div className="images-container"
        onWheel={handleScroll}
        style={{
          transform: `translateX(${translateX}px)`,
          transition: 'transform 0.3s ease', // Add smooth transition
        }}
   >
      {experiences.map((experiences) => {
        return (
          <Experience
            title={experiences.title}
            image={experiences.image}
            description={experiences.description}
            />
        )
      })}
    </div>
    </div>
  )
}

export default ExperienceCarousel