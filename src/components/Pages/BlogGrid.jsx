import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import { getConvocatorias, getCursos, getEventos, getGacetas, getInstitucion, getOfertasAcademicas, getPublicaciones, getServicios, getStaticCategory, getStaticData, getStaticDataCategory, getStaticDataKey, getStaticImages, getVideos } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';
import { AES } from 'crypto-js';
import { Document, Page, pdfjs } from "react-pdf";
import { TIPOS } from '../../types/types';

const BlogGrid = () => {        
    
    /* OBTENEMOS EL TIPO DE CATEGORIA */
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('tipo').toUpperCase();

    /* OBTENCION DE INFORMACION DEL STORE IMAGES */
    const { isLoading: loading_images, data: images } = useQuery({
        queryKey: ['getStaticImages'],
        queryFn: getStaticImages,
    });

    /* OBTENCION DE INFORMACION DEL STORE API INSTITUCION*/
    const { isLoading: loading_institucion, data: institucion } = useQuery({
        queryKey: ['institucion'],
        queryFn: getInstitucion,
    })

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

    /* OBTENCION DE INFORMACION DEL STORE STATICO CATEGORY */
    const { isLoading: loading_static_data, data: staticData } = useQuery({
        queryKey: ['staticDataCategory'],
        queryFn: getStaticDataCategory,
    });

    /* OBTENCION DE INFORMACION DEL STORE STATICO CATEGORY */
    const { isLoading: loading_static_data_key, data: staticDataKey } = useQuery({
        queryKey: ['staticDataKey'],
        queryFn: getStaticDataKey,
    });

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

    /* FUNCION PARA OBTENER EL DIA DE UNA FECHA */
    function obtenerDiaDeFecha2(fechaString) {
        const fecha = new Date(fechaString);
        const dia = fecha.getDate();
        return dia;
      }
      
    /* FUNCION PARA OBTENER EL MES DE UNA FECHA */  
    function obtenerMesDeFecha2(fechaString) {
        const fecha = new Date(fechaString);
        const meses = [
        "ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"
        ];
        const mes = fecha.getMonth(); // Obtiene el mes (0-11)
        return meses[mes];
    }    

    const sinRegistros = (<div style={{textAlign: 'center', fontSize:'3em', padding: '20px', background: 'var(--color-primario)',color: '#fff'}}>Sin Registros</div>)

    useEffect(()=>{
        pdfjs.GlobalWorkerOptions.workerSrc =`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
        // Establecer colores si los datos están disponibles
        if (!loading_institucion) {
            const { colorinstitucion, institucion_logo, institucion_iniciales, institucion_nombre } = institucion;
            document.documentElement.style.setProperty(
              "--color-primario",
              colorinstitucion[0].color_primario
            );
            document.documentElement.style.setProperty(
              "--color-secundario",
              colorinstitucion[0].color_secundario
            );
            document.documentElement.style.setProperty(
              "--color-terciario",
              colorinstitucion[0].color_terciario
            );
            // Establece el ícono en el encabezado
            const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
            link.type = 'image/x-icon';
            link.rel = 'icon';
            link.href = `${process.env.REACT_APP_ROOT_API}/InstitucionUpea/${institucion_logo}`;
            document.getElementsByTagName('head')[0].appendChild(link);
            document.title =  institucion_iniciales+" | "+institucion_nombre 
          }
    }, [loading_institucion, institucion])

    // SERVICIOS
    if(
        (
        !loading_institucion &&
        !loading_static_data &&
        !loading_servicios &&
        !loading_ofertas &&
        !loading_images &&
        !loading_publicaciones &&
        !loading_gacetas &&
        !loading_eventos && 
        !loading_videos
        ) && (
        [TIPOS.SERVICIOS,TIPOS.OFERTAS_ACADEMICAS,TIPOS.PUBLICACIONES,TIPOS.GACETAS,TIPOS.EVENTOS,TIPOS.VIDEOS].includes(category)
        )
    ){            

    /* DATOS OBTENIDOS DESDE LA STORE API */
    const {
        txt_content_btn,
        txt_content_banner_category        
    } = staticData

    /* DATOS OBTENIDOS DESDE LA STORE STATICA*/
    const {
        institucion_iniciales,
        portada
    } = institucion

    const indiceAleatorio = Math.floor(Math.random() * portada.length);
    const imagenSeleccionada = portada[indiceAleatorio].portada_imagen;
    const img = `${process.env.REACT_APP_ROOT_API}/InstitucionUpea/Portada/${imagenSeleccionada}`;    

    return (
        <>
        <Header4 />
        <div className="page-content">
            <Banner title={category} pagename={category} description={txt_content_banner_category} bgimage={ img ?? images.BgFour}/>
           
            <div className="section-full p-tb80 bg-white inner-page-padding">
               
            <div className="container">
                    { category === TIPOS.SERVICIOS ? 
                    <div className="masonry-outer mfp-gallery news-grid clearfix row ">
                        {servicios.map((item, index) => (
                            <div className="masonry-item  col-lg-4 col-md-6 col-sm-12" key={index}>
                            <div className="blog-post blog-grid date-style-2">
                                <div className="sx-post-media sx-img-effect img-reflection">
                                    <NavLink to={`/detalle?id=${item.serv_id}&tipo=${TIPOS.SERVICIOS}`}><img style={{height: '400px'}} src={`${process.env.REACT_APP_ROOT_API}/Carrera/Servicios/${item.serv_imagen}`} alt="" /></NavLink>
                                </div>
                                <div className="sx-post-info p-t30">
                                    <div className="sx-post-meta ">
                                        <ul>
                                            <li className="post-date"><strong>{obtenerDiaDeFecha(item.serv_registro)}</strong> <span>{obtenerMesDeFecha(item.serv_registro)}</span> </li>
                                            <li className="post-author"><NavLink to={`/detalle?id=${item.serv_id}&tipo=${TIPOS.SERVICIOS}`}><span>{institucion_iniciales}</span></NavLink> </li>
                                            <li className="post-comment"> <NavLink to={`/detalle?id=${item.serv_id}&tipo=${TIPOS.SERVICIOS}`}>{TIPOS.SERVICIOS}</NavLink> </li>
                                        </ul>
                                    </div>
                                    <div className="sx-post-title ">
                                        <h4 className="post-title"><NavLink to={`/detalle?id=${item.serv_id}&tipo=${TIPOS.SERVICIOS}`}>{item.serv_nombre}</NavLink></h4>
                                    </div>
                                    <div className="sx-post-readmore">
                                        <NavLink to={`/detalle?id=${item.serv_id}&tipo=${TIPOS.SERVICIOS}`} title="READ MORE" rel="bookmark" className="site-button-link">{txt_content_btn}</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>))}
                    </div> : null}     

                    { category === TIPOS.OFERTAS_ACADEMICAS ? 
                    <div className="masonry-outer mfp-gallery news-grid clearfix row ">
                        {ofertas.map((item, index) => (
                            <div className="masonry-item  col-lg-4 col-md-6 col-sm-12" key={index}>
                            <div className="blog-post blog-grid date-style-2">
                                <div className="sx-post-media sx-img-effect img-reflection">
                                    <NavLink to={`/detalle?id=${item.ofertas_id}&tipo=${TIPOS.OFERTAS_ACADEMICAS}`}><img style={{height: '400px'}} src={`${process.env.REACT_APP_ROOT_API}/Carrera/OfertasAcademicas/${item.ofertas_imagen}`} alt="" /></NavLink>
                                </div>
                                <div className="sx-post-info p-t30">
                                    <div className="sx-post-meta ">
                                        <ul>
                                            <li className="post-date"><strong>{obtenerDiaDeFecha(item.ofertas_inscripciones_ini)}</strong> <span>{obtenerMesDeFecha(item.ofertas_inscripciones_ini)}</span> </li>
                                            <li className="post-author"><NavLink to={`/detalle?id=${item.ofertas_id}&tipo=${TIPOS.OFERTAS_ACADEMICAS}`}><span>{institucion_iniciales}</span></NavLink> </li>
                                            <li className="post-comment"> <NavLink to={`/detalle?id=${item.ofertas_id}&tipo=${TIPOS.OFERTAS_ACADEMICAS}`}>{TIPOS.OFERTAS_ACADEMICAS}</NavLink> </li>
                                        </ul>
                                    </div>
                                    <div className="sx-post-title ">
                                        <h4 className="post-title"><NavLink to={`/detalle?id=${item.ofertas_id}&tipo=${TIPOS.OFERTAS_ACADEMICAS}`}>{item.ofertas_titulo}</NavLink></h4>
                                    </div>
                                    <div className="sx-post-readmore">
                                        <NavLink to={`/detalle?id=${item.ofertas_id}&tipo=${TIPOS.OFERTAS_ACADEMICAS}`} title="READ MORE" rel="bookmark" className="site-button-link">{txt_content_btn}</NavLink>
                                    </div>
                                </div>
                            </div>
                            </div>
                        ))}
                    </div>  : null}                         

                    { category === TIPOS.PUBLICACIONES ? 
                    <div className="masonry-outer mfp-gallery news-grid clearfix row ">
                        {publicaciones.map((item, index) => (
                        <div className="masonry-item  col-lg-4 col-md-6 col-sm-12" key={index}>
                            <div className="blog-post blog-grid date-style-2">
                                <div className="sx-post-media sx-img-effect img-reflection">
                                    <NavLink to={`/detalle?id=${item.publicaciones_id}&tipo=${TIPOS.PUBLICACIONES}`}><img src={`${process.env.REACT_APP_ROOT_API}/Publicaciones/${item.publicaciones_imagen}`} alt="" style={{height: '400px'}}/></NavLink>
                                </div>
                                <div className="sx-post-info p-t30">
                                    <div className="sx-post-meta ">
                                        <ul>
                                            <li className="post-date"><strong>{obtenerDiaDeFecha2(item.publicaciones_fecha)}</strong> <span>{obtenerMesDeFecha2(item.publicaciones_fecha)}</span> </li>
                                            <li className="post-author"><NavLink to={`/detalle?id=${item.publicaciones_id}&tipo=${TIPOS.PUBLICACIONES}`}><span>{item.publicaciones_autor}</span></NavLink> </li>
                                            <li className="post-comment"> <NavLink to={`/detalle?id=${item.publicaciones_id}&tipo=${TIPOS.PUBLICACIONES}`}>{TIPOS.PUBLICACIONES}</NavLink> </li>
                                        </ul>
                                    </div>
                                    <div className="sx-post-title ">
                                        <h4 className="post-title"><NavLink to={`/detalle?id=${item.publicaciones_id}&tipo=${TIPOS.PUBLICACIONES}`}>{item.publicaciones_titulo}</NavLink></h4>
                                    </div>
                                    <div className="sx-post-readmore">
                                        <NavLink to={`/detalle?id=${item.publicaciones_id}&tipo=${TIPOS.PUBLICACIONES}`} title="READ MORE" rel="bookmark" className="site-button-link">{txt_content_btn}</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>))}
                    </div> : null}

                    { category === TIPOS.GACETAS ? 
                    <div className="masonry-outer mfp-gallery news-grid clearfix row ">
                        {gacetas.map((item, index) => (
                            <div className="masonry-item  col-lg-4 col-md-6 col-sm-12" key={index}>
                            <div className="blog-post blog-grid date-style-2">
                                <div className="sx-post-media sx-img-effect img-reflection">
                                    <NavLink to={`/detalle?id=${item.gaceta_id}&tipo=${TIPOS.GACETAS}`}>
                                        <Document className="pdf" file={`${process.env.REACT_APP_ROOT_API}/Gaceta/${item.gaceta_documento}`}> 
                                            <Page pageNumber={1} height={400}/> 
                                        </Document>
                                    </NavLink>
                                </div>
                                <div className="sx-post-info p-t30">
                                    <div className="sx-post-meta ">
                                        <ul>
                                            <li className="post-date"><strong>{obtenerDiaDeFecha(item.gaceta_fecha)}</strong> <span>{obtenerMesDeFecha(item.gaceta_fecha)}</span> </li>
                                            <li className="post-author"><NavLink to={`/detalle?id=${item.gaceta_id}&tipo=${TIPOS.GACETAS}`}><span>{institucion_iniciales}</span></NavLink> </li>
                                            <li className="post-comment"> <NavLink to={`/detalle?id=${item.gaceta_id}&tipo=${TIPOS.GACETAS}`}>{TIPOS.GACETAS}</NavLink> </li>
                                        </ul>
                                    </div>
                                    <div className="sx-post-title ">
                                        <h4 className="post-title"><NavLink to={`/detalle?id=${item.gaceta_id}&tipo=${TIPOS.GACETAS}`}>{item.gaceta_titulo}</NavLink></h4>
                                    </div>
                                    <div className="sx-post-readmore">
                                        <NavLink to={`/detalle?id=${item.gaceta_id}&tipo=${TIPOS.GACETAS}`} title="READ MORE" rel="bookmark" className="site-button-link">{txt_content_btn}</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>))}
                    </div> : null}

                    { category === TIPOS.EVENTOS ? 
                    <div className="masonry-outer mfp-gallery news-grid clearfix row ">
                        {eventos.map((item, index) => (
                            <div className="masonry-item  col-lg-4 col-md-6 col-sm-12" key={index}>
                            <div className="blog-post blog-grid date-style-2">
                                <div className="sx-post-media sx-img-effect img-reflection">
                                    <NavLink to={`/detalle?id=${item.evento_id}&tipo=${TIPOS.EVENTOS}`}><img style={{height: '400px'}} src={`${process.env.REACT_APP_ROOT_API}/Eventos/${item.evento_imagen}`} alt="" /></NavLink>
                                </div>
                                <div className="sx-post-info p-t30">
                                    <div className="sx-post-meta ">
                                        <ul>
                                            <li className="post-date"><strong>{obtenerDiaDeFecha2(item.evento_fecha)}</strong> <span>{obtenerMesDeFecha2(item.evento_fecha)}</span> </li>
                                            <li className="post-author"><NavLink to={`/detalle?id=${item.evento_id}&tipo=${TIPOS.EVENTOS}`}><span>{institucion_iniciales}</span></NavLink> </li>
                                            <li className="post-comment"> <NavLink to={`/detalle?id=${item.evento_id}&tipo=${TIPOS.EVENTOS}`}>{TIPOS.EVENTOS}</NavLink> </li>
                                        </ul>
                                    </div>
                                    <div className="sx-post-title ">
                                        <h4 className="post-title"><NavLink to={`/detalle?id=${item.evento_id}&tipo=${TIPOS.EVENTOS}`}>{item.evento_titulo}</NavLink></h4>
                                    </div>
                                    <div className="sx-post-readmore">
                                        <NavLink to={`/detalle?id=${item.evento_id}&tipo=${TIPOS.EVENTOS}`} title="READ MORE" rel="bookmark" className="site-button-link">{txt_content_btn}</NavLink>
                                    </div>
                                </div>
                            </div>
                            </div>
                        ))}
                    </div> : null}

                    { category === TIPOS.VIDEOS ? 
                    <div className="masonry-outer mfp-gallery news-grid clearfix row ">
                        {videos.map((item, index) => (
                        <div className="masonry-item  col-lg-4 col-md-6 col-sm-12" key={index}>
                        <div className="blog-post blog-grid date-style-2">
                            <div className="sx-post-media sx-img-effect img-reflection">
                                <NavLink to={`/detalle?id=${item.video_id}&tipo=${TIPOS.VIDEOS}`}>
                                <iframe
                                    width="560" // Ancho deseado
                                    height="400" // Alto deseado
                                    src={item.video_enlace} // URL de embed del video
                                    title="Video Embed"
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                                </NavLink>
                            </div>
                            <div className="sx-post-info p-t30">
                                <div className="sx-post-meta ">
                                    <ul>
                                        {/* <li className="post-date"><strong>{item.date}</strong> <span>{item.month}</span> </li> */}
                                        <li className="post-author"><NavLink to={`/detalle?id=${item.video_id}&tipo=${TIPOS.VIDEOS}`}><span>{institucion_iniciales}</span></NavLink> </li>
                                        <li className="post-comment"> <NavLink to={`/detalle?id=${item.video_id}&tipo=${TIPOS.VIDEOS}`}>{TIPOS.VIDEOS}</NavLink> </li>
                                    </ul>
                                </div>
                                <div className="sx-post-title ">
                                    <h4 className="post-title"><NavLink to={`/detalle?id=${item.video_id}&tipo=${TIPOS.VIDEOS}`}>{item.video_titulo}</NavLink></h4>
                                </div>
                                <div className="sx-post-readmore">
                                    <NavLink to={`/detalle?id=${item.video_id}&tipo=${TIPOS.VIDEOS}`} title="READ MORE" rel="bookmark" className="site-button-link">{txt_content_btn}</NavLink>
                                </div>
                            </div>
                        </div>
                        </div>))}
                    </div> : null} 

                    {/* PARA CASOS SIN REGISTROS */}
                    { TIPOS.SERVICIOS === category && (servicios.length === 0) ? sinRegistros : null}
                    { TIPOS.OFERTAS_ACADEMICAS === category && (ofertas.length === 0) ? sinRegistros : null}
                    { TIPOS.PUBLICACIONES === category && (publicaciones.length === 0) ? sinRegistros : null}
                    { TIPOS.GACETAS === category && (gacetas.length === 0) ? sinRegistros : null}
                    { TIPOS.EVENTOS === category && (eventos.length === 0) ? sinRegistros : null}
                    { TIPOS.VIDEOS === category && (videos.length === 0) ? sinRegistros : null}
                </div>
               
            </div>
            
        </div>

        <Footer />
        </>
        );
    }                    

    // CONVOCATORIAS - COMUNICADOS - AVISOS
    if(
        (!loading_institucion &&
        !loading_static_data &&
        !loading_convocatorias &&
        !loading_cursos &&
        !loading_images 
        )&&([TIPOS.CONVOCATORIAS,TIPOS.COMUNICADOS,TIPOS.AVISOS,TIPOS.CURSOS,TIPOS.SEMINARIOS].includes(category))
    ){
       
    var items = null

    if( [TIPOS.CONVOCATORIAS, TIPOS.COMUNICADOS, TIPOS.AVISOS].includes(category) ){
        items = convocatorias.filter((e) => e.tipo_conv_comun.tipo_conv_comun_titulo === category)
    }else if( [TIPOS.CURSOS, TIPOS.SEMINARIOS].includes(category)){
        items = cursos.filter((e) => e.tipo_curso_otro.tipo_conv_curso_nombre === category)
    }

    /* DATOS OBTENIDOS DESDE LA STORE API */
    const {
        txt_content_btn,
        txt_content_banner_category        
    } = staticData

    /* DATOS OBTENIDOS DESDE LA STORE STATICA*/
    const {
        institucion_iniciales,
        portada
    } = institucion

    const indiceAleatorio = Math.floor(Math.random() * portada.length);
    const imagenSeleccionada = portada[indiceAleatorio].portada_imagen;
    const img = `${process.env.REACT_APP_ROOT_API}/InstitucionUpea/Portada/${imagenSeleccionada}`;

        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title={category} pagename={category} description={txt_content_banner_category} bgimage={ img ?? images.BgFour}/>
                   
                    <div className="section-full p-tb80 bg-white inner-page-padding">
                       
                    <div className="container">
                            { ([TIPOS.CONVOCATORIAS, TIPOS.COMUNICADOS, TIPOS.AVISOS].includes(category) ) ? 
                            <div className="masonry-outer mfp-gallery news-grid clearfix row ">
                            {items.map((item, index) => (
                                <div className="masonry-item  col-lg-4 col-md-6 col-sm-12" key={index}>
                                <div className="blog-post blog-grid date-style-2">
                                    <div className="sx-post-media sx-img-effect img-reflection">
                                        <NavLink to={`/detalle?id=${item.idconvocatorias}&tipo=${category}`}><img style={{height: '400px'}} src={`${process.env.REACT_APP_ROOT_API}/Convocatorias/${item.con_foto_portada}`} alt="" /></NavLink>
                                    </div>
                                    <div className="sx-post-info p-t30">
                                        <div className="sx-post-meta ">
                                            <ul>
                                                <li className="post-date"><strong>{obtenerDiaDeFecha(item.con_fecha_inicio)}</strong> <span>{obtenerMesDeFecha(item.con_fecha_inicio)}</span> </li>
                                                <li className="post-author"><NavLink to={`/detalle?id=${item.idconvocatorias}&tipo=${category}`}><span>{item.tipo_conv_comun.tipo_conv_comun_titulo}</span></NavLink> </li>
                                                <li className="post-comment"> <NavLink to={`/detalle?id=${item.idconvocatorias}&tipo=${category}`}>{ institucion_iniciales }</NavLink> </li>
                                            </ul>
                                        </div>
                                        <div className="sx-post-title ">
                                            <h4 className="post-title"><NavLink to={`/detalle?id=${item.idconvocatorias}&tipo=${category}`}>{item.con_titulo}</NavLink></h4>
                                        </div>
                                        <div className="sx-post-readmore">
                                            <NavLink to={`/detalle?id=${item.idconvocatorias}&tipo=${category}`} title="READ MORE" rel="bookmark" className="site-button-link">{ txt_content_btn }</NavLink>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            ))}
                            </div> : null }     

                            { ([TIPOS.CURSOS, TIPOS.SEMINARIOS].includes(category)) ? 
                            <div className="masonry-outer mfp-gallery news-grid clearfix row ">
                                {items.map((item, index) => (
                                    <div className="masonry-item  col-lg-4 col-md-6 col-sm-12" key={index}>
                                    <div className="blog-post blog-grid date-style-2">
                                        <div className="sx-post-media sx-img-effect img-reflection">
                                        <NavLink to={`/detalle?id=${item.iddetalle_cursos_academicos}&tipo=${category}`}><img style={{height: '400px'}} src={`${process.env.REACT_APP_ROOT_API}/Cursos/${item.det_img_portada}`} alt="" /></NavLink>
                                        </div>
                                        <div className="sx-post-info p-t30">
                                            <div className="sx-post-meta ">
                                                <ul>
                                                    <li className="post-date"><strong>{obtenerDiaDeFecha(item.det_fecha_ini)}</strong> <span>{obtenerMesDeFecha(item.det_fecha_ini)}</span> </li>
                                                    <li className="post-author"><NavLink to={`/detalle?id=${item.iddetalle_cursos_academicos}&tipo=${category}`}><span>{item.tipo_curso_otro.tipo_conv_curso_nombre}</span></NavLink> </li>
                                                    <li className="post-comment"> <NavLink to={`/detalle?id=${item.iddetalle_cursos_academicos}&tipo=${category}`}>{ institucion_iniciales }</NavLink> </li>
                                                </ul>
                                            </div>
                                            <div className="sx-post-title ">
                                                <h4 className="post-title"><NavLink to={`/detalle?id=${item.iddetalle_cursos_academicos}&tipo=${category}`}>{item.det_titulo}</NavLink></h4>
                                            </div>
                                            <div className="sx-post-readmore">
                                                <NavLink to={`/detalle?id=${item.iddetalle_cursos_academicos}&tipo=${category}`} title="READ MORE" rel="bookmark" className="site-button-link">{txt_content_btn}</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                ))}
                            </div>  : null }   
                            {/* PARA CASOS SIN REGISTROS */}
                            { (items.length === 0) ? sinRegistros : null}
                        </div>
                       
                    </div>
                    
                </div>

                <Footer />
            </>
        );
    }        
    
    return null
};

export default BlogGrid;