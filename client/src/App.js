import React, { useState, useEffect } from "react";
import Calendar from "./components/Calendar";
import logo from "./lily.png";
import "./App.css";

function App() {
  const [isEntered, setIsEntered] = useState(false);
  const [text, setText] = useState("Creating days..");
  const texts = ["Creating days..", "Inputting shifts..", "Quitting job.."];
  const [data, setJsonData] = useState("");

  const openCalendarview = () => {
    setIsEntered(true);
  };

  const onJsonDataUpdateHandler = (updatedJsonData) => {
    setJsonData((prevData) => {
      return updatedJsonData;
    });
  };

  useEffect(() => {
    const RequestOptions = {
      // mode: "no-cors",
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch("http://localhost:3002/shifts", RequestOptions).then((response) => {
      if (response.ok) {
        response.json().then((json) => {
          setJsonData(json);
        });
      }
    });
  }, []);

  // TODO: persist data back to json via express api




  
  // TODO: fix issue with calendar being rendered twice
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
