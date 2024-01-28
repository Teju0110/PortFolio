import React from "react";
import "./Experience.css";
import { TbDiscountCheckFilled } from "react-icons/tb";

const Experience = () => {
  return (
    <div className="exp" id="experience">
      <p style={{ textAlign: "center", fontSize: "20px", marginBottom:"-20px" }}>Explore My</p>
      <h1 className="heading">Experience</h1>
      <div className="experienceContainer">
        <div className="detailsContainer">
          <h2 className="title">Skills</h2>
          <div className="articleContainer">
            <article>
              <TbDiscountCheckFilled style={{ fontSize: "2rem", color:"#cdd835" }} />
              <div style={{lineHeight:"5px"}}>
                <h3 style={{color: "#1F51FF"}}>HTML</h3>
                <p className="p">Experienced</p>
              </div>
            </article>
            <article>
              <TbDiscountCheckFilled style={{ fontSize: "2rem", color:"#cdd835" }} />
              <div style={{lineHeight:"5px"}}>
                <h3 style={{color: "#1F51FF"}}>CSS</h3>
                <p className="p">Experienced</p>
              </div>
            </article>

            <article>
              <TbDiscountCheckFilled style={{ fontSize: "2rem", color:"#cdd835" }} />
              <div style={{lineHeight:"5px"}}>
                <h3 style={{color: "#1F51FF"}}>JavaScript</h3>
                <p className="p">Experienced</p>
              </div>
            </article>
            <article>
              <TbDiscountCheckFilled style={{ fontSize: "2rem", color:"#cdd835" }} />
              <div style={{lineHeight:"5px"}}>
                <h3 style={{color: "#1F51FF"}}>React</h3>
                <p className="p">Experienced</p>
              </div>
            </article>
            <article>
              <TbDiscountCheckFilled style={{ fontSize: "2rem", color:"#cdd835" }} />
              <div style={{lineHeight:"5px"}}>
                <h3 style={{color: "#1F51FF"}}>TypeScript</h3>
                <p className="p">Basic</p>
              </div>
            </article>           
          </div>          
        </div>
        <div className="detailsContainer">
          <h2 className="title">Tools and Libraries</h2>
          <div className="articleContainer" style={{lineHeight:"0px"}}>
            <article>
            
                <h3 style={{color: "#1F51FF",textAlign:"center", lineHeight:"15px"}}>React Router Dom</h3>
           
            </article>
            <article>
              
                <h3 style={{color: "#1F51FF"}}>React Query</h3>
            
            </article>

            <article>
              
                <h3 style={{color: "#1F51FF"}}>GitHub</h3>
             
            </article>
            <article>
          
                <h3 style={{color: "#1F51FF"}}>Axios</h3>
           
            </article>
            <article>
             
                <h3 style={{color: "#1F51FF"}}>React Bootstrap</h3>
          
            </article>
            <article>
           
                <h3 style={{color: "#1F51FF"}}>Material UI</h3>
           
            </article>
            <article>
            
                <h3 style={{color: "#1F51FF"}}>Redux Toolkit</h3>
            
            </article>
           
          </div>
          </div>
        
      </div>
      <div>
        <div className="workExperience">
          <div className="infoHeading">
            <h2 className="companyName">Tata Consultancy Services</h2>
            <h3>Mumbai-System Engineer</h3>
          </div>
          <h3 className="timePeriod">Jan 2023 to Present</h3>
          <ul style={{ lineHeight: "20px" }}>
            <li>
              Designed and developed ReactJS web applications, leveraging
              popular libraries like React-Router-Dom, React Query, Axios, and
              the Redux Toolkit.
            </li>
            <li>
              Employed CSS frameworks, including React-Bootstrap and Telerik, to
              create aesthetically pleasing interfaces that significantly
              improved user experiences.
            </li>
            <li>
              Pioneered the implementation of an automated production issue
              monitoring system, which unified data from six distinct systems.
              This initiative resulted in the creation of a comprehensive data
              visualization dashboard, facilitating data- driven
              decision-making.
            </li>
            <li>
              {" "}
              Actively engaged in a project dedicated to modernizing legacy
              technology to the latest standards. My primary focus in this
              endeavor is front-end development using React.
            </li>
          </ul>
        </div>
        <div className="workExperience">
          <div className="infoHeading">
            <h2 className="companyName">Infosys PVT LTD</h2>
            <h3>Pune- System Engineer</h3>
          </div>
          <h3 className="timePeriod">Oct 2019 to Dec 2022</h3>
          <ul style={{ lineHeight: "20px" }}>
            <li>
              Developed new user-facing features using React.js, emphasizing the
              creation of reusable components and frontend libraries for future
              use.
            </li>
            <li>
              {" "}
              Translated designs and wireframes into high-quality, responsive
              code.
            </li>
            <li>
              {" "}
              Conducted changes in the existing application when required,
              maintaining code integrity and functionality.
            </li>
            <li>
              {" "}
              Monitored and optimized frontend performance to enhance user
              experience.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
