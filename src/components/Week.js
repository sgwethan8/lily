import React, { useState, useEffect } from "react";
import Day from "./Day/Day";

import "./Week.css";

const Week = (props) => {
  // const [isEditing, setIsEditing] = useState(false);
  const daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // start of this week
  var monday = new Date(props.date);
  monday.setDate(monday.getDate() - monday.getDay() + 1);

  // end of this week
  var sunday = new Date(props.date);
  sunday.setDate(sunday.getDate() - sunday.getDay() + 7);

  useEffect(() => {
    props.startDay(monday);
  }, [props.date]);

  const onWeekDataUpdate = (updatedJsonData) => {
    console.log("week.js");
    props.onDataUpdate(updatedJsonData);
  } 

  return (
    <div>
      <p>
        {" "}
        Start date: {monday.toDateString()} End date: {sunday.toDateString()}{" "}
      </p>
      <div>
        {daysOfTheWeek.map((day, index) => {
          return (
            <Day
              key={`${day} ${props.startDate.getTime()}`}
              DayOfWeek={day}
              date={new Date(props.startDate.getTime() + index * 24 * 60 * 60 * 1000)}
              shiftTimes={props.data}
              onDataUpdate={onWeekDataUpdate}
            ></Day>
          );
        })}
      </div>

      
    </div>
  );
};
export default Week;
