import { createContext, useState } from "react";
import "../css-files/Home.css";
import FolderData from "../StaticData/FolderData";
import SideBar from "./SideBar";
import DriveContent from "./DriveContent";
import { useRef } from "react";
import PopUpContextProvider from "../Context/popUpContext";
// const folderItemsContext = createContext();
// const popUpContext = createContext();

export default function Home() {
  // const folders = JSON.parse(localStorage.getItem("folderItems")) || FolderData;
  // const [folderItems, setFolderItems] = useState(folders);
  //  const [isPopUpOpen, setIsPopUpOpen] = useState({action:null,foldf:null,name:null});

  return (
    <>
      <PopUpContextProvider>
      {/* <folderItemsContext.Provider value={{ folderItems, setFolderItems }}>
        <popUpContext.Provider value={{ isPopUpOpen, setIsPopUpOpen }}> */}
          <div className="main-container">
            <SideBar />
            <div className="inner-container">
              <DriveContent />
            </div>
          </div>
        {/* </popUpContext.Provider>
      </folderItemsContext.Provider> */}
      </PopUpContextProvider>
    </>
  );
}
// export { folderItemsContext, popUpContext };
