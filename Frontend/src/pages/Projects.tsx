import { useState, useEffect, useCallback } from "react";
import { FiGithub, FiChevronLeft, FiChevronRight, FiExternalLink } from "react-icons/fi";
import { proyectos } from "../data/projects";

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const total = proyectos.length;

  const goTo = useCallback(
    (index: number) => {
      setCurrent((index + total) % total);
    },
    [total]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Navegación con teclado
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  return (
    <section
      id="proyectos"
      className="py-24 px-6 scroll-mt-10"
    >
      <div className="max-w-5xl mx-auto">
        {/* Encabezado */}
        <div className="flex flex-col items-center mb-12 group">
          <h2 className="text-4xl md:text-5xl font-black text-text-dark tracking-tighter uppercase">
            Proyectos
          </h2>
          <div className="w-12 h-1.5 bg-linear-to-r from-primary via-secondary to-accent rounded-full mt-2 transition-all duration-300 group-hover:w-24"></div>
          <p className="text-muted-dark mt-4 text-center max-w-lg">
            Soluciones reales que resuelven problemas concretos.
          </p>

          {/* Contador fijo — no se mueve con las tarjetas */}
          <span className="mt-6 text-xs font-black uppercase tracking-widest text-primary">
            Proyecto {String(current + 1).padStart(2, "0")} / {total}
          </span>
        </div>

        {/* Carrusel */}
        <div className="relative">
          {/* Track */}
          <div className="overflow-hidden rounded-4xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {proyectos.map((proyecto, index) => (
                <div key={index} className="w-full shrink-0 px-1">
                  <div className="grid md:grid-cols-2 gap-8 items-center bg-surface-dark rounded-4xl p-6 md:p-10 border border-primary/20 shadow-[0_0_40px_-12px_rgba(124,58,237,0.4)]">
                    {/* Imagen */}
                    <div className="w-full h-56 md:h-72 overflow-hidden rounded-3xl bg-background-dark flex items-center justify-center border border-gray-800">
                      <img
                        src={`${import.meta.env.BASE_URL}${proyecto.imageUrl}`}
                        alt={proyecto.titulo}
                        loading="lazy"
                        className="w-full h-full object-contain p-3"
                      />
                    </div>

                    {/* Contenido */}
                    <div className="flex flex-col text-center md:text-left">
                      <h3 className="text-2xl md:text-3xl font-bold text-text-dark mb-4">
                        {proyecto.titulo}
                      </h3>
                      <p className="text-base text-muted-dark leading-relaxed mb-6">
                        {proyecto.descripcion}
                      </p>

                      <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                        {proyecto.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border border-primary/30 text-primary bg-primary/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
                        {proyecto.liveUrl && (
                          <a
                            href={proyecto.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-300 shadow-sm shadow-primary/20"
                          >
                            <FiExternalLink size={18} />
                            Visitar sitio
                          </a>
                        )}

                        {proyecto.githubUrl && (
                          <a
                            href={proyecto.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-muted-dark/40 text-text-dark text-sm font-medium hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                          >
                            <FiGithub size={18} />
                            Código
                          </a>
                        )}

                        {!proyecto.githubUrl && !proyecto.liveUrl && (
                          <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-muted-dark/30 text-muted-dark/50 text-sm font-medium cursor-not-allowed">
                            <FiGithub size={18} />
                            Proyecto privado
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flechas */}
          <button
            onClick={prev}
            aria-label="Proyecto anterior"
            className="absolute top-1/2 -translate-y-1/2 -left-3 md:-left-6 p-3 rounded-full bg-surface-dark/80 backdrop-blur-md border border-primary/20 text-primary shadow-lg hover:bg-primary hover:text-white hover:scale-110 transition-all active:scale-95 z-10"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            aria-label="Proyecto siguiente"
            className="absolute top-1/2 -translate-y-1/2 -right-3 md:-right-6 p-3 rounded-full bg-surface-dark/80 backdrop-blur-md border border-primary/20 text-primary shadow-lg hover:bg-primary hover:text-white hover:scale-110 transition-all active:scale-95 z-10"
          >
            <FiChevronRight size={24} />
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
          {proyectos.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              aria-label={`Ir al proyecto ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? "w-8 bg-primary"
                  : "w-2 bg-primary/25 hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
