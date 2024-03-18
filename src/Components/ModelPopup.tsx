import { useState } from "react";
import "../css-files/ModelPopup.css";

type TModelPopProp = {
  handleButtonAction: (newName: string, folderId?: string) => void;
  header: string;
  buttonTitle: string;
  folderId?: string;
  name?: string;
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
        <button
          className="cancel-button"
          data-testid="Cancel"
          onClick={handleClose}
        >
          Cancel
        </button>
        <button
          className="create-button"
          data-testid="rename"
          onClick={() => {
            folderId
              ? handleButtonAction(folderName, folderId)
              : handleButtonAction(folderName, folderId);
          }}
        >
          {buttonTitle}
        </button>
      </div>
    </div>
  );
}
