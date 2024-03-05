import "../css-files/ModelDropdown.css";
import React from "react";
function ModelDropdown({
  handleRenameHandler,
  handleDeleteHandler,
  buttonTitle,
}) {
  return (
    <div className="drop1-container">
      <ul className="unordered-list-style">
        <li className="list-style">
          <button className="newfolder-style" onClick={handleRenameHandler}>
            {buttonTitle[0]}
          </button>
        </li>
        <hr className="horizontal-line-style" />
        <li className="list1-style">
          <button onClick={handleDeleteHandler} className="newfolder-style">
            {buttonTitle[1]}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ModelDropdown;
