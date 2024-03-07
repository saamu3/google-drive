import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import FolderContent from "./Components/FolderContent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/FolderContent/:id" element={<FolderContent />}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
