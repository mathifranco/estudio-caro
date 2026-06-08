import React, { useState, useEffect } from 'react'; // Agregamos los hooks necesarios
import { Link } from 'react-router-dom';
import novia5 from '../assets/img/novia5.webp'
import novia7 from '../assets/img/novia7.webp'
import novia12 from '../assets/img/novia12.webp'
import novia9 from '../assets/img/novia9.webp'
import novia11 from '../assets/img/novia11.webp'
import novia13 from '../assets/img/novia13.webp'

const Brides = () => {
  // 1. Array de imágenes para la galería con Fade
  // (¡Recordá optimizarlas a WebP para que carguen rápido!)
  const galleryImages = [
    { src: novia7, alt: 'Novia 1 - Maquillaje Natural' }, // La original
    { src: novia12, alt: 'Novia 12 - Detalle Peinado' }, // Agrega más aquí
    { src: novia9, alt: 'Novia 9 - Civil' },
    { src: novia5, alt: 'Novia 5 - Civil' },
    { src: novia11, alt: 'Novia 11 - Civil' },
    { src: novia13, alt: 'Novia 13 - Civil' },
  ];

  // 2. Lógica para el cambio automático de imagen
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Si hay menos de 2 imágenes, no necesitamos el intervalo
    if (galleryImages.length < 2) return;

    // Configuramos el temporizador para cambiar de imagen cada 4 segundos
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % galleryImages.length
      );
    }, 4000); // 4000 milisegundos = 4 segundos

    // Limpiamos el temporizador si el componente se desmonta
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  return (
    <main className="bg-hueso text-primario min-h-screen">
      {/* Hero Section - Impacto Visual */}
      <section className="pt-32 pb-16 px-8 max-w-6xl mx-auto">
        <span className="font-base text-[10px] tracking-[5px] uppercase opacity-50">Servicio Exclusivo</span>
        <h1 className="font-editorial italic text-6xl md:text-8xl mt-4 text-acento">The Bride Experience</h1>
        <p className="mt-8 font-base text-lg max-w-2xl leading-relaxed opacity-70">
          Acompañamos tu camino al altar con un servicio diseñado para resaltar tu esencia natural. 
          Desde la primera entrevista hasta el último detalle en el gran día.
        </p>
      </section>

      {/* Grid de Contenido: Proceso + Galería con Fade (Estructura Original) */}
      <section className="py-20 px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-primario/10">
        <div>
          <h2 className="font-editorial text-3xl italic mb-6 text-acento">Aquí comienza todo</h2>
          <ul className="space-y-8 font-base text-sm opacity-80">
            <li>
              <span className="block font-bold uppercase tracking-widest text-[10px] mb-2 text-primario">01. Entrevista Inicial</span>
              Una charla por zoom previa a reservar para poder conocernos. Conversamos sobre tu estilo, el vestido y la atmósfera de la boda. Esta instancia es super importante para sacarnos dudas y consultar todo lo que quieras.
            </li>
            <li>
              <span className="block font-bold uppercase tracking-widest text-[10px] mb-2 text-primario">02. Prueba de Maquillaje</span>
              La prueba de maquillaje y peinado se recomienda <b>1 mes antes del evento</b> aproximadamente. Se lleva a cabo en mi estudio, y la prueba de peinado puede realizarse en conjunto con la tocadista, si así lo deseas.
            </li>
            <li>
              <span className="block font-bold uppercase tracking-widest text-[10px] mb-2 text-primario">03. El día de la Boda</span>
El día de la boda, el servicio se realiza en la locación de tu elección dentro de Montevideo (pueden aplicarse viáticos adicionales en algunas zonas). El día del evento, estaré contigo hasta que estés lista, realizando los retoques necesarios para que luzcas perfecta. Para poder acompañarte en el interior, se deben contratar en total un mínimo de 6 servicios entre tu y tus acompañantes.
            </li>
          </ul>
        </div>

        {/* CONTENEDOR DE LA IMAGEN (ESTRUCTURA ORIGINAL) */}
        <div className="bg-primario/5 aspect-[4/5] overflow-hidden relative shadow-sm">
           {/* 3. Renderizamos las imágenes con el efecto Fade */}
           {galleryImages.map((image, index) => (
             <img 
               key={index}
               src={image.src} 
               alt={image.alt} 
               loading="lazy"
               /* Manejamos la opacidad y la transición con Tailwind */
               className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                 index === currentImageIndex ? 'opacity-100' : 'opacity-0'
               }`}
             />
           ))}
        </div>
      </section>

{/* Sección de Acción / Presupuesto */}
    <section className="py-24 bg-primario text-hueso text-center px-8 mt-12">
    <h2 className="font-editorial italic text-4xl mb-8">¿Conversamos?</h2>
    <div className="flex flex-col md:flex-row gap-6 justify-center">
        
        {/* BOTÓN DE DESCARGA PDF */}
        <a 
        href="/Novias_Presupuesto_Caro_Pereyra_2026_2027.pdf" // Nombre exacto del archivo en la carpeta public
        download="Novias Presupuesto Caro Pereyra 2026 2027.pdf" // Nombre con el que se guardará en la PC de la novia
        className="border border-hueso/30 px-10 py-4 uppercase text-[10px] tracking-[4px] hover:bg-hueso hover:text-primario transition-all flex items-center justify-center"
        >
        Descargar Presupuesto
        </a>

        <a 
        href="https://wa.me/+59891855090" 
        className="bg-acento px-10 py-4 uppercase text-[10px] tracking-[4px] hover:bg-opacity-90 transition-all flex items-center justify-center"
        >
        Solicitar entrevista
        </a>
    </div>
    </section>
    </main>
  );
};

export default Brides;