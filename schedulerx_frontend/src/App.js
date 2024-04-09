import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Introduction from "./components/IntroductionPath/Introduction/Introduction";
import Home from "./components/HomePath/Home/Home";
import Login from "./components/LoginPath/Login/Login";

function App() {
  //<Route path="/" element={<Introduction />} />
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;
