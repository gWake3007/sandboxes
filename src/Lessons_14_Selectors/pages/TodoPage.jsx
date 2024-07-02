import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, fetchTodo } from "../reduxStore/todo/todoThunks";
import TodoList from "../components/TodoList/TodoList";
import FilterText from "../components/FilterText/FilterText";

const TodoPage = () => {
  const todos = useSelector((state) => state.todo.todo);

  // const filterText = useSelector((state) => state.filter.filterText);

  const isLoading = useSelector((state) => state.todo.isLoading);
  const error = useSelector((state) => state.todo.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  // const filterTodos = todos.filter((el) =>
  //   el.todo.toLowerCase().includes(filterText.toLowerCase())
  // );
  //?Фільтрація через Redux.filterText - приклад вище взятий через useSelector зі стейту в filterSlice.

  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      <FilterText />
      <TodoList todos={todos} handleDelete={handleDelete} />
    </div>
  );
};

export default TodoPage;

//?const todo = useSelector((state) => state.todo.todo); таким чином дістаємось до наших todo. Перше todo це ключ в об'єкті rootReducer а другий todo - це назва ключа в todoSlice щоб дістатися до state (todoSlice).
