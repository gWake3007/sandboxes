import { useState, useEffect } from "react";
// import Timer from "./components/Timer/Timer";

const createInitrialCounter = (key) => {
  const localCounter = localStorage.getItem(key);
  // if (localCounter) {
  //   return JSON.parse(localCounter);
  // }
  // return 0;
  return localCounter ? JSON.parse(localCounter) : 0;
};
function App() {
  // const [isShowTimer, setIsShowTimer] = useState(false);
  //?Відслідковування ефектів button.
  const [counter, setCounter] = useState(() =>
    createInitrialCounter("counter")
  );
  //?Приклад відслідковування localStorage для запису його та повернення значення якщо воно є і якщо його немає то дефолтне 0
  const [counter2, setCounter2] = useState(() =>
    createInitrialCounter("counter2")
  );
  const total = counter + counter2;
  useEffect(() => {
    localStorage.setItem("counter", counter);
    console.log("counter", counter);
    console.log("total", total);
  }, [counter, total]);
  useEffect(() => {
    localStorage.setItem("counter2", counter2);
    console.log("counter2", counter2);
    console.log("total", total);
  }, [counter2, total]);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      <button onClick={() => setCounter2(counter2 + 1)}>{counter2}</button>
      {/* <button onClick={() => setIsShowTimer(!isShowTimer)}>
        {isShowTimer ? "Hide" : "Show"}
      </button>
      {isShowTimer && <Timer />} */}
    </div>
  );
}
export default App;
