import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import BannerImage from './BannerImage'
import Workout from './Workout'
import Fitnes from './Fitnes'
import Fitnes2 from './Fitnes2'
import Class from './Class'
import Brands from './Brands'
import Couches from './Couches'
import Change from './Change'
import News from './News'
import Online from './Online'
import Signup from './Signup'
import Footer from './Footer'

const Header = () => {
  return (
    <div>
      <header>
        <Navbar/>
        <Banner/>
        <BannerImage/>
      </header>
      <Workout/>
      <Fitnes/>
      <Fitnes2/>
      <Class/>
      <Brands/>
      <Couches/>
      <Change/>
      <News/>
      <Online/>
      <Signup/>
      <Footer/>
    </div>
  )
}

export default Header