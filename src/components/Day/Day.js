import React, { useState } from "react";
import Edit from "./Edit";
import "./Day.css";

const Day = (props) => {

    
  return (
    <div className="card">
      <h3>{props.DayOfWeek}</h3>
      <p> Content to go here</p>
    </div>
  );
};
export default Day;
