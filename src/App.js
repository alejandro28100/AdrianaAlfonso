import ServiceSection from "./components/ServiceSection"
import "swiper/swiper.min.css";

function App() {
  return (
    <div className="">
      <ServiceSection
        serviceName="Branding para eventos"
        serviceDescription="Creación de recursos físicos y digitales para eventos."
        descriptionAlignment="left"
        images={[
          { source: "/images/4a.png" },
          { source: "/images/4b.png" },
          { source: "/images/4c.png" },
          { source: "/images/4d.png" }
        ]}
      />
    </div>
  );
}

export default App;
