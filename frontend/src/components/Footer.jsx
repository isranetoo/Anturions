import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaRegClock, FaWhatsapp, FaShieldAlt } from 'react-icons/fa';
import logo from '/public/assets/Anturions.png';

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-12 mt-auto shadow-2xl relative animate-footer-fade-in">
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <svg width="100%" height="100%">
          <circle cx="90%" cy="10%" r="120" fill="#2563eb" />
          <circle cx="10%" cy="90%" r="80" fill="#1e293b" />
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="mb-8 md:mb-0 text-center md:text-left flex flex-col items-center md:items-start">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <img src={logo} alt="Logo Anturions" className="h-10 w-10 mr-3 rounded-lg shadow-lg bg-white p-1" />
              <h3 className="text-2xl font-extrabold tracking-wide">Anturions</h3>
            </div>
            <p className="mb-2 text-blue-200">Seu parceiro de investimentos</p>
            <div className="flex items-center gap-2 text-sm text-blue-300 mt-2">
              <FaShieldAlt className="text-green-400" />
              <span>Segurança garantida</span>
            </div>
            <p className="text-xs text-gray-400 mt-4">CNPJ: 12.345.678/0001-90</p>
          </div>

          {/* Contact Info */}
          <div className="mb-8 md:mb-0 text-center md:text-left flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <FaEnvelope className="text-blue-300" /> Contato
            </h3>
            <div className="flex flex-col gap-2 text-blue-100">
              <div className="flex items-center gap-2">
                <FaEnvelope />
                <a href="mailto:contato@anturions.com" className="hover:text-blue-300 break-all">contato@anturions.com</a>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone />
                <a href="tel:+551140028922" className="hover:text-blue-300">(11) 4002-8922</a>
              </div>
              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-green-400" />
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">(11) 99999-9999</a>
              </div>
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1" />
                <span>
                  Av. Paulista, 1000, São Paulo - SP<br />CEP: 01310-100
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaRegClock />
                <span>Seg a Sex: 8h - 18h</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="mb-8 md:mb-0 text-center md:text-left flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <FaLinkedin className="text-blue-300" /> Redes Sociais
            </h3>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <FaFacebook size={26} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <FaTwitter size={26} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
                <FaInstagram size={26} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <FaLinkedin size={26} />
              </a>
            </div>
            <span className="text-xs text-blue-200">Siga-nos e fique por dentro das novidades!</span>
          </div>

          {/* Extra Info */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <FaShieldAlt className="text-green-400" /> Por que escolher a Anturions?
            </h3>
            <ul className="text-blue-100 text-sm space-y-2">
              <li className="flex items-center gap-2"><FaShieldAlt className="text-green-400" /> Proteção de dados</li>
              <li className="flex items-center gap-2"><FaRegClock className="text-blue-300" /> Suporte rápido</li>
              <li className="flex items-center gap-2"><FaPhone className="text-blue-300" /> Atendimento humanizado</li>
              <li className="flex items-center gap-2"><FaEnvelope className="text-blue-300" /> Conteúdo exclusivo</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-10 pt-6 text-center text-sm text-blue-200">
          <p>&copy; {new Date().getFullYear()} Anturions. Todos os direitos reservados.</p>
        </div>
      </div>
      <style>
        {`
          @keyframes footer-fade-in {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-footer-fade-in {
            animation: footer-fade-in 1.2s cubic-bezier(.4,0,.2,1) both;
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;
