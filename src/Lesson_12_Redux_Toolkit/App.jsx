import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { lazy, Suspense } from "react";

//?Завантажуємо наш компонент через ліниве завантаження (для збереження ресурсу). Щоб це працювало обгортаємо потрібні компоненти в Suspence(В більшості випадків всю App)
const ProductsDetailsPage = lazy(() => import("./pages/ProductsDetailsPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));

const App = () => {
  return (
    <div>
      <NavBar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductsDetailsPage />}>
            <Route path="sub-products-a" element={<div>Products A</div>} />
            <Route path="sub-products-b" element={<div>Products B</div>} />
          </Route>
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;

//?path="/" - Це дефолтний маршрут.
//?path="/products/:productID" - потрібно вподальшому для useParams в компоненті.
//?fallback={null} - обовязковий пропс в Suspense який потрібен для того щоб вказувати що буде при підвантажуванні. В данному випадку null. Можна вказати Loading... тощо.
