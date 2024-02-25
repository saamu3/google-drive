import styles from "../css-files/style.css";
import Searchbar from "./searchbar";
import Sidebar from "./sidebar";
import Content from "./content";
import ModelDropdown from "./dropdown";
import Createfolder from "./createfolder";
import { useState,useEffect } from "react";
export default function Home() {
  const folders = JSON.parse(localStorage.getItem("folderItems"))||[
    {
      id: 1,
      name: "soumya",
    },
    {
      id: 2,
      name: "sakshi",
    },
  ];

  const [folderItems, setFolderItems] = useState(folders);
  const [folderId, setFolderId] = useState(null);
  const [isDropdownActive, setIsDropdownActive] = useState(null);
  const [isPopupActive, setIsPopupActive] = useState(null);
  const [name,setName] = useState(null)
  let length = folderItems.length;

  function handleCreate(newName) {
    setFolderItems([
      ...folderItems,
      { id: folderItems.length + 1, name: newName },
    ]);
    setIsPopupActive(null);

  }

  const handleShow = (id,name) => {
    setFolderId(id);
    setName(name)
  };

  const handleDelete = (val) => {
    const update = folderItems.filter((item) => item.id != val);
    setFolderItems(update);
  };


  const handleRename = (val, newName) => {
    const updatedList = folderItems.map((item) => {
      if (item.id == val)
        return {
          id: item.id,
          name: newName,
        };

      return item;
    });
   
    setFolderItems(updatedList);
  };


  
  useEffect(() => {
    localStorage.setItem("folderItems", JSON.stringify(folderItems));
  }, [handleCreate, handleRename, handleDelete]);

   
  return (
    <>
      <div className="mainContainer">
        <Sidebar
          setIsPopupActive={setIsPopupActive}
          setIsDropdownActive={setIsDropdownActive}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Searchbar />
          <Content
            folderItems={folderItems}
            setIsPopupActive={setIsPopupActive}
            setIsDropdownActive={setIsDropdownActive}
            handleShow={handleShow}
          />
          {isDropdownActive == "create" && (
            <ModelDropdown
              setIsDropdownActive={setIsDropdownActive}
              type="create"
              setIsPopupActive={setIsPopupActive}
              buttonName1="New Folder"
              buttonName2="New File"
            />
          )}

          {isDropdownActive == "rename" && (
            <ModelDropdown
              setIsDropdownActive={setIsDropdownActive}
              type="rename"
              folderId={folderId}
              handleDelete={handleDelete}
              setIsPopupActive={setIsPopupActive}
              buttonName1="Rename Folder"
              buttonName2="delete Folder"
            />
          )}


          {isPopupActive == "create" && (
            <Createfolder
              handleCreate={handleCreate}
              setIsPopupActive={setIsPopupActive}
              type="create"
              header="Create folder"
              button1="Create"
            />
          )}
          {isPopupActive == "rename" && (
            <Createfolder
              folderId={folderId}
              name={name}
              handleRename={handleRename}
              setIsPopupActive={setIsPopupActive}
              type="rename"
              header="Rename folder"
              button1="rename"
            />
          )}
        </div>
      </div>
    </>
  );
}
