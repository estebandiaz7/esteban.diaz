import axios, { AxiosError } from "axios";

import CONSTANTS from "config/constants";
import { CommonResponse } from "services/finance.service.types";

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

export const getStatusAndDataFromError = (e: AxiosError) => {
  const status = getStatusFromError(e);
  const message = getDataFromError(e);
  if (status && message) return `${status} - ${message}`;
};

export const getStatusFromError = (e: AxiosError) => {
  const status = e.response?.status;
  if (status) return `E${status}`;
};

export const getDataFromError = (e: AxiosError) => {
  const data = e.response?.data;
  if (data) return `${data}`;
};

export const getStatusAndErrorFromResponse = (
  e: AxiosError<CommonResponse>
) => {
  const status = getStatusFromError(e);
  const message = getErrorFromDataResponse(e);
  if (status && message) return `${status} - ${message}`;
};

export const getErrorFromDataResponse = (e: AxiosError<CommonResponse>) => {
  const error = e.response?.data.error;
  if (error) return `${error}`;
};

export default axiosDefault;
