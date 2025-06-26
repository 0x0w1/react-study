import { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    console.log(`Timer start : ${intervalId}`);

    return () => {
      clearInterval(intervalId);
      console.log(`Timer stop : ${intervalId}`);
    };
  }, []);

  return (
    <div>
      <h2>Simple timer.</h2>
      <p>Time : {seconds} secs</p>
      <p>(Timer will be stopped when disappear this component)</p>
    </div>
  );
};

export default Timer;
