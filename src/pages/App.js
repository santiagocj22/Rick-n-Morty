import "./App.css";
import Home from "../components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Character from "../components/Character";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<Character />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
