import { FiGithub } from "react-icons/fi";
import { proyectos } from "../data/projects";

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 px-6 bg-background-light dark:bg-background-dark scroll-mt-10">
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16 group">
          <h2 className="text-4xl md:text-5xl font-black text-text-light dark:text-text-dark tracking-tighter uppercase">
            Proyectos
          </h2>
          <div className="w-12 h-1.5 bg-primary rounded-full mt-2 transition-all duration-300 group-hover:w-24"></div>

          <p className="text-muted-light dark:text-muted-dark mt-4 text-center max-w-lg">
            Explora mis trabajos y desarrollos más recientes.
          </p>
          <div className="mt-6 flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-bold text-primary uppercase tracking-widest">
              {proyectos.length} Proyectos realizados
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {proyectos.map((proyecto, index) => (
            <div
              key={index}
              className="group relative p-0.5 overflow-hidden rounded-4xl transition-all duration-300 hover:-translate-y-2 flex shadow-lg hover:shadow-primary/20"
            >
              {/* BORDE DINÁMICO (GIRATORIO): Se activa en hover */}
              <div className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#78350f_0%,#d97706_50%,#78350f_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* CONTENIDO DE LA TARJETA */}
              <div className="relative w-full bg-surface-light dark:bg-surface-dark rounded-[calc(2rem-2px)] p-6 flex flex-col h-full z-10">

                <div className="w-full h-56 md:h-64 overflow-hidden rounded-2xl bg-white dark:bg-background-dark flex items-center justify-center mb-6 border border-gray-100 dark:border-gray-800">
                  <img
                    src={`${import.meta.env.BASE_URL}${proyecto.imageUrl}`}
                    alt={proyecto.titulo}
                    loading="lazy"
                    className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="text-center md:text-left grow">
                  <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-2">
                    {proyecto.titulo}
                  </h3>
                  <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed mb-4">
                    {proyecto.descripcion}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-muted-light/10 space-y-4">
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {proyecto.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border border-primary/30 text-primary bg-primary/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center md:justify-start">
                    {proyecto.githubUrl ? (
                      <a
                        href={proyecto.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-muted-light text-text-light dark:text-text-dark text-sm font-medium hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                      >
                        <FiGithub size={18} />
                        Ver completo en GitHub
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-muted-light/30 text-muted-light/50 dark:text-muted-dark/50 text-sm font-medium cursor-not-allowed">
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
    </section>
  );
}
