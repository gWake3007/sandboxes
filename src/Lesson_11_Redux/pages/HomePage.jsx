import { useSelector } from "react-redux";

const HomePage = () => {
  const balance = useSelector((state) => {
    return state.balance.value;
  });
  return (
    <div>
      HomePage
      <hr />
      Balance: {balance}
    </div>
  );
};

export default HomePage;

//?useSelector() - хук для того щоб дістатися до initialState(до якогось значення).Хук приймає в себе коллбек. ВАЖЛИВО!!!В параметрах там у нас state(це весь об'єкт initialState).
