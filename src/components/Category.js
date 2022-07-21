import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Category = ({ categoryList, filterCategory }) => {
  const [active, isActive] = useState(false);

  const handleClick = () => {
    isActive(active => !active);
  };

  return (
    <div className="category-list">
      <button className="bar" onClick={handleClick}>
        <GiHamburgerMenu style={{ fontSize: 30 }} />
      </button>
      <ul className="category-list" style={{ height: active ? "25ch" : 0 }}>
        {categoryList.map((category, index) => {
          return (
              <li key={index} onClick={() => filterCategory(category)}>
                <button key={index} onClick={() => filterCategory(category)}>
                  {category}
                </button>
              </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;