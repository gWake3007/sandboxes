//? useState - хук в реакті.
import { useState } from "react";
import posts from "../../posts.json";
import ArticlePost from "../ArticlePost/ArticlePost";
import PageCounter from "../PageCounter/PageCounter";

const Posts = () => {
  const [page, setPage] = useState(0);
  const isLastPage = page === posts.length - 1;
  const isFirstPage = page === 0;
  const currentPost = posts[page];
  const handleChangePage = (params) => {
    //?Звичайний if else.
    if (params === "prev") {
      if (page === 0) return;
      setPage(page - 1);
    } else {
      if (page === posts.length) return;
      setPage(page + 1);
    }
    //?Більш сучайний if з тією ж самою логікою.
    // if (params === "prev") return setPage(page - 1);
    // setPage(page + 1);
    //?Турнарний оператор.
    // params === "prev" ? setPage(page - 1) : setPage(page + 1);
  };
  return (
    <div>
      <button disabled={isFirstPage} onClick={() => handleChangePage("prev")}>
        prev
      </button>
      <button disabled={isLastPage} onClick={() => handleChangePage("next")}>
        next
      </button>
      <PageCounter page={page + 1} total={posts.length}></PageCounter>
      <ArticlePost
        title={currentPost.title}
        body={currentPost.body}
      ></ArticlePost>
    </div>
  );
};

export default Posts;
