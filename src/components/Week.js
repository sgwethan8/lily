import React from "react";
import './Week.css';

const Week = () => {
  // current day
  var now = new Date();
  now.setHours(0, 0, 0, 0);

  // start of this week
  var monday = new Date(now);
  monday.setDate(monday.getDate() - monday.getDay() + 1);

  // end of this week
  var sunday = new Date(now);
  sunday.setDate(sunday.getDate() - sunday.getDay() + 7);

  return (
    <p>
      {" "}
      Start date: {monday.toDateString()} End date: {sunday.toDateString()}{" "}
    </p>
  );
};
export default Week;
