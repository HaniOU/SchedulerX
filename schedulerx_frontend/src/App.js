import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/calendar" element={<Home/>}/>
      </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
