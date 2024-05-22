import { useState, useEffect } from "react";
import Timer from "./components/Timer/Timer";

function App() {
  const [isShowTimer, setIsShowTimer] = useState(0);
  //?Відслідковування ефектів button.
  // const [counter, setCounter] = useState(0);
  // const [counter2, setCounter2] = useState(0);
  // const total = counter + counter2;
  // useEffect(() => {
  //   console.log("counter", counter);
  //   console.log("total", total);
  // }, [counter, total]);
  // useEffect(() => {
  //   console.log("counter2", counter2);
  //   console.log("total", total);
  // }, [counter2, total]);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      <button onClick={() => setCounter2(counter2 + 1)}>{counter2}</button>
      <Timer />
    </div>
  );
}
export default App;
