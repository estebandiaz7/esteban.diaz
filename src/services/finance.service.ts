import { FinanceProduct } from "../types/product.types";
import axiosDefault from "../utils/axios.utils";

const financialURL = `/bp/products`;

export const fetchProducts = async () => {
  const response = await axiosDefault.get(financialURL);
  const { data } = response;
  return data;
};

export const verifyProductId = async (
  productId: FinanceProduct["id"]
): Promise<boolean> => {
  const verifyUrl = `${financialURL}/verification?id=${productId}`;
  const response = await axiosDefault.get(verifyUrl);
  const { data } = response;
  return data;
};
