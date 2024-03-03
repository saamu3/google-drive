import { useContext, useState } from "react";
import "../css-files/ModelPopup.css";
import { PopUpContext } from "../Context/popUpContext";

export default function ModelPopup({
  handleButtonAction,
  header,
  buttonTitle,
  folderId = null,
  name = null,
}) {
  const { folderItems, setFolderItems, isPopUpOpen, setIsPopUpOpen } =
    useContext(PopUpContext);
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
          onClick={() => {
            setIsPopUpOpen(null);
          }}
        >
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
