import React from "react";
import Week from "./Week";

const Calendar = () => {
  // const currentDate = new Date();
  // const startDate = new Date(currentDate.getFullYear(), 0, 1);
  // const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
  // const weekOfTheYear = Math.ceil((currentDate.getDay() + 1 + days) / 7);

  


  return (
    <div>
      <Week></Week>
      {/* <p> Week no: {weekOfTheYear}</p> */}
    </div>
  );
};

export default Calendar;
