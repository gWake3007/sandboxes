import { useDispatch, useSelector } from "react-redux";
import { actionDeposit } from "../reduxStore/store";

const HomePage = () => {
  const balance = useSelector((state) => {
    return state.balance.value;
  });
  const dispath = useDispatch();

  const handleDeposit = () => {
    dispath(actionDeposit(100));
  };
  return (
    <div>
      HomePage
      <hr />
      Balance: {balance}
      <hr />
      <button onClick={handleDeposit}>Deposit</button>
      <button>Withdraw</button>
    </div>
  );
};

export default HomePage;

//?useSelector() - хук для того щоб дістатися до initialState(до якогось значення).Хук приймає в себе коллбек. ВАЖЛИВО!!!В параметрах там у нас state(це весь об'єкт initialState).
