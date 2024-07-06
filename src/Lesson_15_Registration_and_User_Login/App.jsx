import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import AppBar from "./components_new/AppBar/AppBar";

const HomePage = lazy(() => import("./pages_new/HomePage"));
const RegisterPage = lazy(() => import("./pages_new/RegisterPage"));
const LoginPage = lazy(() => import("./pages_new/LoginPage"));
const TasksPage = lazy(() => import("./pages_new/TasksPage"));

const App = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
