// Interfaces and types from component Home
import { RouteProp } from "@react-navigation/native";
import { NavigatorScreens } from "../../navigation/Navigator.types";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

// Component Props
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
