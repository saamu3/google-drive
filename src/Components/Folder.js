import {
  faEllipsisVertical,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModelDropdown from "./ModelDropdown";
import ModelPopup from "./ModelPopup";

import { folderItemsContext } from "./Home";
import { popUpContext } from "./Home";

export default function Folder({ val}) {
  const folder = useContext(folderItemsContext)
  const popUp = useContext(popUpContext)
  

  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [folderId, setFolderId] = useState(null);
  const [name, setName] = useState(null);

  const handleShow = (id, name) => {
    setFolderId(null)
    setFolderId(id);
    setName(name);
  };
  console.log("folder id is",folderId)

  const handleRename = (val, newName) => {
     console.log("folder id and name",val,newName)
    const updatedList = folder.folderItems.map((item) => {
      if (item.id == val)
        return {
          id: item.id,
          name: newName,
        };
      return item;
    });
  //  console.log("updates lists",updatedList)

     
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
          handleShow(val.id, val.name);
        }}
        style={{ margingLeft: "30px", backgroundColor: "red" }}
        icon={faEllipsisVertical}
      />
      {isDropdownOpen && (
        <ModelDropdown
          folderId={folderId}
          setIsDropdownOpen={setIsDropdownOpen}
          buttonTitle={["Rename Folder", "Delete Folder"]}
          handleDelete={handleDelete}
        />
      )}

      {popUp.isPopUpOpen =="rename" && ( 
        <ModelPopup
          handleButtonAction={handleRename}
          header="Rename Folder"
          buttonTitle="rename"
          folderId={folderId}
          name={name}
        />
      )}
    </div>
  );
}
