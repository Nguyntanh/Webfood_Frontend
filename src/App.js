import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./components/HomePage";
import HomePage2 from "./components/HomePage2";
import Navbar from "./components/NavBar";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home2" element={<HomePage2 />} />
      </Routes>
    </BrowserRouter>
  );
}
