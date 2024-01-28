import React from "react";
import "./Project.css";
import restrau_web from "../Asset/Restraurant_Web.png";
import crytoTracker from "../Asset/cryptoTracker.png";
import hotelBooking from "../Asset/HotelBooking_Web.png";
import movies from "../Asset/moviesseries_web.png";
import aiUi from "../Asset/ResponsiveAiInfo_web.png";
import { PiArrowSquareUpRightFill } from "react-icons/pi";

const Projects = () => {
  return (
    <div style={{ paddingTop: "100px" }} id="project">
      <p style={{ textAlign: "center", fontSize: "20px" }}>Browse My Work</p>
      <h1 className="heading">Projects</h1>
      <div>
        <ol>
          <li style={{ color: "#1F51FF", fontSize: "20px", fontWeight: "600" }}>
            British Telecom:
          </li>
          <p>
            BT Global Services is a division of United Kingdom
            telecommunications company. BT Group that provides global security,
            and networking services to multinational companies worldwide.
          </p>
          <li style={{ color: "#1F51FF", fontSize: "20px", fontWeight: "600" }}>
            {" "}
            Dashboard for ticket stats{" "}
          </li>
          <ul>
            <li>
              {" "}
              Constructed a dashboard showcasing ticket statistics, encompassing
              total counts, resolved tickets, and pending ones.
            </li>
            <li>
              {" "}
              Presented detailed ticket-solving statistics for each team,
              enabling
            </li>
            historical trend analysis.
          </ul>
          <li style={{ color: "#1F51FF", fontSize: "20px", fontWeight: "600" }}>
            {" "}
            Zero Touch Operation (ZTO):
          </li>
          <p>Internal Project for monitoring and automation.</p>
          <ol type="i">
            <li> Dashboard:</li>
            <ul>
              <li>
                {" "}
                Display of real-time job status and CPU utilization for quick
                performance assessment. Tree-like structure visualization of job
                flows.
              </li>
              <li>
                {" "}
                Tabular representation of job data for detailed analysis.
              </li>
            </ul>
            <li> Data Input Forms:</li>
            <ul>
              <li>
                {" "}
                Forms for adding system details, environment configurations, and
                job-specific information.
              </li>
              <li>
                {" "}
                Intuitive interface for easy data entry and modification.
              </li>
            </ul>
            <li> Error Notification:</li>
            <ul>
              <li>
                {" "}
                Automated error notifications with details on the occurrence and
                resolution process.
              </li>
              <li>
                {" "}
                Clearly defined contact points for issue escalation and
                resolution.
              </li>
            </ul>
            <li> Daily Reports:</li>
            <ul>
              <li>
                {" "}
                Automated daily start-of-day and end-of-day reports sent to
                respective teams.
              </li>
              <li>
                {" "}
                Summarized information on key metrics, job statuses, and
                potential issues.
              </li>
            </ul>
          </ol>
          <li style={{ color: "#1F51FF", fontSize: "20px", fontWeight: "600" }}>
            {" "}
            NDS-OM Retail Revamp:{" "}
          </li>
          <p>
            The Negotiated Dealing System, or NDS, is an electronic trading
            platform operated by the Reserve Bank of India (RBI) to facilitate
            the issuing and exchange of government securities and other types of
            money market instruments.
          </p>
        </ol>
      </div>
      <div style={{ padding: "20px", lineHeight: "1px" }}>
        <h2 style={{ color: "#1F51FF" }}>Personal Project</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h3>Git Hub Link:</h3>
          <a href="https://github.com/Teju0110"> https://github.com/Teju0110</a>
        </div>
      </div>
      <div className="projectsExp">
        <div className="details colorContainer">
          <div className="proj-imgbx">
            <img src={restrau_web} alt="Project 1" className="projectImg" />
            <div className="proj-txtx">
              <h2>Restaurant Website</h2>
            </div>
          </div>
          <div
            style={{
              gap: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button className="btn btn-color-2 project-btn">
              <a
                href="https://github.com/Teju0110/Restaurant_website"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Github
              </a>
            </button>
            <button class="btn btn-color-2 project-btn">
              <a
                href="https://my-restro-restaurant.netlify.app/"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Live Demo
              </a>
            </button>
          </div>
        </div>

        <div className="details colorContainer">
          <div className="proj-imgbx">
            <img src={crytoTracker} alt="Project 1" className="projectImg" />
            <div className="proj-txtx">
              <h2
                className="experience-sub-title project-title"
                style={{ color: "#1F51FF" }}
              >
                Crypto Tracker
              </h2>
            </div>
          </div>
          <div
            style={{
              gap: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button className="btn btn-color-2 project-btn">
              <a
                href="https://github.com/Teju0110/crypto-tracker"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Github
              </a>
            </button>

            <button class="btn btn-color-2 project-btn">
              <a
                href="https://cryptoo-tracker-website.netlify.app/"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Live Demo
              </a>
            </button>
          </div>
        </div>

        <div className="details colorContainer">
          <div className="proj-imgbx">
            <img src={hotelBooking} alt="Project 1" className="projectImg" />
            <div className="proj-txtx">
              <h2>Hotel Booking Website UI</h2>
            </div>
          </div>
          <div
            style={{
              gap: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button className="btn btn-color-2 project-btn">
              <a
                href="https://github.com/Teju0110/Hotel-Booking-App"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Github
              </a>
            </button>

            <button class="btn btn-color-2 project-btn">
              <a
                href="https://fluffy-unicorn-ee8b54.netlify.app/"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Live Demo
              </a>
            </button>
          </div>
        </div>

        <div className="details colorContainer">
          <div className="proj-imgbx">
            <img src={movies} alt="Project 1" className="projectImg" />
            <div className="proj-txtx">
              <h2>Movies and Series Website</h2>
            </div>
          </div>
          <div
            style={{
              gap: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button className="btn btn-color-2 project-btn">
              <a
                href="https://github.com/Teju0110/Movies_Series_App"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Github
              </a>
            </button>
            <button class="btn btn-color-2 project-btn">
              <a
                href="https://fluffy-kleicha-7ee485.netlify.app//"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Live Demo
              </a>
            </button>
          </div>
        </div>

        <div className="details colorContainer">
          <div className="proj-imgbx">
            <img src={aiUi} alt="Project" className="projectImg" />

            <div className="proj-txtx">
              <h2>AI UI Website</h2>
            </div>
          </div>
          <div
            style={{
              gap: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button className="btn btn-color-2 project-btn">
              <a
                href="https://github.com/Teju0110/AI_Website"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Github
              </a>
            </button>
            <button class="btn btn-color-2 project-btn">
              <a
                href="https://fabulous-froyo-4653d2.netlify.app/"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Live Demo
              </a>
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a
          href="https://github.com/Teju0110"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <PiArrowSquareUpRightFill
            style={{
              color: "#1F51FF",
              fontSize: "30px",
              fontWeight: "600",
              cursor: "pointer",
              alignSelf: "flex-end",
            }}
            title="Many More..."
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
