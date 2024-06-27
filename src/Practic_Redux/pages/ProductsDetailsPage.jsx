import { useEffect, useState, useRef } from "react";
import { Outlet, useParams, Link, useLocation } from "react-router-dom";
import { getSingleProductsApi } from "../api/platzi-fake-API";

const ProductsDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  console.log("location ProductsDetailsPage", location);

  //?В useRef() - зберігаємо локація для повернення з пошуку чи сторінки.Потрібно це для того щоб в кожному лінку нижче по іерархії не додавати location.state а просто зберігати в головному(Щоб не дублювати код).
  const backLocation = useRef(location.state ?? "/products");

  useEffect(() => {
    if (!productId) return;
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getSingleProductsApi(productId);
        setProduct(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [productId]);

  return (
    <div>
      <Link to={backLocation.current}>Back</Link>
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {product && (
        <div>
          <h3>{product.title}</h3>
          <h4>Price: {product.price}</h4>
        </div>
      )}
      <nav>
        <Link to="sub-products-a">sub-products-a</Link>
        <Link to="sub-products-b">sub-products-b</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default ProductsDetailsPage;

//?<Outlet /> - потрібен для відображання div чілдненів в Router!
//?<Link to={location.state}>Back</Link> - таким чином ми повертаємось туди звідки і переходили.Тобто на посилання пошуку елементу.
