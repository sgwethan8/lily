import React, { useState, useEffect } from "react";
import Calendar from "./components/Calendar";
import logo from "./lily.png";
import "./App.css";

function App() {
  const [isEntered, setIsEntered] = useState(false);
  const [text, setText] = useState("Creating days..");
  const texts = ["Creating days..", "Inputting shifts..", "Quitting job.."];
  const [data, setJsonData] = useState("");

  const fetchJsonData = () => {
    const RequestOptions = {
      // mode: "no-cors",
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch("http://localhost:3002/shifts", RequestOptions).then((response) => {
      if (response.ok) {
        response.json().then((json) => {
          setJsonData((prevData) => {
              return json;
            });
        });
      }
    });
  }

  const postJsonData = (jsonData) => {
    const RequestOptions = {
      // mode: "no-cors",
      method: "POST",
      body: JSON.stringify(jsonData),
      headers: { "Content-Type": "application/json" },
    };

    // post data to api
    fetch("http://localhost:3002/shifts", RequestOptions).then((response) => {
      if (response.ok) {
        // retrieve updated data from api
        fetchJsonData();
      }
    });
  }

  useEffect(() => {
    fetchJsonData();
  }, []);

  const openCalendarview = () => {
    setIsEntered(true);
  };

  // TODO: persist data back to json via express api
  const onJsonDataUpdateHandler = (updatedJsonData) => {
    // Write to back to json file
    postJsonData(updatedJsonData);
  };

  // TODO: fix issue with calendar being rendered twice
  return (
    <div className="flex bg-bg_default grid place-items-center h-screen">
      {!isEntered ? (
        <div className="place-items-center">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="pb-6 text-white text-3xl font-bold text-center" >{text}</h2>
          <div className="pt-6 pb-6 flex place-items-center content-center">
          <button className="grow h-10 text-lg place-items-center bg-white text-btn_default hover:bg-btn_hover" onClick={openCalendarview}> Enter </button>
          </div>
        </div>
      ) : (
        <Calendar data={data} onDataUpdate={onJsonDataUpdateHandler}></Calendar>
      )}
    </div>
  );
}

export default App;
