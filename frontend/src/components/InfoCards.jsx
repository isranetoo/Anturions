import React from "react";

const cards = [
	{
		title: "Sobre a Plataforma",
		icon: (
			// Heroicon: GlobeAlt
			<svg
				className="w-10 h-10 mx-auto mb-4 text-green-400"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636M12 7a5 5 0 100 10 5 5 0 000-10z"
				/>
			</svg>
		),
		image:
			"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
		description: (
			<>
				Descubra uma plataforma inovadora dedicada ao cultivo e comercialização
				de antúrios.
				<br />
				<span className="text-green-300 font-semibold">
					Conecte-se
				</span>{" "}
				com produtores, especialistas e apaixonados pela planta.
			</>
		),
		extra: "Comunidade ativa • Atualizações semanais",
	},
	{
		title: "Serviços",
		icon: (
			// Heroicon: Support
			<svg
				className="w-10 h-10 mx-auto mb-4 text-blue-400"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M18.364 5.636a9 9 0 11-12.728 0m12.728 0A9 9 0 005.636 18.364m12.728-12.728L12 12m0 0l-6.364 6.364m6.364-6.364l6.364 6.364"
				/>
			</svg>
		),
		image:
			"https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
		description: (
			<>
				Consultoria especializada, suporte técnico e soluções personalizadas.
				<br />
				<span className="text-blue-300 font-semibold">
					Atendimento 24h
				</span>{" "}
				para produtores de todos os portes.
			</>
		),
		extra: "Chat ao vivo • Suporte remoto",
	},
	{
		title: "Cursos",
		icon: (
			// Heroicon: AcademicCap
			<svg
				className="w-10 h-10 mx-auto mb-4 text-yellow-400"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0H7m5 0h5"
				/>
			</svg>
		),
		image:
			"https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
		description: (
			<>
				Aprenda tudo sobre o cultivo de antúrios com nossos cursos online.
				<br />
				<span className="text-yellow-300 font-semibold">
					Especialistas renomados
				</span>{" "}
				e conteúdos exclusivos.
			</>
		),
		extra: "Certificados digitais • Aulas ao vivo",
	},
	{
		title: "Contato",
		icon: (
			// Heroicon: ChatBubbleLeftRight
			<svg
				className="w-10 h-10 mx-auto mb-4 text-pink-400"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M7.5 8.25h9m-9 3.75h6m-6 3.75h3m-6 0a2.25 2.25 0 01-2.25-2.25V6.75A2.25 2.25 0 016.75 4.5h10.5A2.25 2.25 0 0119.5 6.75v6.75a2.25 2.25 0 01-2.25 2.25h-6.75l-4.5 4.5V18z"
				/>
			</svg>
		),
		image:
			"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
		description: (
			<>
				Fale conosco para tirar dúvidas, solicitar orçamentos ou saber mais.
				<br />
				<span className="text-pink-300 font-semibold">
					Respostas rápidas
				</span>{" "}
				e atendimento personalizado.
			</>
		),
		extra: "WhatsApp • E-mail • Redes sociais",
	},
];

export default function InfoCards() {
	return (
		<section className="relative py-16 px-4 bg-gradient-to-br from-green-900 via-gray-900 to-black text-white overflow-hidden">
			<div className="absolute inset-0 pointer-events-none opacity-30">
				<img
					src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80"
					alt="Antúrios background"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
			</div>
			<div className="relative z-10 max-w-7xl mx-auto">
				<h3 className="text-4xl font-extrabold text-center mb-12 drop-shadow-lg">
					Bem-vindo à Plataforma dos Antúrios
				</h3>
				<p className="text-center text-lg text-gray-200 mb-14 max-w-2xl mx-auto">
					Tudo para quem cultiva, comercializa ou simplesmente ama antúrios.
					Conheça nossos diferenciais!
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
					{cards.map((card, idx) => (
						<div
							key={card.title}
							className={`bg-gray-800/90 rounded-2xl shadow-xl p-6 flex flex-col items-center text-center transform transition hover:-translate-y-2 hover:shadow-2xl animate-info-fade-in-up`}
							style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
						>
							<div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden shadow-lg border-4 border-green-700">
								<img
									src={card.image}
									alt={card.title}
									className="object-cover w-full h-full"
								/>
								<span className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gray-900 rounded-full p-2 shadow-lg">
									{card.icon}
								</span>
							</div>
							<h4 className="text-2xl font-bold mb-2 text-green-300">
								{card.title}
							</h4>
							<p className="text-gray-200 text-base mb-3">
								{card.description}
							</p>
							<div className="text-xs text-gray-400">{card.extra}</div>
						</div>
					))}
				</div>
				<div className="mt-16 flex flex-col items-center">
					<span className="inline-flex items-center px-4 py-2 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-900 rounded-full text-white font-semibold shadow-lg hover:bg-green-600 transition">
						<svg
							className="w-5 h-5 mr-2"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 4v16m8-8H4"
							/>
						</svg>
						Junte-se à nossa comunidade!
					</span>
					<span className="mt-2 text-sm text-green-200">
						Cadastre-se e receba novidades exclusivas.
					</span>
				</div>
			</div>
			<style>
				{`
          @keyframes info-fade-in-up {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-info-fade-in-up {
            animation: info-fade-in-up 1s cubic-bezier(.4,0,.2,1) both;
          }
        `}
			</style>
		</section>
	);
}
