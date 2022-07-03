import React from 'react'
import class1 from '../images/workout1.jpg'
import class2 from '../images/workout2.jpg'
import class3 from '../images/class3.jpg'
import class4 from '../images/class4.jpg'

const Class = () => {
  return (
    <div className='class-container'>
      <div className='class-info container'>
        <div className='desc'>
          <h1>VISIT OUR CLASSES</h1>
          <p>Think ypu feel too  fatingue may be mental rather than physical. Here is how to tell and how <br/>to coerce rather than physical.</p>
        <button className='btn'>VIEW ALL CLASS</button>
        </div>
      </div>
      <div className='class-images'>
        <div className='test'>
          <img src={class1} alt="class1"/>
        </div>
        <div className='test'>
          <img src={class2} alt="class2"/>
        </div>
        <div className='test'>
          <img src={class3} alt="class3"/>
        </div>
        <div className='test'>
          <img src={class4} alt="class4"/>
        </div>
      </div>
    </div>
  )
}

export default Class