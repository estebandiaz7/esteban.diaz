import { FinanceProduct } from "types/product.types";
import { StoreSetState } from "types/zustand.types";

export interface ProductStoreValues {
  selectedProduct: FinanceProduct | undefined;
  setSelectedProduct: StoreSetState<FinanceProduct | undefined>;
}
