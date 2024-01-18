import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./Circle.scss";

const CircleRating = ({ rating }) => {
  return (
    <div className="circleRating">
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        styles={buildStyles({
          pathColor:
            rating < 5 ? "#DF3D1B" : rating < 7 ? "#DF1B83 " : "#2429DA",
        })}
      />
    </div>
  );
};

export default CircleRating;
