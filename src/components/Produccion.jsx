import React, { useState, useEffect } from 'react';

const Produccion = () => {
  // 1. IMPORTACIÓN DINÁMICA DE IMÁGENES (VITE)
  const imagesCarola = import.meta.glob('../assets/img/carola*', { eager: true });
  const fotosCarola = Object.values(imagesCarola).map((img) => ({
    src: img.default,
    alt: 'Producción Carolauy'
  }));

  const imagesKaunas = import.meta.glob('../assets/img/kaunas*', { eager: true });
  const fotosKaunas = Object.values(imagesKaunas).map((img) => ({
    src: img.default,
    alt: 'Kaunas'
  }));

  const imagesManchas = import.meta.glob('../assets/img/manchas*', { eager: true });
  const fotosManchas = Object.values(imagesManchas).map((img) => ({
    src: img.default,
    alt: 'Producción Manchas'
  }));

  // 2. ESTADOS PARA LOS ÍNDICES
  const [carolaIndex, setCarolaIndex] = useState(0);
  const [kaunasIndex, setKaunasIndex] = useState(0);
  const [currentHIndex, setCurrentHIndex] = useState(0);

  // Timers independientes para los carruseles
  useEffect(() => {
    if (fotosCarola.length === 0) return;
    const timer = setInterval(() => {
      setCarolaIndex((prev) => (prev + 1) % fotosCarola.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [fotosCarola.length]);

  useEffect(() => {
    if (fotosKaunas.length === 0) return;
    const timer = setInterval(() => {
      setKaunasIndex((prev) => (prev + 1) % fotosKaunas.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [fotosKaunas.length]);

  useEffect(() => {
    if (fotosManchas.length === 0) return;
    const timer = setInterval(() => {
      setCurrentHIndex((prev) => (prev + 1) % fotosManchas.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [fotosManchas.length]);

  return (
    <main className="bg-hueso min-h-screen pt-40 pb-32 px-8">
      <header className="max-w-6xl mx-auto mb-32">
        <span className="font-base text-[10px] tracking-[5px] uppercase opacity-40">Algunas Producciones Creativas</span>
        <h1 className="font-base uppercase text-4xl md:text-6xl text-primario mt-4 leading-none">
          Arte & <br /> Producción
        </h1>
      </header>

      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-32 gap-x-12">
        
        {/* Proyecto 1 (Carolauy) - Estático */}
        <div className="md:col-span-5 group">
          <div className="relative overflow-hidden bg-primario/5 aspect-[3/4]">
            {fotosCarola.map((img, idx) => (
              <img 
                key={idx}
                src={img.src} 
                alt={img.alt}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  idx === carolaIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
          <div className="mt-8">
            <h3 className="font-editorial italic text-3xl text-acento">
              Producción {' '}
              <a 
                href="https://www.instagram.com/carolauy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-60 transition-opacity underline decoration-acento/30 underline-offset-4"
              >
                @carolauy
              </a>
            </h3>
            <p className="font-base text-[10px] uppercase tracking-[4px] opacity-50 mt-2">Arte & skin texture</p>
          </div>
        </div>

        {/* Proyecto 2 (Kaunas) - Estático */}
        <div className="md:col-span-4 md:col-start-8 md:mt-40 group">
          <div className="relative overflow-hidden bg-primario/5 aspect-[3/4]">
            {fotosKaunas.map((img, idx) => (
              <img 
                key={idx}
                src={img.src} 
                alt={img.alt}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  idx === kaunasIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
          <div className="mt-8">
              <h3 className="font-editorial italic text-3xl text-acento">
              Producción {' '}
              <a 
                href="https://www.instagram.com/kaunas_uruguay" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-60 transition-opacity underline decoration-acento/30 underline-offset-4"
              >
                @kaunas_uruguay
              </a>
            </h3>
            <p className="font-base text-[10px] uppercase tracking-[4px] opacity-50 mt-2">Estilismo orgánico</p>
          </div>
        </div>

        {/* Proyecto 3 (Manchas - Horizontal) - Estático */}
        <div className="md:col-span-8 md:col-start-2 group mt-20"> 
          <div className="relative overflow-hidden bg-primario/5 aspect-[16/9] md:aspect-[3/2]">
            {fotosManchas.map((img, idx) => (
              <img 
                key={idx}
                src={img.src} 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  idx === currentHIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
          <div className="mt-8">
            <h3 className="font-editorial italic text-3xl text-acento">
              Juntada con {' '}
              <a 
                href="https://www.instagram.com/manchasuruguayas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-60 transition-opacity underline decoration-acento/30 underline-offset-4"
              >
                @manchasuruguayas
              </a>
            </h3>
            <p className="font-base text-[10px] uppercase tracking-[4px] opacity-50 mt-2">
              Maquillaje en pieles con patologías @beautyforhealing
            </p>
          </div>
        </div>

        {/* Botón de WhatsApp */}
        <div className="md:col-span-12 flex justify-center mt-10">
          <a 
            href="https://wa.me/59891855090" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-acento px-8 py-4 uppercase text-[8px] tracking-[4px] hover:bg-opacity-90 transition-all flex items-center justify-center"
          >
            Consultá por Producciones
          </a>
        </div>
      </section>
    </main>
  );
};

export default Produccion;