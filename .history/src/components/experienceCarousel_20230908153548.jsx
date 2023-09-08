

import React from "react";
import { experiences } from "./skillDesc";
import Experience from "./experience";

const ExperienceCarousel = () => {



  return (
    <div className="carousel-container">
      {experiences.map((experiences) => {
        return (
          <Experience
            title={experiences.title}
            image={experiences.image}
            description={experiences.description}
            /></Experience>

        )
      })}
    </div>
  )
}