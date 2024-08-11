import React from "react";
import { render } from "setupTests";

import Home from "./Home";

describe("Home", () => {
  it("renders with default props", () => {
    render(<Home />);
  });
});
