import React from "react";
import { Link } from "react-router-dom";
import Skills from "./skills";



const OtherPage = () => {
    return(
        <div>Hustlers dont stop they keep going!
            <Link to="/">go back</Link>
            {Skills[0].name}
        </div>
    )
}

export default OtherPage