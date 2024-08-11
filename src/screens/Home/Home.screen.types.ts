import { RouteProp } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { NavigatorScreens } from "../../navigation/Navigator.types";

export interface HomeProps {
  navigation: HomeNavigation;
  route: HomeRoute;
}

// Screen params
export interface HomeParams {}

// Screen navigation type
export type HomeNavigation = NativeStackScreenProps<NavigatorScreens, "Home">;

// Screen route type
export type HomeRoute = RouteProp<NavigatorScreens, "Home">;
