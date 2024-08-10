// Navigator helper functions and data
import { createNavigationContainerRef } from "@react-navigation/native";

import { NavigatorScreens } from "./Navigator.types";

export const navigationRef = createNavigationContainerRef<NavigatorScreens>();
