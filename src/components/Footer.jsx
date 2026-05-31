import React from 'react';
import logoPng from '../assets/img/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hueso text-primario py-20 border-t border-primario/5">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-start">
          
          {/* Columna 1: Branding */}
          <div className="space-y-6">

                    <img 
                        src={logoPng} 
                        alt="Caro Pereyra" 
                        /* Agregamos -ml-2 para desplazarlo levemente a la izquierda */
                        className="-ml-2 h-6 sm:h-7 md:h-8 w-auto object-contain transition-opacity hover:opacity-80"
                      />
            <p className="font-base text-[10px] tracking-[3px] uppercase opacity-50 leading-relaxed">
              Maquillaje & Peinado Profesional <br /> <br /> 
              Basada en Uruguay — Disponible en <br />
              Casa Arbus - Canelones 1989, esq. Juan Manuel Blanes <br /><br />
              WhatsApp: 091 855 090
            </p>
          </div>

          {/* Columna 2: Navegación Rápida */}
          <div className="flex flex-col gap-4">
            <span className="font-base text-[9px] font-bold uppercase tracking-[4px] mb-2 opacity-30">Navegación</span>
            <a href="#sobre-mi" className="font-base text-[11px] uppercase tracking-widest hover:text-acento transition-colors">Sobre Mí</a>
            <a href="#servicios" className="font-base text-[11px] uppercase tracking-widest hover:text-acento transition-colors">Servicios</a>
            <a href="#contacto" className="font-base text-[11px] uppercase tracking-widest hover:text-acento transition-colors">Contacto</a>
          </div>

          {/* Columna 3: Social & News */}
          <div className="flex flex-col gap-4">
            <span className="font-base text-[9px] font-bold uppercase tracking-[4px] mb-2 opacity-30">Social</span>
            <div className="flex gap-8">
              <a href="https://www.instagram.com/caropereyramaquillaje/" target="_blank" rel="noreferrer" className="font-base text-[11px] uppercase tracking-widest hover:text-acento transition-colors">Instagram</a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="font-base text-[11px] uppercase tracking-widest hover:text-acento transition-colors">Pinterest</a>
            </div>
            <div className="mt-8">
              <p className="font-base text-[10px] opacity-40 italic">
                Para consultas directas: <br />
                <span className="not-italic font-bold tracking-tighter text-sm">contacto.caropereyra@gmail.com</span>
              </p>
            </div>
          </div>

        </div>

        {/* Línea final de Copyright */}
        <div className="mt-24 pt-8 border-t border-primario/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-base text-[9px] tracking-widest uppercase opacity-30">
            © {currentYear} Caro Pereyra. Montevideo, Uruguay.
          </p>
          <p className="font-base text-[9px] tracking-widest uppercase opacity-30 italic">
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;