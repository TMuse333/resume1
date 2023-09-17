import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {





    return (
        <div className="footer-container"
        >
         <div className="footer-list">
         <a href="mailto:thomaslmusial@gmail.com">email me</a>
            <Link to="/FAQ">
            <p>FAQ's</p>
            </Link>
           
             </div>  

             <p>2023 copyrights Thomas Musial</p> 

        </div>
    )
}

export default Footer