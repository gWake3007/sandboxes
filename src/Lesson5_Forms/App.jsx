// import { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import MyComponent from "./components/MyComponent/MyComponent";

function App() {
  const handleLogin = (userData) => {
    console.log(userData);
  };
  return (
    <>
      <h1>Please login to your account!</h1>
      <LoginForm onLogin={handleLogin} />
      <MyComponent />
    </>
  );
}
export default App;
