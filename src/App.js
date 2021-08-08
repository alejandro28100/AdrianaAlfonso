import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import ServiceSection from "./components/ServiceSection"
import EducationDetail from "./components/EducationDetail";

import "./index.css";

function App() {

  const [isSibarActive, setIsSibarActive] = useState(false);

  useEffect(() => {
    let { classList } = document.body;
    if (isSibarActive) {
      return classList.add("overflow-hidden");
    }
    classList.remove("overflow-hidden");

  }, [isSibarActive])

  function closeSidebar() {
    setIsSibarActive(false);
  }

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
          <h1 className="font-ArimaMadurai text-6xl md:text-8xl mt-auto text-white p-14">Adriana <br /> Alfonso</h1>
        </nav>
        <nav aria-hidden={!isSibarActive} className={`absolute inset-0 bg-black text-white w-full h-full transition-opacity duration-300 ease-in ${isSibarActive ? "opacity-60 z-auto " : "opacity-0 -z-1"} `} >

          <ul className="flex flex-col items-center justify-center font-ArimaMadurai text-2xl p-5">
            <li className="w-full text-right">
              <button onClick={() => setIsSibarActive(false)}>
                <AiOutlineClose className="w-8 h-8" />
              </button>
            </li>
            <li onClick={closeSidebar} className="py-4">
              <a href="#about" >
                Sobre mí
              </a>
            </li>
            <li onClick={closeSidebar} className="py-4">
              <a href="#experience">
                Experiencia
              </a>
            </li>
            <li onClick={closeSidebar} className="py-4">
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="about" className="md:overflow-hidden my-10 lg:my-0 h-screen w-screen lg:flex justify-center lg:justify-start relative">
        <img className="absolute object-cover -z-1 inset-0 w-full h-full" src="/images/2.png" alt="" />
        <article className="h-auto box-content lg:m-16 md:w-7/12 lg:w-5/12 p-10 md:p-16 bg-white">
          <h1 className="font-ArimaMadurai text-5xl md:text-6xl lg:text-7xl text-center font-extrabold my-4">Sobre mí</h1>
          <p className="font-sans font-light text-sm md:text-base text-justify mb-3 md:mb-4">
            Mi nombre es Adriana Elizabeth Alfonso Cayetano, soy
            una persona altamente efectiva y con disposición de
            aprender nuevas cosas. Me entusiasma mi carrera y el
            área en el que se desenvuelve. La resiliencia, empatía y
            perfeccionismo son palabras que me caracterizan.
          </p>
          <p className="font-sans font-light text-sm md:text-base text-justify mb-3 md:mb-4">
            Mi propósito es apoyar a los emprendedores y
            pequeños empresarios a darle visivilidad a su proyecto
            capacitándolos y ofreciendoles mis servicios
          </p>

          <h2 className="font-sans font-bold text-base text-center my-2 md:my-4">Softwares</h2>

          <div className="flex w-full justify-around items-center">
            {
              [
                { image: "/icons/2Icono1Photoshop.png", text: "Photoshop" },
                { image: "/icons/2Icono2Ilustrator.png", text: "Ilustrator" },
                { image: "/icons/2Icono3InDesing.png", text: "In Design" },
                { image: "/icons/2Icono4Excel.png", text: "Excel" }
              ].map(({ image, text }, index) => (
                <figure key={index} className="text-center flex flex-col justify-center items-center">
                  <img alt={text} className="w-8 h-8 md:w-12 md:h-12" src={image} />
                  <figcaption className="my-1 text-gray-900 font-medium text-sm md:text-base">{text}</figcaption>
                </figure>
              ))
            }
          </div>
        </article>
      </section>

      <section id="education" className="my-10 lg:my-0 flex items-center flex-col lg:flex-row w-screen" >
        <img className="order-last md:order-first object-cover w-full lg:w-3/12 xl:w-4/12 max-h-48 md:max-h-full" src="/images/3.png" alt="Persona escribiendo en una computadora" />
        <div className="w-auto h-full p-5 md:p-10">
          <h1 className="text-4xl md:text-6xl font-ArimaMadurai font-extrabold my-2 md:my-4 lg:my-12">Formación</h1>
          <article className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <EducationDetail className="my-4" {...{ image: "/icons/3Icono1IEU.png", heading: "Instituto de Estudios Universitarios", description: "Cursando la Licenciatura en Creación e Innovación de Empresas 2021" }} />
              <EducationDetail className="my-4" {...{ image: "/icons/3Icono2Colmed.png", heading: "Colmed: Grupo Educativo", description: "Diplomado en Diseño Gráfico 2020" }} />
              <EducationDetail className="my-4 md:my-16" {...{ image: "/icons/3Icono3TecdeMonterrey.png", heading: "Tecnológico de Monterrey", description: "Certificado en Introducción a las redes sociales. Sus objetivos y sus metas 2020" }} />
              <EducationDetail className="my-4" {...{ image: "/icons/3Icono4Domestika.png", heading: "Domestika: Comunidad Creativa", description: ["Creación de un logo desde cero 2019", "Fotografía profesional para Instagram 2021", "Estrategias de Instagram para desarrollo de marcas 2021"] }} />
            </div>

            <div className="md:w-1/2">
              <EducationDetail className="mb-4 md:my-4" {...{ image: "/icons/3Icono5Udemy.png", heading: "Udemy: Aprende en cualquier lugar", description: "Diseño de Interiores con Sweethome3D 2019" }} />
              <EducationDetail className="my-4 md:mt-8 lg:mt-10" {...{ image: "/icons/3Icono6Capacítate.png", heading: "Fundación Carlos Slim: Capacítate para el empleo", description: ["Programa de educación Financiera 2018", "Auxiliar contable 2018"] }} />
              <EducationDetail className="my-4" {...{ image: "/icons/3Icono7Nafin.png", heading: "Nacional Financiera S.N.C., I.B.D.", description: ["Plan para tu idea de negocio 2020", "Gestión de costos 2020", "Servicio al cliente 2020", "Plan de continuidad de negocios 2020", "Aspectos legales en el crédito 2020"] }} />
            </div>

          </article>
        </div>
      </section>

      <ServiceSection
        className="my-10 lg:my-0"
        id="experience"
        serviceName={<>Branding/ <br /> para eventos</>}
        serviceDescription="Creación de recursos físicos y digitales para eventos."
        infoAlignment="right"
        slides={[
          { source: "/images/ex-1a1.png", labelColor: "#434655", alt: "Boletos para eventos", },
          { source: "/images/ex-1b.png", labelColor: "#434655", alt: "Invitaciones para eventos", },
          { source: "/images/ex-1c.png", labelColor: "#434655", alt: "Banners para eventos", },
        ]}
      />

      <ServiceSection
        className="my-10 lg:my-0"
        serviceName={<>Creación <br /> de logos</>}
        serviceDescription="CONCEPTUALIZACIÓN, BRANDING, MANUAL DE MARCA Y MOKUPS."
        infoAlignment="left"
        slides={[
          { source: "/images/4a.png", labelColor: "#A70000", alt: "Mokups Bocadito" },
          { source: "/images/4b.png", labelColor: "#ED80A2", alt: "Mokups Ilustrame la vida" },
          { source: "/images/4c.png", labelColor: "#EA4D01", alt: "Mokups Universal Dark Kitchen" },
          { source: "/images/4d.png", labelColor: "#416128", alt: "Mokups Lunch Pavillon" }
        ]}
      />

      <ServiceSection
        className="my-10 lg:my-0"
        bulletsColor="dark"
        serviceName={<>Diseño <br /> de recursos</>}
        serviceDescription="INFOGRAFÍAS, PUBLICACIONES PARA REDES SOCIALES, FLYERS, MEMBRESÍAS Y MÁS."
        infoAlignment="right"
        slides={[
          { source: "/images/5a.png", labelColor: "#DB9E31", alt: "Diseños CANIRAC" },
          { source: "/images/5b.png", labelColor: "#6C63FC", alt: "Diseños CURU" },
          { source: "/images/5c.png", labelColor: "#A70000", alt: "Diseños AMentors" }
        ]}
      />

      <ServiceSection
        className="my-10 lg:my-0"
        bulletsColor="dark"
        serviceName={<>Retoque y <br /> edición</>}
        serviceDescription="RETOQUE FOTOGRÁFICO, RECONSTRUCCIÓN Y PRODUCIIÓN DIGITAL."
        infoAlignment="left"
        slides={[
          { source: "/images/revista.jpeg", labelColor: "#434655", alt: "Boletín Informativo CANIRAC Puebla" },
          { source: "/images/6a.png", labelColor: "#29AED9", alt: "Revista COLMED" },
          { source: "/images/6b.png", labelColor: "#CC2219", alt: "Retoque de fotografías" },
        ]}
      />

      <ServiceSection
        className="my-10 lg:my-0"
        imagesDelay={4000}
        serviceName={<>Personajes y <br /> stickers</>}
        serviceDescription="CREACIÓN DE PERSONAJE O MASCOTA PARA MARCA Y STICKERS PARA WHATSAPP."
        infoAlignment="right"
        bulletsColor="dark"
        slides={[
          {
            labelColor: "#DB9E31",
            type: "component",
            component: () => (
              <div className={`flex flex-wrap items-center justify-center space-x-4 space-y-4 md:space-x-6 md:space-y-6 md:p-5 lg:space-x-10 lg:space-y-10`}>
                <video muted playsInline autoPlay loop alt="" className="w-20 md:w-36 lg:w-48 object-contain" src="/videos/05.webm" />
                <video muted playsInline autoPlay loop alt="" className="w-20 md:w-36 lg:w-48 object-contain" src="/videos/10.webm" />
                <video muted playsInline autoPlay loop alt="" className="w-20 md:w-36 lg:w-48 object-contain" src="/videos/15.webm" />
                <video muted playsInline autoPlay loop alt="" className="w-20 md:w-36 lg:w-48 object-contain" src="/videos/17.webm" />
                <video muted playsInline autoPlay loop alt="" className="w-20 md:w-36 lg:w-48 object-contain" src="/videos/20.webm" />
                <video muted playsInline autoPlay loop alt="" className="w-20 md:w-36 lg:w-48 object-contain" src="/videos/23.webm" />
              </div>
            )
          },
          { source: "/images/7a.png", labelColor: "#DB9E31", alt: "Mokup Stikers" },
        ]}
      />

      <ServiceSection
        className="my-10 lg:my-0"
        serviceName={<>Ilustración/ <br /> arte digital</>}
        serviceDescription="ARTE DIGITAL DESDE CERO, PARA USO PERSONAL O PUBLICIDAD PARA MARCA."
        infoAlignment="left"
        slides={[
          { source: "/images/8a.png", labelColor: "#427A1A", alt: "Ilustraciones" },
          { source: "/images/8b.png", labelColor: "#315BBA", alt: "Ilustraciones" },
          { source: "/images/8c.png", labelColor: "#A8A7A3", alt: "Ilustraciones" },
          { source: "/images/8d.png", labelColor: "#EDBE26", alt: "Ilustraciones" },
        ]}
      />
      <section id="contact" className="p-5 md:p-16 lg:p-24 min-h-screen w-screen flex flex-col lg:flex-row items-center justify-evenly bg-black text-white font-ArimaMadurai">
        <div className="mx-5 flex h-full flex-col justify-around lg:justify-evenly w-full lg:w-1/2">
          <h1 className="my-10 md:my-0 text-5xl lg:text-6xl text-center">CONTACTO:</h1>
          <div className="text-center">
            <h2 className="text-4xl">Adriana Alfonso</h2>
            <div className="my-4">
              <a target="_blank" rel="noreferrer" href="https://wa.link/xner40">
                <img className="w-8 h-8 mx-3 inline-block" src="/icons/Whatsapp.png" alt="Whatsapp" />
              </a>
              <a href="mailto:adryalfonso.ci03@gmail.com">
                <img className="w-8 h-8 mx-3 inline-block" src="/icons/Gmail.png" alt="Gmail" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Adry.EAC">
                <img className="w-8 h-8 mx-3 inline-block" src="/icons/Facebook.png" alt="Facebook" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/adry_cox/">
                <img className="w-8 h-8 mx-3 inline-block" src="/icons/Instagram.png" alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
        <form name="Contacto | Adriana Alfonso" method="post" className="mx-5 text-black flex w-full lg:w-1/2 items-center flex-col">
          <input type="hidden" name="form-name" value="Contacto | Adriana Alfonso" />
          <div className="my-2 w-full">
            <label className="block" htmlFor="name">Nombre</label>
            <input id="name" name="Nombre" className="p-1 rounded w-full" type="text" placeholder="Nombre" />
          </div>
          <div className="my-2 w-full">
            <label className="block" htmlFor="contact">Correo o Número de Celular</label>
            <input id="contact" name="Contacto" className="p-1 rounded w-full" type="text" placeholder="Correo o Número de Celular" />
          </div>
          <div className="my-2 w-full">
            <label className="block" htmlFor="message">Mensaje</label>
            <textarea name="Mensaje" id="message" className="p-1 rounded w-full" placeholder="Mensaje" />
          </div>
          <button className="my-4 py-2 px-4 bg-white text-black rounded">Enviar</button>
        </form>

      </section>

    </div >
  );
}

export default App;
