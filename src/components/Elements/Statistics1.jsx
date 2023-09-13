import React from 'react';
import CountUp from 'react-countup';
import { getConvocatorias, getCursos, getEventos, getGacetas, getInstitucion, getOfertasAcademicas, getPublicaciones, getServicios, getStaticImages, getVideos } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';
import { TIPOS } from '../../types/types';
import { NavLink } from 'react-router-dom';

const Statistics1 = () => {      

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
        !loading_videos &&
        !loading_images 
    ){

        const convocatorias_cat = convocatorias.filter((e) => e.tipo_conv_comun.tipo_conv_comun_titulo === TIPOS.CONVOCATORIAS);
        const comunicados_cat = convocatorias.filter((e) => e.tipo_conv_comun.tipo_conv_comun_titulo === TIPOS.COMUNICADOS);
        const avisos_cat = convocatorias.filter((e) => e.tipo_conv_comun.tipo_conv_comun_titulo === TIPOS.AVISOS);
        const cursos_cat = cursos.filter((e) => e.tipo_curso_otro.tipo_conv_curso_nombre === TIPOS.CURSOS);
        const seminarios_cat = cursos.filter((e) => e.tipo_curso_otro.tipo_conv_curso_nombre === TIPOS.SEMINARIOS);

        return (
            <>
                <div className="section-full overlay-wraper sx-bg-secondry mobile-page-padding  p-t80 p-b50 bg-parallax ml-auto" data-stellar-background-ratio="0.5" style={{ backgroundImage: 'url(' + images.BgOne + ')' }}>
                        <div className="overlay-main bg-black opacity-05" />
                        <div className="container">
                            <div className="section-content">
                                <div className="counter-blocks">
                                    <div className="row">                                        
                                        <div className="col-xl-3 col-md-6 m-b30 ">
                                        <NavLink to={`/recursos?tipo=${TIPOS.CONVOCATORIAS}`}>
                                            <div className="sx-count text-white sx-icon-box-wraper bg-repeat p-a30" style={{ backgroundImage: 'url(' + images.BgConvocatorias + ')',backgroundSize: 'cover' }}>
                                                <h2 className="m-t0 sx-text-primary text-right"><span className="counter" style={{color: "var(--color-primario)",textShadow: "0px 0px 5px rgba(0,0,0,1)"}}><CountUp end={convocatorias_cat.length} duration={5} /></span></h2>
                                                <h4 className="m-b0" style={{textShadow: '0px 3px 7px rgba(0,0,0,1)'}}>Convocatorias</h4>
                                            </div>
                                        </NavLink>
                                        </div>                                        
                                        <div className="col-xl-3 col-md-6 m-b30">
                                        <NavLink to={`/recursos?tipo=${TIPOS.COMUNICADOS}`}>
                                            <div className="sx-count  text-white sx-icon-box-wraper bg-repeat p-a30" style={{ backgroundImage: 'url(' + images.BgComunicados + ')',backgroundSize: 'cover' }}>
                                                <h2 className="m-t0  sx-text-primary text-right"><span className="counter" style={{color: "var(--color-primario)",textShadow: "0px 0px 5px rgba(0,0,0,1)"}}><CountUp end={comunicados_cat.length} duration={5} /></span></h2>
                                                <h4 className="m-b0" style={{textShadow: '0px 3px 7px rgba(0,0,0,1)'}}>Comunicados</h4>
                                            </div>
                                        </NavLink>
                                        </div>
                                        <div className="col-xl-3 col-md-6 m-b30">
                                        <NavLink to={`/recursos?tipo=${TIPOS.AVISOS}`}>
                                            <div className="sx-count  text-white sx-icon-box-wraper bg-repeat p-a30" style={{ backgroundImage: 'url(' + images.BgAvisos+ ')',backgroundSize: 'cover' }}>
                                                <h2 className="m-t0  sx-text-primary text-right"><span className="counter" style={{color: "var(--color-primario)",textShadow: "0px 0px 5px rgba(0,0,0,1)"}}><CountUp end={avisos_cat.length} duration={5} /></span></h2>
                                                <h4 className="m-b0" style={{textShadow: '0px 3px 7px rgba(0,0,0,1)'}}>Avisos</h4>
                                            </div>
                                        </NavLink>
                                        </div>
                                        <div className="col-xl-3 col-md-6 m-b30">
                                        <NavLink to={`/recursos?tipo=${TIPOS.CURSOS}`}>
                                            <div className="sx-count  text-white sx-icon-box-wraper bg-repeat p-a30" style={{ backgroundImage: 'url(' + images.BgCursos + ')',backgroundSize: 'cover' }}>
                                                <h2 className="m-t0  sx-text-primary text-right"><span className="counter" style={{color: "var(--color-primario)",textShadow: "0px 0px 5px rgba(0,0,0,1)"}}><CountUp end={cursos_cat.length} duration={5} /></span></h2>
                                                <h4 className="m-b0" style={{textShadow: '0px 3px 7px rgba(0,0,0,1)'}}>Cursos</h4>
                                            </div>
                                        </NavLink>
                                        </div>
                                        <div className="col-xl-3 col-md-6 m-b30">
                                        <NavLink to={`/recursos?tipo=${TIPOS.SEMINARIOS}`}>
                                            <div className="sx-count  text-white sx-icon-box-wraper bg-repeat p-a30" style={{ backgroundImage: 'url(' + images.BgSeminarios + ')',backgroundSize: 'cover' }}>
                                                <h2 className="m-t0  sx-text-primary text-right"><span className="counter" style={{color: "var(--color-primario)",textShadow: "0px 0px 5px rgba(0,0,0,1)"}}><CountUp end={seminarios_cat.length} duration={5} /></span></h2>
                                                <h4 className="m-b0" style={{textShadow: '0px 3px 7px rgba(0,0,0,1)'}}>Seminarios</h4>
                                            </div>
                                        </NavLink>
                                        </div>
                                        <div className="col-xl-3 col-md-6 m-b30">
                                        <NavLink to={`/recursos?tipo=${TIPOS.SERVICIOS}`}>
                                            <div className="sx-count  text-white sx-icon-box-wraper bg-repeat  p-a30" style={{ backgroundImage: 'url(' + images.BgServicios + ')',backgroundSize: 'cover' }}>
                                                <h2 className="m-t0  sx-text-primary text-right"><span className="counter" style={{color: "var(--color-primario)",textShadow: "0px 0px 5px rgba(0,0,0,1)"}}><CountUp end={servicios.length} duration={5} /></span><span></span></h2>
                                                <h4 className="m-b0" style={{textShadow: '0px 3px 7px rgba(0,0,0,1)'}}>Servicios</h4>
                                            </div>
                                        </NavLink>
                                        </div>
                                        <div className="col-xl-3 col-md-6 m-b30">
                                        <NavLink to={`/recursos?tipo=${TIPOS.OFERTAS_ACADEMICAS}`}>
                                            <div className="sx-count  text-white sx-icon-box-wraper bg-repeat  p-a30" style={{ backgroundImage: 'url(' + images.BgOfertasAcademicas + ')',backgroundSize: 'cover' }}>
                                                <h2 className="m-t0  sx-text-primary text-right"><span className="counter" style={{color: "var(--color-primario)",textShadow: "0px 0px 5px rgba(0,0,0,1)"}}><CountUp end={ofertas.length} duration={5} /></span><span></span></h2>
                                                <h4 className="m-b0" style={{textShadow: '0px 3px 7px rgba(0,0,0,1)'}}>Ofertas Academicas</h4>
                                            </div>
                                        </NavLink>
                                        </div>
                                        <div className="col-xl-3 col-md-6 m-b30">
                                        <NavLink to={`/recursos?tipo=${TIPOS.PUBLICACIONES}`}>
                                            <div className="sx-count  text-white sx-icon-box-wraper bg-repeat  p-a30" style={{ backgroundImage: 'url(' + images.BgPublicaciones + ')',backgroundSize: 'cover' }}>
                                                <h2 className="m-t0  sx-text-primary text-right"><span className="counter" style={{color: "var(--color-primario)",textShadow: "0px 0px 5px rgba(0,0,0,1)"}}><CountUp end={publicaciones.length} duration={5} /></span><span></span></h2>
                                                <h4 className="m-b0" style={{textShadow: '0px 3px 7px rgba(0,0,0,1)'}}>Publicaciones</h4>
                                            </div>
                                        </NavLink>
                                        </div>
                                        <div className="col-xl-3 col-md-6 m-b30">
                                        <NavLink to={`/recursos?tipo=${TIPOS.GACETAS}`}>
                                            <div className="sx-count  text-white sx-icon-box-wraper bg-repeat  p-a30" style={{ backgroundImage: 'url(' + images.BgGacetas + ')',backgroundSize: 'cover' }}>
                                                <h2 className="m-t0  sx-text-primary text-right"><span className="counter" style={{color: "var(--color-primario)",textShadow: "0px 0px 5px rgba(0,0,0,1)"}}><CountUp end={gacetas.length} duration={5} /></span><span></span></h2>
                                                <h4 className="m-b0" style={{textShadow: '0px 3px 7px rgba(0,0,0,1)'}}>Gacetas</h4>
                                            </div>
                                        </NavLink>
                                        </div>
                                        <div className="col-xl-3 col-md-6 m-b30">
                                        <NavLink to={`/recursos?tipo=${TIPOS.EVENTOS}`}>
                                            <div className="sx-count  text-white sx-icon-box-wraper bg-repeat  p-a30" style={{ backgroundImage: 'url(' + images.BgEventos + ')',backgroundSize: 'cover' }}>
                                                <h2 className="m-t0  sx-text-primary text-right"><span className="counter" style={{color: "var(--color-primario)",textShadow: "0px 0px 5px rgba(0,0,0,1)"}}><CountUp end={eventos.length} duration={5} /></span><span></span></h2>
                                                <h4 className="m-b0" style={{textShadow: '0px 3px 7px rgba(0,0,0,1)'}}>Eventos</h4>
                                            </div>
                                        </NavLink>
                                        </div>
                                        <div className="col-xl-3 col-md-6 m-b30">
                                        <NavLink to={`/recursos?tipo=${TIPOS.VIDEOS}`}>
                                            <div className="sx-count  text-white sx-icon-box-wraper bg-repeat  p-a30" style={{ backgroundImage: 'url(' + images.BgVideos + ')',backgroundSize: 'cover' }}>
                                                <h2 className="m-t0  sx-text-primary text-right"><span className="counter" style={{color: "var(--color-primario)",textShadow: "0px 0px 5px rgba(0,0,0,1)"}}><CountUp end={videos.length} duration={5} /></span><span></span></h2>
                                                <h4 className="m-b0" style={{textShadow: '0px 3px 7px rgba(0,0,0,1)'}}>Videos</h4>
                                            </div>
                                        </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
};

export default Statistics1;