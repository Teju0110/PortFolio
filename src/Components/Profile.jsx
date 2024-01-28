import React from "react";
import "./Profile.css";
import myPhoto from "../Images/me.jpg";
import Type from "./Type";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="profile" id="profile">
      <div className="profile_left">
        <div className="profile_left_details">
          <h2>
            Hello, My name is
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h2>
          <h1>Tejasvi Sawant</h1>

          <div
            style={{
              textAlign: "left",
              fontSize: "30px",
              fontWeight: "600",
              marginBottom: "50px",
            }}
          >
            <Type />
          </div>
          <div className="d-flex w-10">
            <a href="My Resume.pdf" download="Cv My Resume.pdf">
              <button className="resume" style={{ fontSize: "18px" }}>
                Get Resume
              </button>
            </a>
            <a href="#contact">
              <button className="contactInfoBTN">Contact Info</button>
            </a>
          </div>
          <div className="socialContainer">
            <a href="https://linkedin.com/" className="icon">
              <FaGithub style={{ fontSize: "40", color: "#1F51FF" }} />
            </a>
            <a href="https://github.com/" className="icon">
              <FaLinkedin style={{ fontSize: "40px", color: "#1F51FF" }} />
            </a>
          </div>
        </div>
      </div>
      <div className="profile_right">
        <div className="profile_right_bg"></div>
        <img src={myPhoto} alt=" " className="profile_right_img" />
      </div>
    </div>
  );
};

export default Profile;
