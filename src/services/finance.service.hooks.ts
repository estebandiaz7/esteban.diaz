import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { fetchProducts } from "./finance.service";
import { FinanceProduct } from "../types/product.types";

export const useFetchProducts = () => {
  return useQuery<FinanceProduct[], AxiosError>({
    queryKey: ["finance-products"],
    queryFn: fetchProducts,
  });
};
