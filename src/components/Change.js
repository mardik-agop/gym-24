import React from 'react'
import change1 from '../images/fancy_01.jpg'
import change2 from '../images/fancy_02.jpg'
import change3 from '../images/fancy_03.jpg'

const Change = () => {
  return (
    <div className='container change-container'>
      <div className='change-intro'>
        <h1>START TO CHANGE TOURSELF</h1>
        <p>This also meant we needed to provide a learning environment run by experienced and successful coaches. However, <br/>our most
        important goal was to create a welcoming.</p>
        <div className='line'></div>
      </div>

    <div className='change-images'>
      <div className='change'>
        <div className='num'>1</div>
        <img src={change1}/>
        <div className='change-info'>
          <p>SPENDING TIME</p>
          <p>This also meant we needed to provide a learning environment run by experienced and successful coaches</p>
        </div>
      </div>
      <div className='change'>
        <div className='num'>2</div>
        <img src={change2}/>
        <div className='change-info'>
          <p>START TRAINING</p>
          <p>This also meant we needed to provide a learning environment run by experienced and successful coaches</p>
        </div>
      </div>
      <div className='change'>
        <div className='num'>3</div>
        <img src={change3}/>
        <div className='change-info'>
          <p>TRAINING RESULTS</p>
          <p>This also meant we needed to provide a learning environment run by experienced and successful coaches</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Change