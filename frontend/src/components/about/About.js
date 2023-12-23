import React from "react";
import "./About.css";
import { BsPatchCheckFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about">
      <div className="headings">
        <h5>What skills I have</h5>
        <h3>My Skills and experience</h3>
      </div>
      <div className="details">
        <h4>Frontend Development</h4>
        <div className="skills">
          <div className="elements">
            <div>
              <BsPatchCheckFill />
            </div>
            <div>
              <h5>HTML</h5>
              <p>Good Experience with various HTML Projects</p>
            </div>
          </div>
          <div className="elements">
            <div>
              <BsPatchCheckFill />
            </div>
            <div>
              <h5>CSS</h5>
              <p>Good Experience with various CSS Projects</p>
            </div>
          </div>
          <div className="elements">
            <div>
              <BsPatchCheckFill />
            </div>
            <div>
              <h5>JavaScript</h5>
              <p>Good Experience with various JavaScript Projects</p>
            </div>
          </div>
          <div className="elements">
            <div>
              <BsPatchCheckFill />
            </div>
            <div>
              <h5>React JS</h5>
              <p>Good Experience with various React JS Projects</p>
            </div>
          </div>
          <div className="elements">
            <div>
              <BsPatchCheckFill />
            </div>
            <div>
              <h5>Node JS</h5>
              <p>Good Experience with various Node JS Projects</p>
            </div>
          </div>

          <div className="elements">
            <div>
              <BsPatchCheckFill />
            </div>
            <div>
              <h5>Express JS</h5>
              <p>Good Experience with various Express JS Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
