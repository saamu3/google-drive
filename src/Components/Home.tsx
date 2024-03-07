import { createContext, useState } from "react";
import FolderData from "../StaticData/FolderData";
import "../css-files/Home.css";
import DriveContent from "./DriveContent";
import SideBar from "./SideBar";
import React from "react";
export type TFolderItems = {
  id: string;
  name: string;
};

export type TContext = {
  folderItems: TFolderItems[];
  setFolderItems: React.Dispatch<React.SetStateAction<TFolderItems[]>>;
};
export const FolderItemsContext = createContext<TContext>({} as TContext );
export default function Home() {
  const folders: TFolderItems[] =
    JSON.parse(localStorage.getItem("folderItems") || "") || FolderData;
  const [folderItems, setFolderItems] = useState<TFolderItems[]>(folders);
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
