import useInput from "../hooks/useInput";

// Hook 관련 주의사항
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건문, 반복문 내에는 훅을 호출할 수 없음
// 3. 나만의 훅(Custom Hook) 직접 만들 수 있음

const HookExam = () => {
  // const [input, setInput] = useState("");
  // const onChange = (e) => {
  //   setInput(e.target.value);
  // };
  // return (
  //   <div>
  //     <input value={input} onChange={onChange} />
  //   </div>
  // );
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  );
};

export default HookExam;
