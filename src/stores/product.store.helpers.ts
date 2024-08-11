import { StoreInitialValues } from "types/zustand.types";
import { ProductStoreValues } from "./product.store.types";

export const defaultValues: StoreInitialValues<ProductStoreValues> = {
  selectedProduct: undefined,
};
