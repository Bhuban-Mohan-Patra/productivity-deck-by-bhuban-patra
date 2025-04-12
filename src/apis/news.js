// import axios from "axios";

// const fetch = ({ searchTerm }) =>
//   axios.get("/everything", { params: { q: searchTerm } });

// const newsApi = { fetch };

// export default newsApi;

import axios from "axios";

// const searchArticles = ({ q }) =>
//   axios.get("", {
//     params: { q },
//   });
const fetch = ({ searchTerm }) => {
  console.log("API calling with search term:", searchTerm);

  return axios.get("/everything", {
    params: { q: searchTerm },
  });
};

const newsApi = { fetch };

export default newsApi;
