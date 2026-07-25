import { useEffect, useRef, useState } from "react";
import {
  ClipboardList,
  Network,
  Puzzle,
  Database,
  Server,
  LayoutGrid,
  Layers,
  GitBranch,
  Workflow,
  BadgeCheck,
  ShieldCheck,
  Cloud,
  type LucideIcon,
} from "lucide-react";

interface RoadmapTask {
  title: string;
  description: string;
  Icon: LucideIcon;
}

interface RoadmapPhase {
  phase: string;
  Icon: LucideIcon;
  tasks: RoadmapTask[];
}

const phases: RoadmapPhase[] = [
  {
    phase: "Análisis del Sistema",
    Icon: ClipboardList,
    tasks: [
      {
        title: "Relevamiento",
        description: "Identificación de las necesidades del negocio y del usuario para definir alcance y objetivos.",
        Icon: ClipboardList,
      },
    ],
  },
  {
    phase: "Diseño del Sistema",
    Icon: Network,
    tasks: [
      {
        title: "Arquitectura",
        description: "Estructura del sistema y sus componentes, pensada para sostener el crecimiento del proyecto.",
        Icon: Network,
      },
      {
        title: "Base de Datos",
        description: "Modelado de datos orientado a la integridad y al rendimiento del sistema.",
        Icon: Database,
      },
    ],
  },
  {
    phase: "Programación",
    Icon: Layers,
    tasks: [
      {
        title: "Backend",
        description: "Lógica de negocio y APIs bien documentadas que integran cada componente del sistema.",
        Icon: Server,
      },
      {
        title: "Frontend",
        description: "Interfaces claras, responsivas y accesibles, construidas priorizando la experiencia del usuario.",
        Icon: LayoutGrid,
      },
    ],
  },
  {
    phase: "Calidad y Entrega",
    Icon: BadgeCheck,
    tasks: [
      {
        title: "Versionado",
        description: "Historial claro y estrategia de ramas ordenada para el trabajo colaborativo.",
        Icon: GitBranch,
      },
      {
        title: "CI/CD",
        description: "Integración y despliegue continuo, con control de calidad en cada entrega.",
        Icon: Workflow,
      },
    ],
  },
  {
    phase: "Seguridad",
    Icon: ShieldCheck,
    tasks: [
      {
        title: "Protección de Datos",
        description: "Autenticación, autorización y protección de datos incorporadas desde el diseño.",
        Icon: ShieldCheck,
      },
    ],
  },
  {
    phase: "Despliegue",
    Icon: Cloud,
    tasks: [
      {
        title: "Cloud",
        description: "Infraestructura escalable y de alta disponibilidad, desplegada según las necesidades del proyecto.",
        Icon: Cloud,
      },
    ],
  },
];

function PhaseItem({ phase, index }: { phase: RoadmapPhase; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { Icon } = phase;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative pl-20 md:pl-24 pb-14 last:pb-0 transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
      }`}
      style={{ transitionDelay: visible ? `${index * 90}ms` : "0ms" }}
    >
      <div
        className={`absolute left-0 top-0 w-14 h-14 rounded-2xl flex items-center justify-center border-2 transition-all duration-500 ${
          visible
            ? "bg-linear-to-br from-primary to-secondary border-primary text-white scale-100 shadow-lg shadow-primary/40"
            : "bg-surface-dark border-primary/20 text-primary scale-90"
        }`}
      >
        <Icon size={24} />
      </div>

      <span className="text-xs font-black text-primary/60 tracking-widest">
        FASE {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="text-xl md:text-2xl font-bold text-text-dark mt-1 mb-4">
        {phase.phase}
      </h3>

      <div className="rounded-2xl border border-primary/20 bg-surface-dark/40 backdrop-blur-sm p-5 space-y-4 max-w-md shadow-[0_0_25px_-8px_rgba(124,58,237,0.35)]">
        {phase.tasks.map((task) => {
          const TaskIcon = task.Icon;
          return (
            <div key={task.title} className="flex items-start gap-3">
              <div className="shrink-0 w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <TaskIcon size={16} />
              </div>
              <div>
                <p className="text-sm font-bold text-text-dark">
                  {task.title}
                </p>
                <p className="text-xs text-muted-dark leading-snug mt-0.5">
                  {task.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 px-6 scroll-mt-10">
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col items-center mb-16 group text-center">
          <h2 className="text-4xl md:text-5xl font-black text-text-dark tracking-tighter uppercase">
            Desarrollo Fullstack
          </h2>
          <div className="w-12 h-1.5 bg-linear-to-r from-primary via-secondary to-accent rounded-full mt-2 transition-all duration-300 group-hover:w-24"></div>
          <p className="text-muted-dark mt-4 max-w-lg">
            Del problema a la solución. 
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute left-7 top-0 bottom-0 w-px bg-linear-to-b from-primary/40 via-secondary/25 to-accent/10"
            aria-hidden="true"
          />
          {phases.map((phase, index) => (
            <PhaseItem key={phase.phase} phase={phase} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
