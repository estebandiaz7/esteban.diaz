import React from "react";
import { render } from "setupTests";

import { buildStackNavigation } from "utils/testUtils/builders/navigation.builder";
import { buildRoute } from "utils/testUtils/builders/navigation.builder";
import ProductDetail from "./ProductDetail.screen";
import { ProductDetailRoute } from "./ProductDetail.screen.types";

describe("ProductDetail screen", () => {
  it("renders without crashing", () => {
    render(
      <ProductDetail
        navigation={buildStackNavigation()}
        route={buildRoute<ProductDetailRoute>({ name: "ProductDetail" })}
      />
    );
  });
});
