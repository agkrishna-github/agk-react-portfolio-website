import React from "react";

const Menu = ({ list }) => {
  return (
    <div className="menu">
      {list.map(({ id, image, title, github, demo }) => {
        return (
          <div className="list-item" key={id}>
            <div className="list-item-image">
              <img src={image} alt={title} />
            </div>
            <h5>{title}</h5>
            <div className="list-item-a">
              <a href={github} target="_blank">
                Github
              </a>
              <a href={demo} target="_blank">
                Live Demo
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
