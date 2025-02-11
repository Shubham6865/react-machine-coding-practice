import React, { useState } from "react";
import './rating.css'
const Rating = ({ stars }) => {
  const [starValue, setStarValue] = useState(0);
  const [starHover, setStarHover] = useState(0);
  const starArr = Array(stars).fill(0);
  console.log(starArr);
  const handleClick = (index) => {
    setStarValue(index + 1);
  };
  const handleMouseEnter = (index) => {
    setStarHover(index + 1)
  }
  const handleMouseLeave = (index) => {
    setStarHover(0)
  }
  console.log(starHover);
  return (
    <>
      <div className="container">
        {starArr.map((star, index) => (
          <span
            className={index < starValue || index < starHover ? "gold " : ""}
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            &#9733;
          </span>
        ))}
      </div>
    </>
  );
};

export default Rating;
