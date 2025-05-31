
import { Link } from "react-router-dom";
import logo from '/public/assets/Anturions.png';

export default function NavBar() {
  return (
    <>
      <header className="p-6 shadow-md bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo Anturions" className="h-8 w-8 mr-2" />
            <h1 className="text-2xl font-bold">Anturions</h1>
          </div>
          <nav className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/servicos" className="hover:underline">Serviços</Link>
            <Link to="/cursos" className="hover:underline">Cursos</Link>
            <Link to="/contato" className="hover:underline">Contato</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
