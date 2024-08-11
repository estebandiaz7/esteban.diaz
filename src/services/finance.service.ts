import { FinanceProduct } from "types/product.types";
import axiosDefault from "utils/axios.utils";
import { getStatusAndErrorFromResponse } from "utils/axios.utils";
import { getStatusAndDataFromError } from "utils/axios.utils";

const financialURL = `/bp/products`;

export const fetchProducts = async (): Promise<FinanceProduct[]> => {
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

export const createProduct = async (
  product: FinanceProduct
): Promise<FinanceProduct> => {
  try {
    const response = await axiosDefault.post(financialURL, product);
    const { data } = response;
    return data;
  } catch (e) {
    const errorMessage = getStatusAndErrorFromResponse(e);
    if (errorMessage) throw Error(errorMessage);
    throw e;
  }
};

export const updateProduct = async (
  product: FinanceProduct
): Promise<FinanceProduct> => {
  try {
    const response = await axiosDefault.put(financialURL, product);
    const { data } = response;
    return data;
  } catch (e) {
    const errorMessage = getStatusAndErrorFromResponse(e);
    if (errorMessage) throw Error(errorMessage);
    throw e;
  }
};

export const deleteProduct = async (productId: FinanceProduct["id"]) => {
  try {
    const deleteUrl = `${financialURL}?id=${productId}`;
    const response = await axiosDefault.delete(deleteUrl);
    const { data } = response;
    return data;
  } catch (e) {
    const statusAndDataFromError = getStatusAndDataFromError(e);
    if (statusAndDataFromError) throw Error(statusAndDataFromError);
    throw e;
  }
};
