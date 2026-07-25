import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

// Tonos reales de estrellas — mayoría blancas, algunas cálidas o azuladas
const STAR_TINTS = [
  "rgba(255, 255, 255, 0.85)",
  "rgba(255, 255, 255, 0.85)",
  "rgba(255, 255, 255, 0.85)",
  "rgba(191, 201, 255, 0.85)",
  "rgba(255, 224, 178, 0.8)",
];

// Estrellas fijas centelleantes de fondo — tamaños variados (pocas grandes, muchas chicas)
const STARS = Array.from({ length: 90 }, (_, i) => {
  const roll = Math.random();
  const size = roll < 0.72 ? 0.6 + Math.random() * 0.9 : roll < 0.93 ? 1.5 + Math.random() * 1 : 2.4 + Math.random() * 1.4;
  // Un grupo minoritario titila con mucha más fuerza para destacarse del resto
  const strongTwinkle = Math.random() < 0.18;
  return {
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size,
    duration: strongTwinkle ? 1.4 + Math.random() * 1.6 : 3 + Math.random() * 5,
    delay: Math.random() * 6,
    tint: STAR_TINTS[Math.floor(Math.random() * STAR_TINTS.length)],
    strongTwinkle,
  };
});

// Recorrido aleatorio de la estrella destacada — fija en pantalla, evitando el centro
// (donde suele estar la foto de perfil) para no taparla
function wanderPoint() {
  let top = 6 + Math.random() * 86;
  let left = 6 + Math.random() * 86;
  const inCenter = top > 28 && top < 72 && left > 28 && left < 72;
  if (inCenter) {
    if (Math.random() < 0.5) {
      left = left < 50 ? 6 + Math.random() * 14 : 80 + Math.random() * 12;
    } else {
      top = top < 50 ? 6 + Math.random() * 14 : 78 + Math.random() * 14;
    }
  }
  return { top, left };
}
const WANDER_POINTS = Array.from({ length: 5 }, wanderPoint);
const WANDER_LOOP = [...WANDER_POINTS, WANDER_POINTS[0]];
const WANDER_KEYFRAMES = WANDER_LOOP.map((p, i) => {
  const pct = Math.round((i / (WANDER_LOOP.length - 1)) * 100);
  return `${pct}% { top: ${p.top.toFixed(1)}%; left: ${p.left.toFixed(1)}%; }`;
}).join("\n          ");

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-background-dark overflow-x-hidden">
      {/* Nebulosa de fondo — violeta + índigo cayendo desde el header */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 h-[75vh] z-0 nebula-glow"
      />
      {/* Segunda capa de nebulosa — azul, desde el otro extremo */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 h-[70vh] z-0 nebula-glow-2"
      />
      {/* Tercera capa de nebulosa — cian tenue, más abajo, para dar profundidad */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 bottom-0 h-[60vh] z-0 nebula-glow-3"
      />

      {/* Grano fotográfico sutil */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 grain" />

      {/* Estrellas fijas centelleantes */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden stars"
      >
        {STARS.map((s) => (
          <span
            key={s.id}
            className={`star${s.strongTwinkle ? " star--strong" : ""}`}
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`,
              // @ts-expect-error CSS custom property
              "--star-tint": s.tint,
            }}
          />
        ))}

        {/* Estrella destacada: recorre el fondo lentamente, siempre visible en pantalla */}
        <span className="wander-star" />
      </div>

      <style>{`
        @keyframes nebulaPulse {
          0%, 100% {
            opacity: 0.55;
            transform: translateY(0) scale(1);
          }
          50% {
            opacity: 0.9;
            transform: translateY(10px) scale(1.08);
          }
        }

        .nebula-glow {
          background: radial-gradient(
            ellipse 85% 60% at 25% -10%,
            rgba(124, 58, 237, 0.45),
            rgba(67, 56, 202, 0.28) 40%,
            transparent 70%
          );
          animation: nebulaPulse 9s ease-in-out infinite;
        }

        .nebula-glow-2 {
          background: radial-gradient(
            ellipse 65% 50% at 85% 5%,
            rgba(37, 99, 235, 0.30),
            transparent 65%
          );
          animation: nebulaPulse 12s ease-in-out infinite reverse;
        }

        .nebula-glow-3 {
          background: radial-gradient(
            ellipse 70% 55% at 15% 100%,
            rgba(34, 211, 238, 0.14),
            rgba(67, 56, 202, 0.1) 45%,
            transparent 70%
          );
          animation: nebulaPulse 15s ease-in-out infinite;
        }

        /* --- Grano fotográfico --- */
        .grain {
          opacity: 0.05;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        /* --- Estrellas fijas centelleantes --- */
        @keyframes twinkle {
          0%, 100% { opacity: 0.15; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.15); }
        }

        @keyframes twinkleStrong {
          0%, 100% { opacity: 0.15; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.4); }
        }

        .star {
          position: absolute;
          border-radius: 9999px;
          background: #ffffff;
          box-shadow: 0 0 4px 1px var(--star-tint, rgba(167, 139, 250, 0.8));
          animation-name: twinkle;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        .star--strong {
          animation-name: twinkleStrong;
          box-shadow: 0 0 5px 1px var(--star-tint, rgba(167, 139, 250, 0.85));
        }

        /* --- Estrella destacada, más intensa, recorriendo la pantalla --- */
        @keyframes wander {
          ${WANDER_KEYFRAMES}
        }

        @keyframes twinkleBright {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }

        .wander-star {
          position: absolute;
          width: 3.5px;
          height: 3.5px;
          border-radius: 9999px;
          background: #ffffff;
          box-shadow:
            0 0 6px 2px rgba(255, 255, 255, 0.9),
            0 0 14px 5px rgba(167, 139, 250, 0.7),
            0 0 24px 10px rgba(96, 165, 250, 0.35);
          animation: wander 50s ease-in-out infinite, twinkleBright 3.4s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .nebula-glow,
          .nebula-glow-2,
          .nebula-glow-3 {
            animation: none;
          }
          .stars {
            display: none;
          }
        }
      `}</style>

      <div className="relative z-10">
        <Header />
        <main className="pt-24">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
