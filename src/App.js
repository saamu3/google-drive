import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./google-drive/home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            
            
          </Routes>
           
        </BrowserRouter>
       
      </header>
    </div>
  );
}

export default App;
