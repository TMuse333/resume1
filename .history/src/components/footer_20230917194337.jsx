import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {





    return (
        <div className="footer-container"
        >
         <div className="footer-list">
            <p>Contact us</p>
            <Link to="/FAQ">
            <p>FAQ's</p>
            </Link>
           
             </div>  

             <p>2023 copyrights Thomas Musial</p> 

        </div>
    )
}

export default Footer