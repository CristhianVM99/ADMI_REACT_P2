import React from 'react';
import { NavLink } from 'react-router-dom';
import { getConvocatorias, getCursos, getInstitucion, getStaticDataIndex } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';

const Blog1 = ({ tipo }) => {
    
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

    var bgimg1 = require('./../../images/background/cross-line2.png');
    
    /* TIPOS DE CONVOCATORIAS Y CURSOS*/
    const TIPOS = {
        COMUNICADOS: "COMUNICADOS",
        AVISOS: "AVISOS",
        CONVOCATORIAS: "CONVOCATORIAS",
        CURSOS: "CURSOS",
        SEMINARIOS: "SEMINARIOS",
    };

    /* TIPOS DE VISTAS PARA RETORNAR */
    const IF_VIEW = {
        TIPO_CONVOCATORIAS: 'CONVOCATORIAS',
        TIPO_CURSOS: 'CURSOS',
    }

      /* FUNCION PARA OBTENER EL DIA DE UNA FECHA  */
        function obtenerDiaDeFecha(fechaISO) {
            const fecha = new Date(fechaISO);
            const dia = fecha.getDate();
            return dia;
        }

        /* FUNCION PARA OBTENER EL MES DE UNA FECHA */
        function obtenerMesDeFecha(fechaISO) {
            const mesesDelAnio = [
                "ENE", "FEB", "MAR", "ABR",
                "MAY", "JUN", "JUL", "AGO",
                "SEP", "OCT", "NOV", "DIC"
            ];
        
            const fecha = new Date(fechaISO);
            const mesIndex = fecha.getMonth();
            const mesReducido = mesesDelAnio[mesIndex];
        
            return mesReducido;
        }

    if(!loading_institucion && !loading_static_data && !loading_convocatorias && tipo===IF_VIEW.TIPO_CONVOCATORIAS){
        /* DATOS OBTENIDOS DESDE LA STORE API */
        const {
            txt_content_convocatorias,
            txt_content_btn,
        } = staticData

        /* DATOS OBTENIDOS DESDE LA STORE STATICA*/
        const {
            institucion_iniciales,
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
          ]

        /* COMPONENTE PARA CONVOCATORIAS, COMUNICADOS Y AVISOS */
        return (
            <>
                <div className="section-full mobile-page-padding bg-white p-t80 p-b50 mobile-page-padding">
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className="sx-separator-outer separator-center">
                                    <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                        <h3 className="sep-line-one">{ txt_content_convocatorias }</h3>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            {/* IMAGE CAROUSEL START */}
                            <div className="section-content">
                                <div className="row justify-content-center">
                                {ConvocatoriasAndComunicadosAndAvisos.map((item, index) => (
                                    <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                                    <div className="blog-post blog-grid date-style-2">
                                            <div className="sx-post-media sx-img-effect img-reflection">
                                                <NavLink to={"/blog-single"}><img src={`${process.env.REACT_APP_ROOT_API}/Convocatorias/${item.con_foto_portada}`} alt="" /></NavLink>
                                            </div>
                                            <div className="sx-post-info p-t30">
                                                <div className="sx-post-meta ">
                                                    <ul>
                                                        <li className="post-date"><strong>{obtenerDiaDeFecha(item.con_fecha_inicio)}</strong> <span>{obtenerMesDeFecha(item.con_fecha_inicio)}</span> </li>
                                                        <li className="post-author"><NavLink to={"/blog-single"}><span>{item.tipo_conv_comun.tipo_conv_comun_titulo}</span></NavLink> </li>
                                                        <li className="post-comment"> <NavLink to={"/blog-single"}>{ institucion_iniciales }</NavLink> </li>
                                                    </ul>
                                                </div>
                                                <div className="sx-post-title ">
                                                    <h4 className="post-title"><NavLink to={"/blog-single"}>{item.con_titulo}</NavLink></h4>
                                                </div>
                                                <div className="sx-post-readmore">
                                                    <NavLink to={"/post-right-sidebar"} title="READ MORE" rel="bookmark" className="site-button-link">{ txt_content_btn }</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                               </div>
                            </div>
                        </div>
                        <div className="hilite-title text-left p-l50 text-uppercase">
                            <strong>{ institucion_iniciales }</strong>
                        </div>
                    </div>
            </>
        );
    }         
    
    if (!loading_institucion && !loading_static_data && !loading_cursos && tipo===IF_VIEW.TIPO_CURSOS) {  

        /* DATOS OBTENIDOS DESDE LA STORE API */
        const {
            txt_content_cursos,
            txt_content_btn,
        } = staticData

        /* DATOS OBTENIDOS DESDE LA STORE STATICA*/
        const {
            institucion_iniciales,
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
        ]
            
        /* COMPONENTE PARA CURSOS Y SEMINARIOS */
        return (
            <>
                <div className="section-full mobile-page-padding bg-white p-t80 p-b50 mobile-page-padding">
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className="sx-separator-outer separator-center">
                                    <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                        <h3 className="sep-line-one">{ txt_content_cursos }</h3>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            {/* IMAGE CAROUSEL START */}
                            <div className="section-content">
                                <div className="row justify-content-center">
                                {CursosAndSeminarios.map((item, index) => (
                                    <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                                    <div className="blog-post blog-grid date-style-2">
                                            <div className="sx-post-media sx-img-effect img-reflection">
                                                <NavLink to={"/blog-single"}><img src={`${process.env.REACT_APP_ROOT_API}/Cursos/${item.det_img_portada}`} alt="" /></NavLink>
                                            </div>
                                            <div className="sx-post-info p-t30">
                                                <div className="sx-post-meta ">
                                                    <ul>
                                                        <li className="post-date"><strong>{obtenerDiaDeFecha(item.det_fecha_ini)}</strong> <span>{obtenerMesDeFecha(item.det_fecha_ini)}</span> </li>
                                                        <li className="post-author"><NavLink to={"/blog-single"}><span>{item.tipo_curso_otro.tipo_conv_curso_nombre}</span></NavLink> </li>
                                                        <li className="post-comment"> <NavLink to={"/blog-single"}>{ institucion_iniciales }</NavLink> </li>
                                                    </ul>
                                                </div>
                                                <div className="sx-post-title ">
                                                    <h4 className="post-title"><NavLink to={"/blog-single"}>{item.det_titulo}</NavLink></h4>
                                                </div>
                                                <div className="sx-post-readmore">
                                                    <NavLink to={"/blog-single"} title="READ MORE" rel="bookmark" className="site-button-link">{ txt_content_btn }</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                               </div>
                            </div>
                        </div>
                        <div className="hilite-title text-left p-l50 text-uppercase">
                            <strong>{ institucion_iniciales }</strong>
                        </div>
                    </div>
            </>
        );
    }

    return null
}    

export default Blog1;