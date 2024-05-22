import { useEffect } from "react";

const Timer = () => {
  useEffect(() => {
    setInterval(() => {
      console.log(Date.now());
    }, 1000);
  }, []);
  return <div>Timer</div>;
};

export default Timer;
