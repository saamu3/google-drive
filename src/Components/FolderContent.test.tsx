import { fireEvent, render,screen } from "@testing-library/react";
import FolderContent from "./FolderContent";
describe("should render component", () => {
  test("should render the folder content component", () => {
    render(<FolderContent />);
    const button = screen.getByText("+New")
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
  });
});
