import { useState } from "react";
import "../css-files/ModelPopup.css";
export default function ModelPopup({
  handleButtonAction,
  header,
  buttonTitle,
  folderId = null,
  name = null,
  handleClose,
}) {
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
              : handleButtonAction(folderName);
          }}
        >
          {buttonTitle}
        </button>
      </div>
    </div>
  );
}
