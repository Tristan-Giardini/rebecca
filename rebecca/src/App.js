import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage";
import Contact from "./Contact";
import Header from "./Header";
import Collection from "./Collection";
import Collections from "./assets/collection-data";
import About from "./About";

function App() {
  return (
    <div className="wrapper" id="wrapper">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="collection/fossil-ephemeral"
            element={<Collection collections={Collections.FossilEphemeral} />}
          />
          <Route
            path="collection/commissions"
            element={<Collection collections={Collections.Commissions} />}
          />
          <Route
            path="collection/miscellaneous"
            element={<Collection collections={Collections.Miscellaneous} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
