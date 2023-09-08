

import React from "react";
import { experiences } from "./skillDesc";
import Experience from "./experience";

const ExperienceCarousel = () => {

  const [isHovered, setIsHovered] = useState(false)




  const handleMouseEnter = () => {
      setIsHovered(true)
      console.log("we have hovering")
  }
  
  const handleMouseLeave = () => {
      setIsHovered(false)
  }



  return (
    <div className="carousel-container">
    <div className="images-container"
    onMouseEnter={handleMouseEnter}
    onMo>
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