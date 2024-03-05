import { createContext, useState } from "react";
import FolderData from "../StaticData/FolderData.tsx";
import "../css-files/Home.css";
import DriveContent from "./DriveContent.tsx";
import SideBar from "./SideBar.tsx";
import React from "react";

export type Items = {
  id: number;
  name: string;
}[];

export type contextType = {
  folderItems: Items | null;
  setFolderItems: React.Dispatch<React.SetStateAction<Items>>;
};

export const FolderItemsContext = createContext<contextType | null>(null);
export default function Home() {
  const folders:Items=
    JSON.parse(localStorage.getItem("folderItems") || "") || FolderData;
  const [folderItems, setFolderItems] = useState<Items>(folders);
  return (
    <FolderItemsContext.Provider value={{ folderItems, setFolderItems }}>
      <div className="main-container">
        <SideBar />
        <div className="inner-container">
          <DriveContent />
        </div>
      </div>
    </FolderItemsContext.Provider>
  );
}
// export {FolderItemsContext}
