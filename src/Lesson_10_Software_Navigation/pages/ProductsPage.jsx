import { useEffect, useState, useMemo } from "react";
import { getProductsApi } from "../api/platzi-fake-API";
import { Link, useSearchParams, useLocation } from "react-router-dom";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [params, setParams] = useSearchParams();

  const location = useLocation();
  console.log(location);

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

  //?Для фільтрації продуктс через метод filter.
  //?useMemo() - використовується для запам'ятовування фільтрації щоб кожен раз заново не рендерити з бек-Енду сторінку.
  const filteredProducts = useMemo(
    () =>
      products.filter((el) =>
        el.title
          .toLowerCase()
          .includes((params.get("filter") ?? "").toLowerCase())
      ),
    [products, params]
  );

  //?{target: {value}} - де value це те що ми вводимо в input.Далі за допомогою set додаємо до "filter" value яке ввели в input.
  const handleChange = ({ target: { value } }) => {
    params.set("filter", value);
    setParams(params);
  };

  return (
    <div>
      <label htmlFor="filterProducts">Filter by title: </label>
      <input
        type="text"
        id="filterProducts"
        value={params.get("filter") ?? ""}
        onChange={handleChange}
      />
      {filteredProducts.length > 0 &&
        filteredProducts.map((product) => (
          <div key={product.id}>
            <h4>{product.title}</h4>
            <Link to={String(product.id)} state={location}>
              Details
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ProductsPage;

//?value={params.get("filter")} - Таким чином робимо input контрольованим.params беремо з const [params, setParams] = useSearchParams();

//?<Link to={String(product.id)} state={location}> - в state нас будуть зберігатися дані локації звідки ми пришли. Тобто в данній ситуації результати нашого пошуку. Щоб нічого не оновлювалось(для зручності user experience)

//?Тут в <Link> - дуже важливий момент. Якщо на початку стоїть / то це буде взагалі нова адреса. А якщо ні то ми перейдемо по нашому посиланні + id(Те що нам на данний момент і потрібно )
//?Також ВАЖЛИВО в Link в to={має бути ТІЛЬКИ стрінга} - Тому і передаємо пропс.id через шаблон!
