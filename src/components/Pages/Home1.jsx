import React, { useEffect } from "react";
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
import About1 from "../Elements/About1";
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
import { getInstitucion } from "../../api/institucionAPI";
import { useQuery } from "@tanstack/react-query";

const Home1 = () => {

  /* OBTENCION DE INFORMACION DEL STORE API */
  const { isLoading: loading_institucion, data: institucion } = useQuery({
    queryKey: ['institucion'],
    queryFn: getInstitucion,

  })

  useEffect(() => {
    if (!loading_institucion ) {
      const { colorinstitucion, institucion_logo, institucion_nombre, institucion_iniciales } = institucion;
      document.documentElement.style.setProperty(
        "--color-primario",
        colorinstitucion[0].color_primario
      );
      document.documentElement.style.setProperty(
        "--color-secundario",
        colorinstitucion[0].color_secundario
      );
      document.documentElement.style.setProperty(
        "--color-terciario",
        colorinstitucion[0].color_terciario
      );

      // Establece el ícono en el encabezado
      const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'icon';
      link.href = `${process.env.REACT_APP_ROOT_API}/InstitucionUpea/${institucion_logo}`;
      document.getElementsByTagName('head')[0].appendChild(link);  
      document.title =  institucion_iniciales+" | "+institucion_nombre 
    }    
  }, [loading_institucion, institucion]);  

  const index1 = false

  const index2 = false
  const index3 = true
  //conflictos la 4
  const index4 = false



  //conflictos index 5 ---
  const index5 = false
  const index6 = false

  if(!loading_institucion){    

    return (
      <>
  
        {/* INDEX 1 */}
        {index1 && <div >
          <Header />
          <div className="page-content">
            
            <Slider1 />

            {/* COMPONENTE => AUTORIDADES */}
            <Team1 />

            {/* COMPONENTE => CATEGORIAS */}
            <Statistics1 />  
  
            {/* COMPONENTE  => CONVOCATORIAS */}
            <Blog1 tipo={TIPOS.CONVOCATORIAS} />                      
                                                         
  
            {/* COMPONENTE => CURSOS */}
            <Blog1 tipo={TIPOS.CURSOS} />                                                                             
  
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

              {/* COMPONENTE => AUTORIDADES */}
              <Testimonials2 separatoralignment="separator-center" />
  
              {/* COMPONENTE  => CONVOCATORIAS */}
              <WhatWeDo1 tipo={TIPOS.CONVOCATORIAS}/>                 

              {/* COMPONENTE => CURSOS */}
              <WhatWeDo1 tipo={TIPOS.CURSOS}/>  

              {/* COMPONENTE => CATEGORIAS */}
              <WhatWeDo2 />                                                       
  
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

              {/* COMPONENTE => AUTORIDADES */}
              <Team2 />

              <ContactUs1 />
  
              {/* COMPONENTE  => CONVOCATORIAS */}          
              <Projects3 tipo={TIPOS.CONVOCATORIAS}/>                              
  
              {/* COMPONENTE => CURSOS */}
              <Projects3 tipo={TIPOS.CURSOS}/>

              <WhatWeDo3 />
              <Services3 />
                            
              <ClientsLogo2 bgcolor="bg-white" />   
              <About1 />                
  
              {/* COMPONENTE => LINK-EXTERNOS */}
              <ClientsLogo1 />
          </div>
          <Footer3 />  
        </div>}
  
        {/* INDEX 4 */}
        {index4 && <div>
          <Header />
            <div className="page-content">
            {/* SLIDER START */}
            <Slider4 />
            {/* COMPONENTE  => CONVOCATORIAS */}
            <Blog1 tipo={TIPOS.CONVOCATORIAS} />            
  
            {/* COMPONENTE => AUTORIDADES */}
            <Team1 />
                  
            {/* COMPONENTE => CURSOS */}
            <Blog1 tipo={TIPOS.CURSOS} />                    
                  
            {/* COMPONENTE => LINK-EXTERNOS */}
            <ClientsLogo1 />
            </div>
          <Footer />
          </div>
        }
  
        {/* INDEX 5 */}
        {index5 && <div>
          <Header4 />
                  <div className="page-content">
                      <Slider5 />
                      {/* COMPONENTE  => CONVOCATORIAS */}
                      <Blog1 tipo={TIPOS.CONVOCATORIAS} />            
  
                      {/* COMPONENTE => AUTORIDADES */}
                      <Team1 />
  
                      {/* COMPONENTE => CURSOS */}
                      <Blog1 tipo={TIPOS.CURSOS} />                    
  
                      {/* COMPONENTE => LINK-EXTERNOS */}
                      <ClientsLogo1 />
                  </div>
                  <Footer2 />
        </div>
        }
  
        {/* INDEX 6 */}
        {index6 && <div>
          <Header4 />
                  <div className="page-content">
                      <Slider6 />                    
                      {/* COMPONENTE  => CONVOCATORIAS */}
                      <Blog1 tipo={TIPOS.CONVOCATORIAS} />            
  
                      {/* COMPONENTE => AUTORIDADES */}
                      <Team1 />
  
                      {/* COMPONENTE => CURSOS */}
                      <Blog1 tipo={TIPOS.CURSOS} />                    
  
                      {/* COMPONENTE => LINK-EXTERNOS */}
                      <ClientsLogo1 />
                  </div>
  
                  <Footer2 />
        </div>
        }
      </>
    );
  }
};

export default Home1;
