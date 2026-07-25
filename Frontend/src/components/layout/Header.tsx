import { useState } from "react";
import { Menu, X, Home, Briefcase, Workflow, type LucideIcon } from "lucide-react";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Tipamos el array para que TS sepa que Icon es un LucideIcon
  const navLinks: { name: string; href: string; Icon: LucideIcon }[] = [
    { name: "Home", href: "#home", Icon: Home },
    { name: "Proceso", href: "#roadmap", Icon: Workflow },
    { name: "Proyectos", href: "#proyectos", Icon: Briefcase },
  ];

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-bg-dark/70 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/10 transition-all duration-300">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-6 h-16 sm:h-20">
          <a
            href="#home"
            aria-label="Oscar Príncipi — Inicio"
            className="shrink-0 flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-linear-to-br from-primary to-secondary text-white font-bold text-lg sm:text-xl tracking-tight shadow-lg shadow-primary/30 hover:scale-105 transition-transform duration-300"
          >
            OP
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                className="text-sm font-medium text-text-dark hover:text-primary transition-colors flex items-center gap-2 px-3 py-2 rounded-full hover:bg-primary/10 group"
              >
                <Icon size={16} className="text-primary/70 group-hover:text-primary transition-colors" />
                {name}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="lg:hidden p-2 text-primary rounded-full hover:bg-primary/10 transition-all focus:outline-none"
            aria-label="Abrir menú"
          >
            <Menu size={24} strokeWidth={2.5} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-60 lg:hidden transition-opacity duration-300 ${
          drawerOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setDrawerOpen(false)}
        />

        <aside
          className={`absolute top-0 right-0 h-full w-72 bg-bg-dark shadow-2xl p-8 transform transition-transform duration-300 ease-in-out ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setDrawerOpen(false)}
              className="text-primary"
            >
              <X size={32} />
            </button>
          </div>

          <nav className="flex flex-col gap-8">
            {navLinks.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                onClick={() => setDrawerOpen(false)}
                className="text-2xl font-bold text-text-dark hover:text-primary transition-all flex items-center gap-4"
              >
                <Icon size={28} className="text-primary" />
                {name}
              </a>
            ))}
          </nav>
        </aside>
      </div>
    </>
  );
}
