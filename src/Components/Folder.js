import {
  faEllipsisVertical,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModelDropdown from "./ModelDropdown";
import ModelPopup from "./ModelPopup";
import { PopUpContext } from "../Context/popUpContext";

const Folder = ({ val }) => {
  const { folderItems, setFolderItems, isPopUpOpen, setIsPopUpOpen } =
    useContext(PopUpContext);

  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [folderId, setFolderId] = useState({ id: val.id, name: val.name });

  const handleRename = (val, newName) => {
    console.log("folder id and name", folderId.id, folderId.name);
    const updatedList = folderItems.map((item) => {
      if (item.id == val)
        return {
          id: item.id,
          name: newName,
        };
      return item;
    });

    console.log("updates lists", updatedList);
    setFolderItems(updatedList);
    setIsPopUpOpen(null);
  };

  const handleDelete = (val) => {
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
          folderId={folderId.id}
          setIsDropdownOpen={setIsDropdownOpen}
          buttonTitle={["Rename Folder", "Delete Folder"]}
          handleDelete={handleDelete}
        />
      )}

      {isPopUpOpen == "rename" && (
        <ModelPopup
          handleButtonAction={handleRename}
          header="Rename Folder"
          buttonTitle="rename"
          folderId={folderId.id}
          name={folderId.name}
        />
      )}
    </div>
  );
};
export default Folder;
