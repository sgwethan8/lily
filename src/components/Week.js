import React from "react";
import './Week.css';

const Week = (props) => {
//   // current day
//   var now = new Date();
//   now.setHours(0, 0, 0, 0);

  // start of this week
  var monday = new Date(props.date);
  monday.setDate(monday.getDate() - monday.getDay() + 1);

  // end of this week
  var sunday = new Date(props.date);
  sunday.setDate(sunday.getDate() - sunday.getDay() + 7);

  return (
    <p>
      {" "}
      Start date: {monday.toDateString()} End date: {sunday.toDateString()}{" "}
    </p>
  );
};
export default Week;
