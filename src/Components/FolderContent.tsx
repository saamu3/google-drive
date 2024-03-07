import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useParams } from "react-router-dom";
import fileData from "../StaticData/FilesData";
import FolderData from "../StaticData/FolderData";
import "../css-files/FolderContent.css";

export default function FolderContent() {
  const [fileItem, setFileItem] = useState(
    JSON.parse(localStorage.getItem("fileItem") || "") || fileData
  );

  localStorage.setItem("fileItem", JSON.stringify(fileItem));

  const { id } = useParams();

  function handleFileCreate(newName: string) {
    setFileItem([
      ...fileItem,
      {
        file_id: fileItem.length + 1,
        folder_id: FolderData.length + 1,
        name: newName,
      },
    ]);
  }
  return (
    <>
      <div>
        <button
          className="New-button-design"
          onClick={() => {
            handleFileCreate("soumy.txt");
          }}
        >
          +New
        </button>
      </div>
      <div className="content-container">
        <div className="folders-container">
          {fileItem.map((val:any) => {
            if (val.folder_id == id) {
              return (
                <div className="file-container">
                  <FontAwesomeIcon icon={faFile} className="file-icon" />
                  <h1 className="file-heading">{val.name}</h1>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
