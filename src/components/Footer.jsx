import React from 'react';
import { Link } from 'react-router-dom';
import logoPng from '../assets/img/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hueso text-primario py-20 border-t border-primario/5">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        
        {/* MODIFICADO: Cambiado a grid-cols-4 en pantallas de escritorio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 items-start">
          
          {/* Columna 1: Branding & Info */}
          <div className="space-y-6">
            <img 
              src={logoPng} 
              alt="Caro Pereyra" 
              className="-ml-2 h-6 sm:h-7 md:h-8 w-auto object-contain transition-opacity hover:opacity-80"
            />
            <p className="font-base text-[10px] tracking-[3px] uppercase opacity-50 leading-relaxed">
              Maquillaje & Peinado Profesional <br /> <br /> 
              Basada en Uruguay — Disponible en <br />
              Casa Arbus - Canelones 1989, esq. Juan Manuel Blanes <br /><br />
              WhatsApp: 091 855 090
            </p>
          </div>

          {/* Columna 2: Navegación Rápida (Sincronizada con la Navbar) */}
          <div className="flex flex-col gap-4">
            <span className="font-base text-[9px] font-bold uppercase tracking-[4px] mb-2 opacity-30">Navegación</span>
            <a href="#sobre-mi" className="font-base text-[11px] uppercase tracking-widest hover:text-acento transition-colors">Sobre Mí</a>
            <Link to="/produccion" className="font-base text-[11px] uppercase tracking-widest hover:text-acento transition-colors">Producción</Link>
            <Link to="/brides" className="font-base text-[11px] uppercase tracking-widest hover:text-acento transition-colors">Brides</Link>
            <a href="#contacto" className="font-base text-[11px] uppercase tracking-widest hover:text-acento transition-colors">Contacto</a>
          </div>

          {/* Columna 3: Social & Correo */}
          <div className="flex flex-col gap-4">
            <span className="font-base text-[9px] font-bold uppercase tracking-[4px] mb-2 opacity-30">Social</span>
            <div className="flex gap-8">
              <a href="https://www.instagram.com/caropereyramaquillaje/" target="_blank" rel="noreferrer" className="font-base text-[11px] uppercase tracking-widest hover:text-acento transition-colors">Instagram</a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="font-base text-[11px] uppercase tracking-widest hover:text-acento transition-colors">Pinterest</a>
            </div>
            <div className="mt-6">
              <p className="font-base text-[10px] opacity-40 italic">
                Para consultas directas: <br />
                <span className="not-italic font-bold tracking-tighter text-sm text-primario/80">contacto.caropereyra@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Columna 4: Nueva columna del Mapa con filtro sutil para que no desentone con la web */}
          <div className="flex flex-col gap-4 w-full h-full min-h-[160px]">
            <span className="font-base text-[9px] font-bold uppercase tracking-[4px] mb-2 opacity-30">Estudio</span>
            <div className="w-full h-full min-h-[140px] max-h-[180px] overflow-hidden rounded-sm border border-primario/10 shadow-sm relative grayscale-[30%] opacity-90 contrast-[95%] hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <iframe
              title="Mapa Estudio Caro Pereyra"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6543.91516504554!2d-56.1724064!3d-34.9072366!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a02ab6c167d44b%3A0x869d052df928e1f4!2sCaro%20Pereyra%20Maquillaje!5e0!3m2!1ses-419!2suy!4v1717800000000!5m2!1ses-419!2suy"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
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