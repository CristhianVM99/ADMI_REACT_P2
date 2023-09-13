import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { getConvocatorias, getCursos, getInstitucion, getStaticDataIndex } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';
import { TIPOS } from '../../types/types';

const Projects3 = ({tipo}) =>{

    /* OBTENCION DE INFORMACION DEL STORE API */
    const { isLoading: loading_institucion, data: institucion } = useQuery({
        queryKey: ['institucion'],
        queryFn: getInstitucion,
    })

    /* OBTENCION DE INFORMACION DEL STORE STATICO */
    const { isLoading: loading_static_data, data: staticData } = useQuery({
        queryKey: ['staticDataIndex'],
        queryFn: getStaticDataIndex,
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


    if(!loading_institucion && !loading_static_data && !loading_convocatorias && tipo===TIPOS.CONVOCATORIAS){        
        
        var bgimg1 = require('./../../images/background/cross-line2.png');
        const options = {
            loop: true,
            autoplay: false,
            center: false,
            items: 3,
            margin: 40,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                    margin: 15,
                },
                640: {
                    items: 2,
                    margin: 15
                },
                768: {
                    items: 2,
                    margin: 15
                },
                991: {
                    items: 3,
                    margin: 15
                },
                1200: {
                    items: 3
                }

            }
        };

         /* DATOS ESTATICOS */
         const {
            txt_content_convocatorias,
            txt_content_btn,
        } = staticData

        /* DATOS DE LA INSTITUCION*/
        const {
            institucion_iniciales,
            institucion_nombre
        } = institucion

        /* FILTRADO DE LOS ULTIMOS COMUNICADOS, CONVOCATORIAS Y AVISOS QUE TIENE LA INSTITUCION. */
        const filteredDataComunicados = convocatorias.filter((e) => e.tipo_conv_comun.tipo_conv_comun_titulo === TIPOS.COMUNICADOS);
        const lastComunicado = filteredDataComunicados[filteredDataComunicados.length - 1];
        
        const filteredDataConvocatorias = convocatorias.filter((e) => e.tipo_conv_comun.tipo_conv_comun_titulo === TIPOS.CONVOCATORIAS);
        const lastConvocatoria = filteredDataConvocatorias[filteredDataConvocatorias.length - 1];

        const filteredDataAvisos = convocatorias.filter((e) => e.tipo_conv_comun.tipo_conv_comun_titulo === TIPOS.AVISOS);
        const lastAviso = filteredDataAvisos[filteredDataAvisos.length - 1];

        /* ARRAY CON LOS ULTIMOS COMUNICADOS, CONVOCATORIAS Y AVISOS FILTRADOS */
        const ConvocatoriasAndComunicadosAndAvisos = [
            lastConvocatoria,
            lastComunicado,            
            lastAviso,            
        ].filter((item) => item !== undefined)
        return (
            <>
                <div className={"bg-white section-full p-tb80  inner-page-padding"}>
                    <div className="container-fluid">
                        <div className="section-content">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className={`separator-center sx-separator-outer`}>
                                    <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                        <h3 className="sep-line-one">{txt_content_convocatorias}</h3>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            <div className="work-carousel-outer">
                                <OwlCarousel className="owl-carousel mfp-gallery project-carousel project-carousel3 owl-btn-vertical-center p-lr80" {...options}>
                                    {ConvocatoriasAndComunicadosAndAvisos.map((item, index) => (
                                        <div key={index} className="item">
                                            <div className="project-mas hover-shadow m-a30">
                                                <div className="image-effect-one">
                                                    <img style={{height: '500px', objectFit: 'cover'}} src={`${process.env.REACT_APP_ROOT_API}/Convocatorias/${item.con_foto_portada}`} alt="" />
                                                    <div className="figcaption">
                                                        <NavLink to={`/detalle?id=${item.idconvocatorias}&tipo=${item.tipo_conv_comun.tipo_conv_comun_titulo}`} style={{background: 'var(--color-primario)',color: '#fff',padding: '10px 20px', borderRadius: '20px'}}>
                                                            { txt_content_btn }
                                                        </NavLink>
                                                    </div>
                                                </div>
                                                <div className="project-info p-a20 bg-gray">
                                                    <h4 className="sx-tilte m-t0"><NavLink to={`/detalle?id=${item.idconvocatorias}&tipo=${item.tipo_conv_comun.tipo_conv_comun_titulo}`}>{item.con_titulo}</NavLink></h4>
                                                    <p>{ institucion_nombre }</p>
                                                    <NavLink to={`/detalle?id=${item.idconvocatorias}&tipo=${item.tipo_conv_comun.tipo_conv_comun_titulo}`}><i className="link-plus bg-primary" /></NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    if(!loading_institucion && !loading_static_data && !loading_cursos && tipo===TIPOS.CURSOS){        
        
        var bgimg1 = require('./../../images/background/cross-line2.png');
        const options = {
            loop: true,
            autoplay: false,
            center: false,
            items: 3,
            margin: 40,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                    margin: 15,
                },
                640: {
                    items: 1,
                    margin: 15
                },
                768: {
                    items: 1,
                    margin: 15
                },
                991: {
                    items: 2,
                    margin: 15
                },
                1200: {
                    margin: 30,
                    items: 2
                }

            }
        };

        /* DATOS OBTENIDOS DESDE LA STORE API */
        const {
            txt_content_cursos,
            txt_content_btn,
        } = staticData

        /* DATOS OBTENIDOS DESDE LA STORE STATICA*/
        const {
            institucion_iniciales,
            institucion_nombre
        } = institucion

        /* FILTRADO DE LOS ULTIMOS CURSOS Y SEMINARIOS. */
        const filteredDataCursos = cursos.filter((e) => e.tipo_curso_otro.tipo_conv_curso_nombre === TIPOS.CURSOS);
        const lastCurso = filteredDataCursos[filteredDataCursos.length - 1];
        
        const filteredDataSeminarios = cursos.filter((e) => e.tipo_curso_otro.tipo_conv_curso_nombre === TIPOS.SEMINARIOS);
        const lastSeminario = filteredDataSeminarios[filteredDataSeminarios.length - 1];        
        
        /* ARRAY CON LOS ULTIMOS CURSOS Y SEMINARIOS FILTRADOS */
        const CursosAndSeminarios = [
          lastCurso,
          lastSeminario,          
        ].filter((item) => item !== undefined)

        return (
            <>
                <div className={"bg-white section-full p-tb80  inner-page-padding"}>
                    <div className="container-fluid">
                        <div className="section-content">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className={`separator-center sx-separator-outer`}>
                                    <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                        <h3 className="sep-line-one">{txt_content_cursos}</h3>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            <div className="work-carousel-outer">
                                <OwlCarousel className="owl-carousel mfp-gallery project-carousel project-carousel3 owl-btn-vertical-center p-lr80" {...options}>
                                    {CursosAndSeminarios.map((item, index) => (
                                        <div key={index} className="item">
                                            <div className="project-mas hover-shadow m-a30" style={{width: '60%', margin: '0% 20%'}}>
                                                <div className="image-effect-one">
                                                    <img style={{height: '500px', objectFit: 'cover'}} src={`${process.env.REACT_APP_ROOT_API}/Cursos/${item.det_img_portada}`} alt="" />
                                                    <div className="figcaption">
                                                        <NavLink to={`/detalle?id=${item.iddetalle_cursos_academicos}&tipo=${item.tipo_curso_otro.tipo_conv_curso_nombre}`} style={{background: 'var(--color-primario)',color: '#fff',padding: '10px 20px', borderRadius: '20px'}}>
                                                            { txt_content_btn }
                                                        </NavLink>
                                                    </div>
                                                </div>
                                                <div className="project-info p-a20 bg-gray">
                                                    <h4 className="sx-tilte m-t0"><NavLink to={`/detalle?id=${item.iddetalle_cursos_academicos}&tipo=${item.tipo_curso_otro.tipo_conv_curso_nombre}`}>{item.det_titulo}</NavLink></h4>
                                                    <p>{ institucion_nombre }</p>
                                                    <NavLink to={`/detalle?id=${item.iddetalle_cursos_academicos}&tipo=${item.tipo_curso_otro.tipo_conv_curso_nombre}`}><i className="link-plus bg-primary" /></NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return null
};

export default Projects3;