import React from "react";

import Textbox from "./Textbox";
import { render } from "setupTests";

describe("Textbox", () => {
  it("renders with default props", () => {
    render(<Textbox label="Input de prueba" name="inputTest" />);
  });
});
