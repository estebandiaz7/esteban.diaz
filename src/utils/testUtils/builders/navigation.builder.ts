// React navigation builders
import { NavigationAction } from "@react-navigation/native";
import { StackNavigationState } from "@react-navigation/native";
import { PartialState } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export const buildRoute = <T>(overrides: Partial<T> = {}) => {
  return {
    key: "",
    name: "",
    params: {},
    ...overrides,
  };
};

export const buildStackNavigation = (
  overrides: Partial<NativeStackNavigationProp<any, any>> = {}
) => {
  return {
    dispatch: (
      action:
        | NavigationAction
        | ((state: StackNavigationState<any>) => NavigationAction)
    ) => {},
    navigate: (
      route:
        | { key: string; params?: any }
        | { name: any; key?: string; params: any }
    ) => {},
    reset: (
      state: StackNavigationState<any> | PartialState<StackNavigationState<any>>
    ) => {},
    goBack: () => {},
    isFocused: () => true,
    canGoBack: () => false,
    setParams: () => {},
    setOptions: (options: Partial<NativeStackNavigationOptions>) => {},
    dangerouslyGetParent: (() => {}) as any,
    dangerouslyGetState: (() => {}) as any,
    addListener: (() => {}) as any,
    removeListener: (() => {}) as any,
    replace: (() => {}) as any,
    push: (() => {}) as any,
    pop: (() => {}) as any,
    popToTop: (() => {}) as any,
    getId: (() => {}) as any,
    getState: (() => {}) as any,
    getParent: (() => {}) as any,
    navigation: (() => {}) as any,
    route: (() => {}) as any,
    ...overrides,
  };
};
