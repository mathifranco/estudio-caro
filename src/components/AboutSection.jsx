import React from 'react';
import retrato from '../assets/img/RetratoCaro.webp';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  
  const scrollToAgenda = (e) => {
    e.preventDefault();
    // Buscamos el elemento por ID
    const element = document.getElementById('agenda'); 
    
    if (element) {
      // Usamos scrollIntoView para un desplazamiento suave y preciso
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  return (
    <section id="sobre-mi" className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* COLUMNA IZQUIERDA: IMAGEN */}
        <div className="w-full md:w-1/2">
          <div className="relative aspect-[3/4] bg-hueso overflow-hidden hover:grayscale-0 transition-all duration-1000">
             <img 
               src={retrato}
               alt="Carolina Pereyra" 
               className="w-full h-full object-cover"
             />
          </div>
        </div>
        
        {/* COLUMNA DERECHA: TEXTO */}
        <div className="w-full md:w-1/2 space-y-8">
          <h2 className="font-base text-2xl md:text-4xl text-primario leading-tight">
            HOLA, SOY CARO
          </h2>
          <p className="font-base text-sm leading-relaxed text-gray-600 max-w-md">
            Soy maquilladora y peinadora especializada en el maquillaje para pieles con patologías. Con más de 10 años de experiencia, mi objetivo es realzar la belleza natural de cada persona, buscando que cada experiencia no sea solo un servicio de estética, sino un momento para conectar con una misma, sentirse segura y disfrutar de cada ocasión especial. También realizo diseño de cejas y servicios beauty pensados para acompañarte en tu día a día y en tus momentos más importantes.
          </p>
                    
                    {}
                    <Link 
                      to="/agenda" 
                      className="border border-primario px-10 py-4 font-base text-[10px] tracking-[4px] uppercase hover:bg-primario hover:text-white transition-all duration-500 inline-block text-center"
                    >
                      Ver Agenda y Reservar
                    </Link>

                  </div>
                </div>
              </section>
            );
          };

export default AboutSection;