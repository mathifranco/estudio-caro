import React, { useState } from 'react';
import { PopupModal } from 'react-calendly';
import lifting from '../assets/img/lifting.webp';
import lifting2 from '../assets/img/lifting2.webp';
import curso1 from '../assets/img/curso1.webp';
import cejasok from '../assets/img/cejasok.webp';
import hilos from '../assets/img/hilos.webp';
import labios from '../assets/img/labios.webp';

const Agenda = () => {
  const [filtro, setFiltro] = useState("Todos");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState("");
  const usuario = "caropereyra";

  const servicios = [
    { 
      nombre: "Lifting Pestañas + Cejas", 
      categoria: ["Ojos"],
      descripcion: "Tratamiento combinado de lifting y perfilado.",
      foto: lifting2, 
      slug: "lifting-pestanas-con-cejas" 
    },
    { 
      nombre: "Cejas con Hilos", 
      categoria: ["Hilos"],
      descripcion: "Diseño y depilación de cejas con hilos. Se recomiendan mantenimientos cada 4 semanas.",
      foto: hilos, 
      slug: "cejas"
    },
    { 
      nombre: "Cejas + Bozo", 
      categoria: ["Hilos"],
      descripcion: "Servicio integral para producciones y editoriales.",
      foto: hilos, 
      slug: "cejas-bozo" 
    },
    { 
      nombre: "Extensiones Pestañas 1x1", 
      categoria: ["Ojos"],
      descripcion: "Una extensión sobre cada pestaña natural.",
      foto: lifting, 
      slug: "extensiones" 
    },
    { 
      nombre: "Retoque de Extensiones", 
      categoria: ["Retoques"],
      descripcion: "Retoque de extensiones. Se recomiendan mantenimientos cada 3 a 4 semanas.",
      foto: lifting, 
      slug: "retoque-extensiones" 
    },
    { 
      nombre: "Maquillaje Social (en estudio)", 
      categoria: ["Social"],
      descripcion: "Resaltá tu belleza",
      foto: curso1, 
      slug: "maquillaje-social" 
    },
    { 
      nombre: "Diseño y Perfilado de Cejas", 
      categoria: ["Hilos"],
      descripcion: "Diseño personalizado según tu morfología facial.",
      foto: hilos, 
      slug: "cejas" 
    },
    { 
      nombre: "Mantenimiento Cejas", 
      categoria: ["Retoques"],
      descripcion: "Diseño y depilación de cejas con hilos. Se recomiendan mantenimientos cada 4 semanas.",
      foto: hilos, 
      slug: "mantenimiento-cejas" 
    },
    { 
      nombre: "Bozo con Hilos", 
      categoria: ["Hilos"],
      descripcion: "Diseño y depilación de cejas con hilos. Se recomiendan mantenimientos cada 4 semanas.",
      foto: hilos, 
      slug: "bozo-con-hilos" 
    },
    { 
      nombre: "Rostro completo con Hilos", 
      categoria: ["Hilos"],
      descripcion: "Depilación de rostro completo con hilos. Incluye diseño y depilación de cejas, bozo y mentón, mejillas y patillas.",
      foto: hilos, 
      slug: "rostro-con-hilos" 
    },
    { 
      nombre: "Brow Tinting", 
      categoria: ["Ojos", "Hilos"],
      descripcion: "Tinte en cejas. Incluye diseño y depilación de cejas con hilos.",
      foto: cejasok, 
      slug: "brow-tinting" 
    },
    { 
      nombre: "Retoque Brow Tinting", 
      categoria: ["Retoques"],
      descripcion: "Tinte en cejas. Incluye diseño y depilación de cejas con hilos.",
      foto: cejasok, 
      slug: "retoque-brow-tinting" 
    },
    { 
      nombre: "Laminado de Cejas", 
      categoria: ["Ojos", "Hilos"],
      descripcion: "Tinte en cejas. Incluye diseño y depilación de cejas con hilos.",
      foto: cejasok, 
      slug: "laminado-cejas" 
    },
    { 
      nombre: "Retoque Laminado de Cejas", 
      categoria: ["Retoques"],
      descripcion: "Mantenimiento Tinte en cejas. Incluye diseño y depilación de cejas con hilos.",
      foto: cejasok, 
      slug: "mantenimiento-laminado-de-cejas" 
    },
    { 
      nombre: "Hidratación Labios", 
      categoria: ["Labios"],
      descripcion: "Procedimiento estético que utiliza un dispositivo de microneedling (Dermapen)",
      foto: labios, 
      slug: "hidratacion-labios" 
    },
  ];

  const categorias = ["Todos", "Ojos", "Hilos", "Labios", "Social", "Retoques"];
  
  const serviciosFiltrados = filtro === "Todos" 
    ? servicios 
    : servicios.filter(s => s.categoria.includes(filtro));

  const manejarReserva = (slug) => {
    setSelectedUrl(`https://calendly.com/${usuario}/${slug}`);
    setIsOpen(true);
  };

  return (
    <div id="agenda" className="min-h-screen bg-[#fdfcf9] p-4 md:p-8 pt-24 font-light antialiased">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl text-[#a19b9b] uppercase tracking-[0.2em] mb-4">
          Reserva tu cita
        </h2>
        <div className="w-16 h-px bg-[#a19b9b] mx-auto mb-8"></div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
          {categorias.map(cat => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className={`text-[9px] md:text-xs uppercase tracking-widest pb-1 transition-all ${
                filtro === cat ? "text-[#a19b9b] border-b border-[#a19b9b]" : "text-gray-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6 max-w-5xl mx-auto">
        {serviciosFiltrados.map((s, i) => (
          <div 
            key={i} 
            className="relative flex flex-row items-center bg-white border border-gray-100 shadow-sm overflow-hidden h-[160px] md:h-[200px]"
          >
            {/* Imagen en Desktop */}
            <div className="hidden md:block w-1/4 h-full overflow-hidden">
              <img src={s.foto} alt={s.nombre} className="w-full h-full object-cover" />
            </div>

            {/* Imagen de fondo en Móvil */}
            <div className="absolute inset-0 z-0 md:hidden opacity-30">
              <img src={s.foto} alt={s.nombre} className="w-full h-full object-cover" />
            </div>

            <div className="relative z-10 flex-1 flex items-center justify-between px-6 md:px-12">
              <div className="max-w-[65%]">
                <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-[#a19b9b] mb-1 block">
                  {s.categoria.join(" + ")}
                </span>
                <h3 className="text-sm md:text-xl text-[#4d5055] uppercase tracking-widest mb-1 md:mb-2 font-normal">
                  {s.nombre}
                </h3>
                <p className="text-[10px] md:text-sm text-gray-500 italic line-clamp-2 md:line-clamp-none">
                  {s.descripcion}
                </p>
              </div>

              <button
                onClick={() => manejarReserva(s.slug)}
                className="whitespace-nowrap border border-[#a19b9b] px-4 py-2 md:px-8 md:py-3 text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-[#4d5055] bg-transparent hover:bg-[#a19b9b] hover:text-white transition-all font-light"
              >
                Reservar
              </button>
            </div>
          </div>
        ))}
      </div>

      <PopupModal
        url={selectedUrl}
        pageSettings={{
          backgroundColor: 'fdfcf9',
          primaryColor: 'a19b9b',
          textColor: '4d5055'
        }}
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        rootElement={document.getElementById("root")}
      />
    </div>
  );
};

export default Agenda;