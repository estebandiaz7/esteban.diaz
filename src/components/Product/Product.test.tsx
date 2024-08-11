import React from "react";

import Product from "./Product";
import { render } from "setupTests";
import { buildProduct } from "utils/testUtils/builders/product.builders";

describe("Product", () => {
  it("renders with default props", () => {
    render(<Product product={buildProduct()} />);
  });
});
