import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage";
import Contact from "./Contact";
import Header from "./Header";
import Collection from "./Collection";
import Collections from "./assets/collection-data";
import About from "./About";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="wrapper" id="wrapper">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="collection/fossil-ephemeral"
            element={
              <Collection
                collections={Collections.fossilEphemeral}
                exhibitionText={Collections.feExhibitionText}
              />
            }
          />
          <Route
            path="collection/commissions"
            element={<Collection collections={Collections.commissions} />}
          />
          <Route
            path="collection/miscellaneous"
            element={<Collection collections={Collections.miscellaneous} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
