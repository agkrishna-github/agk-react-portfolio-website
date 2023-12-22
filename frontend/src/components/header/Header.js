import React from "react";
import "./Header.css";
import Typewriter from "typewriter-effect";
import ProfilePic from "../../images/new-profile-pic.jpeg";

const Header = () => {
  return (
    <div className="header">
      <div className="title">
        <h3>Hi 👋 I'm</h3>
        <h2> A GOPALAKRISHNA</h2>
        <h1>
          <Typewriter
            options={{
              strings: ["React developer!"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </div>
      <div className="image">
        <img src={ProfilePic} alt="Profile Pic" />
      </div>
    </div>
  );
};

export default Header;
