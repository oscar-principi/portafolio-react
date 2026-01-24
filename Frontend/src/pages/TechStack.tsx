import React from "react";
import { 
  SiReact, SiTailwindcss, SiDocker, SiMysql,
  SiCplusplus, SiDotnet, SiBootstrap, SiTypescript, 
  SiEclipseide, SiSonarqube, SiOwasp, SiMongodb,
  SiBlazor 
} from "react-icons/si";
import { DiMsqlServer, DiVisualstudio } from "react-icons/di"; 
import { VscCode, VscAzure } from "react-icons/vsc"; 
import { 
  FaJava, FaCode, FaLaptopCode, 
  FaTerminal, FaCloud, FaShieldAlt, FaDatabase
} from "react-icons/fa";

interface TechItem {
  nombre: string;
  subtitulo: string;
  icon: React.ReactNode;
  color: string;
}

interface TechGroup {
  categoria: string;
  icon: React.ReactNode;
  items: TechItem[];
}

export default function TechStack() {
  const grupos: TechGroup[] = [
    // ... (tus datos de grupos se mantienen iguales)
    {
      categoria: "Frontend",
      icon: <FaLaptopCode className="text-primary" />,
      items: [
        { nombre: "Blazor", subtitulo: "WebAssembly", icon: <SiBlazor />, color: "text-[#512bd4]" },
        { nombre: "React", subtitulo: "Librería UI", icon: <SiReact />, color: "text-[#61dafb]" },
        { nombre: "Tailwind", subtitulo: "CSS Framework", icon: <SiTailwindcss />, color: "text-[#06b6d4]" },
        { nombre: "Bootstrap", subtitulo: "CSS Framework", icon: <SiBootstrap />, color: "text-[#7952b3]" },
        { nombre: "TypeScript", subtitulo: "Tipado Estático", icon: <SiTypescript />, color: "text-[#3178c6]" }, 
      ]
    },
    {
      categoria: "Backend & Lenguajes",
      icon: <FaCode className="text-primary" />,
      items: [
        { nombre: ".NET Core", subtitulo: "C#", icon: <SiDotnet />, color: "text-[#512bd4]" },
        { nombre: "Java", subtitulo: "JSP / Servlets", icon: <FaJava />, color: "text-[#ed8b00]" },
        { nombre: "C / C++", subtitulo: "Estructurado / POO", icon: <SiCplusplus />, color: "text-[#00599c]" }
      ]
    },
    {
      categoria: "Bases de Datos",
      icon: <FaDatabase className="text-primary" />,
      items: [
        { nombre: "SQL Server", subtitulo: "T-SQL / SP", icon: <DiMsqlServer />, color: "text-[#cc2927]" },
        { nombre: "MySQL", subtitulo: "Relacional", icon: <SiMysql />, color: "text-[#00758f]" },
        { nombre: "MongoDB", subtitulo: "NoSQL", icon: <SiMongodb />, color: "text-[#47a248]" },
      ]
    },
    {
      categoria: "Cloud & DevOps",
      icon: <FaCloud className="text-primary" />,
      items: [
        { nombre: "Azure", subtitulo: "Cloud", icon: <VscAzure />, color: "text-[#0078d4]" },
        { nombre: "Docker", subtitulo: "Contenedores", icon: <SiDocker />, color: "text-[#2496ed]" },
      ]
    },
    {
      categoria: "Calidad & Seguridad",
      icon: <FaShieldAlt className="text-primary" />,
      items: [
        { nombre: "SonarQube", subtitulo: "Análisis Estático", icon: <SiSonarqube />, color: "text-[#4E9BCD]" },
        { nombre: "OWASP ZAP", subtitulo: "Pentesting QA", icon: <SiOwasp />, color: "text-[#000000] dark:text-white" },
      ]
    },
    {
      categoria: "IDEs & Entornos",
      icon: <FaTerminal className="text-primary" />,
      items: [
        { nombre: "VS Code", subtitulo: "C# / .NET / TS", icon: <VscCode />, color: "text-[#007acc]" },
        { nombre: "VS Community", subtitulo: "C# / .NET", icon: <DiVisualstudio />, color: "text-[#5c2d91]" },
        { nombre: "Eclipse", subtitulo: "Java IDE", icon: <SiEclipseide />, color: "text-[#2c2255]" },
        { nombre: "CodeBlocks", subtitulo: "C++ IDE", icon: <FaTerminal />, color: "text-[#222222] dark:text-white" },
      ]
    }
  ];

  return (
    <section id="stack" className="py-20 px-6 bg-background-light dark:bg-background-dark scroll-mt-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16 group">
          <h2 className="text-4xl md:text-5xl font-black text-text-light dark:text-text-dark tracking-tighter uppercase">
            Stack Tecnológico
          </h2>
          <div className="w-12 h-1.5 bg-primary rounded-full mt-2 transition-all duration-300 group-hover:w-24"></div>
          <p className="text-muted-light dark:text-muted-dark mt-4 text-center max-w-lg">
            Mi stack técnico para desarrollar soluciones fullstack.
          </p>
        </div>

        <div className="space-y-16">
          {grupos.map((grupo, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="flex items-center gap-3 mb-8">
                <span className="p-2 rounded-lg bg-primary/10 text-xl">
                  {grupo.icon}
                </span>
                <h3 className="text-2xl font-bold text-text-light dark:text-text-dark uppercase tracking-widest">
                  {grupo.categoria}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {grupo.items.map((tech, index) => (
                  <div 
                    key={index}
                    className="group bg-surface-light dark:bg-surface-dark rounded-3xl p-6 border-2 border-transparent shadow-lg hover:border-primary hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center justify-center"
                  >
                    <div className={`text-5xl mb-4 ${tech.color} transition-transform duration-500 group-hover:scale-110`}>
                      {tech.icon}
                    </div>
                    <span className="text-md font-bold text-text-light dark:text-text-dark block">
                      {tech.nombre}
                    </span>
                    <span className="text-[11px] text-primary font-bold uppercase tracking-wider mt-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/20">
                      {tech.subtitulo}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}