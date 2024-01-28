import React from 'react'
import './About.css'
import aboutImg from '../Images/aboutImg.jpg'
import Typical from 'react-typical'
import { MdWorkspacePremium } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";

const About = () => {
  return (
    <div className='about' id="about">
        <div className='about_left'>
            <div className='about_card_bg'></div>
            <div className='card'>
                <img src={aboutImg} alt=""  className='about_Image'/>
            </div>
        </div>
        <div className='about_right'>
        <p style={{textAlign:"center", fontSize:"20px"}}>Know Who I'M</p>
        <h1 class="heading">About Me</h1>
        <p className="about_right_sub">
          <Typical 
            loop={Infinity}
            steps={[
              " Hi Everyone, I am Tejasvi Sawant from Navi Mumbai, Maharashtra",
              500,

            ]}
          />      
        </p>
        <div className='aboutContainer'>
          <div className='details_Container'>
          <MdWorkspacePremium />
          <h3>Experience</h3>
          <p>4+ years <br/>
            Frontend Development</p>
          </div>
          <div className='details_Container'>
          <IoIosSchool />
          <h3>Education</h3>
          <p>Bachelor of Science in Information Technology</p>
          </div>
        </div>
        <p className="about_right_desc">
        As a dedicated Frontend Developer with expertise in React.js, I have a passion for creating visually appealing and interactive web applications. Currently serving as a Systems Engineer at Tata Consultancy Services since January 2023, I spearhead the development of new user-facing features, build reusable components, and ensure responsive UI designs. At Infosys Pvt. Ltd., I consistently delivered high-quality work, translating designs into code, developing user-facing features, and closely monitoring frontend performance. With a love for innovation and attention to detail, I strive to stay at the forefront of frontend development trends. Let's connect to enhance your projects and elevate user experiences.
        </p>
       
      </div>
    </div>
  )
}

export default About