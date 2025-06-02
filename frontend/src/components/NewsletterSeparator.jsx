import React from "react";
import { FaEnvelopeOpenText, FaRegSmileBeam, FaLock } from "react-icons/fa";

export default function NewsletterSeparator() {
  return (
    <section className="relative overflow-hidden p-12 text-white bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 shadow-xl">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg width="100%" height="100%">
          <circle cx="80%" cy="20%" r="120" fill="#2563eb" />
          <circle cx="20%" cy="80%" r="80" fill="#1e293b" />
        </svg>
      </div>
      <div className="relative max-w-2xl mx-auto text-center z-10">
        <div className="flex flex-col items-center gap-2 mb-4">
          <FaEnvelopeOpenText className="text-4xl text-blue-300" />
          <h3 className="text-3xl font-extrabold tracking-tight mb-1">
            Assine nossa{" "}
            <span className="text-blue-300">Newsletter</span>
          </h3>
        </div>
        <p className="text-gray-200 mb-2 text-lg flex items-center justify-center gap-2">
          <FaRegSmileBeam className="text-yellow-300" />
          Fique por dentro das novidades, dicas exclusivas e promoções especiais!
        </p>
        <p className="text-gray-300 mb-8 text-sm flex items-center justify-center gap-2">
          <FaLock className="text-green-400" />
          Garantimos a privacidade do seu e-mail. Sem spam, só conteúdo de valor.
        </p>
        <form className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <input
            type="text"
            placeholder="Seu nome"
            className="flex-1 p-3 rounded-lg bg-gray-800 placeholder-gray-400 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            className="flex-1 p-3 rounded-lg bg-gray-800 placeholder-gray-400 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <button
            type="submit"
            className="bg-gradient-to-br from-gray-950 via-gray-900 to-blue-900 px-8 py-3 rounded-lg hover:from-blue-900 hover:to-blue-900 font-bold shadow-lg transition"
          >
            Quero Receber!
          </button>
        </form>
        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center items-center text-sm text-blue-200">
          <span>Conteúdo semanal</span>
          <span>Dicas exclusivas</span>
          <span>Cancelamento fácil</span>
        </div>
      </div>
    </section>
  );
}
