import { render } from "@testing-library/react";
import DriveContent from "./DriveContent";
import { BrowserRouter } from "react-router-dom";
describe("should render component", () => {
  test("driveContent should be called", () => {
    render(
      <BrowserRouter>
        <DriveContent />
      </BrowserRouter>
    );
  });
});
