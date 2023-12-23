import React, { useEffect } from "react";

const Categories = ({ filterData, categories }) => {
  useEffect(() => {
    filterData("Html & CSS");
  }, []);
  return (
    <div className="categories">
      {categories.map((item, index) => {
        return (
          <button
            className="button"
            type="button"
            key={index}
            onClick={() => filterData(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
