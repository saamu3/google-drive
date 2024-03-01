import { useContext } from "react";
import "../css-files/Content.css";
import Folder from "./Folder";
import { folderItemsContext } from "./Home";

export default function DriveContent({}) {
  const folder = useContext(folderItemsContext);
  return (
    <>
      <div className="content-container">
        <div className="folders-container">
          {folder.folderItems.map((val,index) => {
            return (
                <Folder key={index} val={val} />
            );
          })}
        </div>
      </div>
    </>
  );
}
