import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Allbeers from "./Pages/AllBeers";
import BeerDetails from "./Pages/BeerDetails";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allbeers" element={<Allbeers />} />
          <Route path="/allbeers/:id" element={<BeerDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
