import React from "react";
import { Link } from "react-router-dom";
import { skills } from './skillDesc';



const OtherPage = () => {
    return(
        <div>Hustlers dont stop they keep going!
            <Link to="/">go back</Link>
            {skills[0].name}
        </div>
    )
}

export default OtherPage