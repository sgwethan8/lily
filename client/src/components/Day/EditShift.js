import React, { useState } from "react";

const Edit = (props) => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [shiftLocation, setShiftLocation] = useState("");
  const [notes, setNotes] = useState("");

  const startTimeChangeHandler = (event) => {
    setStartTime(event.target.value);
  };

  const endTimeChangeHandler = (event) => {
    setEndTime(event.target.value);
  };

  const shiftLocationHandler = (event) => {
    setShiftLocation(event.target.value);
  };

  const notesHandler = (event) => {
    setNotes(event.target.value);
  }

  const onCancelEditHandler = () => {
    props.onSaveOrCancelEdit();
  };

  const saveEditHandler = (event) => {
    event.preventDefault();
    props.onSaveEdits({
      startTime: startTime,
      endTime: endTime,
      shiftLocation: shiftLocation,
      notes: notes,
    });

    props.onSaveOrCancelEdit();
  };

  return (
    // TODO: persit submitted values to this form, currently resets after submission
    <form onSubmit={saveEditHandler}>
      <div>
        <div>
          <label>Select Start Time</label>
          <input
            type="time"
            value={startTime}
            onChange={startTimeChangeHandler}
          />
        </div>
        <div>
          <label>Select End Time</label>
          <input
            type="time"
            value={endTime}
            onChange={endTimeChangeHandler}
            min={startTime}
          />
        </div>
        <div>
          <label>Location</label>
          <input
            type="text"
            value={shiftLocation}
            onChange={shiftLocationHandler}
          />
        </div>
        <div>
          <label>Notes</label>
          <input
            type="text"
            value={notes}
            onChange={notesHandler}
          />
        </div>
        <button onClick={onCancelEditHandler}>Cancel</button>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};
export default Edit;
