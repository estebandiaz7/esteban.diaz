import axios from "axios";

import CONSTANTS from "../config/constants";

const { API_URL, AUTHOR_ID, DEFAULT_REQUEST_TIMEOUT } = CONSTANTS;

const source = axios.CancelToken.source();

const axiosDefault = axios.create({
  baseURL: API_URL,
  timeout: DEFAULT_REQUEST_TIMEOUT,
  headers: {
    authorId: AUTHOR_ID,
  },
  cancelToken: source.token,
});

const report = (error: Error) => {
  return Promise.reject(error);
};

axiosDefault.interceptors.response.use(
  (response) => response,
  (error) => report(error)
);

export default axiosDefault;
