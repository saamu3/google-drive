import { render, screen, fireEvent } from "@testing-library/react";
import ModelPopup from "./ModelPopup";
describe("is modelpopup rendering", () => {
  const mockOnClose = jest.fn();
  const handleButtonAction = jest.fn();
  test("should call cancel button", () => {
    render(
      <ModelPopup
        handleButtonAction={handleButtonAction}
        header="hello"
        buttonTitle="create"
        folderId=""
        name=" "
        handleClose={mockOnClose}
      />
    );
    const button = screen.getByText("Cancel");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(mockOnClose).toHaveBeenCalled();
  });
  test("should call handlebuttonaction", () => {
    const mockButtonAction = jest.fn();
    render(
      <ModelPopup
        handleButtonAction={mockButtonAction}
        header="hello"
        buttonTitle="Create"
        folderId="1"
        name="soumya"
        handleClose={mockOnClose}
      />
    );
    const button = screen.getByText("Create");
    fireEvent.click(button);
    expect(mockButtonAction).toHaveBeenCalled();
  });
  const mockButtonAction = jest.fn();
  describe("should change the input value", () => {
    test("Should set value to state when input is changed", () => {
      render(
        <ModelPopup
          handleButtonAction={mockButtonAction}
          header="hello"
          buttonTitle="Create"
          folderId=""
          name="soumya"
          handleClose={mockOnClose}
        />
      );
      const input = screen.getByRole("textbox");
      fireEvent.change(input, {
        preventDefault: jest.fn,
        target: { value: "untitled folder" },
      });
      expect(input).toBeInTheDocument();
    });
  });
});
