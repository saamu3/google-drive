import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faFolder,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

export default function Content({ folderItems, setIsDropdownActive, setIsPopupActive,handleShow }) {
  console.log("folder item are", folderItems);
  return (
    <>
      <div className="content-container">
        <h1 style={{ margin: "20px" }}>Home</h1>

        <div className="content-items">
          <p>Suggested</p>
          <div>
            <button className="files-button">
              <FontAwesomeIcon icon={faFile} /> Files
            </button>
            <button className="folder-button">
              <FontAwesomeIcon icon={faFolder} /> Folders
            </button>
          </div>
          <p style={{ fontSize: "40px", color: "grey" }}>|</p>
          <div>
            <select className="select-style">
              <option>Type</option>
            </select>
            <select className="select-style">
              <option>People</option>
            </select>
            <select className="select-style">
              <option>Modified</option>
            </select>
            <select className="select-style">
              <option>Location</option>
            </select>
          </div>
        </div>
        <div className="folders-container">
          {folderItems.map((val) => {
            return (
              <>
                <div className="folder-div">
                  <FontAwesomeIcon icon={faFolder} />
                  <h1>{val.name}</h1>
                  <FontAwesomeIcon
                    id={val.id}
                    onClick={() => {
                      setIsDropdownActive("rename");
                      setIsPopupActive(null);
                      handleShow(val.id,val.name)
                    }}
                    style={{ margingLeft: "30px", backgroundColor: "red" }}
                    icon={faEllipsisVertical}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
