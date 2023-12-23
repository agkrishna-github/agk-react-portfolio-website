import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";

const Education = () => {
  return (
    <div className="education">
      <h2>Education Details</h2>
      <hr />
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          date="2021"
          iconStyle={{ background: "#138781", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h4 className="vertical-timeline-element-title">MBA</h4>
          <h5 className="vertical-timeline-element-subtitle">
            KGR INSTITUTE OF TECHNOLOGY AND MANAGEMENT, TELANGANA
          </h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          date="2012"
          iconStyle={{ background: "#138781", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h4 className="vertical-timeline-element-title">BCOM</h4>
          <h5 className="vertical-timeline-element-subtitle">
            ABV GOVT DEGREE COLLEGE, TELANGANA
          </h5>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;
