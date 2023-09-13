import React from 'react';
import { NavLink } from 'react-router-dom';
import Switcher from '../Elements/Switcher';
import { getInstitucion, getStaticData } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';

const Footer3 = () => {

    /* OBTENCION DE INFORMACION DEL STORE API */
    const { isLoading: loading_institucion, data: institucion } = useQuery({
        queryKey: ['institucion'],
        queryFn: getInstitucion,
    })

    /* OBTENCION DE INFORMACION DEL STORE STATICO */
    const { isLoading: loading_static_data, data: staticData } = useQuery({
        queryKey: ['staticData'],
        queryFn: getStaticData,
    });

    if(!loading_institucion && !loading_static_data){

        /* DATOS DE LA INSTITUCION */
        const {
            institucion_correo1,
            institucion_correo2,
            institucion_celular1,
            institucion_celular2,
            institucion_telefono1,
            institucion_telefono2,
            institucion_logo,
            institucion_direccion,
            institucion_nombre,
            institucion_facebook,
            institucion_youtube,
            institucion_twitter,        
        } = institucion

        /* DATOS ESTATICOS */
        const {
            txt_content_footer,
        } = staticData

        return (
            <>
                <footer className="site-footer footer-large  footer-light footer-wide">
                    {/* FOOTER BLOCKES START */}
                    <div className="footer-top">
                        <div className="container-fluid">
                            <div className="row">
                                {/* ABOUT COMPANY */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_about">
                                        {/*<h4 class="widget-title">About Company</h4>*/}
                                        <div className="logo-footer clearfix p-b15">
                                            <NavLink to={"./"}>
                                                <img width={100} src={`${process.env.REACT_APP_ROOT_API}/InstitucionUpea/${institucion_logo}`} alt="Inteshape" />
                                            </NavLink>
                                        </div>
                                        <p>{institucion_nombre}</p>
                                        <p>{txt_content_footer}</p>
                                        <ul className="social-icons  sx-social-links">
                                            <li><a href={institucion_facebook} className="fa fa-facebook" target="_blank" rel="noopener noreferrer"> </a></li>
                                            <li><a href={institucion_twitter} className="fa fa-twitter" target="_blank" rel="noopener noreferrer"> </a></li>
                                            <li><a href={institucion_youtube} className="fa fa-youtube" target="_blank" rel="noopener noreferrer"> </a></li>
                                        </ul>
                                    </div>
                                </div>                                
                                {/* USEFUL LINKS */}
                                <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                                    <div className="widget widget_services inline-links">
                                        <h5 className="widget-title">Institucion y Academia</h5>
                                        <ul>
                                            <li><NavLink to={"/academia?tipo=calendario"}>Calendario Académico</NavLink></li>
                                            <li><NavLink to={"/academia?tipo=horario"}>Horario</NavLink></li>
                                            <li><NavLink to={"/academia?tipo=planEstudio"}>Plan de Estudio</NavLink></li>
                                            <li><NavLink to={"/academia?tipo=reglamento"}>Reglamento mod. De graduación</NavLink></li>
                                            <li><NavLink to={"/institucion?tipo=convenios"}>Convenios Institucionales</NavLink></li>
                                            <li><NavLink to={"/institucion?tipo=pasantias"}>Pasantías</NavLink></li>
                                            <li><NavLink to={"/institucion?tipo=trabajos"}>Trabajos Dirigidos</NavLink></li>
                                        </ul>                                        
                                    </div>
                                </div>
                                {/* USEFUL LINKS */}
                                <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                                    <div className="widget widget_services inline-links">
                                        <h5 className="widget-title">Más</h5>
                                        <ul>
                                            <li><NavLink to={"/recursos?tipo=servicios"}>Servicios</NavLink></li>
                                            <li><NavLink to={"/recursos?tipo=ofertas_academicas"}>Ofertas Academicas</NavLink></li>
                                            <li><NavLink to={"/recursos?tipo=publicaciones"}>Publicaciones</NavLink></li>
                                            <li><NavLink to={"/recursos?tipo=gacetas"}>Gacetas</NavLink></li>
                                            <li><NavLink to={"/recursos?tipo=eventos"}>Eventos</NavLink></li>
                                            <li><NavLink to={"/recursos?tipo=videos"}>Videos</NavLink></li>                                            
                                        </ul>
                                    </div>
                                </div>
                                {/* CONTACT US */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_address_outer">                                                                                
                                        <h5 className="widget-title">Contacto</h5>
                                        <ul className="widget_address">
                                            <li>{institucion_direccion}</li>
                                            <li>{institucion_correo1}</li>
                                            <li>{institucion_correo2}</li>
                                            <li>Cel : (+591) {institucion_celular1}</li>
                                            <li>Cel : (+591) {institucion_celular2}</li>
                                            <li>Tel : {institucion_telefono1}</li>
                                            <li>Tel : {institucion_telefono2}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    {/* FOOTER COPYRIGHT */}
                    <div className="footer-bottom overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="clearfix">
                                <div className="sx-footer-bot-center">
                                <span className="copyrights-text">© Universidad Pública de El Alto 2023 - Todos los derechos reservados. {institucion_nombre} | <a href="https://sie.upea.bo/l" target='_blank' rel="noopener noreferrer" style={{color: '#F9BF26'}}> SIE</a></span>
                                    <br />
                                    <span>web developer <a href="https://www.linkedin.com/in/cristhian-villca-mamani-06933b251/" target='_blank' rel="noopener noreferrer" style={{color: '#00B4DB'}}>by CristhianVM</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

                <Switcher />
            </>
        );
    }
};

export default Footer3;