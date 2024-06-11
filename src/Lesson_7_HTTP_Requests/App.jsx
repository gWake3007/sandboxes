import { useEffect, useState } from "react";
import { getArticlessApi } from "./api/articles-api.js";
import ArticleList from "./components/ArticleList/ArticleList.jsx";
import Loading from "./components/Loading/Loading.jsx";
import Error from "./components/Error/Error.jsx";
import SearchForm from "./components/SearchForm/SearchForm.jsx";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [qwery, setQwery] = useState("");

  useEffect(() => {
    const getArticles = async () => {
      try {
        setLoading(true);
        setArticles([]);
        const data = await getArticlessApi(qwery, page);
        setArticles([...articles, ...data]);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    qwery && getArticles();
  }, [articles, qwery, page]);

  const submitForm = async (qwery) => {
    setQwery(qwery);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  return (
    <>
      <SearchForm submit={submitForm} />
      {loading && <Loading />}
      {error && <Error />}
      {articles.length > 0 && <ArticleList articles={articles} />}
      {articles.length > 0 && (
        <button onClick={handleLoadMore}>Load More...</button>
      )}
    </>
  );
};
export default App;

//?Стан loading потрібен для того щоб при очікуванні коли підтягується API в try, catch, finally змінювати стан та спочатку додавати Loading і по завершенню прибирати!
