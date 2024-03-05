import {
  faEllipsisVertical,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useTogglePopUp from "../CustomHook/useTogglePopUp.tsx";
import { FolderItemsContext, contextType } from "./Home.tsx";
import ModelDropdown from "./ModelDropdown.tsx";
import ModelPopup from "./ModelPopup.tsx";

interface folderType {
  id: number | null;
  name: String | null;
}

const Folder = ({ val }) => {
  const [isPopUpOpen, togglePopUp] = useTogglePopUp();

  const { folderItems, setFolderItems } =
    useContext<contextType>(FolderItemsContext);

  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [folderId, setFolderId] = useState<folderType>({
    id: null,
    name: null,
  });

  const handleRename = (val: number, newName: String) => {
    console.log("folder id and name", folderId.id, folderId.name);
    const updatedList = folderItems.map((item: folderType) => {
      if (item.id === val)
        return {
          id: item.id,
          name: newName,
        };
      return item;
    });

    console.log("updates lists", updatedList);
    setFolderItems(updatedList);
    togglePopUp(false);
  };

  const handleDelete = (val: number | null) => {
    const update = folderItems.filter((item: folderType) => item.id !== val);
    setFolderItems(update);
  };

  useEffect(() => {
    localStorage.setItem("folderItems", JSON.stringify(folderItems));
  }, [folderItems]);

  return (
    <div className="folder-div">
      <FontAwesomeIcon
        className="folder-icon"
        icon={faFolder}
        onClick={() => {
          navigate(`/folderContent/${val.id}`);
        }}
      />
      <h1>{val.name}</h1>
      <FontAwesomeIcon
        id={val.id}
        onClick={() => {
          setIsDropdownOpen(true);
          setFolderId({ id: val.id, name: val.name });
        }}
        className="ellipsis-icon"
        icon={faEllipsisVertical}
      />
      {isDropdownOpen && (
        <ModelDropdown
          handleRenameHandler={() => {
            togglePopUp(true);
            setIsDropdownOpen(false);
          }}
          handleDeleteHandler={() => {
            handleDelete(folderId.id);
            setIsDropdownOpen(false);
          }}
          buttonTitle={["Rename Folder", "Delete Folder"]}
        />
      )}

      {isPopUpOpen && (
        <ModelPopup
          handleButtonAction={handleRename}
          header="Rename Folder"
          buttonTitle="rename"
          folderId={folderId.id}
          name={folderId.name}
          handleClose={togglePopUp(false)}
        />
      )}
    </div>
  );
};
export default Folder;
