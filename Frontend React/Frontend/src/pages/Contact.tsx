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

  const isEmailValid = (email: string) => {
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  };

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

  if (!isFormValid) return;

  if (cooldown) {
    toast.error("⏳ Esperá 1 minuto antes de volver a enviar el formulario.");
    return;
  }

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
    toast.error("Ocurrió un error inesperado al enviar el mensaje.");
  } finally {
    setLoading(false);
    setTimeout(() => setCooldown(false), 60_000);
  }
};




  return (
    <section id="contacto" className="min-h-screen flex flex-col justify-center px-6 py-2 bg-bg-light dark:bg-bg-dark transition-colors duration-300">
      
      <div className="flex flex-col items-center mb-12 group">
        <h2 className="text-4xl md:text-5xl font-black text-text-light dark:text-text-dark mb-2 tracking-tighter uppercase">
          Contacto
        </h2>
        <div className="w-12 h-1.5 bg-primary rounded-full transition-all duration-500 group-hover:w-24"></div>
        
        <p className="text-muted-light dark:text-muted-dark mt-6 text-center max-w-lg text-lg">
          Escribime si tenés alguna propuesta o te interesa que trabajemos juntos.
        </p>
      </div>

      <div className="w-full max-w-2xl mx-auto bg-surface-light dark:bg-surface-dark p-8 md:p-12 rounded-[2rem] shadow-xl border border-transparent hover:border-primary/20 hover:-translate-y-2 transition-all duration-300 group">
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full bg-bg-light dark:bg-bg-dark border-b-2 border-muted-light/30 dark:border-muted-dark/20 py-3 px-1 outline-none focus:border-primary transition-colors text-text-light dark:text-text-dark"
              />
              <label className="absolute left-1 top-3 text-muted-light dark:text-muted-dark transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs cursor-text">
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
                className="peer w-full bg-bg-light dark:bg-bg-dark border-b-2 border-muted-light/30 dark:border-muted-dark/20 py-3 px-1 outline-none focus:border-primary transition-colors text-text-light dark:text-text-dark"
              />
              <label className="absolute left-1 top-3 text-muted-light dark:text-muted-dark transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs cursor-text">
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
              className="peer w-full bg-bg-light dark:bg-bg-dark border-b-2 border-muted-light/30 dark:border-muted-dark/20 py-3 px-1 outline-none focus:border-primary transition-colors text-text-light dark:text-text-dark"
            />
            <label className="absolute left-1 top-3 text-muted-light dark:text-muted-dark transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs cursor-text">
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
              className="peer w-full bg-bg-light dark:bg-bg-dark border-b-2 border-muted-light/30 dark:border-muted-dark/20 py-3 px-1 outline-none focus:border-primary transition-colors text-text-light dark:text-text-dark resize-none"
            />
            <label className="absolute left-1 top-3 text-muted-light dark:text-muted-dark transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs cursor-text">
              Mensaje
            </label>
          </div>

          <div className="flex justify-center pt-4">
           <button
              type="submit"
              onClick={(e) => {
                if (cooldown) {
                  toast.error("⏳ Esperá 1 minuto antes de volver a enviar el formulario.");
                  e.preventDefault();
                }
              }}
              className={`
                group/btn relative w-full md:w-64 py-4 font-bold rounded-full overflow-hidden shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2
                ${!isFormValid || loading ? "bg-gray-400 text-gray-200 cursor-not-allowed" : "bg-primary text-white hover:-translate-y-1"}
              `}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>Enviar Mensaje</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}