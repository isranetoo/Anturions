import {
  FaShieldAlt,
  FaUserSecret,
  FaChalkboardTeacher,
  FaRegLightbulb,
  FaLock,
  FaBug,
  FaLaptopCode,
  FaNetworkWired,
} from "react-icons/fa";
import React from "react";

const products = [
  {
    icon: <FaShieldAlt className="text-blue-400 text-4xl mb-3" />,
    title: "Pentest Profissional",
    image:
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=400&q=80",
    description:
      "Identificamos vulnerabilidades em seus sistemas com testes de invasão avançados, garantindo máxima proteção para sua empresa.",
  },
  {
    icon: <FaUserSecret className="text-purple-400 text-4xl mb-3" />,
    title: "Consultoria de Segurança",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    description:
      "Orientação estratégica para fortalecer a segurança digital do seu negócio, com planos personalizados e acompanhamento contínuo.",
  },
  {
    icon: <FaChalkboardTeacher className="text-green-400 text-4xl mb-3" />,
    title: "Cursos em Cibersegurança",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80",
    description:
      "Capacite sua equipe com treinamentos práticos e atualizados sobre as principais ameaças e defesas em cibersegurança.",
  },
  {
    icon: <FaRegLightbulb className="text-yellow-400 text-4xl mb-3" />,
    title: "Planejamento de Segurança",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    description:
      "Desenvolvemos estratégias robustas para proteger seus dados e ativos digitais, alinhando tecnologia e processos.",
  },
  {
    icon: <FaLock className="text-pink-400 text-4xl mb-3" />,
    title: "Gestão de Identidades",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    description:
      "Controle de acessos e identidades para garantir que apenas pessoas autorizadas tenham acesso às informações críticas.",
  },
  {
    icon: <FaBug className="text-red-400 text-4xl mb-3" />,
    title: "Bug Bounty & Monitoramento",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    description:
      "Programa de recompensa por bugs e monitoramento contínuo para identificar e corrigir falhas rapidamente.",
  },
  {
    icon: <FaLaptopCode className="text-indigo-400 text-4xl mb-3" />,
    title: "Desenvolvimento Seguro",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    description:
      "Implementação de práticas seguras no desenvolvimento de software, reduzindo riscos desde o início do projeto.",
  },
  {
    icon: <FaNetworkWired className="text-teal-400 text-4xl mb-3" />,
    title: "Infraestrutura Segura",
    image:
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",
    description:
      "Projetamos e auditamos redes e servidores para garantir resiliência e proteção contra ataques.",
  },
];

export default function ProductList() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-4 text-center animate-fade-in-up [animation-delay:.1s]">
          Nossos Serviços em Destaque
        </h2>
        <p className="text-lg text-gray-300 mb-12 text-center max-w-2xl mx-auto animate-fade-in-up [animation-delay:.2s]">
          Soluções completas para proteger sua empresa no mundo digital. Conheça nossos serviços e descubra como podemos elevar a segurança do seu negócio!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <div
              key={product.title}
              className={`bg-gray-800 rounded-2xl shadow-lg flex flex-col items-center p-6 transition-transform hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up`}
              style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
            >
              <div className="w-24 h-24 mb-4 rounded-xl overflow-hidden shadow-lg border-4 border-gray-700">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              {product.icon}
              <h3 className="text-xl font-bold mb-2 text-center">{product.title}</h3>
              <p className="text-gray-300 text-center text-sm">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in-up {
            animation: fade-in-up 1s cubic-bezier(.4,0,.2,1) both;
          }
        `}
      </style>
    </section>
  );
}
