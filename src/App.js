import React, { useState, useEffect } from "react";

import Calendar from "./components/Calendar";

import logo from "./lily.png";
import "./App.css";

function App() {
  const [isEntered, setIsEntered] = useState(false);
  const [text, setText] = useState("Creating days..");
  const texts = ["Creating days..", "Inputting shifts..", "Quitting job.."];

  const openCalendarview = () => {
    setIsEntered(true);
  };

  // NOTE: this is causing the prop function in week to run every 2 seconds, paused for investigation
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setText((prevText) => {
  //       var index = texts.indexOf(prevText);
  //       return (index + 1 === texts.length) ? texts[0] : texts[index + 1] ;
  //     });
  //   }, 2000);
  //   // clearing interval
  //   return () => clearInterval(timer);
  // });

  return (
    <div className="App">
      {!isEntered ? (
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{text}</h2>
          <button onClick={openCalendarview}> Enter </button>
        </div>
      ) : (
        <Calendar></Calendar>
      )}
    </div>
  );
}

export default App;
