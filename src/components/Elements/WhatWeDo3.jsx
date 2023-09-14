import React from 'react';
import { NavLink } from 'react-router-dom';
import { getConvocatorias, getCursos, getEventos, getGacetas, getOfertasAcademicas, getPublicaciones, getServicios, getStaticImages, getVideos } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';
import { TIPOS } from '../../types/types';

var bgimg1 = require('./../../images/background/cross-line2.png');
var bgimg2 = require('./../../images/background/cross-line2.png');

const WhatWeDo3 = () => {

    /* OBTENCION DE INFORMACION DEL STORE IMAGES */
    const { isLoading: loading_images, data: images } = useQuery({
        queryKey: ['getStaticImages'],
        queryFn: getStaticImages,
    });

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
                link: `/recursos?tipo=${TIPOS.CONVOCATORIAS}`,
                image: images.BgConvocatorias
            },
            {
                count: comunicados_cat.length,
                title: 'Comunicados',
                link: `/recursos?tipo=${TIPOS.COMUNICADOS}`,
                image: images.BgComunicados
            },
            {
                count: avisos_cat.length,
                title: 'Avisos',
                link: `/recursos?tipo=${TIPOS.AVISOS}`,
                image: images.BgAvisos
            },
            {
                count: cursos_cat.length,
                title: 'Cursos',
                link: `/recursos?tipo=${TIPOS.CURSOS}`,
                image: images.BgCursos
            },
            {
                count: seminarios_cat.length,
                title: 'Seminarios',
                link: `/recursos?tipo=${TIPOS.SEMINARIOS}`,
                image: images.BgSeminarios
            },
            {
                count: servicios.length,
                title: 'Servicios',
                link: `/recursos?tipo=${TIPOS.SERVICIOS}`,
                image: images.BgServicios
            },
            {
                count: ofertas.length,
                title: 'Ofertas Academicas',
                link: `/recursos?tipo=${TIPOS.OFERTAS_ACADEMICAS}`,
                image: images.BgOfertasAcademicas
            },
            {
                count: publicaciones.length,
                title: 'Publicaciones',
                description: 'Documentos académicos y trabajos de investigación compartidos por la institución.',
                link: `/recursos?tipo=${TIPOS.PUBLICACIONES}`,
                image: images.BgPublicaciones
            },
            {
                count: gacetas.length,
                title: 'Gacetas',
                description: 'Publicaciones periódicas que registran noticias, eventos y actividades de la institución.',
                link: `/recursos?tipo=${TIPOS.GACETAS}`,
                image: images.BgGacetas
            },
            {
                count: eventos.length,
                title: 'Eventos',
                description: 'Publicaciones periódicas que registran noticias, eventos y actividades de la institución.',
                link: `/recursos?tipo=${TIPOS.EVENTOS}`,
                image: images.BgEventos
            },
            {
                count: videos.length,
                title: 'Videos',
                description: 'Contenido audiovisual que presenta grabaciones de clases, conferencias y recursos educativos.',
                link: `/recursos?tipo=${TIPOS.VIDEOS}`,
                image: images.BgVideos
            },
        ]

        return (
            <>
                <div className="section-full  mobile-page-padding bg-white  p-t80 p-b50 bg-repeat overflow-hide" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="sx-separator-outer separator-center">
                                <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg2 + ')' }}>
                                    <h3 className="sep-line-one">Categorias</h3>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content">
                            <div className="row number-block-three-outer justify-content-center">
                                {services.map((item, index) => (
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 m-b30" key={index}>
                                        <NavLink to={item.link}>
                                        <div className="number-block-three slide-ani-top">
                                            <div className="sx-media">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className="figcaption bg-gray  p-a30">
                                                <h4 className="m-tb0"><NavLink to={"/services-detail"}>{item.title}</NavLink></h4>
                                                <div className="figcaption-number animate-top-content">
                                                    <span>{item.count}</span>
                                                </div>
                                            </div>
                                        </div>
                                        </NavLink>
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

export default WhatWeDo3;