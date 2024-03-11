import {
  faEllipsisVertical as ellipsisIcon,
  faFolder as folderIcon,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useTogglePopUp from "../CustomHook/useTogglePopUp";
import { FolderItemsContext } from "./Home";
import ModelDropdown from "./ModelDropdown";
import ModelPopup from "./ModelPopup";

type TFolderId = {
  id: string;
  name: string;
};

const Folder = ({ folder }: { folder: TFolderId }) => {
  const [isPopUpOpen, togglePopUp] = useTogglePopUp();

  const { folderItems, setFolderItems } = useContext(FolderItemsContext);

  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [folderId, setFolderId] = useState<TFolderId>({ id: "", name: "" });

  const handleRename = (newName: string, id?: string): void => {
    const updatedList = folderItems.map((item) => {
      if (item.id === id)
        return {
          id: item.id,
          name: newName,
        };
      return item;
    });

    setFolderItems(updatedList);
    togglePopUp(true);
  };

  const handleDelete = (id: string): void => {
    const update = folderItems.filter((item) => item.id !== id);
    setFolderItems(update);
  };

  useEffect(() => {
    localStorage.setItem("folderItems", JSON.stringify(folderItems));
  }, [folderItems]);

  return (
    <div className="folder-div">
      <FontAwesomeIcon
        className="folder-icon"
        icon={folderIcon}
        onClick={() => {
          navigate(`/folderContent/${folder.id}`);
        }}
      />
      <h1>{folder.name}</h1>
      <FontAwesomeIcon
        id={folder.id}
        onClick={() => {
          setIsDropdownOpen(true);
          setFolderId({ id: folder.id, name: folder.name });
        }}
        className="ellipsis-icon"
        icon={ellipsisIcon}
      />
      {isDropdownOpen && (
        <ModelDropdown
          handleRenameHandler={() => {
            togglePopUp(false);
            setIsDropdownOpen(false);
          }}
          handleDeleteHandler={() => {
            folderId && handleDelete(folderId.id);
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
          handleClose={() => togglePopUp(true)}
        />
      )}
    </div>
  );
};
export default Folder;
