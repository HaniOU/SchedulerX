import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Introduction from "./components/Introduction/Introduction";
import { Home } from "./components/Home/Home";
import { useState } from "react";

function App() {
  const[isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Introduction/>} /> 
          <Route path="/login" element={<Login verifyAuthentification = {() => setIsAuthenticated(true)}/>}/>
          <Route path="/calendar" element={<Home isAuthenticated={isAuthenticated}/>}/>
      </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
