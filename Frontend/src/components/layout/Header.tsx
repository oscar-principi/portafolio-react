import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

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
  }, [darkMode]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-50 bg-bg-light/95 dark:bg-bg-dark/95 backdrop-blur-sm transition-all duration-300 border-b border-primary/10"
        style={{
          boxShadow: "0 4px 20px rgba(255, 0, 0, 0.15)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo - Corregido a text-text-light/dark */}
          <h1 className="text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark tracking-tight transition-colors">
            Oscar Príncipi
          </h1>

          <div className="flex items-center gap-4">
            {/* Desktop Navigation - Corregido a text-text-light/dark */}
            <nav className="hidden lg:flex items-center gap-8 mr-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* BOTÓN MODO OSCURO */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl bg-surface-light dark:bg-surface-dark text-primary border border-primary/20 hover:scale-110 transition-all active:scale-95 shadow-sm"
              aria-label="Cambiar tema"
            >
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setDrawerOpen(!drawerOpen)}
              className="lg:hidden p-2 text-primary focus:outline-none"
            >
              <Menu size={32} strokeWidth={2.5} />
            </button>
          </div>
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
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                className="text-2xl font-bold text-text-light dark:text-text-dark hover:text-primary transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </aside>
      </div>
    </>
  );
}