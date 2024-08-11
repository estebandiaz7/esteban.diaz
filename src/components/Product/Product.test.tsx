import React from "react";

import { render } from "setupTests";
import Product from "./Product";

describe("Product", () => {
  it("renders with default props", () => {
    render(<Product />);
  });
});
