import { useContext, useState } from "react";
import "../css-files/ModelPopup.css";
import { popUpContext } from "./Home";
export default function ModelPopup({
  handleButtonAction,
  header,
  buttonTitle,
  folderId=null,
  name=null,
}) {
  const popUp = useContext(popUpContext);
  const [folderName, setFolderName] = useState("Untitled folder");
  return (
      <div class="folder-card">
        <h2>{header}</h2>
        <input
          className="folder-input"
          type="text"
          onChange={(event) => {
            setFolderName(event.target.value);
          }}
          defaultValue={popUp.isOpenUp == "rename" ? name : folderName}
        />
        <div className="folder-buttons-container">
          <button
            className="cancel-button"
            onClick={() => {
              popUp.setIsPopUpOpen(null);
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
