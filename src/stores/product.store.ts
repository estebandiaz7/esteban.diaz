import { create } from "zustand";

import { ProductStoreValues } from "./product.store.types";
import { defaultValues } from "./product.store.helpers";
import { getStoreSetState } from "utils/stores.utils";

const useProductStore = create<ProductStoreValues>((set, get) => ({
  ...defaultValues,
  setSelectedProduct: (payload) => {
    const prev = get().selectedProduct;
    const selectedProduct = getStoreSetState(payload, prev);
    set({ selectedProduct });
  },
}));

export default useProductStore;
