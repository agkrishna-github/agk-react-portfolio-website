import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-scroll";
import { TfiAngleDoubleLeft, TfiAngleDoubleRight } from "react-icons/tfi";
const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div className={toggle ? "sidebar" : "toggle-sidebar sidebar"}>
      <div className="arrow" onClick={handleClick}>
        {toggle ? <TfiAngleDoubleLeft /> : <TfiAngleDoubleRight />}
      </div>
      <div>
        <div className="nav-items">
          <div className="nav-item">
            <div className="nav-link">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={100}
                onClick={handleClick}
              >
                Home
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={100}
                onClick={handleClick}
              >
                About
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="education"
                spy={true}
                smooth={true}
                duration={100}
                onClick={handleClick}
              >
                Education
              </Link>
            </div>

            <div className="nav-link">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={100}
                onClick={handleClick}
              >
                Projects
              </Link>
            </div>

            <div className="nav-link">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={100}
                onClick={handleClick}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
