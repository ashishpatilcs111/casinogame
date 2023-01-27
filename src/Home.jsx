import React from 'react'
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
        <h1 className='heading'>Instructions</h1>
        <div className='home-instruction'>
            <ul className='home-list'>
                <li>Dragon Tiger is a fast-action game played with cards on a table.</li>
                <li>The game begins when players bet on either Dragon or Tiger options on the table. </li>
                <li>Depending on whether you bet on the Dragon or the Tiger box, you win if the highest card appears on that particular option.</li>
                <h1>How To Play?</h1>
                <li>First, you bet on either the Dragon or the Tiger box by placing chips on either of the two options.</li>
                <li>Then the dealer draws one card for each set and places them on the respective boxes on the table.</li>
                <li>You win if your initial bet or call has the highest card value among the two box options. Or else, you lose.</li>
            </ul>
            <button className='btn' ><a href="/game">Start Game</a></button>
        </div>
    </div>
  )
}

export default Home