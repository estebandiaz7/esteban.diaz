import React from "react";

import { render } from "setupTests";
import Button from "./Button";

describe("Button", () => {
  it("renders with default props", () => {
    render(<Button />);
  });
});
