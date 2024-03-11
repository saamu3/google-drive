import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useParams } from "react-router-dom";
import fileData from "../StaticData/FilesData";
import { v4 as uuidv4 } from "uuid";
import "../css-files/FolderContent.css";

export type TFile = {
  file_id: number;
  folder_id: string;
  name: string;
};
export default function FolderContent() {
  const [fileItems, setFileItems] = useState<TFile[]>(
    JSON.parse(localStorage.getItem("fileItem") || "") || fileData
  );

  localStorage.setItem("fileItem", JSON.stringify(fileItems));

  const { id } = useParams<string>();

  function handleFileCreate(newName: string): void {
    setFileItems([
      ...fileItems,
      {
        file_id: fileItems.length + 1,
        folder_id: uuidv4(),
        name: newName,
      },
    ]);
  }
  return (
    <>
      <div>
        <button
          className="new-button-design"
          onClick={() => {
            handleFileCreate("soumy.txt");
          }}
        >
          +New
        </button>
      </div>
      <div className="content-container">
        <div className="folders-container">
          {fileItems.map((file) => {
            if (file.folder_id === id) {
              return (
                <div className="file-container">
                  <FontAwesomeIcon icon={faFile} className="file-icon" />
                  <h1 className="file-heading">{file.name}</h1>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </>
  );
}
