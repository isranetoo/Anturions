export default function Cursos() {
  return (
    <section className="p-12 bg-gray-900 text-white min-h-screen">
      <h3 className="text-3xl font-semibold text-center mb-10">Catálogo de Cursos</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-gray-800 rounded-xl p-6 shadow-md">
          <h4 className="text-xl font-bold mb-2">Fundamentos de Cibersegurança</h4>
          <p className="text-gray-300 mb-4">Curso introdutório para iniciantes.</p>
          <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">Saiba mais</button>
        </div>
        <div className="bg-gray-800 rounded-xl p-6 shadow-md">
          <h4 className="text-xl font-bold mb-2">Pentest com Kali Linux</h4>
          <p className="text-gray-300 mb-4">Técnicas ofensivas em ambientes controlados.</p>
          <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">Saiba mais</button>
        </div>
        <div className="bg-gray-800 rounded-xl p-6 shadow-md">
          <h4 className="text-xl font-bold mb-2">Análise de Vulnerabilidades</h4>
          <p className="text-gray-300 mb-4">OpenVAS, Nessus e mapeamento de riscos.</p>
          <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">Saiba mais</button>
        </div>
      </div>
    </section>
  );
}
