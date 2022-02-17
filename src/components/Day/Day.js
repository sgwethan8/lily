import React, { useState } from "react";
import Edit from "./Edit";
import "./Day.css";

const Day = (props) => {
  const dayNo = props.date.getDate();
  const month = props.date.toLocaleString("default", { month: "long" });

  return (
    <div className="card">
      <h3>
        {props.DayOfWeek} {dayNo} {month}{" "}
      </h3>
      <p> </p>
      <p> Content to go here</p>
    </div>
  );
};
export default Day;
