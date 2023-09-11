import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getLinksInstExtAll } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';
import { TIPOS } from '../../types/types';

const Navigation = () => {

    /* OBTENCION DE INFORMACION DEL STORE LINKS  */
    const { isLoading: loading_links_externos, data: links } = useQuery({
        queryKey: ['links_externos'],
        queryFn: getLinksInstExtAll,
    })

    /* TIPADO PARA LA FILTRACION PARA LOS LINKS QUE PERTENCEN AL NAV CON EL NOMBRE DE KARDEX */
    const TIPO_LINK = {
        KARDEX: 'KARDEX'
    }

    useEffect(() => {
        /* FUNCION PARA EL LOADER DE LA PAGINA */
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
    }, [])

    /* RENDERIZADO DEL COMPONENTE NAVIGATION */
    if (!loading_links_externos) {

        /* FILTRADO DE LINKS QUE TENGAN EL TIPO 'KARDEX' */
        const links_filter = links.filter((e) => e.ei_tipo === TIPO_LINK.KARDEX)

        /* COMPONENTE */
        return (
            <>
                <ul className="nav navbar-nav">
                    <li className="active">
                        {/* LINKS PARA LA INFORMACION DE LA CARRERA */}
                        <NavLink to={""}>Nosotros</NavLink>
                        <ul className="sub-menu">
                            <li><NavLink to={"/sobreNosotros"}>Misión y Visión</NavLink></li>
                            <li><NavLink to={"/contacto"}>Contacto</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        {/* LINKS PARA LA INFORMACION DE LA INSTITUCION */}
                        <NavLink to={""}>Academia</NavLink>
                        <ul className="sub-menu">
                            <li><NavLink to={`/academia?tipo=${TIPOS.CALENDARIO}`}>Calendario Académico</NavLink></li>
                            <li><NavLink to={`/academia?tipo=${TIPOS.HORARIO}`}>Horario</NavLink></li>
                            <li><NavLink to={`/academia?tipo=${TIPOS.PLANESTUDIO}`}>Plan de Estudio</NavLink></li>
                            <li><NavLink to={`/academia?tipo=${TIPOS.REGLAMENTO}`}>Reglamento mod. De graduación</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        {/* LINKS PARA INFORMACION DEL LA INSTITUCION CON EL EXTERIOR */}
                        <NavLink to={""}>Institución</NavLink>
                        <ul className="sub-menu">
                            <li><NavLink to={`/institucion?tipo=${TIPOS.CONVENIOS}`}>Convenios Institucionales</NavLink></li>
                            <li><NavLink to={`/institucion?tipo=${TIPOS.PASANTIAS}`}>Pasantías</NavLink></li>
                            <li><NavLink to={`/institucion?tipo=${TIPOS.TRABAJOS}`}>Trabajos Dirigidos</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        {/* LINKS DE RECURSOS DE LA CARRERA */}
                        <NavLink to={"/"}>Convocatorias y Cursos</NavLink>
                        <ul className="sub-menu">
                            <li><NavLink to={`/recursos?tipo=${TIPOS.CONVOCATORIAS}`}>Convocatorias</NavLink></li>
                            <li><NavLink to={`/recursos?tipo=${TIPOS.COMUNICADOS}`}>Comunicados</NavLink></li>
                            <li><NavLink to={`/recursos?tipo=${TIPOS.AVISOS}`}>Avisos</NavLink></li>
                            <li><NavLink to={`/recursos?tipo=${TIPOS.CURSOS}`}>Cursos</NavLink></li>
                            <li><NavLink to={`/recursos?tipo=${TIPOS.SEMINARIOS}`}>Seminarios</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        {/* LINKS PARA MAS RECURSOS DE LA CARRERA */}
                        <NavLink to={"/"}>Más</NavLink>
                        <ul className="sub-menu">
                            <li><NavLink to={`/recursos?tipo=${TIPOS.SERVICIOS}`}>Servicios</NavLink></li>
                            <li><NavLink to={`/recursos?tipo=${TIPOS.OFERTAS_ACADEMICAS}`}>Ofertas Académicas</NavLink></li>
                            <li><NavLink to={`/recursos?tipo=${TIPOS.PUBLICACIONES}`}>Publicaciones</NavLink></li>
                            <li><NavLink to={`/recursos?tipo=${TIPOS.GACETAS}`}>Gacetas</NavLink></li>
                            <li><NavLink to={`/recursos?tipo=${TIPOS.EVENTOS}`}>Eventos</NavLink></li>
                            <li><NavLink to={`/recursos?tipo=${TIPOS.VIDEOS}`}>Videos</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        {/* LINKS PROPIOS DE LA INSTITUCION */}
                        <NavLink to={""}>Kardex</NavLink>
                        {links_filter ? (
                            <ul className="sub-menu">
                                {links_filter.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.ei_link} target='_blank' rel="noopener noreferrer">{item.ei_nombre}</a>
                                    </li>
                                ))}
                            </ul>
                        ) : null}
                    </li>
                    <li>
                        {/* LINKS DE RECURSOS DE LA UNIVERSIDAD */}
                        <NavLink to={""}>Biblioteca</NavLink>
                        <ul className="sub-menu">
                            <li><a href={"http://mibiblioteca.upea.bo/"} target='_blank' rel="noopener noreferrer">Biblioteca Virtual</a></li>
                            <li><a href={"https://biblioteca.upea.bo/"} target='_blank' rel="noopener noreferrer">Biblioteca Upea</a></li>
                            <li><a href={"http://repositorio.upea.bo/"} target='_blank' rel="noopener noreferrer">Repositorio</a></li>
                        </ul>
                    </li>
                </ul>
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

export default Navigation;