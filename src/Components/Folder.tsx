import {
  faEllipsisVertical,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useTogglePopUp from "../CustomHook/useTogglePopUp";
import { FolderItemsContext } from "./Home";
import ModelDropdown from "./ModelDropdown";
import ModelPopup from "./ModelPopup";

type TfolderId = {
  id: string;
  name: string;
};

const Folder = ({val}:{val:TfolderId}) => {
  const [isPopUpOpen, togglePopUp ] = useTogglePopUp();

  const { folderItems, setFolderItems } = useContext(FolderItemsContext);

  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [folderId, setFolderId] = useState<TfolderId>({} as TfolderId);

  const handleRename = (val: string, newName: string) => {
    const updatedList = folderItems.map((item) => {
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

  const handleDelete = (val: string) => {
    const update = folderItems.filter((item) => item.id != val);
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
          handleClose={() => togglePopUp(false)}
        />
      )}
    </div>
  );
};
export default Folder;
