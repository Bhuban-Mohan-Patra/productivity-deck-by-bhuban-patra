import {
  keysToCamelCase,
  serializeKeysToSnakeCase,
} from "@bigbinary/neeto-cist";
import axios from "axios";
import { evolve } from "ramda";

const transformResponseKeysToCamelCase = response => {
  if (response.data) response.data = keysToCamelCase(response.data);
};

const responseInterceptors = () => {
  axios.interceptors.response.use(response => {
    transformResponseKeysToCamelCase(response);

    return response.data;
  });
};

const requestInterceptors = () => {
  axios.interceptors.request.use(
    evolve({ data: serializeKeysToSnakeCase, params: serializeKeysToSnakeCase })
  );
};

// const requestInterceptors = () => {
//   axios.interceptors.request.use(config => {
//     if (config.data) {
//       config.data = serializeKeysToSnakeCase(config.data);
//     }

//     return config;
//   });
// };

const setHttpHeaders = () => {
  axios.defaults.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
};

// const setHttpHeaders = () => {
//   axios.defaults.headers = {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//     "X-Api-Key": process.env.REACT_APP_NEWS_API_KEY,
//   };
// };

export default function initializeAxios() {
  axios.defaults.baseURL = "https://newsapi.org/v2";
  axios.defaults.params = {
    apikey: "8493175e3f06422595723966526b93df",
  };
  setHttpHeaders();
  responseInterceptors();
  requestInterceptors();
}

// export default function initializeAxios() {
//   axios.defaults.baseURL = "https://newsapi.org/v2/everything";
//   setHttpHeaders();
//   responseInterceptors();
//   requestInterceptors();
// }
