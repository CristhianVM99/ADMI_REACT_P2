import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';
import { getInstitucion, getStaticData } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';

const Header2 = () =>{

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

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            const stickyheader = document.querySelector('.sticky-header ');

            if (offset >= 100) {
                stickyheader.classList.add('is-fixed');
                stickyheader.classList.add('color-fill');
            } else {
                stickyheader.classList.remove('is-fixed');
                stickyheader.classList.remove('color-fill');
            }
        }

        window.addEventListener('scroll', handleScroll);       

        return () => {
            // Limpia el evento del manejador de scroll cuando el componente se desmonta
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // El segundo argumento vacío [] asegura que este efecto se ejecute solo una vez

    if(!loading_institucion && !loading_static_data){    

        /* DATOS DE LA INSTITUCION */
        const {
            institucion_correo1,
            institucion_celular1,
            institucion_logo,
            institucion_direccion,
            institucion_facebook,
            institucion_youtube,
            institucion_twitter,
        } = institucion

        return (
            <>
                <header className="site-header nav-wide nav-transparent mobile-sider-drawer-menu">
                    <div className="top-bar sx-bg-secondry">
                        <div className="container">
                            <div className="d-flex justify-content-between ">
                                <ul className="list-unstyled e-p-bx text-white">
                                    <li><span>Correo:</span> {institucion_correo1}</li>
                                    <li><span>Celular:</span>(+591) {institucion_celular1}</li>
                                </ul>
                                <ul className="list-unstyled social-bx text-white d-flex flex-wrap align-content-center">
                                    <li><a href={institucion_facebook} target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" /></a></li>                                                                    
                                    <li><a href={institucion_twitter} target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" /></a></li>                                                                    
                                    <li><a href={institucion_youtube} target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="sticky-header main-bar-wraper navbar-expand-lg">
                        <div className="main-bar">
                            <div className="container clearfix">
                                <div className="logo-header">
                                    <div className="logo-header-inner logo-header-one">
                                        <NavLink to={"./"}>
                                            <img width={70} src={`${process.env.REACT_APP_ROOT_API}/InstitucionUpea/${institucion_logo}`} alt="Inteshape" />
                                        </NavLink>
                                    </div>
                                </div>
                                {/* NAV Toggle Button */}
                                <button id="mobile-side-drawer" data-target=".header-nav" data-toggle="collapse" type="button" className="navbar-toggler collapsed">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar icon-bar-first" />
                                    <span className="icon-bar icon-bar-two" />
                                    <span className="icon-bar icon-bar-three" />                      
                                </button>
                                {/* EXTRA NAV */}
                                <div className="extra-nav">                                        
                                        <div className="extra-cell">
                                            <div className="contact-slide-show" style={{background: '#fff'}}>
                                                {/* _______onClick={handleQuoteToggle} */}
                                                <a href={process.env.REACT_APP_ADMIN_API} style={{color: '#000'}} target='_blank' rel="noopener noreferrer" className="get-in-touch-btn from-top" 
                                                >{staticData.btn_content_admin}</a>
                                            </div>
                                        </div>
                                    </div>                                
                                {/* EXTRA Nav */}
                                {/* MAIN NAVIGATION */}
                                <div className="header-nav nav-dark navbar-collapse collapse justify-content-center collapse">
                                    <Navigation />
                                </div>                                
                            </div>
                        </div>
                    </div>
                </header>

            </>
        );
    }
};

export default Header2;

