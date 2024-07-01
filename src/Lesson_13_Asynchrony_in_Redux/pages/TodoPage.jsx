import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodo } from "../reduxStore/todo/todoThunks";

const TodoPage = () => {
  const todo = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);
  return <div>TodoPage</div>;
};

export default TodoPage;

//?const todo = useSelector((state) => state.todo.todo); таким чином дістаємось до наших todo. Перше todo це ключ в об'єкті rootReducer а другий todo - це назва ключа в todoSlice щоб дістатися до state (todoSlice).
