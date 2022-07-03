import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container footer-container'>

        <div className='footer-box box-1'>
          <h1><i className="fas fa-dumbbell"></i> Gym-24</h1>
          <p>Peaker is a champ in providing its users with absolutely everything a fitness or gym site needs. Lorem ipsum dolor sit amet.</p>
          <div className='footer-social'>
            <i class="fas fa-share-alt-square"></i>
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-twitter-square"></i>
            <i class="fab fa-linkedin"></i>
          </div>
        </div>

        <div className='footer-box box-2'>
          <h3>QUICK LINKS</h3>
          <p><i class="fas fa-square"></i> Why Choose Us</p>
          <p><i class="fas fa-square"></i> Fitness Online</p>
          <p><i class="fas fa-square"></i> Our Classes</p>
          <p><i class="fas fa-square"></i> Download Brochure</p>
          <p><i class="fas fa-square"></i> News and events</p>
          <p><i class="fas fa-square"></i> Before & After</p>
        </div>

        <div className='footer-box box-3'>
          <h3>CENTER ADDRESS</h3>
          <p><i class="fas fa-phone-alt"></i> +07 554 332 322</p>
          <p><i class="fas fa-envelope"></i> gym24@gmail.com</p>
          <p><i class="fas fa-map-marker"></i> Sweden, Stockholm</p>
          <p><i class="fas fa-globe"></i> www.gym24.com</p>
        </div>

        <div className='footer-box box-4'>
          <h3>WORKING HOURS</h3>
          <p>
            <i class="fas fa-square"></i>
            <div className='ours'>
              MONDAY - FRIDAY:
              7:00am - 8:00pm
            </div>
          </p>
          <p>
            <i class="fas fa-square"></i>
            <div className='ours'>
              SATURDAY:
              7:00am - 6:00pm
            </div>
          </p>
          <p><i class="fas fa-square"></i> SUNDAY CLOSED</p>
        </div>

      </div>
    </div>
  )
}

export default Footer