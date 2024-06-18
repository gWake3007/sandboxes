import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import NavBar from "./components/NavBar/NavBar";
import ProductsDetailsPage from "./pages/ProductsDetailsPage";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductsDetailsPage />}>
          <Route path="sub-products-a" element={<div>Products A</div>} />
          <Route path="sub-products-b" element={<div>Products B</div>} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
};
export default App;

//?path="/" - Це дефолтний маршрут.
//?path="/products/:productID" - потрібно вподальшому для useParams в компоненті.
