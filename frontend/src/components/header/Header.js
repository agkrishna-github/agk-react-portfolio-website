import React from "react";
import "./Header.css";
import Typewriter from "typewriter-effect";
import ProfilePic from "../../images/new-profile-pic.jpeg";
import Zoom from "react-reveal/Zoom";

const Header = () => {
  return (
    <div className="header" id="home">
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
        <Zoom>
          <img src={ProfilePic} alt="Profile Pic" />
        </Zoom>
      </div>
    </div>
  );
};

export default Header;
