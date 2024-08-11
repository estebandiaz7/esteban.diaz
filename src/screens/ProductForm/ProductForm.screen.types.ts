import { RouteProp } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { NavigatorScreens } from "navigation/Navigator.types";

export interface ProductFormProps {
  navigation: ProductFormNavigation;
  route: ProductFormRoute;
}

// Screen params
export interface ProductFormParams {}

// Screen navigation type
export type ProductFormNavigation = NativeStackScreenProps<
  NavigatorScreens,
  "ProductForm"
>;

// Screen route type
export type ProductFormRoute = RouteProp<NavigatorScreens, "ProductForm">;
