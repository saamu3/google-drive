import { render, screen, fireEvent } from "@testing-library/react";
import { FolderItemsContext } from "../context/FolderItems";
import SideBar from "./SideBar";
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

describe("SideBar", () => {
  test("Should call new button successfully", () => {
    render(
      <MockProvider>
        <SideBar />
      </MockProvider>
    );
    const button = screen.getByText("+ New");
    fireEvent.click(button);
    const cancel = screen.getByText("Cancel");
    fireEvent.click(cancel);
  });

  test("check is create is present", () => {
    render(
      <MockProvider>
        <SideBar />
      </MockProvider>
    );
    const button = screen.getByText("+ New");
    fireEvent.click(button);
    const create = screen.getByText("Create");
    fireEvent.click(create);
  });
});
