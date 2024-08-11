import { FinanceProduct } from "types/product.types";

export const buildProduct = (
  overrides?: Partial<FinanceProduct>
): FinanceProduct => {
  return {
    id: "1",
    name: "Groceries",
    description: "Groceries",
    logo: "https://example.com/logo.png",
    date_release: "11/11/2024",
    date_revision: "11/11/2025",
    ...overrides,
  };
};
