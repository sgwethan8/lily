import React, { useState } from "react";
import Week from "./Week";

const Calendar = () => {
  // const currentDate = new Date();
  // const startDate = new Date(currentDate.getFullYear(), 0, 1);
  // const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
  // const weekOfTheYear = Math.ceil((currentDate.getDay() + 1 + days) / 7);

  const [currentDate, setCurrentDate] = useState(new Date());

  const onPreviousWeekHandler = () => {
    setCurrentDate((prevState => {
      return new Date(prevState.getTime() - (7 * 24 * 60 * 60 * 1000));
    }));
  };

  const onNextWeekHandler = () => {
    setCurrentDate((prevState => {
      window.prevState = prevState
      return new Date(prevState.getTime() + (7 * 24 * 60 * 60 * 1000));
    }));
  }

  return (
    <div>
      <Week date={currentDate}></Week>
      {/* <p> Week no: {weekOfTheYear}</p> */}
      <button onClick={onPreviousWeekHandler}>Previous Week</button>
      <button onClick={onNextWeekHandler}>Next Week</button>
    </div>
  );
};

export default Calendar;
