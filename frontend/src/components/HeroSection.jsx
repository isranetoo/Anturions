import React from "react";
import { FaShieldAlt, FaLock, FaUserSecret, FaArrowRight } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center px-8 py-32 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-900 text-white overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-800 opacity-25 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-blue-900 opacity-20 rounded-full blur-3xl animate-pulse delay-1000 -z-10" />

      {/* Left: Main content */}
      <div className="flex-1 flex flex-col items-center md:items-end text-center md:text-right opacity-0 animate-fade-in-up [animation-delay:.3s] [animation-fill-mode:both] md:pr-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-100 bg-clip-text text-transparent drop-shadow-lg">
          Bem-vindo à <span className="text-blue-300">Anturions</span>
        </h1>
        <p className="text-white mb-6 text-2xl md:text-2xl font-medium drop-shadow">
          Segurança digital com inovação, confiança e excelência.<br />
          <span className="text-blue-300">Proteja seu futuro conosco.</span>
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
          <div className="flex items-center gap-2 bg-gray-800/70 px-4 py-2 rounded-lg shadow">
            <FaShieldAlt className="text-blue-400 text-2xl" />
            <span className="font-semibold">Proteção Avançada</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-800/70 px-4 py-2 rounded-lg shadow">
            <FaLock className="text-blue-400 text-2xl" />
            <span className="font-semibold">Privacidade Garantida</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-800/70 px-4 py-2 rounded-lg shadow">
            <FaUserSecret className="text-blue-400 text-2xl" />
            <span className="font-semibold">Consultoria Especializada</span>
          </div>
        </div>
        <a
          href="/servicos"
          className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-900 rounded-lg font-bold text-xl shadow-lg hover:scale-105 hover:from-blue-900 hover:to-blue-900 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Saiba mais <FaArrowRight className="ml-1" />
        </a>
      </div>

      {/* Right: Hero image with overlay cards */}
      <div className="flex-1 flex flex-col items-center relative opacity-0 animate-fade-in [animation-delay:.5s] [animation-fill-mode:both] md:pl-4">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            alt="Anturios"
            className="w-full max-w-sm md:max-w-lg rounded-2xl shadow-2xl object-cover mb-0"
          />
          {/* Overlay cards */}
          <div className="absolute -top-8 -left-8 bg-white/90 text-gray-900 rounded-xl shadow-lg px-6 py-4 flex items-center gap-3 backdrop-blur-md">
            <FaShieldAlt className="text-blue-700 text-2xl" />
            <div>
              <div className="font-bold">99.9% Segurança</div>
              <div className="text-xs">Proteção comprovada</div>
            </div>
          </div>
          <div className="absolute bottom-4 -right-8 bg-white/90 text-gray-900 rounded-xl shadow-lg px-6 py-4 flex items-center gap-3 backdrop-blur-md">
            <FaUserSecret className="text-blue-700 text-2xl" />
            <div>
              <div className="font-bold">+500 Clientes</div>
              <div className="text-xs">Satisfeitos e protegidos</div>
            </div>
          </div>
        </div>
        {/* Extra info below image */}
        <div className="mt-6 flex flex-col items-center gap-2">
          <span className="text-blue-200 font-semibold">Soluções para empresas e pessoas</span>
          <span className="text-gray-300 text-sm">Monitoramento 24/7 • Suporte dedicado • Auditoria de riscos</span>
        </div>
      </div>

      {/* Tailwind custom keyframes via arbitrary styles */}
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: scale(0.97);}
            to { opacity: 1; transform: scale(1);}
          }
          .animate-fade-in {
            animation: fade-in 1s cubic-bezier(.4,0,.2,1) both;
          }
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in-up {
            animation: fade-in-up 1.1s cubic-bezier(.4,0,.2,1) both;
          }
        `}
      </style>
    </section>
  );
}
