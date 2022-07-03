import React from 'react'
import full from '../images/full.png'
import phone from '../images/h4_phone.png'

const Online = () => {
  return (
    <div className='online'>
        {/* <img src={full} alt="full"/> */}
      <div className='container online-container'>
        <img src={phone} alt="phone" className='phone'/>
        <div className='phone-circle'></div>
        <div className='online-info'>
          <span>CAN'T STOP THE SPIRIT OF SPORT</span>
          <h2>FITNESS ONLINE RIGHT <br/> AT HOME</h2>
          <p className='online-desc'>With the online fitness service via video call you can exercise no matter the weather or work, you will stay healthy even if you don’t go to the gym. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus at elit sed cursus. Curabitur vitae sagittis ante. Morbi in rutrum lorem, non volutpat ipsum.</p>

          <div className='icons'>
            <p>
              <i class="fas fa-check-circle"></i> 
              NO MATTER RAIN, SUN OR DISEASE, YOU CAN PRACTICE
            </p>
            <p>
              <i class="fas fa-check-circle"></i> 
              COMFORT AND FREEDOM GIVE YOU THE BEST SPIRIT
            </p>
            <p>
              <i class="fas fa-check-circle"></i>          
              DON'T MISS OUT ON THE WORKOUTS DUE TO OTHER FACTORS
            </p>
          </div>
          <button className='btn'>READ MORE</button>
        </div>
      </div>
    </div>
  )
}

export default Online