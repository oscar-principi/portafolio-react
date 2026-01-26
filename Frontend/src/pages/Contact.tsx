import { toast } from "sonner";
import React, { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { ContactApi, type ContactRequest } from "../api/ContactApi";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<ContactRequest>({
    name: "",
    email: "",
    motivo: "",
    mensaje: "",
  });

  const isEmailValid = (email: string) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);

  const isFormValid =
    form.name.trim() !== "" &&
    isEmailValid(form.email) &&
    form.motivo.trim() !== "" &&
    form.mensaje.trim() !== "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [cooldown, setCooldown] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid || cooldown) return;

    setLoading(true);
    setCooldown(true);

    try {
      const response = await ContactApi.sendContact(form);
      if (response.success) {
        toast.success("¡Mensaje enviado con éxito!");
        setForm({ name: "", email: "", motivo: "", mensaje: "" });
      } else {
        toast.error("Error: " + response.message);
      }
    } catch (error: any) {
      toast.error("Ocurrió un error inesperado.");
    } finally {
      setLoading(false);
      setTimeout(() => setCooldown(false), 60_000);
    }
  };

  return (
    <section id="contacto" className="py-20 px-6 bg-background-light dark:bg-background-dark scroll-mt-10 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER: Copiado exacto de TechStack para consistencia */}
        <div className="flex flex-col items-center mb-16 group">
          <h2 className="text-4xl md:text-5xl font-black text-text-light dark:text-text-dark tracking-tighter uppercase">
            Contacto
          </h2>
          <div className="w-12 h-1.5 bg-primary rounded-full mt-2 transition-all duration-300 group-hover:w-24"></div>
          <p className="text-muted-light dark:text-muted-dark mt-4 text-center max-w-lg">
            Escribime si tenés alguna propuesta o te interesa que trabajemos juntos en tu proyecto.
          </p>
        </div>

        {/* CARD: Estilo de bordes y sombras igual a los items del stack */}
        <div className="max-w-3xl mx-auto bg-surface-light dark:bg-surface-dark p-8 md:p-12 rounded-[2.5rem] border-2 border-transparent shadow-lg hover:border-primary hover:shadow-primary/10 transition-all duration-300">
          
          {/* INDICADOR DE DISPONIBILIDAD */}
          <div className="flex items-center justify-center gap-2 mb-10">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
            </span>
            <span className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-[0.2em]">
              Disponible
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full bg-transparent border-b-2 border-muted-light/20 dark:border-muted-dark/20 py-2 outline-none focus:border-primary transition-colors text-text-light dark:text-text-dark"
                />
                <label className="absolute left-0 top-2 text-muted-light dark:text-muted-dark transition-all peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-xs">
                  Nombre
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full bg-transparent border-b-2 border-muted-light/20 dark:border-muted-dark/20 py-2 outline-none focus:border-primary transition-colors text-text-light dark:text-text-dark"
                />
                <label className="absolute left-0 top-2 text-muted-light dark:text-muted-dark transition-all peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-xs">
                  Email
                </label>
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                name="motivo"
                value={form.motivo}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full bg-transparent border-b-2 border-muted-light/20 dark:border-muted-dark/20 py-2 outline-none focus:border-primary transition-colors text-text-light dark:text-text-dark"
              />
              <label className="absolute left-0 top-2 text-muted-light dark:text-muted-dark transition-all peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-xs">
                Motivo
              </label>
            </div>

            <div className="relative">
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                rows={4}
                placeholder=" "
                className="peer w-full bg-transparent border-b-2 border-muted-light/20 dark:border-muted-dark/20 py-2 outline-none focus:border-primary transition-colors text-text-light dark:text-text-dark resize-none"
              />
              <label className="absolute left-0 top-2 text-muted-light dark:text-muted-dark transition-all peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-xs">
                Mensaje
              </label>
            </div>

            <div className="flex justify-center pt-6">
              <button
                type="submit"
                disabled={!isFormValid || loading}
                className={`
                  relative w-full md:w-72 py-4 font-black uppercase tracking-widest rounded-full overflow-hidden shadow-lg transition-all active:scale-95 flex items-center justify-center gap-3
                  ${!isFormValid || loading 
                    ? "bg-gray-300 dark:bg-gray-800 text-gray-500 cursor-not-allowed" 
                    : "bg-primary text-white hover:-translate-y-1 hover:shadow-primary/30"}
                `}
              >
                {loading ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <Send size={18} />
                )}
                <span>{loading ? "Enviando" : "Enviar Mensaje"}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}