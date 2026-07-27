import React, { useEffect, useState } from "react";

import AcuityModal from "./createPortal";

import lifting from "../assets/img/lifting.webp";
import lifting2 from "../assets/img/lifting2.webp";
import curso1 from "../assets/img/curso1.webp";
import cejasok from "../assets/img/cejasok.webp";
import hilos from "../assets/img/hilos.webp";
import labios from "../assets/img/labios.webp";
import peinado1 from "../assets/img/peinado1.webp";
import inspo3 from "../assets/img/inspo3.webp";

const ACUITY_OWNER_ID = "21321386";

const servicios = [
  {
    nombre: "Lifting Pestañas + Cejas",
    categoria: ["Promos"],
    descripcion: "Tratamiento combinado de lifting y perfilado.",
    foto: lifting2,
    appointmentType: "18579250",
  },
  {
    nombre: "Cejas con Hilos / Mantenimiento",
    categoria: ["Cejas y Depilacion"],
    descripcion:
      "Diseño y depilación de cejas con hilos. Se recomiendan mantenimientos cada 4 semanas.",
    foto: hilos,
    appointmentType: "18578965",
  },
  {
    nombre: "Cejas + Bozo",
    categoria: ["Promos"],
    descripcion: "Servicio integral de diseño de cejas y depilación de bozo.",
    foto: hilos,
    appointmentType: "18579148",
  },
  {
    nombre: "Extensiones Pestañas / Retoques",
    categoria: ["Pestañas"],
    descripcion: "Una extensión sobre cada pestaña natural.",
    foto: lifting,
    appointmentType: "79293978",
  },
  {
    nombre: "Lifting Pestañas / Retoques",
    categoria: ["Pestañas"],
    descripcion:
      "Tratamiento para levantar, curvar y realzar las pestañas naturales.",
    foto: lifting,
    appointmentType: "18579177",
  },
  {
    nombre: "Maquillaje Social y Peinado",
    categoria: ["Promos"],
    descripcion: "Maquillaje social y peinado para ocasiones especiales.",
    foto: curso1,
    appointmentType: "39297606",
  },
  {
    nombre: "Maquillaje Social (en mi Estudio)",
    categoria: ["Maquillaje y Peinado"],
    descripcion: "Maquillaje profesional realizado en el estudio.",
    foto: curso1,
    appointmentType: "18853043",
  },
  {
    nombre: "Bozo con Hilos",
    categoria: ["Cejas y Depilacion"],
    descripcion: "Depilación del bozo mediante la técnica con hilo.",
    foto: hilos,
    appointmentType: "18579069",
  },
  {
    nombre: "Rostro completo con Hilos",
    categoria: ["Cejas y Depilacion"],
    descripcion:
      "Incluye diseño y depilación de cejas, bozo, mentón, mejillas y patillas.",
    foto: hilos,
    appointmentType: "18579127",
  },
  {
    nombre: "Brow Tinting / Mantenimiento",
    categoria: ["Cejas y Depilacion"],
    descripcion:
      "Tinte en cejas. Incluye diseño y depilación de cejas con hilos.",
    foto: cejasok,
    appointmentType: "18875507",
  },
  {
    nombre: "Laminado de Cejas / Mantenimiento",
    categoria: ["Cejas y Depilacion"],
    descripcion:
      "Laminado, diseño y depilación de cejas. Mantenimiento recomendado cada 4 semanas.",
    foto: cejasok,
    appointmentType: "47990328",
  },
  {
    nombre: "Hidratación Labios",
    categoria: ["Labios"],
    descripcion:
      "Tratamiento de hidratación labial mediante un dispositivo de microneedling.",
    foto: labios,
    appointmentType: "67860486",
  },
  {
    nombre: "Ondas (en mi Estudio)",
    categoria: ["Maquillaje y Peinado"],
    descripcion: "Peinado con ondas realizado en el estudio.",
    foto: peinado1,
    appointmentType: "79107082",
  },
    {
    nombre: "Mini Makeup (en mi Estudio)",
    categoria: ["Maquillaje y Peinado"],
    descripcion: "Maquillaje mini, realizado en el estudio.",
    foto: inspo3,
    appointmentType: "70307993",
  },


  
];

const categorias = [
  "Promos",
  "Cejas y Depilacion",
  "Pestañas",
  "Labios",
  "Maquillaje y Peinado",
  "Todos",
];

