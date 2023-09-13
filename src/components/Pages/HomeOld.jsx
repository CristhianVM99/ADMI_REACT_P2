import React from "react";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import Slider1 from "./../Elements/Slider1";
import ClientsLogo1 from "./../Elements/ClientsLogo1";
import Team1 from "./../Elements/Team1";
import Blog1 from "../Elements/Blog1";
import { TIPOS } from "../../types/types";
import Header2 from "../Common/Header2";
import Slider2 from "../Elements/Slider2";
import About2 from "../Elements/About2";
import WhatWeDo2 from "../Elements/WhatWeDo2";
import Projects2 from "../Elements/Projects2";
import Team2 from "./Team2";
import Services2 from "../Elements/Services2";
import Statistics1 from "../Elements/Statistics1";
import Testimonials2 from "../Elements/Testimonials2";
import Footer2 from "../Common/Footer2";
import Slider3 from "../Elements/Slider3";
import About3 from "../Elements/About3";
import WhatWeDo3 from "../Elements/WhatWeDo3";
import Projects3 from "../Elements/Projects3";
import Blog2 from "../Elements/Blog2";
import Services3 from "../Elements/Services3";
import Plans1 from "../Elements/Plans1";
import ContactUs1 from "../Elements/ContactUs1";
import ClientsLogo2 from "../Elements/ClientsLogo2";
import Header3 from "../Common/Header3";
import Footer3 from "../Common/Footer3";
import Slider4 from "../Elements/Slider4";
import About1 from "./About1";
import WhatWeDo1 from "../Elements/WhatWeDo1";
import Testimonials1 from "../Elements/Testimonials1";
import Services1 from "../Elements/Services1";
import Projects1 from "../Elements/Projects1";
import About4 from "../Elements/About4";
import Slider5 from "../Elements/Slider5";
import Header4 from "../Common/Header4";
import Slider6 from "../Elements/Slider6";
import Projects5 from "../Elements/Projects5";
import SimilarProjects from "../Elements/SimilarProjects";
import Achievements1 from "../Elements/Achievements1";

const Home1 = () => {

  const index1 = false

  const index2 = true
  const index3 = false
  //conflictos la 4
  const index4 = false
  const index5 = false
  const index6 = false

  return (
    <>

      {/* INDEX 1 */}
      {index1 && <div >
        <Header />
        {/* <Header2 /> */}
        <div className="page-content">
          
          <Slider1 />
          {/* <Slider2 /> */}

          {/* COMPONENTE => INSTITUCION. */}
          {/* <About1 /> */}

          {/* COMPONENTE  => CONVOCATORIAS */}
          <Blog1 tipo={TIPOS.CONVOCATORIAS} />
          
          {/* <WhatWeDo1 />
          <Testimonials1 /> */}

          {/* COMPONENTE => AUTORIDADES */}
          <Team1 />

          {/* COMPONENTE => CURSOS */}
          <Blog1 tipo={TIPOS.CURSOS} />
          
          {/* <Services1 />
          <Projects1 /> */}                    

          {/* COMPONENTE => LINK-EXTERNOS */}
          <ClientsLogo1 />
        </div>
        <Footer />
      </div>}  
      
      {/* INDEX 2 */}
      {index2 && <div>
        <Header2 />
        <div className="page-content">
            <Slider2 />
            {/* COMPONENTE => INSTITUCION. */}
            {/* <About1 /> */}
        
            {/* COMPONENTE  => CONVOCATORIAS */}
            <Blog1 tipo={TIPOS.CONVOCATORIAS} />
            
            {/* <WhatWeDo1 />
            <Testimonials1 /> */}
  
            {/* COMPONENTE => AUTORIDADES */}
            <Team1 />
          
            {/* COMPONENTE => CURSOS */}
            <Blog1 tipo={TIPOS.CURSOS} />
            
            {/* <Services1 />
            <Projects1 /> */}                    
  
            {/* COMPONENTE => LINK-EXTERNOS */}
            <ClientsLogo1 />
        </div>
        <Footer2 />
      </div>}    

      {/* INDEX 3 */}
      {index3 && <div>
        <Header3 />
                <div className="page-content">
                    <Slider3 />
                    <About3 bgcolor="bg-gray" />
                    <Achievements1 />
                    <WhatWeDo3 />
                    <Projects3 alignment="separator-center" title="Similar Project" bgcolor="bg-white" />
                    <Blog2 />
                    <Services3 />
                    <Plans1 />
                    <ContactUs1 />
                    <ClientsLogo2 bgcolor="bg-white" />
                </div>

                <Footer3 />  
      </div>}

      {/* INDEX 4 */}
      {index4 && <div>
        <Header />
                <div className="page-content">
                    {/* SLIDER START */}
                    <Slider4 />
                    <About1 />
                    <WhatWeDo1 />
                    <Testimonials1 />
                    <Services1 />
                    <Projects1 />
                    <ClientsLogo1 />
                    <Team1 />
                </div>

                <Footer />
        </div>
      }

      {/* INDEX 5 */}
      {index5 && <div>
        <Header4 />
                <div className="page-content">
                    <Slider5 />
                    <About4 />
                </div>
                <Footer2 />
      </div>
      }

      {/* INDEX 6 */}
      {index6 && <div>
        <Header4 />
                <div className="page-content">
                    <Slider6 />
                    <WhatWeDo1 />
                    <Projects5 />
                    <SimilarProjects alignment="separator-center" title="Similar Project" />
                    <Services3 />
                    <ClientsLogo2 bgcolor="bg-white" />
                </div>

                <Footer2 />
      </div>
      }
    </>
  );
};

export default Home1;
