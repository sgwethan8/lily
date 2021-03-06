import React, { useState, useEffect } from "react";
import Day from "./Day/Day";

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
    props.onDataUpdate(updatedJsonData);
  };

  return (
    <div className="w-96">
      <div className="mt-5 p-3 bg-cd_default rounded-xl">
        <p className="text-btn_default text-lg text-center font-semibold">
          {" "}
          {monday.toDateString()} - {sunday.toDateString()}{" "}
        </p>
      </div>
      <div className="pt-6">
        {daysOfTheWeek.map((day, index) => {
          return (
            <Day
              key={`${day} ${props.startDate.getTime()}`}
              DayOfWeek={day}
              date={
                new Date(
                  props.startDate.getTime() + index * 24 * 60 * 60 * 1000
                )
              }
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
