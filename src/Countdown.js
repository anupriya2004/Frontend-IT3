import React, { useState, useEffect } from "react";

function Countdown() {
  const [count, setCount] = useState("");
  const [isCounting, setIsCounting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [error, setError] = useState("");

  const startCountdown = () => {
    if (count > 0) {
      setIsCounting(true);
      setIsComplete(false);
      setError(""); // Clear any errors
    } else {
      setError("Please enter a valid positive number.");
    }
  };

  const handleChange = (e) => {
    const value = Number(e.target.value);
    if (value < 0) {
      setError("Countdown value cannot be negative.");
      setCount("");
    } else {
      setCount(value);
      setError("");
      setIsCounting(false);
      setIsComplete(false); // Reset completion state
    }
  };

  useEffect(() => {
    let timer;
    if (isCounting && count > 0) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
    } else if (count === 0 && isCounting) {
      setIsCounting(false);
      setIsComplete(true); // Mark as complete
    }

    return () => clearInterval(timer);
  }, [isCounting, count]);

  return (
    <div className="countdown-section">
      <h2>Countdown Timer</h2>
      <input
        type="number"
        value={count}
        onChange={handleChange}
        placeholder="Enter seconds"
      />
      <button onClick={startCountdown} disabled={isCounting}>
        Start Countdown
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>{count > 0 && `Time Left: ${count}s`}</p>
      {isComplete && <p style={{ color: "green" }}>Countdown Complete!</p>}
    </div>
  );
}

export default Countdown;
