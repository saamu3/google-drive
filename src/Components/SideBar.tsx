import "../css-files/SideBar.css";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import ModelPopup from "./ModelPopup";
import useTogglePopUp from "../CustomHook/useTogglePopUp";
import { FolderItemsContext } from "../context/FolderItems";

export default function SideBar() {
  const [isPopUpOpen, togglePopUp] = useTogglePopUp();
  const { folderItems, setFolderItems } = useContext(FolderItemsContext);

  const handleCreate = (newName: string, id?: string): void => {
    setFolderItems([...folderItems, { id: uuidv4(), name: newName }]);
    togglePopUp(true);
  };

  return (
    <>
      <div className="left-side-bar">
        <div className="alignment">
          <img src="./logo.png" alt="logo" className="logo" />
          <p className="para-element">Drive</p>
        </div>

        <button
          className="new-button-design"
          onClick={() => togglePopUp(false)}
        >
          + New
        </button>

        {isPopUpOpen && (
          <ModelPopup
            handleButtonAction={handleCreate}
            header="create folder"
            buttonTitle="Create"
            handleClose={() => {
              togglePopUp(true);
            }}
          />
        )}
      </div>
    </>
  );
}
