import React from 'react';
import { Link } from 'react-router-dom';
import novia4 from '../assets/img/novia4.webp';
import produ from '../assets/img/produ.webp';
import nowbooking from '../assets/img/nowbooking.webp';
// Importa tus nuevas fotos aquí abajo cuando las tengas:
import fotoTalleres from '../assets/img/taller.webp';
import fotoQuince from '../assets/img/quince.webp';
import manchas02 from '../assets/img/manchas02.webp';

const Services = () => {
  // Podes cambiar el texto del mensaje después del "text=" usando codificación URL si querés algo más personalizado
  const whatsappUrlTalleres = "https://wa.me/59891855090?text=Hola%20Caro!%20Me%20interesa%20obtener%20información%20sobre%20los%20Talleres%20de%20Automaquillaje.";
  const whatsappUrlQuince = "https://wa.me/59891855090?text=Hola%20Caro!%20Quiero%20consultar%20por%20el%20servicio%20de%20maquillaje%20y%20peinado%20para%20Quinceañeras.";

  const services = [
    {
      id: '01',
      title: 'Maquillaje & Peinado',
      category: 'Social',
      image: nowbooking,
      description: 'Servicios de maquillaje y peinado para eventos sociales, diseñados para crear un look armonioso, duradero y adaptado a tu estilo. Disponibles de forma individual o combinada, tanto en estudio como a domicilio. Los servicios a domicilio requieren un mínimo de reservas y presupuesto personalizado.',
      link: '/agenda'
    },
    {
      id: '02',
      title: 'Producciones',
      category: 'Editorial',
      image: produ,
      description: 'Servicios de beauty para campaigns, editoriales, moda, contenido de marca y sesiones fotográficas. Disponibles en locación o en estudio, con posibilidad de incluir horas de estudio fotográfico según las necesidades de cada proyecto.',
      link: '/produccion'
    },
    {
      id: '03',
      title: 'Talleres de Automaquillaje',
      category: 'Formación',
      image: fotoTalleres,
      description: 'Encuentros grupales mensuales para aprender técnicas de maquillaje adaptadas a tu estilo y rutina. Se realizan en Casa Arbus e incluyen todas las herramientas y productos necesarios para trabajar durante la clase.',
      link: whatsappUrlTalleres,
      isExternal: true // Flag para identificar link externo
    },
    {
      id: '04',
      title: 'Quinceañeras',
      category: 'Social',
      image: fotoQuince,
      description: 'Maquillaje y peinado para quinceañeras y acompañantes, con una propuesta personalizada para que cada detalle acompañe uno de los días más importantes de esta etapa.',
      link: whatsappUrlQuince,
      isExternal: true // Flag para identificar link externo
    },
    {
      id: '05',
      title: 'The Bride Experience',
      category: 'Novias',
      image: novia4,
      description: 'Una experiencia diseñada para acompañarte desde la planificación hasta el gran día, cuidando cada detalle de tu look nupcial.',
      link: '/brides',
      isBride: true
    },
    {
      id: '06',
      title: 'Maquillaje para Pieles con Patologías',
      category: 'Especializado',
      image: manchas02,
      description: 'Un servicio especializado y personalizado para personas con patologías de la piel o que atraviesan procesos médicos que impactan en la piel. A través de técnicas y productos cuidadosamente seleccionados, buscamos realzar tu belleza con comodidad, seguridad y respeto por las necesidades de tu piel, creando una experiencia de bienestar y confianza.',
      link: '/pieles-especiales'
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-hueso text-primario">
      <div className="max-w-[1300px] mx-auto px-8">
        
        {/* Cabecera de sección */}
        <div className="mb-20 md:flex items-end justify-between border-b border-primario/10 pb-8">
          <div>
            <span className="font-base text-[10px] tracking-[5px] uppercase opacity-50">Servicios</span>
            <h2 className="font-editorial italic text-5xl md:text-7xl mt-4 text-acento">Experiencias</h2>
          </div>
          <p className="font-base text-s max-w-xs opacity-60 mt-6 md:mt-0 leading-relaxed">
            Propuestas estéticas, espacios de aprendizaje, social makeup, producciones y experiencias de bienestar personalizadas.
          </p>
        </div>

        {/* CONTENEDOR DE GRIDS ASIMÉTRICOS */}
        <div className="flex flex-col gap-16 md:gap-24">
          
          {/* PRIMER BLOQUE (01, 02, 03) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Item 01 */}
            <div className="md:col-span-6 group cursor-pointer">
              <div className="overflow-hidden aspect-[4/5] bg-primario/5">
                <img 
                  src={services[0].image} 
                  alt={services[0].title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-1000"
                />
              </div>
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <span className="font-base text-[10px] opacity-40">{services[0].id}</span>
                  <Link to={services[0].link} className="block group/title">
                    {/* CAMBIO: text-primario -> text-acento */}
                    <h3 className="font-editorial text-2xl italic text-acento transition-colors duration-300">
                      {services[0].title}
                    </h3>
                  </Link>
                  <p className="mt-2 font-base text-sm text-primario/60 leading-relaxed max-w-sm">
                    {services[0].description}
                  </p>
                </div>
                <span className="font-base text-[9px] uppercase tracking-widest pt-2 opacity-60">{services[0].category}</span>
              </div>
            </div>

            {/* Columna Derecha (02 y 03) */}
            <div className="md:col-span-5 flex flex-col gap-16 md:mt-24">
              {/* Item 02 */}
              <div className="group cursor-pointer">
                <div className="overflow-hidden aspect-square bg-primario/5">
                  <img 
                    src={services[1].image} 
                    alt={services[1].title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                  />
                </div>
                <div className="mt-6 flex justify-between items-start">
                  <div>
                    <span className="font-base text-[10px] opacity-40">{services[1].id}</span>
                    <Link to={services[1].link} className="block group/title">
                      {/* CAMBIO: text-primario -> text-acento */}
                      <h3 className="font-editorial text-2xl italic text-acento transition-colors duration-300">
                        {services[1].title}
                      </h3>
                    </Link>
                    <p className="mt-2 font-base text-sm text-primario/60 leading-relaxed">
                      {services[1].description}
                    </p>
                  </div>
                  <span className="font-base text-[9px] uppercase tracking-widest pt-2 opacity-60">{services[1].category}</span>
                </div>
              </div>

              {/* Item 03 - Talleres de Automaquillaje */}
              <div className="group cursor-pointer md:pl-12">
                <div className="overflow-hidden aspect-[4/3] bg-primario/5">
                  <img 
                    src={services[2].image} 
                    alt={services[2].title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                  />
                </div>
                <div className="mt-6 flex justify-between items-start">
                  <div>
                    <span className="font-base text-[10px] opacity-40">{services[2].id}</span>
                    {services[2].isExternal ? (
                      <a href={services[2].link} target="_blank" rel="noopener noreferrer" className="block group/title">
                        {/* CAMBIO: text-primario -> text-acento */}
                        <h3 className="font-editorial text-2xl italic text-acento transition-colors duration-300">
                          {services[2].title}
                        </h3>
                      </a>
                    ) : (
                      <Link to={services[2].link} className="block group/title">
                        {/* CAMBIO: text-primario -> text-acento */}
                        <h3 className="font-editorial text-2xl italic text-acento transition-colors duration-300">
                          {services[2].title}
                        </h3>
                      </Link>
                    )}
                    <p className="mt-2 font-base text-sm text-primario/60 leading-relaxed">
                      {services[2].description}
                    </p>
                  </div>
                  <span className="font-base text-[9px] uppercase tracking-widest pt-2 opacity-60">{services[2].category}</span>
                </div>
              </div>
            </div>

          </div>

          {/* SEGUNDO BLOQUE (04, 05, 06) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-16 md:pt-24">
            
            {/* COMPONENTE AUXILIAR SOLO PARA CELULARES */}
            <div className="block md:hidden space-y-16">
              
              {/* Celular: 04 - Quinceañeras */}
              <div className="group cursor-pointer">
                <div className="overflow-hidden aspect-[3/4] bg-primario/5">
                  <img src={services[3].image} alt={services[3].title} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="mt-6 flex justify-between items-start">
                  <div>
                    <span className="font-base text-[10px] opacity-40">{services[3].id}</span>
                    <a href={services[3].link} target="_blank" rel="noopener noreferrer" className="block">
                      <h3 className="font-editorial text-2xl italic text-acento">{services[3].title}</h3>
                    </a>
                    <p className="mt-2 font-base text-sm text-primario/60">{services[3].description}</p>
                  </div>
                  <span className="font-base text-[9px] uppercase tracking-widest pt-2 opacity-60">{services[3].category}</span>
                </div>
              </div>

              {/* Celular: 05 - Novias */}
              <div className="group cursor-pointer">
                <div className="overflow-hidden aspect-[4/5] bg-primario/5">
                  <img src={services[4].image} alt={services[4].title} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="mt-6 flex justify-between items-start gap-4 relative">
                  <div>
                    <span className="font-base text-[10px] opacity-40">{services[4].id}</span>
                    <Link to={services[4].link} className="block">
                      <h3 className="font-editorial text-2xl italic text-acento">{services[4].title}</h3>
                    </Link>
                    <p className="mt-2 font-base text-sm  text-primario/60">{services[4].description}</p>
                    <Link to={services[4].link} className="inline-block mt-10 bg-acento text-center text-white px-8 py-3 font-base text-[10px] tracking-[2px] uppercase">
                      The Bride Experience
                    </Link>
                  </div>
                  <span className="font-base text-[9px] uppercase tracking-widest opacity-60 pt-2">{services[4].category}</span>
                </div>
              </div>

              {/* Celular: 06 - Pieles Especiales */}
              <div className="group cursor-pointer">
                <div className="overflow-hidden aspect-square bg-primario/5">
                  <img src={services[5].image} alt={services[5].title} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="mt-6 flex justify-between items-start">
                  <div>
                    <span className="font-base text-[10px] opacity-40">{services[5].id}</span>
                    <Link to={services[5].link} className="block">
                      <h3 className="font-editorial text-2xl italic text-acento">{services[5].title}</h3>
                    </Link>
                    <p className="mt-2 font-base text-sm text-primario/60">{services[5].description}</p>
                  </div>
                  <span className="font-base text-[9px] uppercase tracking-widest pt-2 opacity-60">{services[5].category}</span>
                </div>
              </div>

            </div>

            {/* VISTA ESCRITORIO (md:) */}
            
            {/* Columna Izquierda en Web (04 y 06) */}
            <div className="hidden md:flex md:col-span-5 flex-col gap-16 md:order-1">
              
              {/* Web: Item 04 - Quinceañeras */}
              <div className="group cursor-pointer md:pr-12 relative z-10 md:-mt-130">
                <div className="overflow-hidden aspect-[3/4] bg-primario/5">
                  <img 
                    src={services[3].image} 
                    alt={services[3].title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                  />
                </div>
                <div className="mt-6 flex justify-between items-start">
                  <div>
                    <span className="font-base text-[10px] opacity-40">{services[3].id}</span>
                    {services[3].isExternal ? (
                      <a href={services[3].link} target="_blank" rel="noopener noreferrer" className="block group/title">
                        {/* CAMBIO: text-primario -> text-acento */}
                        <h3 className="font-editorial text-2xl italic text-acento transition-colors duration-300">
                          {services[3].title}
                        </h3>
                      </a>
                    ) : (
                      <Link to={services[3].link} className="block group/title">
                        {/* CAMBIO: text-primario -> text-acento */}
                        <h3 className="font-editorial text-2xl italic text-acento transition-colors duration-300">
                          {services[3].title}
                        </h3>
                      </Link>
                    )}
                    <p className="mt-2 font-base text-sm text-primario/60 leading-relaxed">
                      {services[3].description}
                    </p>
                  </div>
                  <span className="font-base text-[9px] uppercase tracking-widest pt-2 opacity-60">{services[3].category}</span>
                </div>
              </div>

              {/* Web: Item 06 - Maquillaje para Pieles con Patologías */}
              <div className="group cursor-pointer">
                <div className="overflow-hidden aspect-square bg-primario/5">
                  <img 
                    src={services[5].image} 
                    alt={services[5].title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                  />
                </div>
                <div className="mt-6 flex justify-between items-start">
                  <div>
                    <span className="font-base text-[10px] opacity-40">{services[5].id}</span>
                    <Link to={services[5].link} className="block group/title">
                      {/* CAMBIO: text-primario -> text-acento */}
                      <h3 className="font-editorial text-2xl italic text-acento transition-colors duration-300">
                        {services[5].title}
                      </h3>
                    </Link>
                    <p className="mt-2 font-base text-sm text-primario/60 leading-relaxed">
                      {services[5].description}
                    </p>
                  </div>
                  <span className="font-base text-[9px] uppercase tracking-widest pt-2 opacity-60">{services[5].category}</span>
                </div>
              </div>

            </div>

            {/* Columna Derecha en Web (05 - Novias Destacado) */}
            <div className="hidden md:block md:col-span-7 group cursor-pointer md:order-2 md:-mt-36">
              <div className="overflow-hidden aspect-[4/5] bg-primario/5">
                <img 
                  src={services[4].image} 
                  alt={services[4].title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-1000"
                />
              </div>
              
              <div className="mt-6 flex justify-between items-start gap-4 relative">
                <div className="w-full md:flex-1 min-w-0">
                  <span className="font-base text-[10px] opacity-40">{services[4].id}</span>
                  <Link to={services[4].link} className="block group/title">
                    {/* CAMBIO: text-primario -> text-acento */}
                    <h3 className="font-editorial text-2xl italic text-acento transition-colors duration-300">
                      {services[4].title}
                    </h3>
                  </Link>
                  
                  <p className="mt-2 font-base text-sm text-primario/60 leading-relaxed max-w-xl">
                    {services[4].description}
                  </p>
                  
                  <Link 
                    to={services[4].link} 
                    className="inline-block mt-10 bg-acento text-white px-6 py-3 font-base text-[10px] tracking-[6px] uppercase hover:bg-primario transition-all duration-700 ease-in-out shadow-md whitespace-nowrap"
                  >
                    The Bride Experience
                  </Link>
                </div>

                <span className="font-base text-[9px] uppercase tracking-widest opacity-60 text-right whitespace-nowrap absolute right-0 top-2 md:relative md:top-0 md:pt-2 shrink-0">
                  {services[4].category}
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;