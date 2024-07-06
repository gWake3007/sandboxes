import { useDispatch, useSelector } from "react-redux";
import { selectorTasks } from "../reduxStore/tasks/selectorsTasks";
import TasksList from "../components_new/TasksList/TasksList";
import CreateTasksForm from "../components_new/CreateTasksForm/CreateTasksForm";
import { useEffect } from "react";

const TasksPage = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectorTasks);
  const createTask = (task) => {
    dispatch();
  };
  useEffect(() => {
    dispatch();
  }, [dispatch]);
  return (
    <div>
      <CreateTasksForm submit={createTask} />
      {tasks && <TasksList tasks={tasks} />}
    </div>
  );
};

export default TasksPage;
