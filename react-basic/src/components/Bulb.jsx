import { useState } from "react";

const Bulb = () => {
  const [light, setLight] = useState("off");
  console.log("Bulb : ", light);
  return (
    <div>
      {light === "on" ? (
        <h1 style={{ backgroundColor: "orange" }}>On</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>Off</h1>
      )}
      <button onClick={() => setLight(light === "on" ? "off" : "on")}>
        {light === "on" ? "Turn Off" : "Turn On"}
      </button>
    </div>
  );
};

export default Bulb;
