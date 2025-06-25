import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // Clean-Up, 정리함수
    return () => {
      console.log("UnMount!!");
    };
  }, []);
  return <div>It is even.</div>;
};

export default Even;
