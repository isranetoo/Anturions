export default function Servicos() {
  return (
    <section className="p-12 bg-gray-900 text-white min-h-screen">
      <h3 className="text-3xl font-semibold text-center mb-10">Nossos Serviços</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-gray-800 rounded-xl p-6 shadow-md">
          <h4 className="text-xl font-bold mb-2">Pentest Profissional</h4>
          <p className="text-gray-300">Identifique vulnerabilidades críticas antes que os invasores o façam.</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-6 shadow-md">
          <h4 className="text-xl font-bold mb-2">Consultoria em Segurança</h4>
          <p className="text-gray-300">Políticas de segurança, LGPD, ISO 27001, resposta a incidentes.</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-6 shadow-md">
          <h4 className="text-xl font-bold mb-2">Hardening de Sistemas</h4>
          <p className="text-gray-300">Configuração segura de servidores e ativos corporativos.</p>
        </div>
      </div>
    </section>
  );
}
