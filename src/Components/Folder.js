import {
  faEllipsisVertical,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModelDropdown from "./ModelDropdown";
import ModelPopup from "./ModelPopup";

import { folderItemsContext } from "./Home";
import { popUpContext } from "./Home";

export default function Folder({ val }) {
  const folder = useContext(folderItemsContext);
  const popUp = useContext(popUpContext);

  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [folderId, setFolderId] = useState({ id: null, name: null });


  const handleRename = (val, newName) => {
    console.log("folder id and name", newName, val);
    const updatedList = folder.folderItems.map((item) => {
      if (item.id == val)
        return {
          id: item.id,
          name: newName,
        };
      return item;
    });

    console.log("updates lists", updatedList);
    folder.setFolderItems(updatedList);
    popUp.setIsPopUpOpen(null);
  };

  const handleDelete = (val) => {
    const update = folder.folderItems.filter((item) => item.id != val);
    folder.setFolderItems(update);
  };

  useEffect(() => {
    localStorage.setItem("folderItems", JSON.stringify(folder.folderItems));
  }, [folder.folderItems]);

  //  console.log("folder id ",folderId)
  return (
    <div className="folder-div">
      <FontAwesomeIcon className="folder-icon" icon={faFolder} />
      <h1
        onClick={() => {
          navigate(`/folderContent/${val.id}`);
        }}
      >
        {val.name}
      </h1>
      <FontAwesomeIcon
        id={val.id}
        onClick={() => {
          setIsDropdownOpen(true);
          setFolderId({ id: val.id, name: val.name });
        }}
        style={{ margingLeft: "30px", backgroundColor: "red" }}
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

      {popUp.isPopUpOpen == "rename" && (
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
}
