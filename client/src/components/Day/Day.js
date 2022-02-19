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
    <div className="p-3 mb-3 bg-cd_default rounded-xl">
      {isEditing && (
        <Edit
          onSaveEdits={submitEditsHandler}
          onSaveOrCancelEdit={finishEditingHandler}
        ></Edit>
      )}
      {!isEditing && (
        <div className="card" onClick={startEditingHandler}>
          <h3 className="font-semibold pl-2">
            {props.DayOfWeek} {dayNo} {month}{" "}
          </h3>
          {isDataAvailable && (
            <div className="flex p-2">
              <div className="flex grid grid-cols-1 gap-1 bg-wk_default">
                <p> {props.shiftTimes[props.date.toLocaleDateString()][0]} </p>
                <p> {props.shiftTimes[props.date.toLocaleDateString()][1]} </p>
              </div>
              <div className="justify-center text-center align-middle pl-2">
                <p> this is the shift </p>
              </div>
            </div>
          )}
          {!isDataAvailable && <p className="pl-2"> No shifts logged. Lily might be off! </p>}
        </div>
      )}
    </div>
  );
};
export default Day;
