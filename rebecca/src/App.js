import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage";
import Contact from "./Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
