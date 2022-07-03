import React from 'react'
import newsImg from '../images/fitnes2.jpg'

const News = () => {
  return (
    <div className='news-container'>
    <div className='news container'>

      <div className='news-left'>
        <img src={newsImg} alt="fitnes"/>
        <div className='news-left-info'>
          <h2>Good clothes, Good workout</h2>
          <p>We want to help you live a fit and healthy lifestyle! We do this by helping you find the most suitable equipment for your home gym, studio or commercial gym, keeping your budget, lifestyle and fitness goals in mind. We stock a wide range of gym equipment, with strength equipment, cardio, cross training and so much more.</p>
          <p>We believe that no investment is more valuable than one’s own. When investing properly in exercise, the benefits that customers get are not only aesthetic.</p>
          <button className='btn'>MORE ABOUT US</button>
        </div>
      </div>

      <div className='news-right'>

        <div className='new'>
          <h3>LATEST NEWS</h3>
          <span>SEPTEMBER 20, 2021</span>
          <p>WHAT WOULD BE YOUR TOP TIPS FOR MAKING A SUCCESS</p>
          <p>We believe that no investment is more valuable than one’s own. When investing properly in exercise, the benefits that customers get are not only aesthetic.</p>
          <div className='underline'></div>
        </div>

        <div className='new'>
          <span>OKTOBER 12, 2021</span>
          <p>5 PERFECT YOGA LEARNING TIPS YOU SHOULD KNOW</p>
          <p>We believe that no investment is more valuable than one’s own. When investing properly in exercise, the benefits that customers get are not only aesthetic.</p>
          <div className='underline'></div>
        </div>

        <div className='new'>
          <span>December 2, 2021</span>
          <p>SECRETS TO REDUCE MULTIPLAYER MOTHER THAN FAST</p>
          <p>We believe that no investment is more valuable than one’s own. When investing properly in exercise, the benefits that customers get are not only aesthetic.</p>
          <p className='more-news'>
            SHOW MORE NEWS
          </p>
        </div>

      </div>

    </div>
    </div>
  )
}

export default News