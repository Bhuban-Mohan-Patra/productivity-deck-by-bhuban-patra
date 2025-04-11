import axios from "axios";

const fetch = ({ searchTerm = "google" }) =>
  axios.get("/", { params: { q: searchTerm } });

const newsApi = { fetch };

export default newsApi;
