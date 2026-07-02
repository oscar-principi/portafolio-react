import { useState, type MouseEvent } from 'react';
import { FaArrowRight } from 'react-icons/fa';

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - left, y: e.clientY - top });
  };

  return (
    <section
      id="home"
      className="min-h-screen px-6 flex items-center justify-center transition-colors duration-300"
    >
      <style>{`
        @keyframes slideUpIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes lineGrow {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .animate-slide-up-1 {
          animation: slideUpIn 0.6s ease-out 0.1s both;
        }

        .animate-slide-up-2 {
          animation: slideUpIn 0.6s ease-out 0.2s both;
        }

        .animate-slide-up-3 {
          animation: slideUpIn 0.6s ease-out 0.3s both;
        }

        .animate-slide-up-4 {
          animation: slideUpIn 0.6s ease-out 0.4s both;
        }

        .line-accent {
          animation: lineGrow 0.8s ease-out 0.25s both;
          height: 3px;
          background: linear-gradient(90deg, #8B4513, rgba(139, 69, 19, 0));
        }
      `}</style>

      <div className="max-w-2xl w-full text-center space-y-12">
        {/* Imagen de perfil pequeña */}
        <div className="animate-slide-up-1 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-3 bg-amber-700/5 dark:bg-amber-600/5 rounded-full blur-xl group-hover:bg-amber-700/10 dark:group-hover:bg-amber-600/10 transition-all duration-500"></div>

            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-amber-700/30 dark:border-amber-600/40 shadow-lg transition-transform duration-500 group-hover:scale-105">
              <img
                src={`${import.meta.env.BASE_URL}images/perfil/perfil-blanco.png`}
                alt="Oscar Principi"
                className="absolute inset-0 w-full h-full object-cover opacity-100 dark:opacity-0"
              />
              <img
                src={`${import.meta.env.BASE_URL}images/perfil/perfil-marron.png`}
                alt="Oscar Principi"
                className="absolute inset-0 w-full h-full object-cover opacity-0 dark:opacity-100"
              />
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="space-y-6">
          <h1 className="animate-slide-up-2 text-5xl md:text-6xl font-bold text-text-light dark:text-text-dark tracking-tight">
            Oscar Principi
          </h1>

          <div className="animate-slide-up-3 flex justify-center">
            <div className="line-accent"></div>
          </div>

          <p className="animate-slide-up-3 text-lg md:text-xl text-muted-light dark:text-muted-dark font-medium">
            Full Stack Developer
          </p>

          <p className="animate-slide-up-4 text-base md:text-lg text-muted-light dark:text-muted-dark max-w-lg mx-auto leading-relaxed">
            Desarrollo soluciones web modernas full stack, creando experiencias intuitivas, código limpio y seguro.
          </p>
        </div>

        {/* CTA Button con efecto hover */}
        <div
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHoveredCard(true)}
          onMouseLeave={() => setHoveredCard(false)}
          className="animate-slide-up-4"
        >
          <div className="relative inline-block">
            <div
              className="pointer-events-none absolute -inset-px transition duration-300 z-0 rounded-lg"
              style={{
                opacity: hoveredCard ? 0.5 : 0,
                background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 69, 19, 0.2), transparent 40%)`,
              }}
            />

            <a
              href="#proyectos"
              className="relative z-10 inline-flex items-center gap-3 px-8 py-3 bg-amber-700/10 dark:bg-amber-600/10 border border-amber-700/30 dark:border-amber-600/40 rounded-lg text-amber-700 dark:text-amber-500 font-medium hover:bg-amber-700/20 dark:hover:bg-amber-600/20 transition-all duration-300 group"
            >
              Ver Proyectos
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}