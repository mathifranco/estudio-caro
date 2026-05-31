import React, { useState, useEffect } from 'react'; // 1. Agregamos useState y useEffect
import novia11 from '../assets/img/novia11.webp';
import novia8 from '../assets/img/novia8.webp';
import novia3 from '../assets/img/novia3.webp';
import novia4 from '../assets/img/novia4.webp';
import novia5 from '../assets/img/novia5.webp';
import novia6 from '../assets/img/novia6.webp';
//import novia13 from '../assets/img/novia13.webp';

const Philosophy = () => {
  // 2. Metemos todas las fotos en un array para poder recorrerlas
  const imagenes = [novia11, novia8, novia3, novia4, novia5, novia6];
  
  // 3. Estado para saber qué foto mostrar
  const [index, setIndex] = useState(0);

  // 4. Lógica para cambiar la foto automáticamente cada 4 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
    }, 4000); // 4000ms = 4 segundos
    return () => clearInterval(intervalo);
  }, [imagenes.length]);

  return (
    <section id="servicios" className="py-32 bg-white text-primario overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative">
        
        <div className="absolute top-0 right-0 font-editorial italic text-[300px] leading-none opacity-[0.03] select-none pointer-events-none">
          Est.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Imagen con efecto Fade */}
          <div className="md:col-span-5 relative">
            <div className="aspect-[3/4] overflow-hidden rounded-t-full bg-hueso relative shadow-2xl">
              {imagenes.map((foto, i) => (
                <img 
                  key={i}
                  src={foto} 
                  alt={`Novia ${i}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    i === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-acento p-8 hidden md:block z-10">
              <p className="text-white font-base text-[9px] tracking-[4px] uppercase leading-relaxed">
                Capturando la <br /> esencia de lo <br /> invisible.
              </p>
            </div>
          </div>

          {/* Bloque de Texto Editorial */}
          <div className="md:col-span-7 md:pl-16 space-y-12">
            <div className="space-y-6">
              <span className="font-base text-[10px] tracking-[6px] uppercase opacity-40">Nuestra Visión</span>
              <h2 className="font-editorial italic text-5xl md:text-8xl leading-[0.9] text-primario">
                El detalle donde comienza tu <span className="text-acento">historia</span>.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="font-base font-bold text-[10px] uppercase tracking-widest">01. El Ritual del Cuidado</h4>
                <p className="font-base text-sm opacity-60 leading-relaxed">
                  "Entendemos el maquillaje como un acto de presencia. Antes del primer trazo, creamos un espacio de calma y contención, donde tu piel y tu energía se preparan para el gran día. No se trata solo de corregir, sino de revelar esa luz propia que surge cuando te sentís cuidada y en paz."
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-base font-bold text-[10px] uppercase tracking-widest">02. Belleza Consciente</h4>
                <p className="font-base text-sm opacity-60 leading-relaxed">
                  "Buscamos una estética que respete tu esencia y eleve tus rasgos naturales. Nuestra visión huye de los excesos; preferimos la sofisticación de lo sutil y la durabilidad de lo eterno. Un maquillaje diseñado para que te reconozcas, te sientas tú misma y disfrutes de cada momento sin prisa."
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-primario/10">
              <blockquote className="font-editorial italic text-2xl opacity-80 max-w-lg">
                "Entregamos experiencias para quienes valoran la delicadeza natural ante el impacto forzado."
              </blockquote>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;