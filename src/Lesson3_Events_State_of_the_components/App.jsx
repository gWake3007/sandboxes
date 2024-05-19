// import Card_List from "./components/Card_List/Card_List";

//? useState - хук в реакті.
// import { useState } from "react";

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
