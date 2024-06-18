import { useEffect } from "react";
import { getProductsApi } from "../api/platzi-fake-API";

const ProductsPage = () => {
  useEffect(() => {
    const getData = async () => {
      const data = await getProductsApi();
    };
    getData();
  }, []);
  return <div>ProductsPage</div>;
};

export default ProductsPage;
