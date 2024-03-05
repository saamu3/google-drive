import { useContext } from "react";
import React from "react";
import "../css-files/Content.css";
import Folder from "./Folder.tsx";
import { FolderItemsContext, contextType } from "./Home.tsx";
export default function DriveContent() {
  const { folderItems } = useContext<contextType | null>(FolderItemsContext);
  return (
    <div className="content-container">
      {folderItems.map((val) => {
        console.log("id", val.id);
        return <Folder key={val.id} val={val} />;
      })}
    </div>
  );
}
