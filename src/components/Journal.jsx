import React from 'react';
import inspo1 from '../assets/img/inspo1.webp'
import novia15 from '../assets/img/novia15.webp'
import inspo4 from '../assets/img/inspo4.webp'
import kaunas1 from '../assets/img/kaunas1.webp'

const Journal = () => {
  const shots = [
    {
      id: 1,
      url: inspo1,
      caption: "Ws Light Montevideo",
      colSpan: "md:col-span-4",
      aspect: "aspect-[3/4]"
    },
    {
      id: 2,
      url: inspo4,
      caption: "Producciones increíbles",
      colSpan: "md:col-span-8",
      aspect: "aspect-video"
    },
    {
      id: 3,
      url: kaunas1,
      caption: "Al sol",
      colSpan: "md:col-span-5",
      aspect: "aspect-square"
    },
    {
      id: 4,
      url: novia15,
      caption: "Momentos únicos, sencilla felicidad.",
      colSpan: "md:col-span-7",
      aspect: "aspect-[16/9]"
    }
  ];

  return (
    <section id="journal" className="py-24 bg-hueso text-primario">
      <div className="max-w-6xl mx-auto px-8">
        
        {/* Título Estilo Nota de Prensa */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
          <h2 className="font-editorial italic text-4xl md:text-5xl">Inspo</h2>
          <span className="font-base text-[9px] tracking-[4px] uppercase opacity-40 border-b border-primario/20 pb-1">
            Fragmentos de inspiración visuales
          </span>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            {shots.map((shot) => (
            <div key={shot.id} className={`${shot.colSpan} group`}>
                <div className={`overflow-hidden ${shot.aspect} bg-primario/5 relative`}>
                <img 
                    src={shot.url} 
                    alt={shot.caption}
                    loading="lazy"
                    /* QUITAMOS: grayscale y hover:grayscale-0 
                    MANTENEMOS: la transición y el zoom para que siga siendo dinámico
                    */
                    className="w-full h-full object-cover transition-all duration-1000"
                />
                
                {/* ESTE OVERLAY PUEDE ESTAR DANDO EL TONO SEPIA. 
                    Si querés color 100% puro, podés borrar este <div> o cambiar acento/10 por algo más neutro.
                */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <p className="mt-4 font-base text-[10px] italic opacity-50 tracking-wider">
                — {shot.caption}
                </p>
            </div>
            ))}
        </div>

        {/* Botón de acción minimalista */}
        <div className="mt-20 text-center">
          <a 
            href="https://www.instagram.com/caropereyramaquillaje/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block font-base text-[10px] tracking-[5px] uppercase border border-primario/20 px-10 py-4 hover:bg-primario hover:text-white transition-all duration-500"
          >
            Ver más en Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Journal;