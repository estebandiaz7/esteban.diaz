import "@testing-library/react-native/extend-expect";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RenderOptions } from "@testing-library/react-native";
import { render as rtlRender } from "@testing-library/react-native";
import React, { ReactNode } from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Providers from "providers/Providers";

const Stack = createNativeStackNavigator();

interface WrapperProps {
  children?: ReactNode;
}

export const render = (ui: React.ReactElement, options: RenderOptions = {}) => {
  const { ...returnOptions } = options;

  // Wrapper component of the render function
  const Wrapper: React.FC<WrapperProps> = (props) => {
    const { children } = props;
    const Screen = () => <View>{children}</View>;
    return (
      <SafeAreaProvider
        initialMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Screen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  };
  // Return renderer function with base options set
  return {
    ...appRender(ui, { wrapper: Wrapper, ...returnOptions }),
  };
};

export const appRender = (
  ui: React.ReactElement,
  options: RenderOptions = {}
) => {
  const { wrapper, ...returnOptions } = options;
  // Wrapper component of the render function
  const Wrapper: React.FC<WrapperProps> = (props) => {
    const { children } = props;
    const InnerWrapper = wrapper ? wrapper : (props: any) => props.children;
    return (
      <Providers>
        <InnerWrapper>{children}</InnerWrapper>
      </Providers>
    );
  };
  // Return renderer function with base options set
  return {
    ...rtlRender(ui, { wrapper: Wrapper, ...returnOptions }),
  };
};
