import React, { useEffect } from "react";
import './Week.css';

const Week = (props) => {
  // start of this week
  var monday = new Date(props.date);
  monday.setDate(monday.getDate() - monday.getDay() + 1);

  // end of this week
  var sunday = new Date(props.date);
  sunday.setDate(sunday.getDate() - sunday.getDay() + 7);

  useEffect(() => {
    props.startDay(monday);
    console.log("here");
  }, [props.date]);

  return (
    <p>
      {" "}
      Start date: {monday.toDateString()} End date: {sunday.toDateString()}{" "}
    </p>
  );
};
export default Week;
