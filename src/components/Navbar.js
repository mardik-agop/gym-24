import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <div className='container nav-container'>
        <div className='logo'>
          <h1><i className="fas fa-dumbbell"></i> Gym-24</h1>
        </div>
        <ul className="links">
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>PAGES</li>
          <li>SUBSCRIPTION</li>
          <li>CONTACT</li>  
        </ul>
        <div className='options'>
          <li><i className="fas fa-search"></i></li>
          <li><i className="fas fa-shopping-cart"></i></li>
          <li><i className="fas fa-bars"></i></li>
        </div>
      </div>
    </nav>
  )
}

export default Navbar