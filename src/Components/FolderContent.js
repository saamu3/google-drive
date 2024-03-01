import { useState } from "react";

import "../css-files/FolderContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import fileData from "../StaticData/FilesData";
import FolderData from "../StaticData/FolderData";
import { useParams } from "react-router-dom";

export default function FolderContent() {
  const [fileItem, setFileItem] = useState(
    JSON.parse(localStorage.getItem("fileItem")) || fileData
  );

  localStorage.setItem("fileItem", JSON.stringify(fileItem));

  const { id } = useParams();

  function handleFileCreate(newName) {
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
          {fileItem.map((val) => {
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
