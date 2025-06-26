import { useState, useEffect } from "react";

function CountdownTimer({ initialSeconds = 60 }) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);

  // 이펙트: 타이머 시작 및 해제 로직
  useEffect(() => {
    let intervalId; // 타이머 ID를 저장할 변수

    if (isRunning && secondsLeft > 0) {
      console.log(`[EFFECT] 타이머 시작 (ID: ${intervalId} 예상)`);
      intervalId = setInterval(() => {
        setSecondsLeft((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setIsRunning(false);
      console.log("[EFFECT] 타이머 완료!");
    }

    // ⭐ 클린업 함수 반환
    return () => {
      // ⚠️ 중요: intervalId가 설정되었을 때만 clearInterval 호출
      // isRunning이 false이거나 secondsLeft가 0인 경우 intervalId가 없을 수 있음
      if (intervalId) {
        clearInterval(intervalId);
        console.log(`[CLEANUP] 타이머 해제됨 (ID: ${intervalId})`);
      }
    };
  }, [isRunning, secondsLeft]); // 의존성 배열: isRunning 또는 secondsLeft가 변경될 때 이펙트 재실행

  const handleStart = () => {
    if (!isRunning && secondsLeft > 0) {
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSecondsLeft(initialSeconds);
  };

  return (
    <div
      style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}
    >
      <h2>카운트다운 타이머</h2>
      <p style={{ fontSize: "2.5em", fontWeight: "bold" }}>
        {secondsLeft > 0 ? `${secondsLeft}초 남음` : "시간 종료!"}
      </p>
      <div>
        <button onClick={handleStart} disabled={isRunning || secondsLeft === 0}>
          시작
        </button>
        <button onClick={handleStop} disabled={!isRunning}>
          정지
        </button>
        <button onClick={handleReset}>초기화</button>
      </div>
      <p style={{ marginTop: "10px", fontSize: "0.8em", color: "#666" }}>
        (이 컴포넌트가 사라지면 타이머는 자동으로 해제됩니다.)
      </p>
    </div>
  );
}

export default CountdownTimer;
