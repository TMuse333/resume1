import React from "react";
import { Link, useParams } from "react-router-dom";
import { skills } from './skillDesc';



const OtherPage = () => {

    const { skillIndex } = useParams();
    const selectedSkill = skills[skillIndex];

    return(
        <div>
       
        <Link to="/">Go back</Link>
      </div>
    )
}

export default OtherPage