import React, { useRef, useState, useContext } from "react";
import phone from "../Images/phone.jpg";
import mail from "../Images/mail.jpg";
import address from "../Images/address.jpg";
import emailjs from "emailjs-com";
import "./Contact.css";
import { ThemeContext } from '../Context/Context'

const Contact = () => {
  const formRef = useRef();
  const[done,setDone]=useState(false);
  const theme=useContext(ThemeContext);
  const darkMode=theme.state.darkMode;

  const handleSubmit =(e)=>{
      e.preventDefault();

      emailjs.sendForm('service_qqqgqrk', 'template_2qfxqzi', formRef.current, 'user_hetB8SknW2IAYlyfyMH93')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });

      

  }

  return (
    <div className="contact" id="contact">
      <div className="contact_bg"></div>
      <div className="contact_details">
        <div className="contact_left">
          <h1 className="contact_title">Let's Discuss</h1>
          <div className="contact_info">
            <div className="contact_info_item">
              <img src={phone} alt="" className="contact_icon" />
              +91 8693881789
            </div>
            <div className="contact_info_item">
              <img className="contact_icon" src={mail} alt="" />
              tejasvisawant1998@gmail.com
            </div>
            <div className="contact_info_item">
              <img className="contact_icon" src={address} alt="" />
             C.B.D Belapur, Navi Mumbai, Mahrarashtra 
             400614
            </div>
          </div>
        </div>

        <div className="contact_right">
          <p className="contact_desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input  type="text" placeholder="Subject" name="user_subject" required/>
            <input  type="text" placeholder="Email" name="user_email" required/>
            <textarea  rows="5" placeholder="Message" name="message" required/>
            <input  type="text" placeholder="Name" name="user_name" required/>
            <button>Submit</button>
            {done && "Thank You !!"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
