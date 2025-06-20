import "./App.css";
import { useState } from "react";

function App() {
  // Parent Component
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("off");

  return (
    <>
      <div>
        <h1>{light}</h1>
        <button onClick={() => setLight(light === "on" ? "off" : "on")}>
          {light === "on" ? "Turn Off" : "Turn On"}
        </button>
      </div>
      <div>
        <h1> {count}</h1>
        <button onClick={() => setCount(count + 1)}> + </button>
      </div>
    </>
  );
}

export default App;
