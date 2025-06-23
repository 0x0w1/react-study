import { useState } from "react";

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

  const onChangeInput = (e) => {
    console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input
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
    </div>
  );
};

export default Register;
