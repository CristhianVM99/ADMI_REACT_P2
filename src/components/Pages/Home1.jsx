import React from "react";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import Slider1 from "./../Elements/Slider1";
import About1 from "./../Elements/About1";
import WhatWeDo1 from "./../Elements/WhatWeDo1";
import Testimonials1 from "./../Elements/Testimonials1";
import Services1 from "./../Elements/Services1";
import Projects1 from "./../Elements/Projects1";
import ClientsLogo1 from "./../Elements/ClientsLogo1";
import Team1 from "./../Elements/Team1";
import Blog1 from "../Elements/Blog1";
import About4 from "../Elements/About4";
import Header2 from "../Common/Header2";
import Slider2 from "../Elements/Slider2";
import About2 from "../Elements/About2";
import WhatWeDo2 from "../Elements/WhatWeDo2";
import Projects2 from "../Elements/Projects2";
import Team2 from "../Elements/Team2";
import Services2 from "../Elements/Services2";
import Statistics1 from "../Elements/Statistics1";
import Testimonials2 from "../Elements/Testimonials2";
import Footer2 from "../Common/Footer2";

const Home1 = () => {
  const TIPOS = {
    CONVOCATORIAS: "CONVOCATORIAS",
    CURSOS: "CURSOS",
  };

  return (
    <>
      <div>
        <Header />
        <div className="page-content">
          <Slider1 />

          {/* COMPONENTE SOBRE LA INSTITUCION. */}
          <About1 />

          {/* COMPONENTE PARA CONVOCATORIAS */}
          <Blog1 tipo={TIPOS.CONVOCATORIAS} />
          <WhatWeDo1 />
          <Testimonials1 />

          {/* COMPONENTE PARA CURSOS */}
          <Blog1 tipo={TIPOS.CURSOS} />
          <Services1 />
          <Projects1 />

          {/* COMPONENTE PARA LINK-EXTERNOS */}
          <ClientsLogo1 />

          {/* COMPONENTE PARA AUTORIDADES */}
          <Team1 />
        </div>
        <Footer />
      </div>
      {/* <div>
        <Header2 />
        <div className="page-content">
          <Slider2 />
          <About2 />
          <WhatWeDo2 />
          <Projects2 />
          <Team2 />
          <Services2 />
          <Blog1 />
          <Statistics1 />
          <Testimonials2 separatoralignment="separator-center" />
        </div>

        <Footer2 />
      </div> */}
    </>
  );
};

export default Home1;
