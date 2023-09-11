import React from "react";
import { NavLink } from "react-router-dom";
import { getInstitucion, getStaticDataIndex } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';

const Team1 = () => {

    /* OBTENCION DE INFORMACION DEL STORE API */
    const { isLoading: loading_institucion, data: institucion } = useQuery({
        queryKey: ['institucion'],
        queryFn: getInstitucion,
    })

    /* OBTENCION DE INFORMACION DEL STORE STATICO */
    const { isLoading: loading_static_data, data: staticData } = useQuery({
        queryKey: ['staticDataIndex'],
        queryFn: getStaticDataIndex,
    });      

    var bgimg1 = require("./../../images/background/cross-line2.png");

    if(!loading_institucion && !loading_static_data){    

      /* INFORMACION DE LA INSTITUCION */
      const {
        autoridad
      } = institucion;

      /* INFORMACION ESTATICA */
      const {
        txt_content_autoridades,
      }= staticData

    return (
        <>
          {autoridad ? (<div className="section-full p-t80 p-b50 mobile-page-padding">
            <div className="container">
              {/* TITLE START */}
              <div className="section-head">
                <div className="sx-separator-outer separator-left">
                  <div
                    className="sx-separator bg-white bg-moving bg-repeat-x"
                    style={{ backgroundImage: "url(" + bgimg1 + ")" }}
                  >
                    <h3 className="sep-line-one">{txt_content_autoridades}</h3>
                  </div>
                </div>
              </div>
              {/* TITLE END */}
              {/* IMAGE CAROUSEL START */}
              <div className="section-content">
                <div className="row team-item-four">
                  {autoridad.map((item, index) => (
                    <div className="col-lg-4 col-md-6 col-sm-6 m-b30" key={index}>
                      <div className="our-team-2 ">
                        <div className="profile-image">
                          <img src={`${process.env.REACT_APP_ROOT_API}/InstitucionUpea/Autoridad/${item.foto_autoridad}`} alt="" style={{height: '400px', objectFit: 'cover'}}/>
                          <div className="icons">
                            <a href={item.facebook_autoridad} target="_blank" rel="noopener noreferrer">
                              <i className="fa fa-facebook" />
                            </a>
                            <a href={item.twiter_autoridad} target="_blank" rel="noopener noreferrer">
                              {" "}
                              <i className="fa fa-twitter" />
                            </a>
                            <a href={item.celular_autoridad} target="_blank" rel="noopener noreferrer">
                              {" "}
                              <i className="fa fa-whatsapp" />
                            </a>                            
                          </div>
                        </div>
                        <div className="figcaption text-black">
                          <h4 className="m-t0">
                            <NavLink to={"#"}>{item.nombre_autoridad}</NavLink>
                          </h4>
                          <span className="m-b0">{item.cargo_autoridad}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>): <div>Sin Registros</div>}
        </>
      );
  }
  return null
};

/* =============================================================================
/
/    WEB DEVELOPER => CRISTHIAN VILLCA MAMANI
/    LINKEDIN => https://www.linkedin.com/in/cristhian-villca-mamani-06933b251/
/
================================================================================ */ 

export default Team1;
