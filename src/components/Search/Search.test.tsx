import React from "react";

import Search from "./Search";
import { render } from "setupTests";

describe("Search", () => {
  it("renders with default props", () => {
    render(<Search text="search value" setText={() => {}} />);
  });
});
