import React from "react";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center gap-14 px-8 py-32 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-900 text-white overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-800 opacity-25 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-blue-900 opacity-20 rounded-full blur-3xl animate-pulse delay-1000 -z-10" />

      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
        alt="Anturios"
        className="w-full max-w-sm md:max-w-lg rounded-2xl shadow-2xl object-cover mb-10 md:mb-0 transform transition-transform duration-500 hover:scale-105 animate-fade-in"
        style={{ animationDelay: "0.2s", animationFillMode: "both" }}
      />
      <div className="max-w-xl text-center md:text-left animate-fade-in-up" style={{ animationDelay: "0.5s", animationFillMode: "both" }}>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-100 bg-clip-text text-transparent drop-shadow-lg">
          Bem-vindo à <span className="">Anturions</span>
        </h1>
        <p className="text-white mb-10 text-2xl md:text-2xl font-medium drop-shadow">
          Segurança digital com inovação, confiança e excelência.<br />
          <span className="text-blue-300">Proteja seu futuro conosco.</span>
        </p>
        <a
          href="/servicos"
          className="inline-block px-10 py-4 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-900 rounded-lg font-bold text-xl shadow-lg hover:scale-105 hover:from-blue-700 hover:to-blue-900 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Saiba mais
        </a>
      </div>
      {/* Keyframes for fade-in and fade-in-up */}
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
