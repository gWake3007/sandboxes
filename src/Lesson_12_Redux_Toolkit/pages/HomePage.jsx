import { useDispatch, useSelector } from "react-redux";
import { actionDeposit, actionWithdraw } from "../reduxStore/balanceSlice";
import { useState } from "react";

const HomePage = () => {
  const [value, setValue] = useState(0);
  const balance = useSelector((state) => {
    return state.balance.value;
  });
  const dispath = useDispatch();

  const handleDeposit = () => {
    dispath(actionDeposit(Number(value)));
  };
  const handleWithdraw = () => {
    dispath(actionWithdraw(Number(value)));
  };
  return (
    <div>
      HomePage
      <hr />
      Balance: {balance}
      <hr />
      <input
        type="number"
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
      />
      <hr />
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
};

export default HomePage;

//?useSelector() - хук для того щоб дістатися до initialState(до якогось значення).Хук приймає в себе коллбек. ВАЖЛИВО!!!В параметрах там у нас state(це весь об'єкт initialState).
//?const [value, setValue] = useState(0); - Для контрольованих елементів Redux не використовують.
