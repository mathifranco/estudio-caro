import React, { useEffect } from "react";
import { createPortal } from "react-dom";

const AcuityModal = ({ url, onClose }) => {
  useEffect(() => {
    if (!url) return undefined;

    const bodyOverflowAnterior = document.body.style.overflow;
    const htmlOverflowAnterior = document.documentElement.style.overflow;
    const overscrollAnterior = document.body.style.overscrollBehavior;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.overscrollBehavior = "none";

    return () => {
      document.body.style.overflow = bodyOverflowAnterior;
      document.documentElement.style.overflow = htmlOverflowAnterior;
      document.body.style.overscrollBehavior = overscrollAnterior;
    };
  }, [url]);

  if (!url) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Reserva de cita"
      className="fixed inset-0 z-[2147483647] bg-black/60"
    >
      {/* Fondo para cerrar el modal únicamente en escritorio */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0 hidden md:block"
      />

      <div
        className="
          absolute inset-0 z-10
          flex flex-col bg-white

          md:inset-5
          md:left-1/2
          md:w-[calc(100%-2.5rem)]
          md:max-w-4xl
          md:-translate-x-1/2
          md:overflow-hidden
          md:rounded-md
          md:shadow-2xl
        "
      >
        <header
          className="
            relative z-20
            flex h-14 shrink-0
            items-center justify-between
            border-b border-gray-200
            bg-[#fdfcf9]
            px-4
          "
        >
          <span className="text-[10px] uppercase tracking-widest text-gray-400 md:text-xs">
            Reserva de cita
          </span>

          <button
            type="button"
            onClick={onClose}
            className="
              rounded bg-gray-100
              px-3 py-1.5
              text-xs uppercase tracking-widest
              text-[#4d5055]
              transition-colors
              hover:bg-gray-200
            "
          >
            Cerrar ✕
          </button>
        </header>

        <div className="relative min-h-0 flex-1 bg-white">
          <iframe
            key={url}
            src={url}
            title="Reservar cita"
            allow="payment"
            scrolling="yes"
            className="absolute inset-0 block h-full w-full border-0"
            style={{
              border: 0,
              pointerEvents: "auto",
              touchAction: "manipulation",
            }}
          />
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default AcuityModal;