import axios from "axios";

const fetch = () => axios.get("/", { params: { q: "google" } });

const newsApi = { fetch };

export default newsApi;
