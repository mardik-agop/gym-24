import React from 'react'
import brand1 from '../images/brand_1.png'
import brand2 from '../images/brand_2.png'
import brand3 from '../images/brand_3.png'
import brand4 from '../images/brand_04.png'
import brand5 from '../images/brand_5.png'
import brand6 from '../images/brand_7.png'

const Brands = () => {
  return (
    <div className='brands'>
      <div className='container brands-container'>
        <img src={brand1} alt="brand"/>
        <img src={brand2} alt="brand"/>
        <img src={brand3} alt="brand"/>
        <img src={brand4} alt="brand"/>
        <img src={brand5} alt="brand"/>
        <img src={brand6} alt="brand"/>
      </div>
    </div>
  )
}

export default Brands