import React from 'react'
import workout1 from '../images/workout1.jpg'
import workout2 from '../images/workout2.jpg'
import workout3 from '../images/workout3.jpg'

const Workout = () => {
  return (
    <div className='container workout-container'>

      <div className='workout-box'>
        <div className='overlay'></div>
        <img src={workout1} alt="workout"/>
        <div className='workout-info'>
          <i class="fas fa-calendar-check"></i>
          <p>PROGRESSION</p>
        </div>
      </div>

      <div className='workout-box'>
      <div className='overlay'></div>
        <img src={workout2} alt="workout"/>
        <div className='workout-info'>
          <i class="fas fa-dumbbell"></i>
          <p>WORKOUT</p>
        </div>
      </div>

      <div className='workout-box'>
      <div className='overlay'></div>
        <img src={workout3} alt="workout"/>
        <div className='workout-info'>
          <i class="fas fa-apple-alt"></i>
          <p>NUTRITION</p>
        </div>
      </div>

      <div className='workout-box dark'>
        <div className='workout-info'>
          <i class="fas fa-calendar-check"></i>
          <p>PROGRESSION</p>
          <p className="info">Think ypu feel too tired to work out ? Think again. Your fatingue may be mental Think ypu feel too tired</p>
        </div>
      </div>

    </div>
  )
}

export default Workout