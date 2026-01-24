import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 py-12 bg-surface-light dark:bg-surface-dark border-t border-muted-light/20 transition-colors">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="flex items-center gap-3">
            <img 
              src={`${import.meta.env.BASE_URL}images/logos/logo-utn-oscuro.png`} 
              alt="Logo UTN" 
              className="h-10 w-auto block dark:hidden" 
            />
            <img 
              src={`${import.meta.env.BASE_URL}images/logos/logo-utn-claro.png`}
              alt="Logo UTN" 
              className="h-10 w-auto hidden dark:block" 
            />
            
            <span className="text-lg font-bold text-primary">FRGP</span>
          </div>
          
          <div>
            <p className="text-sm font-bold text-text-light dark:text-text-dark">
              Desarrollador de Software – Oscar Príncipi
            </p>
            <p className="text-xs text-muted-light dark:text-muted-dark mt-1">
              © {year} OscarDev.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest ">
            Visitá mis perfiles
          </p>
          <div className="flex gap-4">
            <a 
              href="https://linkedin.com/in/oscar-principi/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#0077b5] text-[#0077b5] text-sm font-medium hover:bg-[#0077b5] hover:text-white transition-all duration-300"
            >
              <FiLinkedin size={18} />
            </a>
            <a 
              href="https://github.com/oscar-principi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#333] text-[#333] text-sm font-medium hover:bg-[#333] hover:text-white transition-all duration-300"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="https://instagram.com/oscar.principi" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#E4405F] text-[#E4405F] text-sm font-medium hover:bg-[#E4405F] hover:text-white transition-all duration-300"
            >
              <FiInstagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
