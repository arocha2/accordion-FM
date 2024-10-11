import { useState } from "react";
import headerImg from "../src/assets/images/background-pattern-desktop.svg";
import headerMobileImg from "../src/assets/images/background-pattern-mobile.svg";
import { useEffect } from "react";

export const App = () => {
  const [imageSrc, setImageSrc] = useState("");

  const updateImage = () => {
    const width = window.innerWidth;

    console.log("first");

    if (width < 600) {
      setImageSrc(headerMobileImg); // Ruta de la imagen para pantallas pequeñas
    } else {
      setImageSrc(headerImg); // Ruta de la imagen para pantallas medianas
    }
  };

  useEffect(() => {
    // Actualizar la imagen al cargar el componente
    updateImage();
    window.addEventListener("resize", updateImage);
    return () => {
      window.removeEventListener("resize", updateImage);
    };
  }, []);

  return (
    <main className="w-full h-[100vh]">
      <img className="w-full" src={imageSrc} alt="header-img" />
      App
    </main>
  );
};
