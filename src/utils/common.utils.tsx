import { Platform } from "react-native";

import SimplePlaceholder from "components/global/SimplePlaceholder/SimplePlaceholder";
import { FinanceProduct } from "types/product.types";

export const renderPlaceholders = (length: number) => {
  const temporal = length ? length : 5;
  return Array.from({ length: temporal }).map((_, index) => (
    <SimplePlaceholder key={index} />
  ));
};

export const searchByText = (
  products: FinanceProduct[],
  searchText: string
) => {
  const lowerSearchText = searchText.toLowerCase();
  const results = products.filter((item) => {
    const { id, name, description } = item;
    return (
      id.toLowerCase().includes(lowerSearchText) ||
      name.toLowerCase().includes(lowerSearchText) ||
      description.toLowerCase().includes(lowerSearchText)
    );
  });

  return results;
};

export const isiOS = Platform.OS === "ios";
export const isAndroid = Platform.OS === "android";
