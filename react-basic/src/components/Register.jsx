import { useState, useRef } from "react";

// simple Register form
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });
  const countRef = useRef(0);
  const inputRef = useRef();

  const onChangeInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소에 focus를 함
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          onChange={onChangeInput}
          placeholder={"name"}
          name="name"
          value={input.name}
        />
      </div>
      <div>
        <input
          type="date"
          onChange={onChangeInput}
          name="birth"
          value={input.birth}
        />
      </div>
      <div>
        <select onChange={onChangeInput} name="country" value={input.country}>
          <option value=""></option>
          <option value="kr">Korea</option>
          <option value="us">America</option>
          <option value="uk">British</option>
        </select>
      </div>
      <div>
        <textarea value={input.bio} name="bio" onChange={onChangeInput} />
      </div>

      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default Register;
