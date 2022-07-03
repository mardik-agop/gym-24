import React from 'react'
import fitnes from '../images/fitnes2.jpg'

const Fitnes2 = () => {
  return (
    <div className='container fitnes-container fitnes2-container'>
      <div className='fitnes-image fitnes2-image'>
        <img src={fitnes} alt="fitnes2"/>
        <div className='circle1'></div>
      </div>
      <div className='fitnes-info fitnes2-info'>
        <p>OUR VISION & MISSION</p>
        <h1>WE PUT THE HEALTH <br/>CUSTOMER FIRST</h1>
        <p>Think ypu feel too tired to work out ? Think again. Your fatingue may be mental rather than physical.
        Here is how to tell and how to coerce yourself into a training rather than physical. Here is how to .</p>
        <button className='btn'>MORE ABOUT US</button>
      </div>
    </div>
  )
}

export default Fitnes2