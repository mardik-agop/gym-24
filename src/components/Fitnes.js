import React from 'react'
import fitnes from '../images/fitnes.jpg'

const Fitnes = () => {
  return (
    <div className='container fitnes-container'>
      <div className='fitnes-info'>
        <p>PEAKER FITNES & GYM</p>
        <h1>BODIES OF STAMINA <br/>STRENGTH.</h1>
        <div className='circle2'></div>
        <p>Think ypu feel too tired to work out ? Think again. Your fatingue may be mental rather than physical.
        Here is how to tell and how to coerce yourself into a training rather than physical. Here is how to .</p>
        <button className='btn'>MORE ABOUT US</button>
      </div>
      <div className='fitnes-image'>
        <img src={fitnes} alt="fitnes"/>
      </div>
    </div>
  )
}

export default Fitnes