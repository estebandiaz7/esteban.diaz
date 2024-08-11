import { Platform } from "react-native";
import SimplePlaceholder from "../components/global/SimplePlaceholder/SimplePlaceholder";
import { FinanceProduct } from "../types/product.types";

export const asyncDelay = (time: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

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
  const results = products.filter((item) => {
    const { id, name, description } = item;
    return (
      id.includes(searchText) ||
      name.includes(searchText) ||
      description.includes(searchText)
    );
  });

  return results;
};

export const isiOS = Platform.OS === "ios";
export const isAndroid = Platform.OS === "android";
