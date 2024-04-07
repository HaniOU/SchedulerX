import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduction from "./components/IntroductionPath/Introduction/Introduction";
import  Home  from "./components/HomePath/Home/Home";
import { useState } from "react";
import Login from "./components/LoginPath/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Introduction/>} /> 
          <Route path="/login" element={<Login />}/>
          <Route path="/calendar" element={<Home />}/>
      </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
