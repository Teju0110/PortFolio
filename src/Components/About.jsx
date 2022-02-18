import React from 'react'
import './About.css'
import aboutImg from '../Images/aboutImg.jpg'
import award from '../Images/award.jpg'
import Typical from 'react-typical'

const About = () => {
  return (
    <div className='about'>
        <div className='about_left'>
            <div className='about_card_bg'></div>
            <div className='card'>
                <img src={aboutImg} alt=""  className='about_Image'/>

            </div>
        </div>
        <div className='about_right'>
        <h1 className="about_right_title">About Me</h1>
        <p className="about_right_sub">
          <Typical 
            loop={Infinity}
            steps={[
              " It is a long established fact that a reader will be distracted by thereadable content",
              500,

            ]}
          />

         
        </p>
        <p className="about_right_desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <div className="award">
          <img src={award} alt="" className="award-img" />
          <div className="award-texts">
            <h4 className="award-title">International Design Awards 2021</h4>
            <p className="award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About