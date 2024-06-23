import { useSelector } from "react-redux";

const HomePage = () => {
  useSelector(() => {});
  return <div>HomePage</div>;
};

export default HomePage;

//?useSelector() - хук для того щоб дістатися до initialState(до якогось значення).Хук приймає в себе коллбек. ВАЖЛИВО!!!
