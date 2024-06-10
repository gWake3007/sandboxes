import { useEffect, useState } from "react";
import { getArticlessApi } from "./api/articles-api.js";
import ArticleList from "./components/ArticleList/ArticleList.jsx";
import Loading from "./components/Loading/Loading.jsx";
import Error from "./components/Error/Error.jsx";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        setLoading(true);
        const data = await getArticlessApi("react");
        setArticles(data);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getArticles();
  }, []);
  return (
    <>
      {loading && <Loading />}
      {error && <Error />}
      {articles.length > 0 && <ArticleList articles={articles} />}
    </>
  );
};
export default App;

//?Стан loading потрібен для того щоб при очікуванні коли підтягується API в try, catch, finally змінювати стан та спочатку додавати Loading і по завершенню прибирати!
