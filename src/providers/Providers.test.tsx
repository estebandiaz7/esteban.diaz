import React from "react";
import { View } from "react-native";
import { render } from "setupTests";

import Providers from "./Providers";

describe("Providers", () => {
  it("renders with default props", () => {
    render(
      <Providers>
        <View />
      </Providers>
    );
  });
});
