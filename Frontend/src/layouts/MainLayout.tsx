import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

// Partículas generadas una sola vez (no cambian entre renders)
const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: Math.random() * 100, // %
  size: 2 + Math.random() * 4, // px
  duration: 14 + Math.random() * 14, // s
  delay: Math.random() * 18, // s
  drift: (Math.random() - 0.5) * 80, // px de deriva horizontal
}));

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-background-light dark:bg-background-dark overflow-x-hidden">
      {/* Resplandor "sol" de fondo — cae desde el header hacia abajo */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 h-[70vh] z-0 sun-glow"
      />

      {/* Partículas flotantes que suben hacia el sol */}
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
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes sunPulse {
          0%, 100% {
            opacity: 0.55;
            transform: translateY(0) scale(1);
          }
          50% {
            opacity: 0.9;
            transform: translateY(10px) scale(1.08);
          }
        }

        .sun-glow {
          background: radial-gradient(
            ellipse 80% 60% at 50% -10%,
            rgba(217, 119, 6, 0.35),
            rgba(139, 69, 19, 0.18) 40%,
            transparent 70%
          );
          animation: sunPulse 8s ease-in-out infinite;
        }

        :root.dark .sun-glow {
          background: radial-gradient(
            ellipse 80% 60% at 50% -10%,
            rgba(120, 53, 15, 0.55),
            rgba(217, 119, 6, 0.15) 40%,
            transparent 70%
          );
        }

        /* --- Partículas flotantes --- */
        @keyframes floatUp {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
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
          background: rgba(180, 83, 9, 0.6);
          box-shadow: 0 0 6px 1px rgba(217, 119, 6, 0.5);
          animation-name: floatUp;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        :root.dark .particle {
          background: rgba(251, 191, 36, 0.55);
          box-shadow: 0 0 8px 2px rgba(245, 158, 11, 0.45);
        }

        @media (prefers-reduced-motion: reduce) {
          .sun-glow {
            animation: none;
          }
          .particles {
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
