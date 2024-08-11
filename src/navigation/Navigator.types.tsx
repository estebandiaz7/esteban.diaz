import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { HomeParams } from "screens/Home/Home.screen.types";
import { ProductDetailParams } from "screens/ProductDetail/ProductDetail.screen.types";
import { ProductFormParams } from "screens/ProductForm/ProductForm.screen.types";

export interface NavigatorProps {}

export type NavigatorScreens = {
  Home?: HomeParams;
  ProductDetail?: ProductDetailParams;
  ProductForm?: ProductFormParams;
};

export type RootNavigatorPropList = NativeStackNavigationProp<NavigatorScreens>;
