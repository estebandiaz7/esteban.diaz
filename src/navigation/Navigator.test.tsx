import { render } from "@testing-library/react-native";
import React from "react";
import { createNavigationContainerRef } from "@react-navigation/native";

import Navigator from "navigation/Navigator";
import { NavigatorScreens } from "./Navigator.types";

export const navigationRef = createNavigationContainerRef<NavigatorScreens>();

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  createNavigationContainerRef: jest.fn(() => ({
    current: {
      navigate: jest.fn(),
      dispatch: jest.fn(),
      resetRoot: jest.fn(),
    },
  })),
}));

describe("Navigator", () => {
  it("renders the Navigator component correctly", () => {
    render(<Navigator />);
  });

  it("creates a navigation container ref", () => {
    expect(navigationRef.current).toBeDefined();
  });
});
