export default function Contato() {
  return (
    <section className="p-12 bg-gray-900 text-white min-h-screen">
      <h3 className="text-3xl font-semibold text-center mb-10">Entre em Contato</h3>
      <div className="max-w-2xl mx-auto">
        <form className="space-y-6">
          <input type="text" placeholder="Seu nome" className="w-full p-3 rounded bg-gray-800 placeholder-gray-400" />
          <input type="email" placeholder="Seu e-mail" className="w-full p-3 rounded bg-gray-800 placeholder-gray-400" />
          <textarea rows="5" placeholder="Sua mensagem" className="w-full p-3 rounded bg-gray-800 placeholder-gray-400"></textarea>
          <button className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700">Enviar</button>
        </form>
        <div className="mt-10 text-center text-gray-400">
          <p>Ou fale direto no WhatsApp:</p>
          <a href="https://wa.me/seunumero" target="_blank" className="text-blue-500 hover:underline">+55 (00) 91234-5678</a>
        </div>
      </div>
    </section>
  );
}
