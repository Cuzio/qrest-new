import React from "react";
import "../css/contactUs.css";
import bigLogo from "../images/big-logo.png";
import emailjs from "emailjs-com";

const ContactUs = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bftvsdj",
        "template_7lbo25g",
        e.target,
        "x5mPoTHghaCtC2JIc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div className="container">
      <div className="contact-us">
        <div className="contact-message">
          <h1>Contact Us</h1>
          <p>
            Ready to cut through the noise and explore endless possibilities?
          </p>
          <form onSubmit={sendEmail}>
            <div className="details">
              <div className="fill">
                <label htmlFor="name">
                  <input
                    type="text"
                    name="to_name"
                    className="input-name"
                    placeholder="Name"
                  />
                </label>
              </div>
              <div className="fill">
                <label htmlFor="name">
                  <input
                    type="email"
                    name="to_email"
                    className="input-name"
                    placeholder="Your Email"
                  />
                </label>
              </div>
            </div>

            <div className="fill">
              <label htmlFor="name">
                <textarea
                  name="message"
                  className="message-text"
                  placeholder="Type about your project here"
                />
              </label>
            </div>
            <button type="submit" className="contact-button">
              Send
            </button>
          </form>
        </div>
        <div className="big-logo">
          <img src={bigLogo} alt="" className="qrest-big-logo" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
