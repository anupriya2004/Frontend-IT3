import React from "react";
import CurrentTime from "./CurrentTime";
import Countdown from "./Countdown";
import './index.css';

function App() {
  return (
    <div className="App">
      <h1>System Time Fetch & Countdown Application</h1>
      <CurrentTime />
      <Countdown />
    </div>
  );
}

export default App;
