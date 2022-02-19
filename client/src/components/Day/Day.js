import React, { useEffect, useState } from "react";
import Edit from "./EditShift";

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
      values.shiftLocation ? values.shiftLocation : "Location not set",
      values.notes ? values.notes : "No notes",
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
            <div>
              <div style={{ borderTop: "2px solid #A7C4C2"}}></div>
              <div className="flex p-2">
                <div className="flex text-sm">
                  {/* Start time */}
                  <p> {props.shiftTimes[props.date.toLocaleDateString()][0]}</p>
                  <p className="pl-1 pr-1">-</p>
                  {/* End time */}
                  <p>
                    {" "}
                    {props.shiftTimes[props.date.toLocaleDateString()][1]}{" "}
                  </p>
                </div>
                <div className="flex grid grid-cols-1 gap-1 pl-2">
                  {/* Shift Location */}
                  <p className="flex leading-5 font-semibold">
                    {" "}
                    {props.shiftTimes[props.date.toLocaleDateString()][2]}{" "}
                  </p>
                  {/* Notes */}
                  <p className="p-2 rounded-xl bg-notes_default text-xs">
                    {" "}
                    {props.shiftTimes[props.date.toLocaleDateString()][3]}
                  </p>
                </div>
              </div>
              <div style={{ borderTop: "2px solid #A7C4C2"}}></div>
            </div>
          )}
          {!isDataAvailable && <p className="pl-2"> No shifts found. </p>}
        </div>
      )}
    </div>
  );
};
export default Day;
