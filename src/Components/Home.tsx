import "../css-files/Home.css";
import DriveContent from "./DriveContent";
import ContextProvider from "../context/FolderItems";
import SideBar from "./SideBar";

export default function Home() {
  return (
    <ContextProvider>
      <div className="main-container">
        <SideBar />
        <div className="inner-container">
          <DriveContent />
        </div>
      </div>
    </ContextProvider>
  );
}
