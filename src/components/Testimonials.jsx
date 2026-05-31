import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const Testimonials = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 1.2, spacing: 30 },
      },
    },
  })

  const reviews = [
    { id: 1, quote: "Hermoso trabajo", text: "Excelente experiencia profesional y detallista.", author: "ALICIA GARCÍA" },
    { id: 2, quote: "Calidad excepcional", text: "El diseño de nuestro álbum superó todas las expectativas.", author: "MARCOS RUIZ" },
    { id: 3, quote: "Estética única", text: "Logró capturar la esencia de nuestra marca a la perfección.", author: "LUCÍA VAZ" }
  ]

  return (
    <section className="py-24 bg-acento text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-8">
        <div ref={sliderRef} className="keen-slider">
          {reviews.map((rev) => (
            <div key={rev.id} className="keen-slider__slide">
              <div className="border border-white/20 p-10 md:p-20 bg-white/5 backdrop-blur-sm relative h-full">
                <span className="font-editorial text-8xl absolute -top-10 left-8 text-white/10 italic">“</span>
                
                <h3 className="font-editorial italic text-4xl md:text-6xl mb-8 leading-tight">
                  {rev.quote}
                </h3>
                
                <p className="font-base text-sm md:text-base opacity-80 mb-10 max-w-2xl leading-relaxed">
                  {rev.text}
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-8 h-[1px] bg-white/40"></div>
                  <p className="font-base tracking-[4px] text-[10px] uppercase italic">
                    {rev.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center mt-12 font-base text-[9px] tracking-[5px] uppercase opacity-30">
          Arrastra para explorar
        </p>
      </div>
    </section>
  )
}

export default Testimonials