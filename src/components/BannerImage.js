import React from 'react'
import bannerImg from '../images/banner-img.jpg';

const BannerImage = () => {
  return (
    <div>
      <img src={bannerImg} className="banner-img"/>
    </div>
  )
}

export default BannerImage