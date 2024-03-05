import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home.tsx";
import FolderContent from "./Components/FolderContent.tsx";
import React from 'react';

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
