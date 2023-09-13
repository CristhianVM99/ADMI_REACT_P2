import React from 'react';
import { NavLink } from 'react-router-dom';
import { getConvocatorias, getCursos, getInstitucion, getStaticDataIndex, getStaticImages } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';
import { TIPOS } from '../../types/types';

var bgimg1 = require('./../../images/background/bg-5.png');
var bgimg2 = require('./../../images/background/bg-2.jpg');
var bgimg3 = require('./../../images/background/cross-line2.png');

const WhatWeDo1 = ({tipo}) => {

    /* OBTENCION DE INFORMACION DEL STORE IMAGES */
    const { isLoading: loading_images, data: images } = useQuery({
        queryKey: ['getStaticImages'],
        queryFn: getStaticImages,
    });

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

    if(!loading_convocatorias && !loading_institucion && !loading_images  && tipo===TIPOS.CONVOCATORIAS){

         /* DATOS ESTATICOS */
         const {
            txt_content_convocatorias,
        } = staticData       
        
        /* DATOS DE LA INSTITUCION */
        const {            
            portada
        } = institucion

        /* FILTRADO DE LOS ULTIMOS COMUNICADOS, CONVOCATORIAS Y AVISOS QUE TIENE LA INSTITUCION. */
        const filteredDataComunicados = convocatorias.filter((e) => e.tipo_conv_comun.tipo_conv_comun_titulo === TIPOS.COMUNICADOS);
        const lastComunicado = filteredDataComunicados[filteredDataComunicados.length - 1];
        
        const filteredDataConvocatorias = convocatorias.filter((e) => e.tipo_conv_comun.tipo_conv_comun_titulo === TIPOS.CONVOCATORIAS);
        const lastConvocatoria = filteredDataConvocatorias[filteredDataConvocatorias.length - 1];

        const filteredDataAvisos = convocatorias.filter((e) => e.tipo_conv_comun.tipo_conv_comun_titulo === TIPOS.AVISOS);
        const lastAviso = filteredDataAvisos[filteredDataAvisos.length - 1];        

        const indiceAleatorio = Math.floor(Math.random() * portada.length);
        const imagenSeleccionada = portada[indiceAleatorio].portada_imagen;
        const img = `${process.env.REACT_APP_ROOT_API}/InstitucionUpea/Portada/${imagenSeleccionada}`;

        return (
            <>
                <div className="section-full  mobile-page-padding bg-white  p-t80 p-b30 bg-repeat overflow-hide" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                    <div className="container right-half-bg-image-outer">
                        <div className="right-half-bg-image bg-parallax bg-fixed bg-top-right" data-stellar-background-ratio={0} style={{ backgroundImage: 'url(' + img ?? images.BgOne + ')' }} />
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="sx-separator-outer separator-left">
                                <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg3 + ')' }}>
                                    <h3 className="sep-line-one">{txt_content_convocatorias}</h3>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content">
                            <div className="row number-block-one-outer justify-content-center">
                                <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                    {lastConvocatoria && <NavLink to={`/detalle?id=${lastConvocatoria.idconvocatorias}&tipo=${lastConvocatoria.tipo_conv_comun.tipo_conv_comun_titulo}`}>
                                    <div className="number-block-one animate-in-to-top">
                                        <img src={`${process.env.REACT_APP_ROOT_API}/Convocatorias/${lastConvocatoria.con_foto_portada}`} alt="" />
                                        <div className="figcaption bg-white text-center p-a20">
                                            <h4 className="m-a0">{lastConvocatoria.con_titulo}</h4>
                                        </div>
                                        <div className="figcaption-number text-center sx-text-primary animate-in-to-top-content">
                                            <span>01</span>
                                        </div>
                                    </div>
                                    </NavLink>}
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                    {lastComunicado && <NavLink to={`/detalle?id=${lastComunicado.idconvocatorias}&tipo=${lastComunicado.tipo_conv_comun.tipo_conv_comun_titulo}`}>
                                    <div className="number-block-one animate-in-to-top">
                                        <img src={`${process.env.REACT_APP_ROOT_API}/Convocatorias/${lastComunicado.con_foto_portada}`} alt="" />
                                        <div className="figcaption bg-white text-center p-a20">
                                            <h4 className="m-a0">{lastComunicado.con_titulo}</h4>
                                        </div>
                                        <div className="figcaption-number text-center sx-text-primary animate-in-to-top-content">
                                            <span>02</span>
                                        </div>
                                    </div>
                                    </NavLink>}
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                    {lastAviso && <NavLink to={`/detalle?id=${lastAviso.idconvocatorias}&tipo=${lastAviso.tipo_conv_comun.tipo_conv_comun_titulo}`}>
                                    <div className="number-block-one animate-in-to-top">
                                        <img src={`${process.env.REACT_APP_ROOT_API}/Convocatorias/${lastAviso.con_foto_portada}`} alt="" />
                                        <div className="figcaption bg-white text-center p-a20">
                                            <h4 className="m-a0">{lastAviso.con_titulo}</h4>
                                        </div>
                                        <div className="figcaption-number text-center sx-text-primary animate-in-to-top-content">
                                            <span>03</span>
                                        </div>
                                    </div>
                                    </NavLink>}
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </>
        );
    }

    if(!loading_cursos && !loading_institucion && !loading_images && tipo===TIPOS.CURSOS){

        /* DATOS OBTENIDOS DESDE LA STORE API */
        const {
            txt_content_cursos,
        } = staticData        

        /* DATOS DE LA INSTITUCION */
        const {            
            portada
        } = institucion

        /* FILTRADO DE LOS ULTIMOS CURSOS Y SEMINARIOS. */
        const filteredDataCursos = cursos.filter((e) => e.tipo_curso_otro.tipo_conv_curso_nombre === TIPOS.CURSOS);
        const lastCurso = filteredDataCursos[filteredDataCursos.length - 1];
        
        const filteredDataSeminarios = cursos.filter((e) => e.tipo_curso_otro.tipo_conv_curso_nombre === TIPOS.SEMINARIOS);
        const lastSeminario = filteredDataSeminarios[filteredDataSeminarios.length - 1];       

        const indiceAleatorio = Math.floor(Math.random() * portada.length);
        const imagenSeleccionada = portada[indiceAleatorio].portada_imagen;
        const img = `${process.env.REACT_APP_ROOT_API}/InstitucionUpea/Portada/${imagenSeleccionada}`;

        return (
            <>
                <div className="section-full  mobile-page-padding bg-white  p-t80 p-b30 bg-repeat overflow-hide" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                    <div className="container right-half-bg-image-outer">
                        <div className="right-half-bg-image bg-parallax bg-fixed bg-top-right" data-stellar-background-ratio={0} style={{ backgroundImage: 'url(' + img ?? images.BgTwo + ')' }} />
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="sx-separator-outer separator-left">
                                <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg3 + ')' }}>
                                    <h3 className="sep-line-one">{txt_content_cursos}</h3>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content">
                            <div className="row number-block-one-outer justify-content-center">
                                <div className="col-lg-2"></div>
                                {lastCurso && <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                    <div className="number-block-one animate-in-to-top">
                                        <img src={`${process.env.REACT_APP_ROOT_API}/Cursos/${lastCurso.det_img_portada}`} alt="" />
                                        <div className="figcaption bg-white text-center p-a20">
                                            <h4 className="m-a0">{lastCurso.det_titulo}</h4>
                                        </div>
                                        <div className="figcaption-number text-center sx-text-primary animate-in-to-top-content">
                                            <span>04</span>
                                        </div>
                                    </div>
                                </div> }                               
                                {lastSeminario && <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                    <div className="number-block-one animate-in-to-top">
                                        <img src={`${process.env.REACT_APP_ROOT_API}/Cursos/${lastSeminario.det_img_portada}`} alt="" />
                                        <div className="figcaption bg-white text-center p-a20">
                                            <h4 className="m-a0">{lastSeminario.det_titulo}</h4>
                                        </div>
                                        <div className="figcaption-number text-center sx-text-primary animate-in-to-top-content">
                                            <span>05</span>
                                        </div>
                                    </div>
                                </div>}
                                <div className="col-lg-2"></div>                                
                            </div>                            
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return null
};

export default WhatWeDo1;