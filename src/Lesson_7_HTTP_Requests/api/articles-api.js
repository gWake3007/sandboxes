import axios from "axios";

axios.defaults.baseURL = "http://hn.algolia.com/api/v1/";

export const getArticlessApi = async (serchQuery) => {
  const { data } = await axios.get("search", {
    params: {
      query: serchQuery,
    },
  });
  return data.hits;
};
