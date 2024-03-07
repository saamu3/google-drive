import { useState } from "react";
import "../css-files/ModelPopup.css";

type TModelPopProp = {
  handleButtonAction: (folderId: string, newName: string) => void;
  header: string;
  buttonTitle: string;
  folderId: string;
  name: string;
  handleClose: () => void;
};
export default function ModelPopup({
  handleButtonAction,
  header,
  buttonTitle,
  folderId,
  name,
  handleClose,
}: TModelPopProp) {
  console.log("folder id", folderId);
  const [folderName, setFolderName] = useState("Untitled folder");
  return (
    <div className="folder-card">
      <h2>{header}</h2>
      <input
        className="folder-input"
        type="text"
        onChange={(event) => {
          setFolderName(event.target.value);
        }}
        defaultValue={folderId ? name : folderName}
      />
      <div className="folder-buttons-container">
        <button className="cancel-button" onClick={handleClose}>
          Cancel
        </button>

        <button
          className="create-button"
          onClick={() => {
            folderId
              ? handleButtonAction(folderId, folderName)
              : handleButtonAction(folderName, folderId);
          }}
        >
          {buttonTitle}
        </button>
      </div>
    </div>
  );
}
