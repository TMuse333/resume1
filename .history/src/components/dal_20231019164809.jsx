import React from "react";
import dal from '../images/dal.png'


const Dal = () =>{



    return (
        <div className="dal-container">
        <h1>Two years of Computer Science at Dalhousie</h1>
        <img src={dal}
        style={{height:'300px'}}
        />
        <p>I attended Dalhousie for two years doing computer science.
            This experience gave me a very strong background in understadning complex theories and how computers work
        </p>
        </div>
    )
}

export default Dal;