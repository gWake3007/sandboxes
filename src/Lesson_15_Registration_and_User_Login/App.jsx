import { Routes, Route } from "react-router-dom";
import NavBar from "./components_new/NavBar/NavBar";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));

const App = () => {
  return (
    <div>
      <NavBar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<HomePage />}>
            <Route path="/login" element={<HomePage />} />
            <Route path="/register" element={<HomePage />} />
          </Route>
          <Route path="/tasks" element={<HomePage />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
