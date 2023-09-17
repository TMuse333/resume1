import React from "react";
import Footer from "./footer";
import { Link } from "react-router-dom";



const FAQ = () =>{
return (
    <div className="faq-container">

    

        <div className="faq-text">

        <h1>FAQ's</h1>

        <h2>Is this service free? </h2>
        <p>no, you have to pay</p>
        <h2>Is it a good choice?</h2>
        <p>No, its a phenomenal choice</p>
        <h2>What is your process</h2>
        <p>I code for 3 to 5 hours a day with complete focus and track my progress vigorously</p>
        </div>

        <div className="link-container">

       <Link to="/">
        <button>
        Back home
        </button>
       </Link>

<div className="faq-footer">
        <Footer/>
        </div>
        
    </div>

    
)
}

export default FAQ