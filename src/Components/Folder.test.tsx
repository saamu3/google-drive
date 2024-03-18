import { fireEvent, render, screen } from "@testing-library/react";
import { FolderItemsContext } from "../context/FolderItems";
import { BrowserRouter } from "react-router-dom";
import Folder from "./Folder";
const data = [
  {
    id: "1",
    name: "soumya",
  },
  {
    id: "2",
    name: "sakshi",
  },
];
const setFolderItems = jest.fn();
const MockProvider = ({ children }: any) => (
  <FolderItemsContext.Provider
    value={{ folderItems: data, setFolderItems: setFolderItems }}
  >
    {children}
  </FolderItemsContext.Provider>
);
const mockdata = { id: "1", name: "soumya" };

describe("should render component", () => {
  test("should render folder component", () => {
    render(
      <BrowserRouter>
        <MockProvider>
          <Folder folder={mockdata} />
        </MockProvider>
      </BrowserRouter>
    );
  });
  test("should display dropdown", async () => {
    render(
      <BrowserRouter>
        <MockProvider>
          <Folder folder={mockdata} />
        </MockProvider>
      </BrowserRouter>
    );
    const buttonele = screen.getByTestId("ellipsis");
    expect(buttonele).toBeInTheDocument();
    fireEvent.click(buttonele);
    expect(screen.getByText("Rename Folder")).toBeInTheDocument();
    expect(screen.getByText("Delete Folder")).toBeInTheDocument();
  });

  test("should call delete button", () => {
    render(
      <BrowserRouter>
        <MockProvider>
          <Folder folder={mockdata} />
        </MockProvider>
      </BrowserRouter>
    );
    const buttonele = screen.getByTestId("ellipsis");
    expect(buttonele).toBeInTheDocument();
    fireEvent.click(buttonele);
    const deletebtn = screen.getByText("Delete Folder");
    fireEvent.click(deletebtn);
  });

  test("popUp should be open when we click on rename button", () => {
    render(
      <BrowserRouter>
        <MockProvider>
          <Folder folder={mockdata} />
        </MockProvider>
      </BrowserRouter>
    );
    const buttonele = screen.getByTestId("ellipsis");
    expect(buttonele).toBeInTheDocument();
    fireEvent.click(buttonele);
    const rename = screen.getByText("Rename Folder");
    expect(rename).toBeInTheDocument();
    fireEvent.click(rename);
    expect(screen.getByText("Cancel")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Cancel"));
  });
  test("should call rename functionality when I click on rename button", () => {
    render(
      <BrowserRouter>
        <MockProvider>
          <Folder folder={mockdata} />
        </MockProvider>
      </BrowserRouter>
    );
    const buttonele = screen.getByTestId("ellipsis");
    expect(buttonele).toBeInTheDocument();
    fireEvent.click(buttonele);
    const rename = screen.getByText("Rename Folder");
    expect(rename).toBeInTheDocument();
    fireEvent.click(rename);
    expect(screen.getByText("rename")).toBeInTheDocument();
    fireEvent.click(screen.getByText("rename"));
  });
  test("should navigate to page when I click on the folders to see the files", () => {
    render(
      <BrowserRouter>
        <MockProvider>
          <Folder folder={mockdata} />
        </MockProvider>
      </BrowserRouter>
    );
    const navigate = screen.getByTestId("folder1");
    expect(navigate).toBeInTheDocument();
    fireEvent.click(navigate);
  });
});
