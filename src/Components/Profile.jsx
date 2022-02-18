import React from "react";
import "./Profile.css";
import myPhoto from '../Images/me.jpg' 

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile_left">
        <div className="profile_left_details">
          <h2>Hello, My name is </h2>
          <h1>Tejasvi Sawant</h1>

          <div className="profile_left_title">
            <div className="plt_wrapper">
              <div className="title_items">Web Developer</div>
              <div className="title_items">Android Developer</div>
              <div className="title_items">Mobile Photographer</div>
              <div className="title_items">Home Baker</div>
              <div className="title_items">Reader </div>
            </div>
          </div>


          <p className="profile_left_decription">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services.
          </p>
          <a href="My Resume.pdf" download="Cv My Resume.pdf">
              <button className="resume">Get Resume</button>
            </a>

          
        </div>

      
      </div>
      <div className="profile_right">
        <div className="profile_right_bg"></div>
        <img src={myPhoto} alt=" " className='profile_right_img'/>


      </div>
    </div>
  );
};

export default Profile;
