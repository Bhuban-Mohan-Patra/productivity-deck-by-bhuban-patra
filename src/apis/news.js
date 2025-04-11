import axios from "axios";

// const show = () =>
//   axios.get("/", {
//     params: {
//       q: "google",
//     },
//   });
const show = () => axios.get("/", { params: { q: "google" } });

const newsApi = { show };

export default newsApi;
