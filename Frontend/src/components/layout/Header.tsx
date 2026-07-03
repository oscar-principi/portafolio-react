import { useState, useEffect } from "react"; 
import { Sun, Moon, Menu, X, Home, Briefcase, Workflow, type LucideIcon } from "lucide-react";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    // El favicon (pestaña del navegador) sigue el tema, igual que la foto del hero
    const favicon = document.getElementById("favicon");
    if (favicon) {
      const imagen = darkMode ? "favicon-marron" : "favicon-blanco";
      favicon.setAttribute(
        "href",
        `${import.meta.env.BASE_URL}images/perfil/${imagen}.png`
      );
    }
  }, [darkMode]);

  // Tipamos el array para que TS sepa que Icon es un LucideIcon
  const navLinks: { name: string; href: string; Icon: LucideIcon }[] = [
    { name: "Home", href: "#home", Icon: Home },
    { name: "Proceso", href: "#roadmap", Icon: Workflow },
    { name: "Proyectos", href: "#proyectos", Icon: Briefcase },
  ];

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-fit">
        <div
          className="flex items-center gap-2 sm:gap-4 pl-5 pr-3 h-14 rounded-full bg-bg-light/60 dark:bg-bg-dark/50 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg shadow-black/5 transition-all duration-300"
        >
          <h1 className="text-lg font-bold text-text-light dark:text-text-dark tracking-tight whitespace-nowrap">
            Oscar Príncipi
          </h1>

          <div className="hidden lg:block w-px h-6 bg-primary/20" />

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                className="text-sm font-medium text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-2 px-3 py-2 rounded-full hover:bg-primary/10 group"
              >
                <Icon size={16} className="text-primary/70 group-hover:text-primary transition-colors" />
                {name}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full text-primary hover:bg-primary/10 transition-all active:scale-95"
            aria-label="Cambiar tema"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

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
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
          drawerOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setDrawerOpen(false)}
        />

        <aside
          className={`absolute top-0 right-0 h-full w-72 bg-bg-light dark:bg-bg-dark shadow-2xl p-8 transform transition-transform duration-300 ease-in-out ${
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
                className="text-2xl font-bold text-text-light dark:text-text-dark hover:text-primary transition-all flex items-center gap-4"
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