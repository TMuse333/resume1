import React from "react";
import game from '../images/quantum-card-game.png'



const Programmer = () =>{


    return (
        <div className="programmer-container">
            
            <h1>Programmer</h1>
            <p>I also have two years of programming experience,
                The language I have the most experience in is javascript,
                as I have built this website along with a cardgame, both using
                react js. You can view the card game here
            </p>
            <a href='https://chic-tulumba-8df43a.netlify.app/#'>Quantum card game</a>
            <img src={game}
            style={{
                
            }}/>


        </div>
        
    )


}

export default Programmer