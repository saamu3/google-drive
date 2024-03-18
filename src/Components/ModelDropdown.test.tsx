import { render, screen, fireEvent } from "@testing-library/react";
import ModelDropdown from "./ModelDropdown";

describe("should render dropdown", () => {
  test("should call rename button", () => {
    const mockHandleRename = jest.fn();
    const mockHandleDelete = jest.fn();
    render(
      <ModelDropdown
        handleRenameHandler={mockHandleRename}
        handleDeleteHandler={mockHandleDelete}
        buttonTitle={["Rename Folder", "Delete Folder"]}
      />
    );
    const button = screen.getByText("Rename Folder");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(mockHandleRename).toHaveBeenCalled();
    console.log(button);
  });
  test("should call delete button", () => {
    const mockHandleRename = jest.fn();
    const mockHandleDelete = jest.fn();
    render(
      <ModelDropdown
        handleRenameHandler={mockHandleRename}
        handleDeleteHandler={mockHandleDelete}
        buttonTitle={["Rename Folder", "Delete Folder"]}
      />
    );
    const button = screen.getByText("Delete Folder");
    fireEvent.click(button);
    expect(mockHandleDelete).toHaveBeenCalled();
    console.log(button);
  });
});
