import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [apitext, setApitext] = useState("");
  useEffect(() => {
    fetch(
      "https://h7iuo18683.execute-api.us-east-1.amazonaws.com/default/helloworld"
    )
      .then((res) => res.json())
      .then((result) => {
        setApitext(result.text + result.time);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is a new message!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
