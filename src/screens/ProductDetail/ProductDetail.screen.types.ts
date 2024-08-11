import { RouteProp } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { NavigatorScreens } from "../../navigation/Navigator.types";

export interface ProductDetailProps {
  navigation: ProductDetailNavigation;
  route: ProductDetailRoute;
}

// Screen params
export interface ProductDetailParams {}

// Screen navigation type
export type ProductDetailNavigation = NativeStackScreenProps<
  NavigatorScreens,
  "ProductDetail"
>;

// Screen route type
export type ProductDetailRoute = RouteProp<NavigatorScreens, "ProductDetail">;
