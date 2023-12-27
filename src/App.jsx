import "./app.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bootcamp from "./pages/bootcamp/Bootcamp";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Fullstack-MERN-Bootcamp" element={<Bootcamp />} />
      </Routes>

      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
