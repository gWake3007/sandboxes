// import Card_List from "./components/Card_List/Card_List";

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
