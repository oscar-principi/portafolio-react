export interface ProyectoItem {
  titulo: string;
  descripcion: string;
  imageUrl: string;
  tags: string[];
  githubUrl?: string;
}

export const proyectos: ProyectoItem[] = [
  {
    titulo: "Aplicación Web: Vinoteca",
    descripcion: "Permite a una vinoteca vender online: los clientes navegan el catálogo, arman su carrito y pagan con MercadoPago, mientras el dueño gestiona productos, pedidos y ventas desde un panel con estadísticas.",
    imageUrl: "images/proyects/vinoteca.png",
    tags: ["React", "TypeScript", "ASP.NET Core", "Entity Framework", "JWT", "MercadoPago", "SQL Server", "Tailwind"],
  },
  {
    titulo: "Aplicación Web: Ecommerce",
    descripcion: "Plataforma multi-tienda donde cualquier vendedor crea su propia tienda, publica productos y cobra digitalmente con MercadoPago, sin necesidad de conocimientos técnicos.",
    imageUrl: "images/proyects/ecommerceb2c.png",
    tags: ["Blazor", "MudBlazor", ".NET Core", "LINQ", "Entity Framework", "Identity Framework", "Cookie + JWT", "SQL server"],
  },
  {
    titulo: "Aplicación Web: Seguimiento Académico UTN",
    descripcion: "Ayuda a los estudiantes de Ingeniería a planificar su carrera: valida correlatividades de forma automática, lleva el estado de cada materia y calcula el promedio en tiempo real.",
    imageUrl: "images/proyects/sistema-alumnos-utn.png",
    githubUrl: "https://github.com/oscar-principi/SistemaGestionAcademicaUTNIngenieriaEnSistemas",
    tags: [".NET", "React", "TypeScript", "Entity Framework", "LINQ", "JWT", "Tailwind", "Axios", "SQL server"],
  },
  {
    titulo: "Aplicación Web: Home Banking",
    descripcion: "Simula un banco digital completo: los clientes consultan sus cuentas, transfieren dinero y solicitan préstamos, mientras los administradores supervisan la operación con reportes estadísticos.",
    imageUrl: "images/proyects/home-banking.png",
    githubUrl: "https://github.com/oscar-principi/Sistema-de-Home-Banking",
    tags: ["Java", "JSP", "Servlets", "JDBC", "T-SQL", "Store Procedure", "Session + Rbac", "MySql"],
  },
  {
    titulo: "Aplicación Web: Gestión Médica",
    descripcion: "Ordena el día a día de una clínica: los pacientes reservan turnos online y la recepción administra la agenda, evitando superposiciones y centralizando los reportes médicos.",
    imageUrl: "images/proyects/gestion-medica.png",
    githubUrl: "https://github.com/oscar-principi/Sistema-de-Gesti-n-Medica",
    tags: ["Bootstrap", ".NET Framework", "T-SQL", "Store Procedure", "SQL server"],
  },
  {
    titulo: "Aplicación Web: Amigo Invisible WhatsApp",
    descripcion: "Automatiza el clásico sorteo de fin de año: reparte los participantes al azar y le avisa a cada uno por WhatsApp quién le tocó, sin revelar el secreto al organizador.",
    imageUrl: "images/proyects/amigo-invisible.png",
    githubUrl: "https://github.com/oscar-principi/Amigo-Invisible-por-Wsp",
    tags: ["Blazor", "Tailwind", "API REST | .NET Core", "NoSQL"],
  },
  {
    titulo: "Aplicación Web: Portafolio Personal",
    descripcion: "Este mismo sitio: presenta mi trabajo de forma clara y permite que cualquier persona me contacte directamente por email desde el navegador.",
    imageUrl: "images/proyects/portafolio.png",
    githubUrl: "https://github.com/oscar-principi/portafolio-react",
    tags: ["React", "TypeScript", "Tailwind", "Axios", "API REST | .NET Core", "API de Gmail"],
  },
  {
    titulo: "Aplicación Escritorio: Computación JMD",
    descripcion: "Digitaliza un taller de reparación real: envía presupuestos por WhatsApp, genera comprobantes y garantías en PDF, registra el patrón de desbloqueo de cada equipo y respalda los datos automáticamente cada día.",
    imageUrl: "images/proyects/computacion-jmd.png",
    tags: ["WPF", "C#", ".NET 10", "MVVM", "EF Core", "SQL Server", "QuestPDF", "Serilog", "Inno Setup"],
  },
  {
    titulo: "Aplicación Escritorio: Gestión Veterinaria",
    descripcion: "Centraliza la operación de una veterinaria: historial de mascotas, agenda de turnos, datos de clientes y veterinarios, con reportes para tomar mejores decisiones.",
    imageUrl: "images/proyects/gestion-veterinaria.png",
    githubUrl: "https://github.com/oscar-principi/PetClinicApp",
    tags: ["C/C++", "Rlutil", "Archivos"],
  },
  {
    titulo: "Aplicación Escritorio: Gestión de Productos (WPF)",
    descripcion: "Lleva el control de stock de un negocio: alta, baja y edición de productos con seguimiento de existencias para saber siempre qué hay disponible.",
    imageUrl: "images/proyects/gestor-productos.png",
    githubUrl: "https://github.com/oscar-principi/Gestion-de-productos-WPF",
    tags: ["WPF", "Entity Framework", "MVC", "T-SQL", "LINQ", "SQL server"],
  },
  {
    titulo: "Aplicación Escritorio: Tetris C++",
    descripcion: "Recreación del clásico Tetris desde cero con Raylib, como ejercicio de lógica de juego, colisiones y renderizado en tiempo real.",
    imageUrl: "images/proyects/tetris.png",
    githubUrl: "https://github.com/oscar-principi/Tetris-C-Raylib",
    tags: ["C++", "Raylib", "Archivos"],
  },
  {
    titulo: "Sitio Web: Mueblería",
    descripcion: "Da presencia online a una mueblería: muestra el catálogo de productos y conecta al cliente directamente con el negocio a través de redes sociales.",
    imageUrl: "images/proyects/muebleria.png",
    githubUrl: "https://github.com/oscar-principi/Muebles-Finochio",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];
