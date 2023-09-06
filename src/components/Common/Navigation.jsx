import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getLinksInstExtAll } from '../../api/institucionAPI';

const Navigation = () => {

    /* OBTENCION DE INFORMACION DEL STORE LINKS  */
    const { isLoading: loading_links_externos, data: links } = useQuery({
        queryKey: ['links_externos'],
        queryFn: getLinksInstExtAll,
    })

    const TIPO_LINK = {
        KARDEX : 'KARDEX'
    }

    useEffect(()=>{
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/mobilenav.js');
    })    
    
    if(!loading_links_externos){

        const links_filter = links.filter((e)=>e.ei_tipo===TIPO_LINK.KARDEX)

        return (
            <>
                <ul className="nav navbar-nav">
                    <li className="active">
                        <NavLink to={""}>Nosotros</NavLink>
                        <ul className="sub-menu">
                            <li><NavLink to={"/about-2"}>Mision y Vision</NavLink></li>
                            <li><NavLink to={"/contact-us"}>Contacto</NavLink></li>                            
                        </ul>
                    </li>
                    <li><NavLink to={""}>Academia</NavLink>
                        <ul className="sub-menu">
                            <li><NavLink to={"/academia?tipo=calendario"}>Calendario Academico</NavLink></li>
                            <li><NavLink to={"/academia?tipo=horario"}>Horario</NavLink></li>
                            <li><NavLink to={"/academia?tipo=planEstudio"}>Plan de Estudio</NavLink></li>
                            <li><NavLink to={"/academia?tipo=reglamento"}>Reglamento mod. de graduacion</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to={""}>Institucion</NavLink>
                        <ul className="sub-menu">
                        <li><NavLink to={"/institucion?tipo=convenios"}>Convenios Institucionales</NavLink></li>
                            <li><NavLink to={"/institucion?tipo=pasantias"}>Pasantias</NavLink></li>
                            <li><NavLink to={"/institucion?tipo=trabajos"}>Trabajos Dirigidos</NavLink></li>
                            {/* <li>
                                <NavLink to={""}>Services</NavLink>
                                <ul className="sub-menu">
                                    <li><NavLink to={"/services-1"}>Services 1</NavLink></li>
                                    <li><NavLink to={"/services-2"}>Services 2</NavLink></li>
                                    <li><NavLink to={"/services-detail"}>Service Detail</NavLink></li>
                                </ul>
                            </li>
                            <li>
                                <NavLink to={""}>Team</NavLink>
                                <ul className="sub-menu">
                                    <li><NavLink to={"/team-1"}>Our Team 1</NavLink></li>
                                    <li><NavLink to={"/team-2"}>Our Team 2</NavLink></li>
                                    <li><NavLink to={"/team-single"}>Team Detail</NavLink></li>
                                </ul>
                            </li> */}                            
                        </ul>
                    </li>
                    <li><NavLink to={"/"}>Convocatorias y Cursos</NavLink>
                        <ul className="sub-menu">
                            <li><NavLink to={"/blog-grid?tipo=convocatorias"}>Convocatorias</NavLink></li>
                            <li><NavLink to={"/blog-grid?tipo=comunicados"}>Comunicados</NavLink></li>
                            <li><NavLink to={"/blog-grid?tipo=avisos"}>Avisos</NavLink></li>
                            <li><NavLink to={"/blog-grid?tipo=cursos"}>Cursos</NavLink></li>
                            <li><NavLink to={"/blog-grid?tipo=seminarios"}>Seminarios</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to={"/"}>Mas</NavLink>
                        <ul className="sub-menu">
                            <li><NavLink to={"/blog-grid?tipo=servicios"}>Servicios</NavLink></li>
                            <li><NavLink to={"/blog-grid?tipo=ofertas_academicas"}>Ofertas Academicas</NavLink></li>
                            <li><NavLink to={"/blog-grid?tipo=publicaciones"}>Publicaciones</NavLink></li>
                            <li><NavLink to={"/blog-grid?tipo=gacetas"}>Gacetas</NavLink></li>
                            <li><NavLink to={"/blog-grid?tipo=eventos"}>Eventos</NavLink></li>
                            <li><NavLink to={"/blog-grid?tipo=videos"}>Videos</NavLink></li>
                        </ul>
                    </li>
                    {/* <li>
                        <NavLink to={""}>Projects</NavLink>
                        <ul className="sub-menu">
                            <li><NavLink to={""}>Project Grid Type</NavLink>
                                <ul className="sub-menu">
                                    <li><NavLink to={"/project-grid-3-columns"}>3 Columns</NavLink></li>
                                    <li><NavLink to={"/project-grid-3-columns-no-gap"}>3 Columns No Gutter</NavLink></li>
                                    <li><NavLink to={"/project-grid-4-columns"}>4 Columns</NavLink></li>
                                    <li><NavLink to={"/project-grid-4-columns-no-gap"}>4 Columns No Gutter</NavLink></li>
                                    <li><NavLink to={"/project-grid-5-columns"}>5 Columns</NavLink></li>
                                    <li><NavLink to={"/project-grid-5-columns-no-gap"}>5 Columns No Gutter</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink to={""}>Project Masonry Type</NavLink>
                                <ul className="sub-menu">
                                    <li><NavLink to={"/project-masonry-3-columns"}>3 Columns</NavLink></li>
                                    <li><NavLink to={"/project-masonry-3-columns-no-gap"}>3 Columns No Gutter</NavLink></li>
                                    <li><NavLink to={"/project-masonry-4-columns"}>4 Columns</NavLink></li>
                                    <li><NavLink to={"/project-masonry-4-columns-no-gap"}>4 Columns No Gutter</NavLink></li>
                                    <li><NavLink to={"/project-masonry-5-columns"}>5 Columns</NavLink></li>
                                    <li><NavLink to={"/project-masonry-5-columns-no-gap"}>5 Columns No Gutter</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink to={"/project-carousel"}>Project Carousel</NavLink></li>
                            <li><NavLink to={""}>Project Detail</NavLink>
                                <ul className="sub-menu">
                                    <li><NavLink to={"/project-detail1"}>Project Detail 1</NavLink></li>
                                    <li><NavLink to={"/project-detail2"}>Project Detail 2</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </li> */}
                    <li>
                        <NavLink to={""}>Kardex</NavLink>
                        <ul className="sub-menu">                                                        
                            {links_filter.map((item, index) => (
                                <li><a href={item.ei_link} target='_blank'>{item.ei_nombre}</a></li>                                                                    
                            ))}
                        </ul>
                    </li>
                    <li>
                        <NavLink to={""}>Biblioteca</NavLink>
                        <ul className="sub-menu">
                            <li><a href={"http://mibiblioteca.upea.bo/"}  target='_blank'>Biblioteca Virtual</a></li>
                            <li><a href={"https://biblioteca.upea.bo/"} target='_blank'>Biblioteca Upea</a></li>
                            <li><a href={"http://repositorio.upea.bo/"} target='_blank'>Repositorio</a></li>                            
                        </ul>
                    </li>
                    {/* <li><NavLink to={"/faq"}>FAQ</NavLink></li>
                    <li><NavLink to={"/contact-us"}>Contact us</NavLink></li> */}
                </ul>
            </>
        );
    }
};

export default Navigation;