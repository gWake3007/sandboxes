// import Card_List from "./components/Card_List/Card_List";

//? useState - хук в реакті.
import { useState } from "react";

// const App = () => {
//   // let clicks = 0;
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     // clicks = clicks + 1;
//     setClicks(clicks + 1);
//   };

//   return <button onClick={handleClick}>Current: {clicks}</button>;
// };

//?Приклад з двума змінними.

// const App = () => {
//   const [clicks, setClicks] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>Current: {clicks}</button>
//       <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
//       {isOpen && <p>Now you can see me!</p>}
//     </>
//   );
// };

//?Приклад з ізоляцією стану.Тобто одна подія не впливає на іншу!
// const ClickCounter = () => {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return <button onClick={handleClick}>Current: {clicks}</button>;
// };

// const App = () => {
//   return (
//     <>
//       <ClickCounter />
//       <ClickCounter />
//     </>
//   );
// };

//?Тут по кліку на кнопку команда іде до батька а потім зміни відбуваються у дітей.
// const ClickCounter = ({ value, onUpdate }) => {
//   return <button onClick={onUpdate}>Current: {value}</button>;
// };

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   //? Функція, яку будемо передавати в ClickCounter для виклику під час кліку.
//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return (
//     <>
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//     </>
//   );
// };

//?Функція з об'єктом параметрів.

// const App = () => {
//   const [values, setValues] = useState({
//     x: 0,
//     y: 0,
//   });

//   const updateX = () => {
//     setValues({
//       ...values,
//       x: values.x + 1,
//     });
//   };

//   const updateY = () => {
//     setValues({
//       ...values,
//       y: values.y + 1,
//     });
//   };

//   return (
//     <div>
//       <p>
//         x: {values.x}, y: {values.y}
//       </p>

//       <button onClick={updateX}>Update x</button>
//       <button onClick={updateY}>Update y</button>
//     </div>
//   );
// };

//?Об'єкт стейтів.
// const CounterComponent = ({ value, handleIncrement }) => {
//   return (
//     <>
//       <button onClick={handleIncrement}>Increment</button>
//       <p>{value}</p>
//     </>
//   );
// };

// function App() {
//   const [state, setState] = useState({
//     a: 0,
//     b: 0,
//     c: 0,
//   });
//   const handleIncrementA = () => {
//     setState({ ...state, a: state.a + 1 });
//   };
//   const handleIncrementB = () => {
//     setState({ ...state, b: state.b + 1 });
//   };
//   const handleIncrementC = () => {
//     setState({ ...state, c: state.c + 1 });
//   };
//   return (
//     <div>
//       <CounterComponent
//         value={state.a}
//         handleIncrement={handleIncrementA}
//       ></CounterComponent>
//       <CounterComponent
//         value={state.b}
//         handleIncrement={handleIncrementB}
//       ></CounterComponent>
//       <CounterComponent
//         value={state.c}
//         handleIncrement={handleIncrementC}
//       ></CounterComponent>
//       <p>Total: {state.a + state.b + state.c}</p>
//     </div>
//   );
// }

function App() {
  const handleClick = (id) => {
    console.log(id);
  };
  return (
    <div>
      <button onClick={() => handleClick(5)}>qwerty</button>
      <button onClick={() => handleClick(50)}>qwerty</button>
    </div>
  );
}

export default App;
