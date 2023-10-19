import React from "react";
import dal from '../images/dal.png'


const Dal = () =>{



    return (
        <div className="dal-container">
        <h1>Two years of Computer Science at Dalhousie</h1>
        <img src={dal}
            style={{height:'35vw',
            width:'55vw'}}
        />
        <p>From September 2021 to May 2023, I completed a two-year program in computer science at Dalhousie University. This education enriched my understanding of complex theories, computer systems, and coding. Additionally, I independently developed this website, demonstrating my technical prowess. Now, I am well-prepared to transition into the professional world, eager to refine my sales skills and make you a lot of money.
        </p>
        </div>
    )
}

export default Dal;