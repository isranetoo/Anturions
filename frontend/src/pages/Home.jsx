import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="p-12 text-center text-white bg-gray-950 min-h-screen">
        <h2 className="text-4xl font-bold mb-4">
          Estratégia, defesa e inteligência cibernética
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Bem-vindo à Anturions — sua aliada em segurança digital. Oferecemos
          pentests, consultorias estratégicas e uma plataforma completa para
          capacitação de profissionais em cibersegurança.
        </p>
      </section>
    </>
  );
}
