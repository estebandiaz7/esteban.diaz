import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { fetchProducts, verifyProductId } from "./finance.service";
import { createProduct, updateProduct, deleteProduct } from "./finance.service";
import { FinanceProduct } from "types/product.types";
import useProductStore from "stores/product.store";

const getFetchProductsQueryKey = () => {
  return ["finance-products"];
};

export const useFetchProducts = () => {
  return useQuery<FinanceProduct[], AxiosError>({
    queryKey: getFetchProductsQueryKey(),
    queryFn: fetchProducts,
  });
};

export const useVerifyProductId = () => {
  return useMutation<boolean, AxiosError, FinanceProduct["id"]>({
    mutationFn: verifyProductId,
  });
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation<FinanceProduct, AxiosError, FinanceProduct>({
    mutationFn: createProduct,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: getFetchProductsQueryKey() });
    },
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  const setSelectedProduct = useProductStore(
    (state) => state.setSelectedProduct
  );

  return useMutation<FinanceProduct, AxiosError, FinanceProduct>({
    mutationFn: updateProduct,
    onSuccess: (response) => setSelectedProduct(response),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: getFetchProductsQueryKey() });
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation<void, AxiosError, FinanceProduct["id"]>({
    mutationFn: deleteProduct,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: getFetchProductsQueryKey() });
    },
  });
};
