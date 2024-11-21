import React, { useState } from "react";

function CurrentTime() {
  const [currentTime, setCurrentTime] = useState("");
  const [error, setError] = useState("");

  const fetchTime = () => {
    try {
      const time = new Date().toLocaleTimeString();
      setCurrentTime(time);
      setError(""); // Clear any previous errors
    } catch (err) {
      setError("Unable to fetch the current time.");
    }
  };

  return (
    <div className="time-section">
      <h2>Fetch Current Time</h2>
      <button onClick={fetchTime}>Get Current Time</button>
      {currentTime && <p style={{color:"red"}}>Current Time: {currentTime}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default CurrentTime;
