import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, fetchTodo } from "../reduxStore/todo/todoThunks";
import TodoList from "../components/TodoList/TodoList";
import FilterText from "../components/FilterText/FilterText";
import {
  selectTodo,
  selectFilter,
  selectLoading,
  selectError,
} from "../reduxStore/todo/todoSlice";

const TodoPage = () => {
  const todos = useSelector(selectTodo);
  const filterText = useSelector(selectFilter);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const filterTodos = todos.filter((el) =>
    el.todo.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      <FilterText />
      {todos && <TodoList todos={filterTodos} handleDelete={handleDelete} />}
    </div>
  );
};

export default TodoPage;

//?const todo = useSelector((state) => state.todo.todo); таким чином дістаємось до наших todo. Перше todo це ключ в об'єкті rootReducer а другий todo - це назва ключа в todoSlice щоб дістатися до state (todoSlice).
