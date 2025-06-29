import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import Timer2 from "./components/Timer2";
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [showTimer, setShowTimer] = useState(true);

  const isMount = useRef(false);

  // 1. Mount
  useEffect(() => {
    console.log("Mount!!");
  }, []);

  // 2. Update -> deps 생략 (re-rendering)
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("Update!!");
  });

  // 의존성 배열
  // dependency array (deps)

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <button onClick={() => setShowTimer(!showTimer)}>
          {showTimer ? "타이머 숨기기(unmount)" : "타이머 보이기 (mount)"}
        </button>
        {showTimer && <Timer2 />}
      </section>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
