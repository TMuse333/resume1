import React from "react";
import { Link, useParams } from "react-router-dom";
import { skills } from './skillDesc';
import { useSkillContext } from "../context/context";



const OtherPage = () => {

    const { skillIndex } = useParams();
    const selectedSkill = skills[skillIndex];
    const { selectedSkillIndex } = useSkillContext();

    return(
        <div>
       
        <Link to="/">Go back</Link>
      </div>
    )
}

export default OtherPage