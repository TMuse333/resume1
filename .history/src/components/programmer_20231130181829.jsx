import React from "react";
import game from '../images/quantum-card-game.png'


const Programming = () =>{



    return (
        <div className="dal-container">
        <h1>Coding experience</h1>

        <p>I have been coding since September 2021, and in that time I have learned multiple languages
          My best language is javascript, particularly the react js framework, where I have built a card game and this website.
        </p>
        <img src={game} />
        <a href='https://chic-tulumba-8df43a.netlify.app/'>Click here to play the quantum card game</a>
              <div className="card-came-learning">
                <h2>What I learned from it</h2>
                <p>Creating this card game taught me
                  how to set up image displays using grid, as well
                  as managing the many states of an element.
                  
                </p>
                <p>The objective of the card game is to match</p>
              </div>
        <p>I also have experience in Java having made a program to
          track the amount of time various art projects took and compare them to others.
          I have experience in c coding as well as python
        </p>
        </div>
    )
}

export default Programming;