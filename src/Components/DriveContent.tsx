import { useContext } from "react";
import "../css-files/Content.css";
import Folder from "./Folder";
import { FolderItemsContext, TContext} from "./Home";
export default function DriveContent() {
  const { folderItems } = useContext<TContext>(FolderItemsContext);
  return (
    <div className="content-container">
      {folderItems.map((val, index) => {
        return <Folder key={index} val={val} />;
      })}
    </div>
  );
}