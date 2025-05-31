import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Servicos from "./pages/Servicos";
import Cursos from "./pages/Cursos";
import Contato from "./pages/Contato";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
