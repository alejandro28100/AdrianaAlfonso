import ServiceSection from "./components/ServiceSection"
import "swiper/swiper.min.css";
import "./index.css";

function App() {
  return (
    <div className="overflow-x-hidden">

      <ServiceSection
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
        serviceName={<>Retoque y <br /> edición</>}
        serviceDescription="RETOQUE FOTOGRÁFICO, RECONSTRUCCIÓN Y PRODUCIIÓN DIGITAL."
        infoAlignment="left"
        images={[
          { source: "/images/6a.png", labelColor: "#29AED9", alt: "Revista COLMED" },
          { source: "/images/6b.png", labelColor: "#CC2219", alt: "Retoque de fotografías" },
        ]}
      />

      <ServiceSection
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
