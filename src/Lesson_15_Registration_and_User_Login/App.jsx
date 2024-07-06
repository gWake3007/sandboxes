import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import AppBar from "./components_new/AppBar/AppBar";

// const HomePage = lazy(() => import("./pages/HomePage"));

const App = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/auth" element={<></>}>
            <Route path="login" element={<></>} />
            <Route path="register" element={<></>} />
          </Route>
          <Route path="/tasks" element={<></>} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
