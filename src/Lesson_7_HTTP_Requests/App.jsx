import { useEffect, useState } from "react";
import axios from "axios";
import ArticleList from "./components/ArticleList/ArticleList";
import css from "./App.module.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://hn.algolia.com/api/v1/search?query=react"
        );
        setArticles(response.data.hits);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, []);
  return (
    <>
      <h1>Latest Articles</h1>
      {loading && <p>Loading data, please wait...</p>}
      {error && (
        <p className={css.error}>
          Whoops, something went wrong! Please try reloading this page
        </p>
      )}
      {articles.length > 0 && <ArticleList items={articles} />}
    </>
  );
}
export default App;

//?Стан loading потрібен для того щоб при очікуванні коли підтягується API в try, catch, finally змінювати стан та спочатку додавати Loading і по завершенню прибирати!
