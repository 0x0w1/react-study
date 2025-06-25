import { useState } from "react";

function useInput() {
  // getInput이면 에러
  const [input, setInput] = useState("");
  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;
