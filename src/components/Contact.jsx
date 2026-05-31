import React from 'react';

const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-white text-primario">
      <div className="max-w-4xl mx-auto px-8">
        
        {/* Cabecera del formulario */}
        <div className="text-center mb-20 space-y-4">
          <span className="font-base text-[10px] tracking-[6px] uppercase opacity-40">Get in touch</span>
          <h2 className="font-editorial italic text-5xl md:text-7xl text-acento">Comencemos algo</h2>
          <p className="font-base text-xs opacity-60 max-w-sm mx-auto leading-relaxed">
            Contame tu idea. Me pondré en contacto contigo en las próximas 48 horas para agendar una charla.
          </p>
        </div>

        <form 
            action="https://formspree.io/f/xnjlabej" 
            method="POST" 
            className="space-y-12"
            
            >
                <input type="hidden" name="_next" value="http://localhost:5173" /> {/*Cambiar cuando estemos live*/}
            {/* Fila 1: Nombre y Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex flex-col gap-2">
                <label className="font-base text-[10px] uppercase tracking-widest opacity-50">Nombre completo</label>
                <input 
                    name="full_name" // Agregado
                    type="text" 
                    required // Recomendado para no recibir mails anónimos
                    placeholder="Ej. Sofía Páez"
                    className="bg-transparent border-b border-primario/20 py-2 focus:border-acento outline-none font-editorial italic text-xl transition-colors placeholder:opacity-20"
                />
                </div>
                <div className="flex flex-col gap-2">
                <label className="font-base text-[10px] uppercase tracking-widest opacity-50">Email de contacto</label>
                <input 
                    name="email" // Agregado
                    type="email" 
                    required 
                    placeholder="hola@tuemail.com"
                    className="bg-transparent border-b border-primario/20 py-2 focus:border-acento outline-none font-editorial italic text-xl transition-colors placeholder:opacity-20"
                />
                </div>
            </div>

            {/* Fila 2: Fecha y Lugar */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex flex-col gap-2">
                <label className="font-base text-[10px] uppercase tracking-widest opacity-50">Fecha del evento</label>
                <input 
                    name="event_date" // Agregado
                    type="text" 
                    placeholder="Octubre 2026"
                    className="bg-transparent border-b border-primario/20 py-2 focus:border-acento outline-none font-editorial italic text-xl transition-colors placeholder:opacity-20"
                />
                </div>
                <div className="flex flex-col gap-2">
                <label className="font-base text-[10px] uppercase tracking-widest opacity-50">Lugar del evento</label>
                <input 
                    name="location" // Agregado
                    type="text" 
                    placeholder="Maldonado, Uruguay"
                    className="bg-transparent border-b border-primario/20 py-2 focus:border-acento outline-none font-editorial italic text-xl transition-colors placeholder:opacity-20"
                />
                </div>
            </div>

            {/* Fila 3: Presupuesto y Zoom Call */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex flex-col gap-4">
                </div>
                <div className="flex flex-col gap-4">
                <label className="font-base text-[10px] uppercase tracking-widest opacity-50">¿Necesitas una Zoom Call previa?</label>
                <div className="flex gap-8 pt-2">
                    <label className="flex items-center gap-2 cursor-pointer font-base text-xs opacity-70">
                    <input type="radio" name="zoom_requested" value="Sí" className="accent-acento" /> Sí, por favor
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer font-base text-xs opacity-70">
                    <input type="radio" name="zoom_requested" value="No" className="accent-acento" /> Por ahora no
                    </label>
                </div>
                </div>
            </div>

            {/* Fila 4: Mensaje */}
            <div className="flex flex-col gap-2 pt-4">
                <label className="font-base text-[10px] uppercase tracking-widest opacity-50">Info adicional</label>
                <textarea 
                name="message" // Agregado
                rows="4" 
                placeholder="Hablemos de los detalles, el estilo, qué te inspira..."
                className="bg-transparent border-b border-primario/20 py-2 focus:border-acento outline-none font-editorial italic text-xl transition-colors placeholder:opacity-60 resize-none"
                ></textarea>
            </div>

            {/* Botón de envío */}
            <div className="pt-12 flex justify-center">
                <button 
                type="submit"
                className="bg-acento text-white px-16 py-5 font-base text-[10px] tracking-[6px] uppercase hover:bg-primario transition-all duration-700 ease-in-out shadow-xl"
                >
                Enviar Solicitud
                </button>
            </div>
            </form>
      </div>
    </section>
  );
};

export default Contact;