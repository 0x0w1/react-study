import { useState } from "react";

// simple Register form
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");

  const onChangeName = (e) => {
    // console.log(e);
    // console.log(e.target.value);
    setName(e.target.value);
  };
  const onChangeBirthDate = (e) => {
    setBirthDate(e.target.value);
  };
  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };
  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <div>
      <div>
        <input onChange={onChangeName} placeholder={"name"} value={name} />
      </div>
      <div>
        <input type="date" onChange={onChangeBirthDate} value={birthDate} />
      </div>
      <div>
        <select onChange={onChangeCountry} value={country}>
          <option value=""></option>
          <option value="kr">Korea</option>
          <option value="us">America</option>
          <option value="uk">British</option>
        </select>
      </div>
      <div>
        <textarea value={bio} onChange={onChangeBio} />
      </div>
    </div>
  );
};

export default Register;
