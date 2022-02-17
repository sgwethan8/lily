import React, { useEffect, useState } from "react";
import Edit from "./EditShift";
import "./Day.css";

const Day = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const dayNo = props.date.getDate();
  const month = props.date.toLocaleString("default", { month: "long" });
  const [isDataAvailable, setIsDataAvailable] = useState(props.dataAvailable);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const finishEditingHandler = () => {
    setIsEditing(false);
  };

  const submitEditsHandler = (values) => {
    props.shiftTimes[props.date.toLocaleDateString()] = [
      values.startTime,
      values.endTime,
    ];
    props.onDataUpdate(props.shiftTimes);
    setIsDataAvailable(true);
  };

  useEffect(() => {
    if (props.shiftTimes[props.date.toLocaleDateString()]) {
      setIsDataAvailable(true);
    }
  }, [props.shiftTimes]);

  return (
    <div>
      {isEditing && (
        <Edit
          onSaveEdits={submitEditsHandler}
          onSaveOrCancelEdit={finishEditingHandler}
        ></Edit>
      )}
      {!isEditing && (
        <div className="card" onClick={startEditingHandler}>
          <h3>
            {props.DayOfWeek} {dayNo} {month}{" "}
          </h3>
          {isDataAvailable && (
            <div>
              <p> Start Time: { props.shiftTimes[props.date.toLocaleDateString()][0] } </p>
              <p> End Time: { props.shiftTimes[props.date.toLocaleDateString()][1] } </p>
            </div>
          )}
          {!isDataAvailable && <p> No data available </p>}
        </div>
      )}
    </div>
  );
};
export default Day;
