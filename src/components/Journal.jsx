import React from 'react';
import { Link } from 'react-router-dom';
import imgCejas from '../assets/img/hilos.webp';
import imgPestanas from '../assets/img/pestanas.webp';
import imgLabios from '../assets/img/labios.webp';

const BeautySpace = () => {
  const beautyServices = [
    {
      id: "01",
      title: "Cejas y Depilación con Hilo",
      description: "Servicios personalizados para realzar y definir tus cejas según tus rasgos y estilo. Podés elegir entre diseño y depilación con hilo (también depilación con hilo de bozo y rostro), brow tinting para aportar mayor definición y profundidad de color, o laminado de cejas para lograr un efecto más ordenado, peinado y con mayor volumen visual. Todos los servicios incluyen diseño de cejas y asesoramiento personalizado.",
      image: imgCejas,
      category: "Estética Facial"
    },
    {
      id: "02",
      title: "Pestañas",
      description: "Realzá tu mirada con lifting de pestañas o extensiones clásicas, según el resultado que estés buscando: natural, definido o más intenso.",
      image: imgPestanas,
      category: "Mirada"
    },
    {
      id: "03",
      title: "Hidratación de Labios",
      description: "Tratamiento de hidratación profunda realizado con Dermapen y ácido hialurónico para mejorar la textura, suavidad y apariencia de los labios. Ideal para labios secos, deshidratados o con falta de uniformidad en su textura.",
      image: imgLabios,
      category: "Cuidado Facial"
    }
  ];

  return (
    <section id="beauty-space" className="py-24 bg-[#F2EFE9] text-primario transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-4 border-b border-primario/10 pb-6">
          <h2 className="font-editorial italic text-5xl md:text-7xl mt-4 text-acento">The Beauty Space</h2>
          <span className="font-base text-[9px] tracking-[4px] uppercase opacity-40">
            Servicios de Beauty
          </span>
        </div>

        <div className="space-y-32">
          {beautyServices.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={service.id} 
                className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${
                  isEven ? '' : 'md:flex-row-reverse'
                }`}
              >
                <div className="w-full md:w-1/2">
                  <div className="overflow-hidden aspect-[16/9] bg-primario/5 shadow-sm">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-103 transition-transform duration-1000 ease-out"
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-center relative">
                  <div className="flex justify-between items-start gap-4 relative">
                    <div className="flex-1 min-w-0">
                      <span className="font-base text-[11px] opacity-40 block mb-2">{service.id}</span>
                      <h3 className="font-editorial text-3xl italic mb-4 text-primario hover:text-acento transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="font-base text-sm text-primario/70 leading-relaxed max-w-xl">
                        {service.description}
                      </p>
                    </div>

                    <span className="font-base text-[9px] uppercase tracking-widest opacity-60 text-right whitespace-nowrap absolute right-0 top-1 md:relative md:top-0 pt-1 shrink-0">
                      {service.category}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-24 text-center">
          <Link 
            to="/agenda" 
            className="inline-block mt-10 bg-acento text-white px-8 py-3 font-base text-[10px] tracking-[8px] uppercase"
          >
            Reservar en agenda
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BeautySpace;