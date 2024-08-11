import React from "react";
import { render } from "setupTests";

import ProductDetail from "./ProductDetail";

describe("ProductDetail", () => {
  it("renders with default props", () => {
    render(<ProductDetail />);
  });
});
