import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import { navigationRef } from "./Navigator.helpers";
import { NavigatorProps as Props, NavigatorScreens } from "./Navigator.types";
import Home from "screens/Home/Home.screen";
import ProductDetail from "screens/ProductDetail/ProductDetail.screen";
import ProductFormScreen from "screens/ProductForm/ProductForm.screen";

const Stack = createNativeStackNavigator<NavigatorScreens>();

const Navigator: React.FC<Props> = (props) => {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ title: "Banco", headerBackTitleVisible: false }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
          <Stack.Screen name="ProductForm" component={ProductFormScreen} />
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
