import PopUpContextProvider from "../Context/popUpContext";
import "../css-files/Home.css";
import DriveContent from "./DriveContent";
import SideBar from "./SideBar";
export default function Home() {
  return (
    <>
      <PopUpContextProvider>
          <div className="main-container">
            <SideBar />
            <div className="inner-container">
              <DriveContent />
            </div>
          </div>
      </PopUpContextProvider>
    </>
  );
}

