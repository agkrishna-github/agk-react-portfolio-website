import React from "react";
import "./About.css";
import { BsPatchCheckFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about">
      <div className="headings">
        <h4>What skills I have</h4>
        <h2>My Skills and experience</h2>
      </div>
      <div className="details">
        <h3>Frontend Development</h3>
        <div className="skills">
          <div className="elements">
            <div>
              <BsPatchCheckFill />
            </div>
            <div>
              <h4>HTML</h4>
              <p>Good Experience with various HTML Projects</p>
            </div>
          </div>
          <div className="elements">
            <div>
              <BsPatchCheckFill />
            </div>
            <div>
              <h4>CSS</h4>
              <p>Good Experience with various CSS Projects</p>
            </div>
          </div>
          <div className="elements">
            <div>
              <BsPatchCheckFill />
            </div>
            <div>
              <h4>JavaScript</h4>
              <p>Good Experience with various JavaScript Projects</p>
            </div>
          </div>
          <div className="elements">
            <div>
              <BsPatchCheckFill />
            </div>
            <div>
              <h4>React JS</h4>
              <p>Good Experience with various React JS Projects</p>
            </div>
          </div>
          <div className="elements">
            <div>
              <BsPatchCheckFill />
            </div>
            <div>
              <h4>Node JS</h4>
              <p>Good Experience with various Node JS Projects</p>
            </div>
          </div>

          <div className="elements">
            <div>
              <BsPatchCheckFill />
            </div>
            <div>
              <h4>Express JS</h4>
              <p>Good Experience with various Express JS Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
