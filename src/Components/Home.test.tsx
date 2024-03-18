import { render } from "@testing-library/react";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";
describe("home rendering", () => {
  test("home renderes successfullly", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  });
});
