import React from 'react';
import { NavLink } from 'react-router-dom';
import Switcher from '../Elements/Switcher';
import { getInstitucion, getStaticData } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';

const Footer = () => {

    const { isLoading: loading_institucion, data: institucion } = useQuery({
        queryKey: ['institucion'],
        queryFn: getInstitucion,
    })
    const { isLoading: loading_static_data, data: staticData } = useQuery({
        queryKey: ['staticData'],
        queryFn: getStaticData,
    });

    if(!loading_institucion && !loading_static_data){
        const {
            institucion_correo1,
            institucion_celular1,
            institucion_telefono1,
            institucion_logo,
            institucion_direccion,
            institucion_nombre,
            institucion_facebook,
            institucion_youtube,
            institucion_twitter,
            institucion_iniciales,
        } = institucion

        const {
            txt_content_footer,
        } = staticData

        return (
            <>
                <footer className="site-footer footer-large  footer-dark	footer-wide">
                    {/* FOOTER BLOCKES START */}
                    <div className="footer-top overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                {/* ABOUT COMPANY */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_about">
                                        {/*<h4 class="widget-title">About Company</h4>*/}
                                        <div className="logo-footer clearfix p-b15">
                                            <NavLink to={"/"} >
                                                <img src={`${process.env.REACT_APP_ROOT_API}/InstitucionUpea/${institucion_logo}`} alt="Inteshape" />
                                            </NavLink>
                                        </div>
                                        <p>{txt_content_footer}</p>
                                        <ul className="social-icons  sx-social-links">
                                            <li><a href={institucion_facebook} className="fa fa-facebook" target="_blank"></a></li>
                                            <li><a href={institucion_twitter} className="fa fa-twitter" target="_blank"></a></li>
                                            <li><a href={institucion_youtube} className="fa fa-youtube" target="_blank"></a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* USEFUL LINKS */}
                                <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                                    <div className="widget widget_services inline-links">
                                        <h5 className="widget-title">Institucion</h5>
                                        <ul>
                                            <li><NavLink to={"/about-1"}>Calendario Academico</NavLink></li>
                                            <li><NavLink to={"/about-2"}>Horario</NavLink></li>
                                            <li><NavLink to={"/about-2"}>Plan de Estudio</NavLink></li>
                                            <li><NavLink to={"/about-2"}>Reglamento mod. de graduacion</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* USEFUL LINKS */}
                                <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                                    <div className="widget widget_services inline-links">
                                        <h5 className="widget-title">Mas</h5>
                                        <ul>
                                            <li><NavLink to={"/blog-grid?tipo=servicios"}>Servicios</NavLink></li>
                                            <li><NavLink to={"/blog-grid?tipo=ofertas_academicas"}>Ofertas Academicas</NavLink></li>
                                            <li><NavLink to={"/blog-grid?tipo=publicaciones"}>Publicaciones</NavLink></li>
                                            <li><NavLink to={"/blog-grid?tipo=gacetas"}>Gacetas</NavLink></li>
                                            <li><NavLink to={"/blog-grid?tipo=eventos"}>Eventos</NavLink></li>
                                            <li><NavLink to={"/blog-grid?tipo=videos"}>Videos</NavLink></li>
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
                                            <li>Cel : (+591) {institucion_celular1}</li>
                                            <li>Tel : {institucion_telefono1}</li>
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
                            <div className="row">
                                <div className="sx-footer-bot-left">
                                    <span className="copyrights-text">Universidad Publica de El Alto - CristhianVM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <Switcher/>
    
            </>
        );
    }
    return null    
};

export default Footer;