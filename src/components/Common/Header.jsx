import React, { useEffect, useState } from 'react';
import Navigation from '../Common/Navigation';
import { NavLink } from 'react-router-dom';
import { getInstitucion,getStaticData } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';

import bnr from './../../images/background/bg-map.png';
import logo1 from './../../images/logo-1.png';

const Header = () => {
    
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
    
    const [isSearchActive, setSearchActive] = useState(false);
    const [isQuoteActive, setQuoteActive] = useState(false);

    const handleSearchToggle = () => {
        setSearchActive(!isSearchActive);
    };

    const handleQuoteToggle = () => {
        setQuoteActive(!isQuoteActive);
    };

    useEffect(() => {
        const handleScroll = () => {
          const offset = window.scrollY;
          const stickyheader = document.querySelector('.sticky-header');
      
          if (stickyheader) {
            if (offset >= 100) {
              stickyheader.classList.add('is-fixed');
              stickyheader.classList.add('color-fill');
            } else {
              stickyheader.classList.remove('is-fixed');
              stickyheader.classList.remove('color-fill');
            }
          }
        };
      
        window.addEventListener('scroll', handleScroll);              
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);      

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
            
            /* COMPONENTE */
            return (
                <>
                    <header className="site-header header-style-1 nav-wide mobile-sider-drawer-menu">
                        <div className="top-bar bg-gray">
                            <div className="container">
                                <div className="d-flex justify-content-end">
                                    <ul className="list-unstyled e-p-bx">
                                        <li><span>Correo :</span>{ institucion_correo1 }</li>
                                        <li><span>Celular :</span>(+591) { institucion_celular1 }</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="sticky-header main-bar-wraper navbar-expand-lg">
                            <div className="main-bar header-left-gray-block bg-white">
                                <div className="container clearfix">
                                    <div className="logo-header">
                                        <div className="logo-header-inner logo-header-one">
                                            <NavLink to={"/"} style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
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
                                            <div className="contact-slide-show">
                                                {/* _______onClick={handleQuoteToggle} */}
                                                <a href={process.env.REACT_APP_ADMIN_API} target='_blank' rel="noopener noreferrer" className="get-in-touch-btn from-top" 
                                                >{staticData.btn_content_admin}</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* EXTRA Nav */}
                                    {/* MAIN NAVIGATION */}
                                    <div className="header-nav nav-dark navbar-collapse collapse justify-content-start collapse">
                                        <Navigation />
                                    </div>
                                    {/* CONTACT */}
                                    <div className="contact-slide-hide" style={{ backgroundImage: 'url(' + bnr + ')', right: isQuoteActive ? '0px' : '100%' }}>
                                        <div className="contact-nav">
                                            <NavLink to={"#"} className="contact_close" onClick={handleQuoteToggle}>×</NavLink>
                                            <div className="contact-nav-form">
                                                <div className="row">
                                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                                        <div className=" contact-nav-info">
                                                            <div className="sx-icon-box-wraper left p-b30">
                                                                <div className="icon-xs inline-icon m-b20 scale-in-center"><i className="fa fa-phone" /></div>
                                                                <div className="icon-content">
                                                                    <h6 className="m-t0">Celular</h6>
                                                                    <p>(+591) {institucion_celular1}</p>
                                                                </div>
                                                            </div>
                                                            <div className="sx-icon-box-wraper left p-b30">
                                                                <div className="icon-xs inline-icon m-b20 scale-in-center"><i className="fa fa-envelope" /></div>
                                                                <div className="icon-content">
                                                                    <h6 className="m-t0">Correo</h6>
                                                                    <p>{institucion_correo1}</p>
                                                                </div>
                                                            </div>
                                                            <div className="sx-icon-box-wraper left p-b30">
                                                                <div className="icon-xs inline-icon m-b20 scale-in-center"><i className="fa fa-map-marker" /></div>
                                                                <div className="icon-content">
                                                                    <h6 className="m-t0">Dirección</h6>
                                                                    <p>{institucion_direccion}</p>
                                                                </div>
                                                            </div>
                                                            <div className="full-social-bg">
                                                                <ul>
                                                                    <li><a href={institucion_facebook} target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" /></a></li>                                                                    
                                                                    <li><a href={institucion_twitter} target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" /></a></li>                                                                    
                                                                    <li><a href={institucion_youtube} target="_blank" rel="noopener noreferrer" className="youtube"><i className="fa fa-youtube" /></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* SITE SEARCH */}
                                    <div id="search" className={isSearchActive ? "open" : null}>
                                        <span className="close" onClick={handleSearchToggle} />
                                        <form role="search" id="searchform" action="/search" method="get" className="radius-xl">
                                            <div className="input-group">
                                                <input defaultValue="" name="q" type="search" placeholder="Type to search" />
                                                <span className="input-group-btn"><button type="button" className="search-btn"><i className="fa fa-search arrow-animation" /></button></span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </>
            ); 
        }   
};

/* =============================================================================
/
/    WEB DEVELOPER => CRISTHIAN VILLCA MAMANI
/    LINKEDIN => https://www.linkedin.com/in/cristhian-villca-mamani-06933b251/
/
================================================================================ */ 
export default Header;

