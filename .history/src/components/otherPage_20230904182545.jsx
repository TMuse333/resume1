import React from "react";
import { Link, useParams } from "react-router-dom";
import { skills } from './skillDesc';



const OtherPage = () => {

    const { skillIndex } = useParams();

  // Fetch the corresponding skill from the skills array
  const selectedSkill = skills[skillIndex];

    return(
        <div>
        {selectedSkill && (
          <div>
            <h2>{selectedSkill.name}</h2>
            <p>{selectedSkill.description}</p>
          </div>
        )}
        <Link to="/">Go back</Link>
      </div>
    )
}

export default OtherPage