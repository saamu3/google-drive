import { useContext, useState } from "react";
import "../css-files/ModelPopup.css";
import { popUpContext } from "./Home";
export default function ModelPopup({
  handleButtonAction,
  header,
  buttonTitle,
  folderId,
  name,
}) {
  // console.log("folder id is",folderId)
  const popUp = useContext(popUpContext);
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
              // console.log("folder id is",folderId)
              folderId
                ? handleButtonAction(folderId, folderName)
                : handleButtonAction(folderName);
            }}
          >
            {buttonTitle}
          </button>
        </div>
      </div>
    </>
  );
}
