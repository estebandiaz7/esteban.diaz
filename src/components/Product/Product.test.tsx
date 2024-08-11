import React from "react";
import dayjs from "dayjs";

import Product from "./Product";
import { render } from "setupTests";

describe("Product", () => {
  it("renders with default props", () => {
    render(
      <Product
        product={{
          date_release: dayjs().format("DD/MM/YYYY"),
          date_revision: dayjs().format("DD/MM/YYYY"),
          description: "Description",
          id: "1",
          logo: "https://via.placeholder.com/150",
          name: "Name",
        }}
      />
    );
  });
});
