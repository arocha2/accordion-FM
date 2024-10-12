import { useState, useEffect } from "react";
import { Accordion } from "./components/Accordion";
//img
import headerImg from "../src/assets/images/background-pattern-desktop.svg";
import headerMobileImg from "../src/assets/images/background-pattern-mobile.svg";
//data
import data from "../src/data/data.json";

export const App = () => {
  //responsive header inicio
  const [imageSrc, setImageSrc] = useState("");

  const updateImage = () => {
    const width = window.innerWidth;

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
  // responsive header fin

  return (
    <main className="w-full h-[100vh] flex flex-col items-center font-workSans relative bg-Light-pink">
      <img className="w-full sm:max-h-[30%]" src={imageSrc} alt="header-img" />
      <Accordion data={data} />
    </main>
  );
};
