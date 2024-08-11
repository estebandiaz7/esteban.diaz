import React from "react";
import { render } from "setupTests";

import { buildStackNavigation } from "utils/testUtils/builders/navigation.builder";
import { buildRoute } from "utils/testUtils/builders/navigation.builder";
import ProductForm from "./ProductForm.screen";
import { ProductFormRoute } from "./ProductForm.screen.types";

describe("ProductForm screen", () => {
  it("renders without crashing", () => {
    render(
      <ProductForm
        navigation={buildStackNavigation()}
        route={buildRoute<ProductFormRoute>({ name: "ProductForm" })}
      />
    );
  });
});
