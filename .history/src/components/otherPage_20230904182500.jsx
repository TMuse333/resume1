import React from "react";
import { Link, useParams } from "react-router-dom";
import { skills } from './skillDesc';



const OtherPage = () => {

    const { skillIndex } = useParams();

  // Fetch the corresponding skill from the skills array
  const selectedSkill = skills[skillIndex];

    return(
        <div>Hustlers dont stop they keep going!
            <Link to="/">go back</Link>
          
        </div>
    )
}

export default OtherPage