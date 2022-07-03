import React from 'react'
import team1 from '../images/team_1.jpg'
import team2 from '../images/team_2.jpg'
import team3 from '../images/team_3.jpg'

const Couches = () => {
  return (
    <div className='container couches-container'>
      <div className='couches-intro'>
        <h1>TEAM OF EXPERTC COACHES</h1>
        <p>This also meant we needed to provide a learning environment run by experienced  <br/>our most
        important goal .</p>
        <div className='line'></div>
      </div>

      <div className='couches'>

        <div className='couch'>
          <img src={team1}/>
          <div className='team-info'>
            <h4>GYM COACH</h4>
            <h2>DAVID MICHEL</h2>
          </div>
          <div className='team-social'>
            <i class="fas fa-share-alt-square"></i>
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-twitter-square"></i>
            <i class="fab fa-linkedin"></i>
          </div>
        </div>

        <div className='couch'>
          <img src={team2}/>
          <div className='team-info'>
            <h4>CARDIO COACH</h4>
            <h2>JAMES FEDDI</h2>
          </div>
          <div className='team-social'>
            <i class="fas fa-share-alt-square"></i>
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-twitter-square"></i>
            <i class="fab fa-linkedin"></i>
          </div>
        </div>

        <div className='couch'>
          <img src={team3}/>
          <div className='team-info'>
            <h4>CROSSFIT COACH</h4>
            <h2>SAMANTHA GAINS</h2>
          </div>
          <div className='team-social'>
            <i class="fas fa-share-alt-square"></i>
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-twitter-square"></i>
            <i class="fab fa-linkedin"></i>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Couches