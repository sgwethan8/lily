import React, { useState } from "react";
import Week from "./Week";
import Day from "./Day/Day";
import Edit from "./Day/Edit";

const Calendar = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const onPreviousWeekHandler = () => {
    setCurrentDate((prevState) => {
      return new Date(prevState.getTime() - 7 * 24 * 60 * 60 * 1000);
    });
  };

  const onNextWeekHandler = () => {
    setCurrentDate((prevState) => {
      return new Date(prevState.getTime() + 7 * 24 * 60 * 60 * 1000);
    });
  };

  const getStartDay = (monday) => {
    setStartDate((prevState) => {
      window.monday = monday
      console.log(monday)
      return monday
    });
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const finishEditingHandler = () => {
    setIsEditing(false);
  };

  const submitEditsHandler = (values) => {
    console.log(values);
    console.log("submitted edits");
    // todo: need to pass this into day component
  };

  return (
    <div>
      <Week date={currentDate} startDay={getStartDay}></Week>
      {isEditing && (
        <Edit
          onSaveEdits={submitEditsHandler}
          onSaveOrCancelEdit={finishEditingHandler}
        ></Edit>
      )}
      {!isEditing && (
        <div>
          <div onClick={startEditingHandler}>
            {daysOfTheWeek.map((day, index) => {
              return <Day key={day} DayOfWeek={day} date={new Date(startDate.getTime() + index * 24 * 60 * 60 * 1000)}></Day>;
            })}
          </div>
          
          <div>
            <button onClick={onPreviousWeekHandler}>Previous Week</button>
            <button onClick={onNextWeekHandler}>Next Week</button>
          </div>
        </div>
      )}
      {/* 
          todo: need to consider how days will work when switching weeks
          */}
    </div>
  );
};

export default Calendar;
