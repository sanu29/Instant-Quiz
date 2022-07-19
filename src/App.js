import MockmanEs from "mockman-js";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/Homepage";

function App() {
  
    return (
      <div>
    
            <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/mock" element={<MockmanEs/>}/>
            </Routes>
  
      </div>
    );
  }
  

export default App;
