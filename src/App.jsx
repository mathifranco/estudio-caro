import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Journal from './components/Journal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Agenda from './components/Agenda';
import Brides from "./components/Brides";
import Produccion from "./components/Produccion";
import ScrollToTop from './components/ScrollToTop';

// 🎬 IMPORTAMOS LOS VIDEOS OPTIMIZADOS (Ajusta las rutas según tus carpetas si es necesario)
import videoVertical from './assets/img/video/video-celular.mp4';
import videoHorizontal from './assets/img/video/video-desktop.mp4';

const Home = () => (
  <>
    {/* La sección contiene los videos en pantalla completa sin ninguna tarjeta encima */}
    <section id="inicio" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* 📱 VIDEO VERTICAL (Celulares): Se ve en pantallas chicas, se oculta en monitores */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover block md:hidden z-0"
      >
        <source src={videoVertical} type="video/mp4" />
      </video>

      {/* 💻 VIDEO HORIZONTAL (Escritorio): Oculto en móviles, se activa de 'md' en adelante */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover hidden md:block z-0"
      >
        <source src={videoHorizontal} type="video/mp4" />
      </video>

      {/* 🖤 CAPA DE OSCURECIMIENTO (Opcional): Le da un sutil contraste oscuro al video 
          para que no encandile. Si prefieres ver el video al natural con sus colores reales, puedes borrar este div */}
      <div className="absolute inset-0 bg-black/5 z-10 pointer-events-none"></div>

    </section>

    <AboutSection />
    <Services />
    <Journal />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <main className="min-h-screen bg-hueso overflow-x-hidden">
        <Navbar />
        <div className="pt-20"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/produccion" element={<Produccion />} />
            <Route path="/brides" element={<Brides />} /> 
          </Routes>
        </div>
        <Footer />
      </main>
    </Router>
  );
}

export default App;