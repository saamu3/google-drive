import { useContext } from "react";
import "../css-files/Content.css";
import Folder from "./Folder";
import { PopUpContext } from "../Context/popUpContext";
export default function DriveContent() {
  const { folderItems, setFolderItems, isPopUpOpen, setIsPopUpOpen } =
    useContext(PopUpContext);
  return (
    <>
      <div className="content-container">
        {folderItems.map((val, index) => {
          return <Folder key={index} val={val} />;
        })}
      </div>
    </>
  );
}
