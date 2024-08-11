import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { HomeParams } from "../screens/Home/Home.screen.types";
import { ProductDetailParams } from "../screens/ProductDetail/ProductDetail.screen.types";

export interface NavigatorProps {}

export type NavigatorScreens = {
  Home?: HomeParams;
  ProductDetail?: ProductDetailParams;
  // ServerError?: ServerErrorParams;
};

export type RootNavigatorPropList = NativeStackNavigationProp<NavigatorScreens>;
