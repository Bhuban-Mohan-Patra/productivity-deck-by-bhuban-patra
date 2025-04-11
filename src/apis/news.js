import axios from "axios";

const fetch = ({ searchTerm }) => axios.get("/", { params: { q: searchTerm } });

const newsApi = { fetch };

export default newsApi;
