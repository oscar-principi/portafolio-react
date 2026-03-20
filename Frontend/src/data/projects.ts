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
    descripcion: "Ecommerce de vinoteca con tienda pública, carrito, checkout con MercadoPago, seguimiento de pedidos y panel administrativo con gestión de productos, órdenes y estadísticas.",
    imageUrl: "images/proyects/vinoteca.png",
    tags: ["React", "TypeScript", "ASP.NET Core", "Entity Framework", "JWT", "MercadoPago", "SQL Server", "Tailwind"],
  },
  {
    titulo: "Aplicación Web: Ecommerce",
    descripcion: "Aplicación diseñada para gestión de tiendas B2C, donde se puede crear tiendas y productos, crear carritos y pagar de forma digital con mercadopago.",
    imageUrl: "images/proyects/ecommerceb2c.png",
    tags: ["Blazor", "MudBlazor", ".NET Core", "LINQ", "Entity Framework", "Identity Framework", "Cookie + JWT", "SQL server"],
  },
  {
    titulo: "Aplicación Web: Seguimiento Académico UTN",
    descripcion: "Sistema web para seguimiento académico de Ingeniería en Sistemas UTN, con gestión de materias, correlatividades automáticas, cálculo de promedio.",
    imageUrl: "images/proyects/sistema-alumnos-utn.png",
    githubUrl: "https://github.com/oscar-principi/SistemaGestionAcademicaUTNIngenieriaEnSistemas",
    tags: [".NET", "React", "TypeScript", "Entity Framework", "LINQ", "JWT", "Tailwind", "Axios", "SQL server"],
  },
  {
    titulo: "Aplicación Web: Home Banking",
    descripcion: "Aplicación para la gestión de cuentas bancarias, transferencias, préstamos y panel reportes estadísticos para los administradores.",
    imageUrl: "images/proyects/home-banking.png",
    githubUrl: "https://github.com/oscar-principi/Sistema-de-Home-Banking",
    tags: ["Java", "JSP", "Servlets", "JDBC", "T-SQL", "Store Procedure", "Session + Rbac", "MySql"],
  },
  {
    titulo: "Aplicación Web: Gestión Médica",
    descripcion: "Aplicación para la gestión de clínicas médicas, con solicitud de turnos para usuarios y administración para recepcionistas y reportes médicos.",
    imageUrl: "images/proyects/gestion-medica.png",
    githubUrl: "https://github.com/oscar-principi/Sistema-de-Gesti-n-Medica",
    tags: ["Bootstrap", ".NET Framework", "T-SQL", "Store Procedure", "SQL server"],
  },
  {
    titulo: "Aplicación Web: Amigo Invisible WhatsApp",
    descripcion: "Aplicación para sorteo aleatorio con envío automático por WhatsApp con servicio de la API de Twilio.",
    imageUrl: "images/proyects/amigo-invisible.png",
    githubUrl: "https://github.com/oscar-principi/Amigo-Invisible-por-Wsp",
    tags: ["Blazor", "Tailwind", "API REST | .NET Core", "NoSQL"],
  },
  {
    titulo: "Aplicación Web: Portafolio Personal",
    descripcion: "Portafolio personal con vistas y descripción de proyectos y sus tecnologías, y un formulario de contacto para emails.",
    imageUrl: "images/proyects/portafolio.png",
    githubUrl: "https://github.com/oscar-principi/portafolio-react",
    tags: ["React", "TypeScript", "Tailwind", "Axios", "API REST | .NET Core", "API de Gmail"],
  },
  {
    titulo: "Aplicación Escritorio: Gestión Veterinaria",
    descripcion: "Aplicacion para gestión de veterinaria, con administración de clientes, mascotas, turnos, veterinarios y reportes estadísticos.",
    imageUrl: "images/proyects/gestion-veterinaria.png",
    githubUrl: "https://github.com/oscar-principi/PetClinicApp",
    tags: ["C/C++", "Rlutil", "Archivos"],
  },
  {
    titulo: "Aplicación Escritorio: Gestión de Productos (WPF)",
    descripcion: "Aplicación de escritorio para la gestión y manejo de stock.",
    imageUrl: "images/proyects/gestor-productos.png",
    githubUrl: "https://github.com/oscar-principi/Gestion-de-productos-WPF",
    tags: ["WPF", "Entity Framework", "MVC", "T-SQL", "LINQ", "SQL server"],
  },
  {
    titulo: "Aplicación Escritorio: Tetris C++",
    descripcion: "Recreación del clásico Tetris usando la librería Raylib.",
    imageUrl: "images/proyects/tetris.png",
    githubUrl: "https://github.com/oscar-principi/Tetris-C-Raylib",
    tags: ["C++", "Raylib", "Archivos"],
  },
  {
    titulo: "Sitio Web: Mueblería",
    descripcion: "Sitio web para una mueblería con catálogo online y contacto directo mediante redes sociales.",
    imageUrl: "images/proyects/muebleria.png",
    githubUrl: "https://github.com/oscar-principi/Muebles-Finochio",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];
