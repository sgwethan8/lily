import React from "react";

const Calendar = () => {
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 0, 1);
  const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
  const weekOfTheYear = Math.ceil((currentDate.getDay() + 1 + days) / 7);

  // Return start / end dates of the current week

  // Card for each day of the week

  return (
    <div>
      <h2> You have entered! </h2>
      <p> Week no: {weekOfTheYear}</p>
    </div>
  );
};

export default Calendar;
