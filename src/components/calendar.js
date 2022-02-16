import React, { useState } from "react";
import Week from "./Week";
import Day from "./Day/Day";
import Edit from "./Day/Edit";

const Calendar = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
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
      window.prevState = prevState;
      return new Date(prevState.getTime() + 7 * 24 * 60 * 60 * 1000);
    });
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const finishEditingHandler = () => {
    setIsEditing(false);
  }

  return (
    <div>
      <Week date={currentDate}></Week>
      {isEditing && <Edit onAddOrCancelEdit={finishEditingHandler}></Edit>}
      {!isEditing && (
        <div onClick={startEditingHandler}>
          {daysOfTheWeek.map((day) => {
            return <Day isEditingHandler={isEditing} DayOfWeek={day}></Day>;
          })}
          <div>
            <button onClick={onPreviousWeekHandler}>Previous Week</button>
            <button onClick={onNextWeekHandler}>Next Week</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
