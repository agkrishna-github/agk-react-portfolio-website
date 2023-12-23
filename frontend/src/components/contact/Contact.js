import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="contact">
      <div className="headings">
        <h4>Get In Touch</h4>
        <h2>Contact Me</h2>
      </div>
      <div className="contact-main">
        <div className="contact-div1">
          <div className="contact-div1-element">
            <div>
              <MdOutlineEmail className="icon" />
            </div>
            <h4>Email</h4>
            <p>gopalakrishna.ad@gmail.com</p>
            <div className="send-message">
              <a href="mailto:gopalakrishna.ad@gmail.com" target="_blank">
                Send a Message
              </a>
            </div>
          </div>
          <div className="contact-div1-element">
            <div>
              <RiMessengerLine className="icon" />
            </div>
            <h4>Messanger</h4>
            <p>krishnadc@gmail.com</p>
            <div className="send-message">
              <a href="https://m.me/100075700942108" target="_blank">
                Send a Message
              </a>
            </div>
          </div>
          <div className="contact-div1-element">
            <div>
              <BsWhatsapp className="icon" />
            </div>
            <h4>Whatsapp</h4>
            <p>+91 8008262699</p>
            <div className="send-message">
              <a href="https://wa.me/+918008262699" target="_blank">
                Send a Message
              </a>
            </div>
          </div>
        </div>
        <div className="contact-div2">
          <form action="">
            <input type="text" placeholder="Your Full Name" />
            <input type="email" placeholder="Your Email" />
            <textarea
              cols="30"
              rows="10"
              placeholder="Write a Message"
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
