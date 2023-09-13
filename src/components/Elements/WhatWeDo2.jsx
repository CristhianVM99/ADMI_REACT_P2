import React from 'react';
import { NavLink } from 'react-router-dom';
import { getConvocatorias, getCursos, getEventos, getGacetas, getOfertasAcademicas, getPublicaciones, getServicios, getVideos } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';
import { TIPOS } from '../../types/types';

const WhatWeDo2 = () => {     

    /* OBTENCION DE INFORMACION DEL STORE CONVOCATORIAS */
    const { isLoading: loading_convocatorias, data: convocatorias } = useQuery({
        queryKey: ['convocatorias'],
        queryFn: getConvocatorias,
    });

    /* OBTENCION DE INFORMACION DEL STORE CURSO */
    const { isLoading: loading_cursos, data: cursos } = useQuery({
        queryKey: ['cursos'],
        queryFn: getCursos,
    });

    /* OBTENCION DE INFORMACION DEL STORE API SERVICIOS*/
    const { isLoading: loading_servicios, data: servicios } = useQuery({
        queryKey: ['servicios'],
        queryFn: getServicios,
    })

    /* OBTENCION DE INFORMACION DEL STORE API OFERTAS ACADEMICAS*/
    const { isLoading: loading_ofertas, data: ofertas } = useQuery({
        queryKey: ['ofertas'],
        queryFn: getOfertasAcademicas,
    })

    /* OBTENCION DE INFORMACION DEL STORE API PUBLICACIONES*/
    const { isLoading: loading_publicaciones, data: publicaciones } = useQuery({
        queryKey: ['publicaciones'],
        queryFn: getPublicaciones,
    })

    /* OBTENCION DE INFORMACION DEL STORE API GACETAS*/
    const { isLoading: loading_gacetas, data: gacetas } = useQuery({
        queryKey: ['gacetas'],
        queryFn: getGacetas,
    })

    /* OBTENCION DE INFORMACION DEL STORE API EVENTOS*/
    const { isLoading: loading_eventos, data: eventos } = useQuery({
        queryKey: ['eventos'],
        queryFn: getEventos,
    })

    /* OBTENCION DE INFORMACION DEL STORE API VIDEOS*/
    const { isLoading: loading_videos, data: videos } = useQuery({
        queryKey: ['videos'],
        queryFn: getVideos,
    })

    if(
        !loading_convocatorias &&
        !loading_cursos &&
        !loading_servicios &&
        !loading_ofertas &&
        !loading_publicaciones &&
        !loading_gacetas &&
        !loading_eventos &&
        !loading_videos 
    ){

        const convocatorias_cat = convocatorias.filter((e) => e.tipo_conv_comun.tipo_conv_comun_titulo === TIPOS.CONVOCATORIAS);
        const comunicados_cat = convocatorias.filter((e) => e.tipo_conv_comun.tipo_conv_comun_titulo === TIPOS.COMUNICADOS);
        const avisos_cat = convocatorias.filter((e) => e.tipo_conv_comun.tipo_conv_comun_titulo === TIPOS.AVISOS);
        const cursos_cat = cursos.filter((e) => e.tipo_curso_otro.tipo_conv_curso_nombre === TIPOS.CURSOS);
        const seminarios_cat = cursos.filter((e) => e.tipo_curso_otro.tipo_conv_curso_nombre === TIPOS.SEMINARIOS);

        const services = [
            {
                count: convocatorias_cat.length,
                title: 'Convocatorias',
                description: 'Oportunidades para unirse a programas, proyectos o eventos académicos y profesionales.',
                link: `/recursos?tipo=${TIPOS.CONVOCATORIAS}`
            },
            {
                count: comunicados_cat.length,
                title: 'Comunicados',
                description: 'Mensajes informativos sobre acontecimientos, novedades y noticias relevantes en la institución',
                link: `/recursos?tipo=${TIPOS.COMUNICADOS}`
            },
            {
                count: avisos_cat.length,
                title: 'Avisos',
                description: 'Breves notificaciones que comunican cambios, recordatorios o datos importantes para la comunidad.',
                link: `/recursos?tipo=${TIPOS.AVISOS}`
            },
            {
                count: cursos_cat.length,
                title: 'Cursos',
                description: 'Oferta educativa con contenidos específicos para el desarrollo de habilidades y conocimientos.',
                link: `/recursos?tipo=${TIPOS.CURSOS}`
            },
            {
                count: seminarios_cat.length,
                title: 'Seminarios',
                description: 'Sesiones formativas que exploran temas especializados y promueven la discusión académica.',
                link: `/recursos?tipo=${TIPOS.SEMINARIOS}`
            },
            {
                count: servicios.length,
                title: 'Servicios',
                description: 'Recursos y asistencia disponibles para estudiantes y miembros de la institución.',
                link: `/recursos?tipo=${TIPOS.SERVICIOS}`
            },
            {
                count: ofertas.length,
                title: 'Ofertas Academicas',
                description: 'Catálogo de programas de estudio y opciones educativas ofrecidas por la institución.',
                link: `/recursos?tipo=${TIPOS.OFERTAS_ACADEMICAS}`
            },
            {
                count: publicaciones.length,
                title: 'Publicaciones',
                description: 'Documentos académicos y trabajos de investigación compartidos por la institución.',
                link: `/recursos?tipo=${TIPOS.PUBLICACIONES}`
            },
            {
                count: gacetas.length,
                title: 'Gacetas',
                description: 'Publicaciones periódicas que registran noticias, eventos y actividades de la institución.',
                link: `/recursos?tipo=${TIPOS.GACETAS}`
            },
            {
                count: eventos.length,
                title: 'Eventos',
                description: 'Publicaciones periódicas que registran noticias, eventos y actividades de la institución.',
                link: `/recursos?tipo=${TIPOS.EVENTOS}`
            },
            {
                count: videos.length,
                title: 'Videos',
                description: 'Contenido audiovisual que presenta grabaciones de clases, conferencias y recursos educativos.',
                link: `/recursos?tipo=${TIPOS.VIDEOS}`
            },
        ]
        
        var bgimg1 = require('./../../images/background/bg-5.png');
        var bgimg2 = require('./../../images/background/cross-line2.png');

        return (
            <>
                <div className="section-full  mobile-page-padding bg-white  p-t80 p-b50 bg-repeat overflow-hide" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                    <div className="container">
                        <div className="large-title-block text-center">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className="sx-separator-outer separator-center">
                                    <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg2 + ')' }}>
                                        <h3 className="sep-line-one">Categorias</h3>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                        </div>
                        <div className="section-content">
                            <div className="row number-block-two-outer">
                                {services.map((item, index) => (
                                    <div className="col-lg-4 col-md-6 col-sm-12 m-b30" key={index}>
                                        <div className="number-block-two animate-in-to-top bdr-gray-light bdr-solid bdr-1">
                                            <div className="figcaption bg-white  p-a30">
                                                <h4 className="m-t0">{item.title}</h4>
                                                <p>{item.description}</p>
                                                <NavLink to={item.link} className="site-button-link">Ver Mas</NavLink>
                                                <div className="figcaption-number animate-in-to-top-content">
                                                    <span>{item.count}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default WhatWeDo2;