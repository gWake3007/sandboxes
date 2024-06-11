import { useEffect, useState } from "react";
import { getArticlesApi } from "./api/articles-api.js";
import ArticleList from "./components/ArticleList/ArticleList.jsx";
import Loading from "./components/Loading/Loading.jsx";
import Error from "./components/Error/Error.jsx";
import SearchForm from "./components/SearchForm/SearchForm.jsx";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getArticles = async () => {
      try {
        setError(false);
        setLoading(true);
        //?Закоментоване очищення. Для того щоб Load More додавало далі page до попереднього.
        // setArticles([]);
        const data = await getArticlesApi(query, page);
        //?Потрібний колбек для того щоб незациклювати сам запит на бек-енд.
        setArticles((prev) => [...prev, ...data]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    query && getArticles();
  }, [query, page]);

  //?setArticles([]) - потрібне для того щоб коли ми в форму ввели одразу щось одне а пізніше інше інформація оновлювалась і починалася с першої сторінки.

  const submitForm = async (serchQuery) => {
    setQuery(serchQuery);
    setArticles([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  return (
    <>
      <SearchForm submit={submitForm} />
      {error && <Error />}
      {articles.length > 0 && <ArticleList articles={articles} />}
      {loading && <Loading />}
      {articles.length > 0 && (
        <button onClick={handleLoadMore}>Load More...</button>
      )}
    </>
  );
}
export default App;

//?Стан loading потрібен для того щоб при очікуванні коли підтягується API в try, catch, finally змінювати стан та спочатку додавати Loading і по завершенню прибирати!
