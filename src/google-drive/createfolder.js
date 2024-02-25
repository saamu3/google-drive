import { useState } from "react";
export default function Createfolder({
  type,
  handleRename,
  handleCreate,
  setIsPopupActive,
  header,
  button1,
  folderId,
  name,
}) {
  const [folderName, setFolderName] = useState("Untitled folder");
  return (
    <>
      <div class="folder-card">
        <h2>{header}</h2>
        <br />
        <input
          className="folder-input"
          type="text"
          onChange={(event) => {
            setFolderName(event.target.value);
          }}
          defaultValue={type == "create" ? folderName : name}
        />
        <div className="folder-buttons-container">
          <button
            className="cancel-button"
            onClick={() => setIsPopupActive(null)}
          >
            Cancel
          </button>
          <button
            className="create-button"
            onClick={() => {
              if (type == "create") {
                handleCreate(folderName);
              }
              if (type == "rename") {
                handleRename(folderId, folderName);
              }
            }}
          >
            {button1}
          </button>
        </div>
      </div>
    </>
  );
}
