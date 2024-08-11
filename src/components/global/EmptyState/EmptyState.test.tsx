import React from "react";
import { render } from "setupTests";

import EmptyState from "./EmptyState";

describe("EmptyState", () => {
  it("renders with default props", () => {
    render(<EmptyState />);
  });
});
