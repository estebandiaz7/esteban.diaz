import axiosDefault from "../utils/axios.utils";

const financialURL = `/bp/products`;

export const fetchProducts = async () => {
  const response = await axiosDefault.get(`${financialURL}`);
  const { data } = response;
  return data;
};
