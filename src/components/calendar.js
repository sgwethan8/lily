import React, { useState } from "react";
import Week from "./Week";

const Calendar = (props) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());

  const getStartDay = (monday) => {
    setStartDate((prevState) => {
      return monday;
    });
  };

  // console.log(props.data);
  // console.log("jsondata");
  // window.jsonData = props.data;

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

  const onCalendarDataUpdate = (updatedJsonData) => {
    console.log("calendar.js");
    props.onDataUpdate(updatedJsonData);
  }

  return (
    <div>
      <Week onDataUpdate={onCalendarDataUpdate} data={props.data} date={currentDate} startDate={startDate} startDay={getStartDay}></Week>
      <div>
        <button onClick={onPreviousWeekHandler}>Previous Week</button>
        <button onClick={onNextWeekHandler}>Next Week</button>
      </div>
    </div>
  );
};

export default Calendar;
