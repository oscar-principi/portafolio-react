export default function Home() {
  // const tags = [
  //   "Impacto Social",
  //   "Aprendizaje",
  //   "Responsabilidad",
  //   "Colaboración",
  //   "Eficiencia",
  // ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 bg-bg-light dark:bg-bg-dark transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-15 items-center">
        
        {/* Contenedor de Imagen */}
        <div className="flex justify-center order-2 md:order-1">
          <div className="relative group">
            {/* Efecto de brillo de fondo */}
            <div className="absolute -inset-4 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition duration-500"></div>
            
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-surface-dark shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                
              {/* IMAGEN MODO CLARO */}
              <img
                src={`${import.meta.env.BASE_URL}images/perfil/perfil-claro.png`}
                alt="Oscar Principi Claro"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 dark:opacity-0"
              />

              {/* IMAGEN MODO OSCURO */}
              <img
                src={`${import.meta.env.BASE_URL}images/perfil/perfil-oscuro.png`}
                alt="Oscar Principi Oscuro"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 dark:opacity-100" 
              />

              </div>
          </div>
        </div>

        {/* Texto y Tarjeta de Presentación */}
        <div className="space-y-8 order-1 md:order-2">
          <header className="space-y-2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-light text-text-light dark:text-text-dark leading-tight">
              Desarrollo de{" "}
              <span className="block font-black text-primary uppercase tracking-tighter">
                Software
              </span>
            </h1>
          </header>

          <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-3xl border border-muted-light/10 dark:border-white/5 shadow-xl transition-all duration-300">
            <div className="space-y-6">
              
              <div>
                <h3 className="font-bold text-sm uppercase tracking-widest text-primary mb-3 text-center md:text-left">
                  Formación Académica
                </h3>
                <p className="text-text-light dark:text-text-dark text-lg leading-relaxed text-center md:text-left">
                  Técnico Universitario en Programación <br />
                  <span className="font-bold">UTN FRGP</span>
                </p>
              </div>

              {/* <div className="w-12 h-[2px] bg-primary/20 mx-auto md:mx-0"></div>

              <div>
                <h3 className="font-bold text-sm uppercase tracking-widest text-primary mb-3 text-center md:text-left">
                  Mi Compromiso
                </h3>
                <p className="italic text-muted-light dark:text-muted-dark text-lg text-center md:text-left">
                  "Crear software con <span className="text-text-light dark:text-text-dark font-semibold">integridad</span> e <span className="text-text-light dark:text-text-dark font-semibold">impacto social</span>."
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 justify-center md:justify-start">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 text-xs font-bold rounded-full border border-primary/20 bg-primary/5 text-primary hover:bg-primary hover:text-white transition-colors duration-300 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div> */}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}