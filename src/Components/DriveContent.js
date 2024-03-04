import { useContext } from "react";
import "../css-files/Content.css";
import Folder from "./Folder";
import { FolderItemsContext } from "./Home";
export default function DriveContent() {
  const { folderItems } = useContext(FolderItemsContext);
  return (
    <>
      <div className="content-container">
        {folderItems.map((val) => {
          console.log("id", val.id);
          return <Folder key={val.id} val={val} />;
        })}
      </div>
    </>
  );
}
