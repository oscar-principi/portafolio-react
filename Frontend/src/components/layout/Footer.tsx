export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 py-12 bg-surface-light dark:bg-surface-dark border-t border-muted-light/20 transition-colors">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="flex items-center gap-3">
            {/* LOGO PARA MODO CLARO */}
            <img 
              src="/images/logos/logo-utn-oscuro.png" 
              alt="Logo UTN" 
              className="h-10 w-auto block dark:hidden" 
            />
            {/* LOGO PARA MODO OSCURO */}
            <img 
              src="/images/logos/logo-utn-claro.png" 
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
              © {year} Todos los derechos reservados.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">
            Visitá mis perfiles
          </p>
          <div className="flex gap-4">
            <a 
              href="https://linkedin.com/in/oscar-principi/" 
              target="_blank" 
              className="px-6 py-2 rounded-full border border-primary text-primary text-sm font-medium hover:bg-primary hover:text-white transition-all"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/oscar-principi" 
              target="_blank" 
              className="px-6 py-2 rounded-full border border-muted-light text-text-light dark:text-text-dark text-sm font-medium hover:bg-text-light hover:text-white dark:hover:bg-text-dark dark:hover:bg-bg-dark transition-all"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}