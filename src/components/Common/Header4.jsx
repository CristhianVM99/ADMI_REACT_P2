import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';
import { getInstitucion,getStaticData } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';

function Header4(props) {
    const [isSearchActive, setIsSearchActive] = useState(false);

    const handleSearchToggle = () => {
        setIsSearchActive(!isSearchActive);
    };

    const { isLoading: loading_institucion, data: institucion } = useQuery({
        queryKey: ['institucion'],
        queryFn: getInstitucion,
    })
    const { isLoading: loading_static_data, data: staticData } = useQuery({
        queryKey: ['staticData'],
        queryFn: getStaticData,
    });

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

        // Limpia el event listener cuando el componente se desmonta
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if(!loading_institucion && !loading_static_data){

        /* DAT0S DE LA INSTITUCION */
        const {
            institucion_correo1,
            institucion_celular1,
            institucion_logo,
        } = institucion

        return (
            <header className="site-header nav-wide nav-transparent mobile-sider-drawer-menu">
                <div className="sticky-header main-bar-wraper navbar-expand-lg">
                    <div className="main-bar">
                        <div className="container clearfix">
                            <div className="logo-header">
                                <div className="logo-header-inner logo-header-one">
                                    <NavLink to={"/"}>
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
                            {/* MAIN NAVIGATION */}
                            <div className="header-nav nav-dark navbar-collapse collapse justify-content-center collapse">
                                <Navigation ></Navigation>
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
        ); 
    }
    return null
}

/* =============================================================================
/
/    WEB DEVELOPER => CRISTHIAN VILLCA MAMANI
/    LINKEDIN => https://www.linkedin.com/in/cristhian-villca-mamani-06933b251/
/
================================================================================ */ 
export default Header4;


