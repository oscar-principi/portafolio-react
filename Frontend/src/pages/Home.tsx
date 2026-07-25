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
          background: linear-gradient(90deg, #7c3aed, #2563eb, rgba(37, 99, 235, 0));
        }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .tech-ring {
          animation: spinSlow 14s linear infinite;
        }
      `}</style>

      <div className="max-w-2xl w-full text-center space-y-12">
        {/* Foto de perfil con marco tech */}
        <div className="animate-slide-up-1 flex justify-center">
          <div className="relative w-36 h-36 md:w-44 md:h-44 group">
            {/* Resplandor ambiente */}
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-all duration-500" />

            {/* Foto */}
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg shadow-primary/20 transition-transform duration-500 group-hover:scale-105">
              <img
                src={`${import.meta.env.BASE_URL}images/perfil/perfil-tech.png`}
                alt="Oscar Príncipi"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Estrella de neón orbitando, con estela que se apaga */}
            <div className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105">
              <div className="absolute inset-0 w-full h-full tech-ring">
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="trail-grad" x1="3.95" y1="33.24" x2="50" y2="1" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity="0" />
                      <stop offset="55%" stopColor="#7c3aed" stopOpacity="0.55" />
                      <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.95" />
                    </linearGradient>
                    <radialGradient id="head-grad" cx="35%" cy="35%" r="65%">
                      <stop offset="0%" stopColor="#e9d5ff" />
                      <stop offset="50%" stopColor="#a78bfa" />
                      <stop offset="100%" stopColor="#4338ca" />
                    </radialGradient>
                  </defs>
                  <path
                    d="M3.95 33.24A49 49 0 0 1 50 1"
                    fill="none"
                    stroke="url(#trail-grad)"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="50"
                    cy="1"
                    r="2.4"
                    fill="url(#head-grad)"
                    style={{ filter: "drop-shadow(0 0 2px #a78bfa) drop-shadow(0 0 4px #2563eb)" }}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="space-y-6">
          <div className="animate-slide-up-2 flex justify-center">
            <div className="line-accent"></div>
          </div>

          <p className="animate-slide-up-3 text-lg md:text-xl font-semibold tracking-wide uppercase bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Desarrollador Fullstack
          </p>

          <p className="animate-slide-up-4 text-base md:text-lg text-muted-dark max-w-lg mx-auto leading-relaxed">
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
                background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(124, 58, 237, 0.3), transparent 40%)`,
              }}
            />

            <a
              href="#proyectos"
              className="relative z-10 inline-flex items-center gap-3 px-8 py-3 bg-primary/15 border border-primary/40 rounded-lg text-primary font-medium hover:bg-primary/25 transition-all duration-300 group"
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