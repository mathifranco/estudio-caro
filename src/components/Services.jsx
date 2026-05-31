import React from 'react';
import { Link } from 'react-router-dom';
import WS_Yerko from '../assets/img/WS_Yerko-Osorio_Seba-Iglesias9.webp'
import produ2 from '../assets/img/produ2.webp'
//import social from '../assets/img/social.webp'
import nowbooking from '../assets/img/nowbooking.webp'

const Services = () => {
  const services = [
    {
      id: '01',
      title: 'Brides',
      category: 'Maquillaje',
      image: WS_Yerko,
      description: 'Servicio exclusivo para novias y madrinas. Buscamos resaltar tu belleza natural con productos de larga duración y un acabado impecable.',
      size: 'large'
    },
    {
      id: '02',
      title: 'Maquillaje Social & Peinados',
      category: 'Branding',
      image: nowbooking,
      description: 'Maquillajes sociales & Peinados. Agenda previa',
      size: 'small'
    },
    {
      id: '03',
      title: 'Arte & Producción',
      category: 'Digital',
      image: produ2,
      description: 'Asesoramiento integral en estética y composición visual para proyectos creativos. Maquillaje artístico y conceptual para producciones de moda, editoriales y campañas publicitarias.',
      size: 'medium'
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-hueso text-primario">
      <div className="max-w-6xl mx-auto px-8">
        
        {/* Cabecera de sección */}
        <div className="mb-16 md:flex items-end justify-between border-b border-primario/10 pb-8">
          <div>
            <span className="font-base text-[10px] tracking-[5px] uppercase opacity-50">Servicios</span>
            <h2 className="font-editorial italic text-5xl md:text-7xl mt-4 text-acento">Experiencias</h2>
          </div>
          <p className="font-base text-xs max-w-xs opacity-60 mt-6 md:mt-0 leading-relaxed">
            Propuestas con las que contamos. Servicios estéticos, espacios de aprendizaje, social makeup, producciones.
          </p>
        </div>

        {/* Grid Asimétrico */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Item 01 - El grande (Izquierda) */}
          <div className="md:col-span-7 group cursor-pointer">
            <div className="overflow-hidden aspect-[4/5] bg-primario/5">
              <img 
                src={services[0].image} 
                alt={services[0].title}
                loading="lazy"
                className="w-full h-full object-cover object-top group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
            </div>
            <div className="mt-6 flex justify-between items-start">
              <div>
                <span className="font-base text-[10px] opacity-40">{services[0].id}</span>
                
                <Link to="/brides" className="block group/title">
                  <h3 className="font-editorial text-2xl italic group-hover/title:text-acento transition-colors duration-300">
                    {services[0].title}
                  </h3>
                </Link>

                <p className="mt-2 font-base text-sm text-primario/60 leading-relaxed max-w-sm">
                  {services[0].description}
                </p>
              </div>
              <span className="font-base text-[9px] uppercase tracking-widest pt-2">{services[0].category}</span>
            </div>
          </div>

          {/* Columna Derecha para los otros dos */}
          <div className="md:col-span-5 flex flex-col gap-12 md:mt-24">
            
            {/* Item 02 */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden aspect-square bg-primario/5">
                <img 
                  src={services[1].image} 
                  alt={services[1].title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
              </div>
              <div className="mt-6">
                <span className="font-base text-[10px] opacity-40">{services[1].id}</span>
                
                <Link to="/agenda" className="block group/title">
                  <h3 className="font-editorial text-2xl italic group-hover/title:text-acento transition-colors duration-300">
                    {services[1].title}
                  </h3>
                </Link>

                <p className="mt-2 font-base text-sm text-primario/60 leading-relaxed">
                  {services[1].description}
                </p>
              </div>
            </div>

            {/* Item 03 */}
            <div className="group cursor-pointer md:pl-12">
              <div className="overflow-hidden aspect-[3/4] bg-primario/5">
                <img 
                  src={services[2].image} 
                  alt={services[2].title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
              </div>
              <div className="mt-6">
                <span className="font-base text-[10px] opacity-40">{services[2].id}</span>
                
                <Link to="/produccion" className="group/title">
                  <h3 className="font-editorial text-2xl italic group-hover/title:text-acento transition-colors duration-300">
                      Arte & Producción
                    </h3>
                </Link>

                <p className="mt-2 font-base text-sm text-primario/60 leading-relaxed">
                  {services[2].description}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;