import "../css-files/SideBar.css";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import ModelPopup from "./ModelPopup";
import useTogglePopUp from "../CustomHook/useTogglePopUp";
import { FolderItemsContext } from "./Home";

export default function SideBar() {
  const [isPopUpOpen, togglePopUp] = useTogglePopUp();
  const { folderItems, setFolderItems } = useContext(FolderItemsContext);

  const handleCreate = (newName) => {
    setFolderItems([...folderItems, { id: uuidv4(), name: newName }]);
    togglePopUp(false);
  };

  return (
    <>
      <div className="left-side-bar">
        <div className="alignment">
          <img src="./logo.png" alt="logo" className="logo" />
          <p className="para-element">Drive</p>
        </div>

        <button className="New-button-design" onClick={() => togglePopUp(true)}>
          + New
        </button>

        {isPopUpOpen && (
          <ModelPopup
            handleButtonAction={handleCreate}
            header="create folder"
            buttonTitle="Create"
            handleClose={() => {
              togglePopUp(false);
            }}
          />
        )}
      </div>
    </>
  );
}
