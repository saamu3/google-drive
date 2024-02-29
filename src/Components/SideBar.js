import "../css-files/SideBar.css";
import { useContext, useState } from "react";

import ModelPopup from "./ModelPopup";
import { folderItemsContext } from "./Home";
import { popUpContext } from "./Home";
export default function SideBar() {
  const folder = useContext(folderItemsContext)
  const popUp = useContext(popUpContext)

  const handleCreate = (newName) => {
    folder.setFolderItems([
      ...folder.folderItems,
      { id: folder.folderItems.length + 1, name: newName },
    ]);
    popUp.setIsPopUpOpen(null);
  };

  return (
    <>
      <div className="left-side-bar">
        <div className="alignment">
          <img src="./logo.png" alt="logo" className="logo" />
          <p className="para-element">Drive</p>
        </div>

        <button
          className="New-button-design"
          onClick={() => {
            popUp.setIsPopUpOpen("create");
          }}
        >
          + New
        </button>

        {popUp.isPopUpOpen == "create" && (
          <ModelPopup
            handleButtonAction={handleCreate}//handleAction
            header="create folder"
            buttonTitle="Create"//buttonTitle
            folderId={null}
            name={null}
          />
        )}
      </div>
    </>
  );
}
