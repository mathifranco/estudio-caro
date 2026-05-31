import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

// 📁 IMPORTAMOS EL LOGO TRANSPARENTE
// (Ajusta la ruta si pusiste la imagen en otra carpeta, ej: '../assets/img/logo.png')
import logoPng from '../assets/img/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (e, id) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      if (id === 'inicio' || id === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-hueso/80 backdrop-blur-md z-[5000] px-8 py-4 flex justify-between items-center border-b border-primario/5">
      
      {/* 👑 CONTENEDOR DEL LOGO (Reemplaza al texto "Home") */}
      <Link 
        to="/" 
        onClick={(e) => scrollToSection(e, 'inicio')} 
        className="cursor-pointer flex items-center"
      >
        <img 
            src={logoPng} 
            alt="Caro Pereyra" 
            /* Agregamos -ml-2 para desplazarlo levemente a la izquierda */
            className="-ml-2 h-6 sm:h-7 md:h-8 w-auto object-contain transition-opacity hover:opacity-80"
          />
      </Link>
      
      {/* Escritorio */}
      <div className="hidden md:flex gap-10 font-base text-[10px] tracking-[3px] uppercase text-primario/70 items-center">
        <Link to="/" onClick={(e) => scrollToSection(e, 'inicio')} className="hover:text-acento transition-colors">Inicio</Link>
        <Link to="/" onClick={(e) => scrollToSection(e, 'sobre-mi')} className="hover:text-acento transition-colors">Sobre mí</Link>
        <Link to="/" onClick={(e) => scrollToSection(e, 'servicios')} className="hover:text-acento transition-colors">Servicios</Link>
        <Link to="/produccion" className="hover:text-acento transition-colors">Producción</Link>
        
        {/* LINK A BRIDES - ESCRITORIO */}
        <Link 
          to="/brides" 
          onClick={() => setIsOpen(false)} 
          className="hover:text-acento transition-colors"
        >
          Brides
        </Link>

        {/* LINK A AGENDA */}
        <Link 
          to="/agenda" 
          onClick={() => setIsOpen(false)}
          className="bg-primario text-white px-4 py-2 hover:bg-acento transition-all duration-300 rounded-sm"
        >
          Agenda
        </Link>

        <Link to="/" onClick={(e) => scrollToSection(e, 'contacto')} className="hover:text-acento transition-colors">Contacto</Link>
      </div>

      {/* Botón Móvil */}
{/* Botón Móvil con Íconos Animados */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="md:hidden text-primario z-[5001] p-2 focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          // ✖️ ÍCONO DE CERRAR (Se muestra cuando el menú está abierto)
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // 🍔 ÍCONO DE HAMBURGUESA (Se muestra por defecto cuando está cerrado)
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Menú Fullscreen Móvil */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-hueso flex flex-col items-center justify-center gap-8 transition-transform duration-700 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <Link 
          to="/agenda" 
          onClick={() => setIsOpen(false)} 
          className="font-editorial italic text-5xl text-acento"
        >
          agenda web
        </Link>
        
        <Link to="/" onClick={(e) => scrollToSection(e, 'inicio')} className="font-editorial italic text-5xl hover:text-acento">inicio</Link>
        <Link to="/" onClick={(e) => scrollToSection(e, 'sobre-mi')} className="font-editorial italic text-5xl hover:text-acento">sobre mí</Link>
        <Link to="/produccion" onClick={() => setIsOpen(false)} className="font-editorial italic text-5xl hover:text-acento">producción</Link>
        
        {/* LINK A BRIDES - MÓVIL */}
        <Link 
          to="/brides" 
          onClick={() => setIsOpen(false)} 
          className="font-editorial italic text-5xl hover:text-acento"
        >
          brides
        </Link>

        <Link to="/" onClick={(e) => scrollToSection(e, 'contacto')} className="font-editorial italic text-5xl hover:text-acento">contacto</Link>
      </div>
    </nav>
  );
};

export default Navbar;