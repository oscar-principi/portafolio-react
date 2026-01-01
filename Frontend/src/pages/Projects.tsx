import { FiGithub } from "react-icons/fi";

interface ProyectoItem {
  titulo: string;
  descripcion: string;
  imageUrl: string;
  tags: string[];
  githubUrl?: string;
}

export default function Projects() {
  const proyectos: ProyectoItem[] = [
    { titulo: "Aplicación Web: Ecommerce", descripcion: "Gestión de usuarios, tiendas y productos. Carrito de compra y pagos con MercadoPago.", imageUrl: "images/proyects/ecommerceb2c.png", tags: ["Blazor", ".NET Core", "LINQ", "Entity", "Identity"] },
    { titulo: "Aplicación Web: Home Banking", descripcion: "Gestión de usuarios, cuentas, transferencias, préstamos y reportes.", imageUrl: "images/proyects/home-banking.png", githubUrl: "https://github.com/oscar-principi/Sistema-de-Home-Banking", tags: ["Java", "JSP", "Servlets", "JDBC", "T-SQL"] },
    { titulo: "Aplicación Web: Gestión Médica", descripcion: "Gestión de usuarios, turnos y reportes médicos.", imageUrl: "images/proyects/gestion-medica.png", githubUrl: "https://github.com/oscar-principi/Sistema-de-Gesti-n-Medica", tags: ["Bootstrap", ".NET Framework", "T-SQL", "Store Procedure"] },
    { titulo: "Aplicación Web: Amigo Invisible WhatsApp", descripcion: "Sorteo aleatorio con envío automático por API de WhatsApp.", imageUrl: "images/proyects/amigo-invisible.png", githubUrl: "https://github.com/oscar-principi/Amigo-Invisible-por-Wsp", tags: ["Blazor", ".NET Core", "NoSQL"] },
    { titulo: "Aplicación Web: Portafolio Personal", descripcion: "Vista de proyectos y formulario de contacto.", imageUrl: "images/proyects/portafolio.png", githubUrl: "https://github.com/oscar-principi/portafolio-react", tags: ["React", "TypeScript",  "tailwind", "Axios", "API REST | .NET Core"] },
    { titulo: "Aplicación Escritoio: Gestión Veterinaria", descripcion: "Control de clientes, mascotas, turnos y expedientes.", imageUrl: "images/proyects/gestion-veterinaria.png", githubUrl: "https://github.com/oscar-principi/PetClinicApp", tags: ["C/C++", "Rlutil", "Archivos"] },
    { titulo: "Aplicación Escritorio: Gestión de Productos (WPF)", descripcion: "Sistema de escritorio para manejar stock con filtros avanzados.", imageUrl: "images/proyects/gestor-productos.png", githubUrl: "https://github.com/oscar-principi/Gestion-de-productos-WPF", tags: ["WPF", "EF", "MVC", "T-SQL"] },
    { titulo: "Aplicación Escritorio: Tetris C++", descripcion: "Recreación del clásico Tetris usando la librería Raylib.", imageUrl: "images/proyects/tetris.png", githubUrl: "https://github.com/oscar-principi/Tetris-C-Raylib", tags: ["C++", "Raylib", "Archivos"] },
    { titulo: "Sitio Web: Mueblería", descripcion: "Catálogo online y contacto directo mediante redes sociales.", imageUrl: "images/proyects/muebleria.png", githubUrl: "https://github.com/oscar-principi/Muebles-Finochio", tags: ["HTML", "CSS", "Javascript"] },
  ];

  return (
    <section id="proyectos" className="py-20 px-6 bg-background-light dark:bg-background-dark scroll-mt-10">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col items-center mb-16 group">
          <h2 className="text-4xl md:text-5xl font-black text-text-light dark:text-text-dark tracking-tighter uppercase">
            Proyectos
          </h2>
          <div className="w-12 h-1.5 bg-primary rounded-full mt-2 transition-all duration-300 group-hover:w-24"></div>
          <p className="text-muted-light dark:text-muted-dark mt-4 text-center max-w-lg">
            Explora mis trabajos y desarrollos más recientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {proyectos.map((proyecto, index) => (
            <div 
              key={index}
              className="group bg-surface-light dark:bg-surface-dark rounded-3xl p-5 border-2 border-transparent shadow-lg hover:border-primary hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-full h-56 md:h-64 overflow-hidden rounded-2xl bg-white dark:bg-background-dark flex items-center justify-center mb-6 dark:border-gray-800">
                <img 
                  src={`${import.meta.env.BASE_URL}${proyecto.imageUrl}`}
                  alt={proyecto.titulo}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="text-center md:text-left flex-grow">
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

                {proyecto.githubUrl && (
                  <a 
                    href={proyecto.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-muted-light text-text-light dark:text-text-dark text-sm font-medium hover:bg-text-light hover:text-white dark:hover:bg-text-dark dark:hover:text-black transition-all duration-300"
                  >
                    <FiGithub size={18} />
                    Ver en GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}