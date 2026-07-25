import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

// Paleta de "polvo estelar" — violeta, índigo, cian y blanco
const STAR_COLORS = ["#a78bfa", "#818cf8", "#67e8f9", "#60a5fa", "#ffffff"];

// Partículas generadas una sola vez (no cambian entre renders)
const PARTICLES = Array.from({ length: 32 }, (_, i) => ({
  id: i,
  left: Math.random() * 100, // %
  size: 2 + Math.random() * 4, // px
  duration: 14 + Math.random() * 14, // s
  delay: Math.random() * 18, // s
  drift: (Math.random() - 0.5) * 80, // px de deriva horizontal
  color: STAR_COLORS[i % STAR_COLORS.length],
}));

// Estrellas fijas centelleantes de fondo (solo visibles en modo oscuro)
const STARS = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  top: Math.random() * 100,
  left: Math.random() * 100,
  size: 1 + Math.random() * 1.6,
  duration: 2.5 + Math.random() * 3.5,
  delay: Math.random() * 5,
}));

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-background-dark overflow-x-hidden">
      {/* Nebulosa de fondo — violeta + índigo cayendo desde el header */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 h-[75vh] z-0 nebula-glow"
      />
      {/* Segunda capa de nebulosa — rojo, desde el otro extremo */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 h-[70vh] z-0 nebula-glow-2"
      />

      {/* Estrellas fijas centelleantes */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden stars"
      >
        {STARS.map((s) => (
          <span
            key={s.id}
            className="star"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Polvo estelar ascendente */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden particles"
      >
        {PARTICLES.map((p) => (
          <span
            key={p.id}
            className="particle"
            style={{
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              // @ts-expect-error CSS custom property
              "--drift": `${p.drift}px`,
              "--particle-color": p.color,
            }}
          />
        ))}
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

        /* --- Estrellas fijas centelleantes --- */
        @keyframes twinkle {
          0%, 100% { opacity: 0.15; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.15); }
        }

        .star {
          position: absolute;
          border-radius: 9999px;
          background: #ffffff;
          box-shadow: 0 0 4px 1px rgba(167, 139, 250, 0.8);
          animation-name: twinkle;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        /* --- Polvo estelar ascendente --- */
        @keyframes floatUp {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          8% {
            opacity: 0.85;
          }
          22% {
            opacity: 0.3;
          }
          38% {
            opacity: 0.9;
          }
          55% {
            opacity: 0.35;
          }
          70% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-105vh) translateX(var(--drift, 0px));
            opacity: 0;
          }
        }

        .particle {
          position: absolute;
          bottom: -10px;
          border-radius: 9999px;
          background: var(--particle-color, #7c3aed);
          box-shadow: 0 0 6px 1px var(--particle-color, #7c3aed);
          opacity: 0.75;
          animation-name: floatUp;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .nebula-glow,
          .nebula-glow-2 {
            animation: none;
          }
          .particles,
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
