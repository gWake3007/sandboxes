import axios from "axios";

axios.defaults.baseURL = "http://hn.algolia.com/api/v1/";

export const getArticlessApi = async (serchQuery, page) => {
  const { data } = await axios.get("search", {
    params: {
      query: serchQuery,
      hitsPerPage: 10,
      page,
    },
  });
  return data.hits;
};
