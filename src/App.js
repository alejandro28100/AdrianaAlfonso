import { useState, useEffect } from "react";
import ServiceSection from "./components/ServiceSection"
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import "./index.css";

function App() {

  const [isSibarActive, setIsSibarActive] = useState(false);

  useEffect(() => {
    let { classList } = document.body;
    if (isSibarActive) {
      classList.add("overflow-hidden");
    } else {
      classList.remove("overflow-hidden");
    }
  }, [isSibarActive])

  return (
    <div className="overflow-x-hidden">

      <header className="w-screen h-screen relative bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('/images/1.png')" }}>
        <nav className="flex flex-col justify-start lg:justify-end h-full">
          <button onClick={() => setIsSibarActive(true)} className={`p-4 self-end lg:hidden text-white text-center ${isSibarActive && "opacity-0"} transition-opacity duration-300 ease-in`} >
            <AiOutlineMenu className="w-8 h-8" />
          </button>
          <ul className="hidden lg:flex flex-1 justify-start lg:justify-end text-2xl p-14">
            <li className="mx-10 cursor-pointer self-start pb-1 border-b-2 border-transparent hover:border-black transition-colors ease-in duration-300">
              <a href="#about">
                Sobre mí
              </a>
            </li>
            <li className="mx-10 cursor-pointer self-start pb-1 border-b-2 border-transparent hover:border-black transition-colors ease-in duration-300">
              <a href="#education">
                Formación
              </a>
            </li>
            <li className="mx-10 cursor-pointer self-start pb-1 border-b-2 border-transparent hover:border-black transition-colors ease-in duration-300">
              <a href="#experience">
                Experiencia
              </a>
            </li>
            <li className="mx-10 cursor-pointer self-start pb-1 border-b-2 border-transparent hover:border-black transition-colors ease-in duration-300">
              <a href="#contact">
                Contacto
              </a>
            </li>
          </ul>
          <h1 className="font-ArimaMadurai text-8xl mt-auto text-white p-14">Adriana <br /> Alfonso</h1>
        </nav>
        <nav aria-hidden={!isSibarActive} className={`absolute inset-0 bg-black text-white w-full h-full transition-opacity duration-300 ease-in ${isSibarActive ? "opacity-60 z-auto " : "opacity-0 -z-1"} `} >

          <ul className="flex flex-col items-center justify-center font-ArimaMadurai text-2xl p-5">
            <li className="w-full text-right">
              <button onClick={() => setIsSibarActive(false)}>
                <AiOutlineClose className="w-8 h-8" />
              </button>
            </li>
            <li className="py-4">Inicio</li>
            <li className="py-4">Sobre mí</li>
            <li className="py-4">Formación</li>
            <li className="py-4">Experiencia</li>
            <li className="py-4">Contacto</li>
          </ul>
        </nav>
      </header>

      <ServiceSection
        id="experience"
        serviceName={<>Branding/ <br /> para eventos</>}
        serviceDescription="Creación de recursos físicos y digitales para eventos."
        infoAlignment="right"
        images={[
          { source: "/images/ex-1a1.png", labelColor: "#434655", alt: "Boletos para eventos", },
          { source: "/images/ex-1b.png", labelColor: "#434655", alt: "Invitaciones para eventos", },
          { source: "/images/ex-1c.png", labelColor: "#434655", alt: "Banners para eventos", },
        ]}
      />

      <ServiceSection
        serviceName={<>Creación <br /> de logos</>}
        serviceDescription="CONCEPTUALIZACIÓN, BRANDING, MANUAL DE MARCA Y MOKUPS."
        infoAlignment="left"
        images={[
          { source: "/images/4a.png", labelColor: "#A70000", alt: "Mokups Bocadito" },
          { source: "/images/4b.png", labelColor: "#ED80A2", alt: "Mokups Ilustrame la vida" },
          { source: "/images/4c.png", labelColor: "#EA4D01", alt: "Mokups Universal Dark Kitchen" },
          { source: "/images/4d.png", labelColor: "#416128", alt: "Mokups Lunch Pavillon" }
        ]}
      />

      <ServiceSection
        bulletsColor="dark"
        serviceName={<>Diseño <br /> de recursos</>}
        serviceDescription="INFOGRAFÍAS, PUBLICACIONES PARA REDES SOCIALES, FLYERS, MEMBRESÍAS Y MÁS."
        infoAlignment="right"
        images={[
          { source: "/images/5a.png", labelColor: "#DB9E31", alt: "Diseños CANIRAC" },
          { source: "/images/5b.png", labelColor: "#6C63FC", alt: "Diseños CURU" },
          { source: "/images/5c.png", labelColor: "#A70000", alt: "Diseños AMentors" }
        ]}
      />

      <ServiceSection
        bulletsColor="dark"
        serviceName={<>Retoque y <br /> edición</>}
        serviceDescription="RETOQUE FOTOGRÁFICO, RECONSTRUCCIÓN Y PRODUCIIÓN DIGITAL."
        infoAlignment="left"
        images={[
          { source: "/images/6a.png", labelColor: "#29AED9", alt: "Revista COLMED" },
          { source: "/images/6b.png", labelColor: "#CC2219", alt: "Retoque de fotografías" },
        ]}
      />

      <ServiceSection
        imagesDelay={4000}
        serviceName={<>Personaje y <br /> stickers</>}
        serviceDescription="CREACIÓN DE PERSONAJE O MASCOTA PARA MARCA Y STICKERS PARA WHATSAPP."
        infoAlignment="right"
        images={[
          { source: "/images/7a.png", labelColor: "#DB9E31", alt: "Mokup Stikers" },
          { source: "/images/7b.png", labelColor: "#DB9E31", alt: "Ejemplos de stikers" },
        ]}
      />

      <ServiceSection
        serviceName={<>Ilustración/ <br /> arte digital</>}
        serviceDescription="ARTE DIGITAL DESDE CERO, PARA USO PERSONAL O PUBLICIDAD PARA MARCA."
        infoAlignment="left"
        images={[
          { source: "/images/8a.png", labelColor: "#427A1A", alt: "Ilustraciones" },
          { source: "/images/8b.png", labelColor: "#315BBA", alt: "Ilustraciones" },
          { source: "/images/8c.png", labelColor: "#A8A7A3", alt: "Ilustraciones" },
          { source: "/images/8d.png", labelColor: "#EDBE26", alt: "Ilustraciones" },
        ]}
      />

    </div>
  );
}

export default App;
