import Typewriter from 'typewriter-effect';
import { useState, type MouseEvent } from 'react';
import { FaCalendarAlt, FaGraduationCap } from 'react-icons/fa'; 

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - left, y: e.clientY - top });
  };

  return (
    <section
      id="home"
      className="min-h-screen px-6 flex items-center bg-background-light dark:bg-background-dark transition-colors duration-300" 
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-15 items-center">
        
        {/* Lado de la Imagen */}
        <div className="flex justify-center order-2 md:order-1">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition duration-500"></div>
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-surface-dark shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                src={`${import.meta.env.BASE_URL}images/perfil/perfil-blanco.png`}
                alt="Oscar Principi Claro"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 dark:opacity-0"
              />
              <img
                src={`${import.meta.env.BASE_URL}images/perfil/perfil-marron.png`}
                alt="Oscar Principi Oscuro"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 dark:opacity-100" 
              />
            </div>
          </div>
        </div>

        {/* Lado del Contenido */}
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
                  delay: 140,
                  wrapperClassName: "text-text-light dark:text-text-dark", 
                }}
              />
            </h1>
          </header>

          {/* CARD CON SPOTLIGHT */}
          <div 
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            className="relative bg-surface-light dark:bg-surface-dark p-8 rounded-3xl border border-muted-light/10 dark:border-white/5 shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Efecto de luz (Marrón) */}
            <div
              className="pointer-events-none absolute -inset-px transition duration-300 z-0"
              style={{
                opacity,
                background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 69, 19, 0.15), transparent 40%)`,
              }}
            />

            <div className="relative z-10 space-y-8">
              <div className="relative">
                <h3 className="font-bold text-sm uppercase tracking-widest text-primary mb-6 flex items-center justify-center md:justify-start gap-2">
                  <FaGraduationCap className="text-xl" />
                  Trayectoria Académica
                </h3>
                
                <div className="space-y-6">
                  {/* Ingeniería en Sistemas (Actual) */}
                  <div className="flex flex-col items-center md:items-start border-l-2 border-primary md:pl-4">
                    <p className="text-text-light dark:text-text-dark text-lg leading-tight font-bold">
                      Ingeniería en Sistemas de Información
                    </p>
                    <span className="text-muted-light dark:text-muted-dark font-medium">UTN FRD</span>
                    <div className="mt-2 flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-widest">
                      <FaCalendarAlt />
                      <span>2026 — Actualidad</span>
                    </div>
                  </div>

                  {/* Tecnicatura en Programación */}
                  <div className="flex flex-col items-center md:items-start border-l-2 border-primary/40 md:pl-4">
                    <p className="text-text-light dark:text-text-dark text-lg leading-tight font-bold">
                      Técnico Universitario en Programación
                    </p>
                    <span className="text-muted-light dark:text-muted-dark font-medium">UTN FRGP</span>
                    <div className="mt-2 flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary/70 rounded-full text-[10px] font-black uppercase tracking-widest">
                      <FaCalendarAlt />
                      <span>2023 — 2025</span>
                    </div>
                  </div>

                  {/* Técnico Electromecánico */}
                  <div className="flex flex-col items-center md:items-start border-l-2 border-primary/40 md:pl-4">
                    <p className="text-text-light dark:text-text-dark text-lg leading-tight font-bold">
                      Técnico Secundario en Electromecánica
                    </p>
                    <span className="text-muted-light dark:text-muted-dark font-medium">UTN Albert Thomas</span>
                    <div className="mt-2 flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary/70 rounded-full text-[10px] font-black uppercase tracking-widest">
                      <FaCalendarAlt />
                      <span>2005 — 2007</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}