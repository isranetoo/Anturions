import React from "react";
import {
  FaShieldAlt,
  FaUserSecret,
  FaChalkboardTeacher,
  FaRegLightbulb,
} from "react-icons/fa";

export default function StrategySection() {
  return (
    <section className="relative p-12 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-900 text-white min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-800 opacity-20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-blue-900 opacity-15 rounded-full blur-3xl -z-10" />

      {/* Image */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=500&q=80"
          alt="Estratégia em Segurança"
          className="rounded-2xl shadow-2xl w-full max-w-md object-cover border-4 border-blue-800"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
          Estratégia, Defesa e Inteligência Cibernética
        </h2>
        <p className="text-gray-200 text-lg mb-8 max-w-xl">
          Na{" "}
          <span className="font-bold text-blue-300">Anturions</span>, protegemos o
          seu negócio com soluções inovadoras e personalizadas em segurança
          digital. Nossa equipe une experiência, tecnologia de ponta e visão
          estratégica para garantir a tranquilidade e o crescimento da sua
          empresa.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-lg mb-8">
          <div className="flex items-center gap-4 bg-gray-800/80 rounded-lg p-4 shadow">
            <FaShieldAlt className="text-blue-400 text-3xl" />
            <div>
              <span className="font-semibold text-lg">Defesa Proativa</span>
              <p className="text-gray-300 text-sm">
                Monitoramento contínuo e respostas rápidas a ameaças.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-gray-800/80 rounded-lg p-4 shadow">
            <FaUserSecret className="text-blue-400 text-3xl" />
            <div>
              <span className="font-semibold text-lg">
                Consultoria Especializada
              </span>
              <p className="text-gray-300 text-sm">
                Planos sob medida para sua realidade e segmento.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-gray-800/80 rounded-lg p-4 shadow">
            <FaChalkboardTeacher className="text-blue-400 text-3xl" />
            <div>
              <span className="font-semibold text-lg">
                Capacitação Profissional
              </span>
              <p className="text-gray-300 text-sm">
                Treinamentos e cursos para sua equipe evoluir.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-gray-800/80 rounded-lg p-4 shadow">
            <FaRegLightbulb className="text-blue-400 text-3xl" />
            <div>
              <span className="font-semibold text-lg">Inovação em Segurança</span>
              <p className="text-gray-300 text-sm">
                Soluções modernas para desafios atuais e futuros.
              </p>
            </div>
          </div>
        </div>
        <a
          href="/contato"
          className="inline-block px-8 py-3 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-900 rounded-lg font-bold text-lg shadow-lg hover:bg-blue-700 transition-colors"
        >
          Fale com nossos especialistas
        </a>
      </div>
    </section>
  );
}
