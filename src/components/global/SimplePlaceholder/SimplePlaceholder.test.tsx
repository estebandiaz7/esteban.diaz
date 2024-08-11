import React from "react";
import { render } from "setupTests";

import SimplePlaceholder from "./SimplePlaceholder";

describe("SimplePlaceholder", () => {
  it("renders with default props", () => {
    render(<SimplePlaceholder />);
  });
});
