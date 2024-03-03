import { Children, createContext } from "react";
import { useState } from "react";
import FolderData from "../StaticData/FolderData";
import Home from "../Components/Home";
export const PopUpContext = createContext(null);
export default function PopUpContextProvider({children}) {
  const folders = JSON.parse(localStorage.getItem("folderItems")) || FolderData;
  const [folderItems, setFolderItems] = useState(folders);
  const [isPopUpOpen, setIsPopUpOpen] = useState(null);
  return (
    <PopUpContext.Provider value={{isPopUpOpen, setIsPopUpOpen,folderItems,setFolderItems}}>
      {children}
    </PopUpContext.Provider>
  );
}
