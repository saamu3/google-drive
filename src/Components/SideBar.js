import "../css-files/SideBar.css";
import { useContext } from "react";
import {v4 as uuidv4} from 'uuid';
import { FolderDataContext } from "../Context/folderContext";
import { PopUpContext } from "../Context/popUpContext";
import ModelPopup from "./ModelPopup";
// import { folderItemsContext } from "./Home";
// import { popUpContext } from "./Home";
export default function SideBar() {
  // const folder = useContext(FolderDataContext);
  // const popUp = useContext(PopUpContext);
   const {folderItems,setFolderItems,isPopUpOpen,setIsPopUpOpen} = useContext(PopUpContext)

  const handleCreate = (newName) => {
    setFolderItems([
      ...folderItems,
      { id: uuidv4(), name: newName },
    ]);
    setIsPopUpOpen(null);
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
            setIsPopUpOpen("create");
          }}
        >
          + New
        </button>

        {isPopUpOpen == "create" && (
          <ModelPopup
            handleButtonAction={handleCreate}
            header="create folder"
            buttonTitle="Create"
          />
        )}
      </div>
    </>
  );
}
