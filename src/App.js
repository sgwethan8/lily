import React, { useState, useEffect } from "react";

import Calendar from "./components/Calendar";

import logo from "./lily.png";
import "./App.css";
import jsonData from "./data/shifts.json";

function App() {
  const [isEntered, setIsEntered] = useState(false);
  const [text, setText] = useState("Creating days..");
  const texts = ["Creating days..", "Inputting shifts..", "Quitting job.."];
  const [data, setJsonData] = useState(jsonData);

  const openCalendarview = () => {
    setIsEntered(true);
  };

  const onJsonDataUpdateHandler = (updatedJsonData) => {
    console.log("json data handler in app.js");
    console.log(updatedJsonData);
    setJsonData((prevData) => {
      return updatedJsonData;
    });
  };

  // TODO: persist data back to json via express api

  // TODO: fix issue with calendar being rendered twice
  console.log(data);
  return (
    <div className="App">
      {!isEntered ? (
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{text}</h2>
          <button onClick={openCalendarview}> Enter </button>
        </div>
      ) : (
        <Calendar data={data} onDataUpdate={onJsonDataUpdateHandler}></Calendar>
      )}
    </div>
  );
}

export default App;
