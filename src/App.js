import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Character from "./pages/Character";
import Locations from "./pages/Locations";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="locations/" element={<Locations />} />
        <Route path="/character/:id" element={<Character />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
