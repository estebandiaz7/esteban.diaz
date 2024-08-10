import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import { navigationRef } from "./Navigator.helpers";
import { NavigatorProps as Props, NavigatorScreens } from "./Navigator.types";
import Home from "../screens/Home/Home.screen";

const Stack = createNativeStackNavigator<NavigatorScreens>();

const Navigator: React.FC<Props> = (props) => {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          {/* <Stack.Screen
            name="ServerError"
            component={ServerError}
            options={{ title: "Something went wrong", headerShown: false }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigator;
