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
            Maquilladora y peinadora con 10 años de experiencia. Mi pasión es hacer que cada novia se sienta única y especial en su gran día. Mi objetivo es acompañarte en cada paso del proceso, brindándote confianza y creando un look que refleje tu estilo y personalidad. Sé lo importante que es este día para ti, así que sería un honor ser parte de tu celebración!
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