import { createContext,useState } from "react";
import FolderData from "../StaticData/FolderData";
import "../css-files/Home.css";
import DriveContent from "./DriveContent";
import SideBar from "./SideBar";

const FolderItemsContext = createContext()
export default function Home() {
  const folders = JSON.parse(localStorage.getItem("folderItems")) || FolderData;
  const [folderItems, setFolderItems] = useState(folders);
  return (
    <>
      <FolderItemsContext.Provider value={{folderItems, setFolderItems}}>
          <div className="main-container">
            <SideBar />
            <div className="inner-container">
              <DriveContent />
            </div>
          </div>
      </FolderItemsContext.Provider>
    </>
  );
}
export {FolderItemsContext}

