import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

// 📁 IMPORTAMOS EL LOGO TRANSPARENTE
import logoPng from '../assets/img/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Función para manejar el scroll interno fluido
  const handleNavigation = (e, id) => {
    e.preventDefault();
    setIsOpen(false); // Cerramos el menú móvil

    if (location.pathname !== '/') {
      // Si por alguna razón estás en /brides o /produccion, te manda a la home y scrollea
      navigate('/');
      setTimeout(() => {
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
      }, 350);
    } else {
      // Si ya estás en la Home, hace el scroll directo sin tocar rutas
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
  };

  return (
    <nav className="fixed top-0 w-full bg-hueso/80 backdrop-blur-md z-[5000] py-4 border-b border-primario/5">
      {/* CONTENEDOR INTERNO */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 flex justify-between items-center w-full">
        
        {/* 👑 CONTENEDOR DEL LOGO */}
        <a 
          href="#inicio" 
          onClick={(e) => handleNavigation(e, 'inicio')} 
          className="cursor-pointer flex items-center"
        >
          <img 
            src={logoPng} 
            alt="Caro Pereyra" 
            className="-ml-2 h-6 sm:h-7 md:h-8 w-auto object-contain transition-opacity hover:opacity-80"
          />
        </a>
        
        {/* ========================================================= */}
        {/* MENÚ ESCRITORIO                                           */}
        {/* ========================================================= */}
        <div className="hidden md:flex gap-10 font-base text-[10px] tracking-[3px] uppercase text-primario/70 items-center">
          {/* 1. Link directo a Agenda */}
          <Link 
            to="/agenda" 
            className="bg-primario text-white px-4 py-2 hover:bg-acento transition-all duration-300 rounded-sm"
          >
            Agenda
          </Link>

          {/* 2. Inicio */}
          <a href="#inicio" onClick={(e) => handleNavigation(e, 'inicio')} className="hover:text-acento transition-colors cursor-pointer">Inicio</a>
          
          {/* 3. Sobre mí */}
          <a href="#sobre-mi" onClick={(e) => handleNavigation(e, 'sobre-mi')} className="hover:text-acento transition-colors cursor-pointer">Sobre mí</a>
          
          {/* 4. Producción */}
          <Link to="/produccion" className="hover:text-acento transition-colors">Producción</Link>
          
          {/* 5. The Beauty Space */}
          <a 
            href="#beauty-space" 
            onClick={(e) => handleNavigation(e, 'beauty-space')} 
            className="hover:text-acento transition-colors text-acento/90 font-medium cursor-pointer"
          >
            The Beauty Space
          </a>

          {/* 6. The Bride Experience (Brides) */}
          <Link to="/brides" className="hover:text-acento transition-colors">Brides</Link>

          {/* 7. Contacto */}
          <a href="#contacto" onClick={(e) => handleNavigation(e, 'contacto')} className="hover:text-acento transition-colors cursor-pointer">Contacto</a>
        </div>

        {/* Botón Móvil */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-primario z-[5001] p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* ========================================================= */}
        {/* MENÚ FULLSCREEN MÓVIL                                     */}
        {/* ========================================================= */}
        <div className={`fixed top-0 left-0 w-full h-screen bg-hueso flex flex-col items-center justify-center gap-8 transition-transform duration-700 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          {/* 1. Agenda Web */}
          <Link 
            to="/agenda" 
            onClick={() => setIsOpen(false)} 
            className="font-editorial italic text-5xl text-acento"
          >
            agenda web
          </Link>
          
          {/* 2. Inicio */}
          <a href="#inicio" onClick={(e) => handleNavigation(e, 'inicio')} className="font-editorial italic text-5xl hover:text-acento cursor-pointer">inicio</a>
          
          {/* 3. Sobre mí */}
          <a href="#sobre-mi" onClick={(e) => handleNavigation(e, 'sobre-mi')} className="font-editorial italic text-5xl hover:text-acento cursor-pointer">sobre mí</a>
          
          {/* 4. Producción */}
          <Link to="/produccion" onClick={() => setIsOpen(false)} className="font-editorial italic text-5xl hover:text-acento">producción</Link>
          
          {/* 5. The Beauty Space */}
          <a 
            href="#beauty-space" 
            onClick={(e) => handleNavigation(e, 'beauty-space')} 
            className="font-editorial italic text-5xl hover:text-acento cursor-pointer"
          >
            the beauty space
          </a>

          {/* 6. Bride Experience */}
          <Link to="/brides" onClick={() => setIsOpen(false)} className="font-editorial italic text-5xl hover:text-acento">bride experience</Link>

          {/* 7. Contacto */}
          <a href="#contacto" onClick={(e) => handleNavigation(e, 'contacto')} className="font-editorial italic text-5xl hover:text-acento cursor-pointer">contacto</a>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;