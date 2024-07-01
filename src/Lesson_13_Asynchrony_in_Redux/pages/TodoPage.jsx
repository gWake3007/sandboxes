import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodo } from "../reduxStore/todo/todoThunks";

const TodoPage = () => {
  const todos = useSelector((state) => state.todo.todo);
  const isLoading = useSelector((state) => state.todo.isLoading);
  const error = useSelector((state) => state.todo.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>Error</h2>}
      {todos && (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.todo}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoPage;

//?const todo = useSelector((state) => state.todo.todo); таким чином дістаємось до наших todo. Перше todo це ключ в об'єкті rootReducer а другий todo - це назва ключа в todoSlice щоб дістатися до state (todoSlice).
