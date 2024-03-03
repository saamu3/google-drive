import { useContext } from "react";
import "../css-files/ModelDropdown.css";
import { PopUpContext } from "../Context/popUpContext";
function ModelDropdown({
  folderId,
  setIsDropdownOpen,
  buttonTitle,
  handleDelete,
}) {
  const { folderItems, setFolderItems, isPopUpOpen, setIsPopUpOpen } =
    useContext(PopUpContext);
  return (
    <div className="drop1-container">
      <ul className="unordered-list-style">
        <li className="list-style">
          <button
            id={folderId}
            className="newfolder-style"
            onClick={() => {
              setIsPopUpOpen("rename");
              setIsDropdownOpen(false);
            }}
          >
            {buttonTitle[0]}
          </button>
        </li>
        <hr className="horizontal-line-style" />
        <li className="list1-style">
          <button
            onClick={() => {
              handleDelete(folderId);
              setIsDropdownOpen(false);
            }}
            className="newfolder-style"
          >
            {buttonTitle[1]}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ModelDropdown;
