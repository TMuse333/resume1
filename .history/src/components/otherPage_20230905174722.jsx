import React from "react";
import { Link, useParams } from "react-router-dom";
import { skills } from './skillDesc';
import { useSkillContext } from "../context/context";

const OtherPage = () => {
    const { skillIndex } = useParams(); // Get the skillIndex from the URL parameters
    const { selectedSkillIndex } = useSkillContext();

    console.log(skillIndex + "is the index")

    console.log("selected skill index "+selectedSkillIndex)
    return (
        <div>
            Skill Index: {skillIndex} {/* Display the skillIndex from the URL */}
            <br />
            Selected Skill Index: {selectedSkillIndex} {/* Display the selectedSkillIndex */}
            <Link to="/">Go back</Link>
        </div>
    );
}

export default OtherPage;
