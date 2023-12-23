import React, { useState } from "react";
import "./Projects.css";
import Menu from "./Menu";
import Categories from "./Categories";
import { data } from "./data";

const allCategories = [...new Set(data.map((item) => item.category))];
const Projects = () => {
  const [list, setList] = useState(data);
  const [categories, setCategories] = useState(allCategories);
  const filterData = (newItem) => {
    const newData = data.filter((item) => item.category === newItem);
    setList(newData);
  };
  return (
    <div className="projects">
      <h4>My Recent Work</h4>
      <h2>Portfolio</h2>
      <Categories categories={categories} filterData={filterData} />
      <Menu list={list} />
    </div>
  );
};

export default Projects;
