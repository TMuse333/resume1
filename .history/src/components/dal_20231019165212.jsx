import React from "react";
import dal from '../images/dal.png'


const Dal = () =>{



    return (
        <div className="dal-container">
        <h1>Two years of Computer Science at Dalhousie</h1>
        <img src={dal}
        style={{height:'300px'}}
        />
        <p>From September 2021 to  May 2023, I attended Dalhousie for two years doing computer science.
            This experience gave me a very strong background in understanding complex theories and how computers work,
            along with coding skills and I even made this website myself! It was a solid experience and I am ready
        </p>
        </div>
    )
}

export default Dal;