import Typewriter from 'typewriter-effect';

export default function Home() {

  return (
    <section
      id="home"
      className="min-h-screen px-6 flex items-center bg-bg-light dark:bg-bg-dark transition-colors duration-300" 
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
          <header className="space-y-2 text-center md:text-left min-h-[120px]">
            <h1 className="text-4xl md:text-5xl font-light text-text-light dark:text-text-dark leading-tight">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Desarrollo de')
                    .typeString('<br />') 
                    .typeString('<span class="font-black text-primary uppercase tracking-tighter">Software</span>')
                    .start();
                }}
                options={{
                  autoStart: true,
                  loop: false,
                  cursor: "_",
                  delay: 75,
                  wrapperClassName: "text-text-light dark:text-text-dark", 
                }}
              />
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
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}