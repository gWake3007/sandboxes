import { useDispatch, useSelector } from "react-redux";
// import { actionDeposit, actionWithdraw } from "../reduxStore/balanceSlice_Old";
import { actionNewItem } from "../reduxStore/itemsSlice";
import { useState } from "react";
import CreateItemForm from "../components/CreateItemForm/CreateItemForm";
import { deposit, withdraw } from "../reduxStore/balanceSlice";

const HomePage = () => {
  const [value, setValue] = useState(0);
  const balance = useSelector((state) => {
    return state.balance.value;
  });
  // const items = useSelector((state) => {
  //   return state.items;
  // });
  const dispath = useDispatch();

  const handleDeposit = () => {
    dispath(deposit(Number(value)));
  };
  const handleWithdraw = () => {
    dispath(withdraw(Number(value)));
  };

  const submit = (itemObj) => {
    dispath(actionNewItem(itemObj));
  };

  //?actionWithdraw({ ...itemObj, createdAt: new Date(), isAdmin: false }) - після ...itemObj йдуть звичайні дефолтні значення.
  //?Але краще його додати в itemsSlice.js. ВАЖЛИВО!!!
  return (
    <div>
      HomePage
      <hr />
      Balance: {balance}
      <hr />
      <input
        type="number"
        value={value}
        onChange={({ target: { value } }) => setValue(Number(value))}
      />
      <hr />
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={handleWithdraw}>Withdraw</button>
      <hr />
      <CreateItemForm submit={submit} />
    </div>
  );
};

export default HomePage;

//?useSelector() - хук для того щоб дістатися до initialState(до якогось значення).Хук приймає в себе коллбек. ВАЖЛИВО!!!В параметрах там у нас state(це весь об'єкт initialState).
//?const [value, setValue] = useState(0); - Для контрольованих елементів Redux не використовують.
