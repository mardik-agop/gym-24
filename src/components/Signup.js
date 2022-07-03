import React from 'react'

const Signup = () => {
  return (
    <div className='signup'>
      <div className='container signup-container'>
        <div className='signup-content'>
          <p>SIGN UP FOR THE LATEST NEWS AND OFFERS!</p>
          <div className='input'>
            <input type="email" placeholder='Enter your email...'></input>
            <i class="far fa-paper-plane"></i>
          </div>
        </div>
        <div className='signup-line'></div>
      </div>
    </div>
  )
}

export default Signup