const Agenda = () => {
  const [filtro, setFiltro] = useState("Todos");
  const [selectedUrl, setSelectedUrl] = useState("");

  const modalAbierto = Boolean(selectedUrl);

  const serviciosFiltrados =
    filtro === "Todos"
      ? servicios
      : servicios.filter((servicio) =>
          servicio.categoria.includes(filtro),
        );

  const manejarReserva = (appointmentType) => {
    const params = new URLSearchParams({
      owner: ACUITY_OWNER_ID,
      appointmentType,
    });

    const acuityUrl =
      `https://app.acuityscheduling.com/schedule.php?${params.toString()}`;

    setSelectedUrl(acuityUrl);
  };

  const cerrarModal = () => {
    setSelectedUrl("");
  };

  // Permite cerrar la agenda con Escape.
  useEffect(() => {
    if (!modalAbierto) return undefined;

    const manejarEscape = (event) => {
      if (event.key === "Escape") {
        cerrarModal();
      }
    };

    window.addEventListener("keydown", manejarEscape);

    return () => {
      window.removeEventListener("keydown", manejarEscape);
    };
  }, [modalAbierto]);

  return (
    <>
      <section
        id="agenda"
        className="min-h-screen bg-[#fdfcf9] p-4 pt-24 font-light antialiased md:p-8 md:pt-24"
      >
        <div className="mx-auto mb-10 max-w-6xl text-center">
          <h2 className="mb-4 text-3xl uppercase tracking-[0.2em] text-[#a19b9b] md:text-4xl">
            Reserva tu cita
          </h2>

          <div className="mx-auto mb-8 h-px w-16 bg-[#a19b9b]" />

          <div className="mb-8 flex flex-wrap justify-center gap-4 md:gap-8">
            {categorias.map((categoria) => {
              const estaActiva = filtro === categoria;

              return (
                <button
                  key={categoria}
                  type="button"
                  onClick={() => setFiltro(categoria)}
                  aria-pressed={estaActiva}
                  className={[
                    "border-b pb-1 text-[9px] uppercase tracking-widest transition-colors md:text-xs",
                    estaActiva
                      ? "border-[#a19b9b] text-[#a19b9b]"
                      : "border-transparent text-gray-400 hover:text-[#777]",
                  ].join(" ")}
                >
                  {categoria}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mx-auto flex max-w-5xl flex-col gap-6">
          {serviciosFiltrados.map((servicio) => (
            <article
              key={servicio.appointmentType}
              className="relative flex h-[160px] flex-row items-center overflow-hidden border border-gray-100 bg-white shadow-sm md:h-[200px]"
            >
              {/* Imagen en escritorio */}
              <div className="hidden h-full w-1/4 overflow-hidden md:block">
                <img
                  src={servicio.foto}
                  alt={servicio.nombre}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Imagen decorativa de fondo en móvil */}
              <div className="pointer-events-none absolute inset-0 z-0 opacity-30 md:hidden">
                <img
                  src={servicio.foto}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-white/20" />
              </div>

              <div className="relative z-10 flex min-w-0 flex-1 items-center justify-between gap-3 px-5 md:gap-6 md:px-12">
                <div className="min-w-0 max-w-[65%]">
                  <span className="mb-1 block text-[8px] uppercase tracking-[0.3em] text-[#a19b9b] md:text-[9px]">
                    {servicio.categoria.join(" + ")}
                  </span>

                  <h3 className="mb-1 text-sm font-normal uppercase tracking-widest text-[#4d5055] md:mb-2 md:text-xl">
                    {servicio.nombre}
                  </h3>

                  <p className="line-clamp-2 text-[10px] italic text-gray-500 md:line-clamp-none md:text-sm">
                    {servicio.descripcion}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    manejarReserva(servicio.appointmentType)
                  }
                  className="shrink-0 whitespace-nowrap border border-[#a19b9b] bg-white/60 px-3 py-2 text-[9px] uppercase tracking-[0.15em] text-[#4d5055] transition-colors hover:bg-[#a19b9b] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#a19b9b]/40 md:px-8 md:py-3 md:text-[10px] md:tracking-[0.2em]"
                >
                  Reservar
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {modalAbierto && (
        <AcuityModal
          url={selectedUrl}
          onClose={cerrarModal}
        />
      )}
    </>
  );
};

export default Agenda;