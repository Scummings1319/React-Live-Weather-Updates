import React from "react";
import "./App.css";
import Quotes from "./components/Quotes";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <Quotes />
      <Weather />
    </div>
  );
}

export default App;
