import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Esto obliga al navegador a ir al punto (0,0) arriba a la izquierda
    window.scrollTo(0, 0);
  }, [pathname]); // Se ejecuta cada vez que la ruta (URL) cambia

  return null;
};

export default ScrollToTop;