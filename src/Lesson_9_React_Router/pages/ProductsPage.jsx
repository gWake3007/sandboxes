import { useEffect, useState } from "react";
import { getProductsApi } from "../api/platzi-fake-API";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getProductsApi();
        setProducts(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <div>
      {products.length > 0 &&
        products.map((product) => (
          <div key={product.id}>
            <h4>{product.title}</h4>
            <Link to={`${product.id}`}>Details</Link>
          </div>
        ))}
    </div>
  );
};

export default ProductsPage;

//?Тут в <Link> - дуже важливий момент. Якщо на початку стоїть / то це буде взагалі нова адреса. А якщо ні то ми перейдемо по нашому посиланні + id(Те що нам на данний момент і потрібно )
//?Також ВАЖЛИВО в Link в to={має бути ТІЛЬКИ стрінга} - Тому і передаємо пропс.id через шаблон!
