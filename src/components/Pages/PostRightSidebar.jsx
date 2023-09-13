import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import BlogSidebar from './../Elements/BlogSidebar';
import CryptoJS from 'crypto-js';
import { Document, Page, pdfjs } from "react-pdf";
import { getInstitucion, getServicios, getOfertasAcademicas, getPublicaciones, getGacetas, getEventos, getVideos, getStaticDataCategoryDetail, getStaticDataKey, getConvocatorias, getCursos, getStaticImages } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';
import { TIPOS } from '../../types/types';

const PostRightSidebar = () =>{   

    /* OBTENCION DE INFORMACION DEL STORE IMAGES */
    const { isLoading: loading_images, data: images } = useQuery({
        queryKey: ['getStaticImages'],
        queryFn: getStaticImages,
    });    
    
    /* OBTENEMOS EL TIPO DE CATEGORIA */
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('tipo').toUpperCase();
    const id = searchParams.get('id');

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
        queryKey: ['staticDataCategoryDetail'],
        queryFn: getStaticDataCategoryDetail,
    });

    /* OBTENCION DE INFORMACION DEL STORE STATICO CATEGORY */
    const { isLoading: loading_static_data_key, data: staticDataKey } = useQuery({
        queryKey: ['staticDataKey'],
        queryFn: getStaticDataKey,
    });      

    /* FORMATEAR FECHA */
    function formatearFecha(fechaString) {
        const fecha = new Date(fechaString);
      
        const meses = [
          "enero", "febrero", "marzo", "abril", "mayo", "junio",
          "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
        ];
      
        const día = fecha.getDate();
        const mes = meses[fecha.getMonth()];
        const año = fecha.getFullYear();
      
        return `${día} de ${mes} de ${año}`;
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

    useEffect(() => {

        pdfjs.GlobalWorkerOptions.workerSrc =`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
          });
        }
    
        loadScript('./assets/js/custom.js');

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
      }, [loading_institucion, institucion]);      

    /* COMPONENTE PARA SERVICIOS */      
      if (
        !loading_institucion &&
        !loading_static_data &&
        !loading_servicios &&
        !loading_static_data_key &&
        category === TIPOS.SERVICIOS
        ) 
        {        

        /* DATOS OBTENIDOS DESDE LA STORE API */
        const {
            txt_content_banner_detail,
            txt_content_btn     
        } = staticData

        /* DATOS OBTENIDOS DESDE LA STORE STATICA*/
        const {
            institucion_nombre,
            portada
        } = institucion

        const item = servicios.find((e) => e.serv_id === parseInt(id,10)) 
        
        const indiceAleatorio = Math.floor(Math.random() * portada.length);
        const imagenSeleccionada = portada[indiceAleatorio].portada_imagen;
        const img = `${process.env.REACT_APP_ROOT_API}/InstitucionUpea/Portada/${imagenSeleccionada}`;

        return (
            <>
                <Header4 />
                {item && <div className="page-content ">
                    <Banner title={category} pagename={category} description={txt_content_banner_detail} bgimage={img ?? images.BgOne} />
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-12 col-sm-12">
                                    <div className="blog-single-space max-w900 ml-auto mr-auto">
                                        {/* BLOG START */}
                                        <div className="blog-post blog-detail text-black">
                                            <div className="sx-post-media">
                                                <div className="portfolio-item">
                                                    <img style={{width: '100%'}} className="img-responsive" src={`${process.env.REACT_APP_ROOT_API}/Carrera/Servicios/${item.serv_imagen}`} alt="" />
                                                </div>
                                            </div>
                                            <div className="sx-post-meta  m-t20">
                                                <ul>
                                                    <li className="post-date"><strong>{formatearFecha(item.serv_registro)}</strong> </li>
                                                    <li className="post-author"><NavLink to={"/"}><span>{institucion_nombre}</span></NavLink> </li>
                                                    <li className="post-category"><NavLink to={`/recursos?tipo=${TIPOS.SERVICIOS}`}><span>{TIPOS.SERVICIOS}</span></NavLink> </li>
                                                </ul>
                                            </div>
                                            <div className="sx-post-title ">
                                                <h3 className="post-title">{item.serv_nombre}</h3>
                                            </div>
                                            <div className="sx-post-text">
                                                <div dangerouslySetInnerHTML={{ __html: item.serv_descripcion }}></div>                                                                                                
                                            </div>                                            
                                        </div>                                                                             
                                    </div>
                                </div>
                                {/* SIDE BAR START */}
                                <div className="col-lg-4 col-md-12 col-sm-12 sticky_column">
                                    <BlogSidebar tipo={category}/>
                                </div>
                                {/* SIDE BAR END */}
                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT END */}
                </div>}
                <Footer />
            </>
        );
      }  
      
    /* COMPONENTE PARA OFERTAS ACADEMICAS */      
      if (
        !loading_institucion &&
        !loading_static_data &&
        !loading_ofertas &&
        !loading_static_data_key &&
        category === TIPOS.OFERTAS_ACADEMICAS
        ) 
        {            
    
            /* DATOS OBTENIDOS DESDE LA STORE API */
            const {
                txt_content_banner_detail,
                txt_content_btn     
            } = staticData
    
            /* DATOS OBTENIDOS DESDE LA STORE STATICA*/
            const {
                institucion_iniciales,
                institucion_nombre,
                portada
            } = institucion
    
            const item = ofertas.find((e) => e.ofertas_id === parseInt(id,10))       
            
            const indiceAleatorio = Math.floor(Math.random() * portada.length);
            const imagenSeleccionada = portada[indiceAleatorio].portada_imagen;
            const img = `${process.env.REACT_APP_ROOT_API}/InstitucionUpea/Portada/${imagenSeleccionada}`;

        return (
            <>
                <Header4 />
                {item ? (
                    <div className="page-content ">
                    <Banner title={"OFERTAS ACADEMICAS"} pagename={"OFERTAS ACADEMICAS"} description={txt_content_banner_detail} bgimage={img ?? images.BgOne} />
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-12 col-sm-12">
                                    <div className="blog-single-space max-w900 ml-auto mr-auto">
                                        {/* BLOG START */}
                                        <div className="blog-post blog-detail text-black">
                                            <div className="sx-post-media">
                                                <div className="portfolio-item">
                                                    <img style={{width: '100%'}} className="img-responsive" src={`${process.env.REACT_APP_ROOT_API}/Carrera/OfertasAcademicas/${item.ofertas_imagen}`} alt="" />
                                                </div>
                                            </div>
                                            <div className="sx-post-meta  m-t20">
                                                <ul>
                                                    <li className="post-date"><strong>{formatearFecha(item.ofertas_fecha_creacion)}</strong></li>
                                                    <li className="post-author"><NavLink to={"/"}><span>{institucion_nombre}</span></NavLink> </li>
                                                    <li className="post-category"><NavLink to={`/recursos?tipo=${TIPOS.OFERTAS_ACADEMICAS}`}><span>{"OFERTAS ACADEMICAS"}</span></NavLink> </li>
                                                </ul>
                                            </div>
                                            <div className="sx-post-title ">
                                                <h3 className="post-title">{item.ofertas_titulo}</h3>
                                            </div>
                                            <div className="sx-post-text">
                                                <div dangerouslySetInnerHTML={{ __html: item.ofertas_descripcion }}></div>                                                
                                            </div>                                                                                        
                                        </div>                                                                               
                                    </div>
                                </div>
                                {/* SIDE BAR START */}
                                <div className="col-lg-4 col-md-12 col-sm-12 sticky_column">
                                    <BlogSidebar tipo={category}/>
                                </div>
                                {/* SIDE BAR END */}
                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT END */}
                </div>

                ) : (
                    <div><h3>Cargando</h3></div>
                ) }
                <Footer />
            </>
        );
      }  

    /* COMPONENTE PARA PUBLICACIONES */      
      if (
        !loading_institucion &&
        !loading_static_data &&
        !loading_publicaciones &&
        !loading_static_data_key &&
        category === TIPOS.PUBLICACIONES
        ) 
        {

        /* DATOS OBTENIDOS DESDE LA STORE API */
        const {
            txt_content_banner_detail,
            txt_content_btn     
        } = staticData

        /* DATOS OBTENIDOS DESDE LA STORE STATICA*/
        const {
            institucion_iniciales,
            institucion_nombre,
            portada
        } = institucion

        const item = publicaciones.find((e) => e.publicaciones_id === parseInt(id,10))  

        const indiceAleatorio = Math.floor(Math.random() * portada.length);
        const imagenSeleccionada = portada[indiceAleatorio].portada_imagen;
        const img = `${process.env.REACT_APP_ROOT_API}/InstitucionUpea/Portada/${imagenSeleccionada}`;

        return (
            <>
                <Header4 />
                <div className="page-content ">
                <Banner title={category} pagename={category} description={txt_content_banner_detail} bgimage={img ?? images.BgOne} />
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-12 col-sm-12">
                                    <div className="blog-single-space max-w900 ml-auto mr-auto">
                                        {/* BLOG START */}
                                        <div className="blog-post blog-detail text-black">
                                            <div className="sx-post-media">
                                                <div className="portfolio-item">
                                                    <img style={{width: '100%'}} className="img-responsive" src={`${process.env.REACT_APP_ROOT_API}/Publicaciones/${item.publicaciones_imagen}`} alt="" />
                                                </div>
                                            </div>
                                            <div className="sx-post-meta  m-t20">
                                                <ul>
                                                    <li className="post-date"><strong>{formatearFecha(item.publicaciones_fecha)}</strong></li>
                                                    <li className="post-author"><NavLink to={"/"}><span>{institucion_nombre}</span></NavLink> </li>
                                                    <li className="post-category"><NavLink to={`/recursos?tipo=${TIPOS.PUBLICACIONES}`}><span>{TIPOS.PUBLICACIONES}</span></NavLink> </li>
                                                </ul>
                                            </div>
                                            <div className="sx-post-title ">
                                                <h3 className="post-title">{item.publicaciones_titulo}</h3>
                                            </div>
                                            <div className="sx-post-text">
                                                <div dangerouslySetInnerHTML={{ __html: item.publicaciones_descripcion }}></div>                                                                                                                                                
                                            </div>                                                                                        
                                        </div>                                                                               
                                    </div>
                                </div>
                                {/* SIDE BAR START */}
                                <div className="col-lg-4 col-md-12 col-sm-12 sticky_column">
                                    <BlogSidebar tipo={category}/>
                                </div>
                                {/* SIDE BAR END */}
                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT END */}
                </div>

                <Footer />
            </>
        );
      }  

    /* COMPONENTE PARA GACETAS */      
      if (
        !loading_institucion &&
        !loading_static_data &&
        !loading_gacetas &&
        !loading_static_data_key &&
        category === TIPOS.GACETAS
        ) 
        {

        /* DATOS OBTENIDOS DESDE LA STORE API */
        const {
            txt_content_banner_detail,
            txt_content_btn     
        } = staticData

        /* DATOS OBTENIDOS DESDE LA STORE STATICA*/
        const {
            institucion_iniciales,
            institucion_nombre,
            portada
        } = institucion

        const item = gacetas.find((e) => e.gaceta_id === parseInt(id,10)) 

        const indiceAleatorio = Math.floor(Math.random() * portada.length);
        const imagenSeleccionada = portada[indiceAleatorio].portada_imagen;
        const img = `${process.env.REACT_APP_ROOT_API}/InstitucionUpea/Portada/${imagenSeleccionada}`;

        return (
            <>
                <Header4 />
                <div className="page-content ">
                <Banner title={category} pagename={category} description={txt_content_banner_detail} bgimage={img ?? images.BgOne} />
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-12 col-sm-12">
                                    <div className="blog-single-space max-w900 ml-auto mr-auto">
                                        {/* BLOG START */}
                                        <div className="blog-post blog-detail text-black">
                                            <div className="sx-post-media">
                                                <div className="portfolio-item" >
                                                <Document className="pdf" file={`${process.env.REACT_APP_ROOT_API}/Gaceta/${item.gaceta_documento}`}> 
                                                    <Page pageNumber={1} width={600}/> 
                                                </Document>
                                                </div>
                                            </div>
                                            <div className="sx-post-meta  m-t20">
                                                <ul>
                                                    <li className="post-date"><strong>{formatearFecha(item.gaceta_fecha)}</strong> </li>
                                                    <li className="post-author"><NavLink to={"/"}><span>{institucion_nombre}</span></NavLink> </li>
                                                    <li className="post-category"><NavLink to={`/recursos?tipo=${TIPOS.GACETAS}`}><span>{TIPOS.GACETAS}</span></NavLink> </li>
                                                </ul>
                                            </div>
                                            <div className="sx-post-title ">
                                                <h3 className="post-title">{item.gaceta_titulo}</h3>
                                            </div>                                            
                                        </div>                                                                            
                                    </div>
                                </div>
                                {/* SIDE BAR START */}
                                <div className="col-lg-4 col-md-12 col-sm-12 sticky_column">
                                    <BlogSidebar tipo={category}/>
                                </div>
                                {/* SIDE BAR END */}
                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT END */}
                </div>

                <Footer />
            </>
        );
      }  
      
    /* COMPONENTE PARA EVENTOS */      
      if (
        !loading_institucion &&
        !loading_static_data &&
        !loading_eventos &&
        !loading_static_data_key &&
        category === TIPOS.EVENTOS
        ) 
        {

        /* DATOS OBTENIDOS DESDE LA STORE API */
        const {
            txt_content_banner_detail,
            txt_content_btn     
        } = staticData

        /* DATOS OBTENIDOS DESDE LA STORE STATICA*/
        const {
            institucion_iniciales,
            institucion_nombre,
            portada
        } = institucion

        const item = eventos.find((e) => e.evento_id === parseInt(id,10)) 

        const indiceAleatorio = Math.floor(Math.random() * portada.length);
        const imagenSeleccionada = portada[indiceAleatorio].portada_imagen;
        const img = `${process.env.REACT_APP_ROOT_API}/InstitucionUpea/Portada/${imagenSeleccionada}`;

        return (
            <>
                <Header4 />
                <div className="page-content ">
                <Banner title={category} pagename={category} description={txt_content_banner_detail} bgimage={img ?? images.BgOne} />
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-12 col-sm-12">
                                    <div className="blog-single-space max-w900 ml-auto mr-auto">
                                        {/* BLOG START */}
                                        <div className="blog-post blog-detail text-black">
                                            <div className="sx-post-media">
                                                <div className="portfolio-item">
                                                    <img style={{width: '100%'}} className="img-responsive" src={`${process.env.REACT_APP_ROOT_API}/Eventos/${item.evento_imagen}`} alt="" />
                                                </div>
                                            </div>
                                            <div className="sx-post-meta  m-t20">
                                                <ul>
                                                    <li className="post-date"><strong>{formatearFecha(item.evento_fecha)}</strong> </li>
                                                    <li className="post-author"><NavLink to={"/"}><span>{institucion_nombre}</span></NavLink> </li>
                                                    <li className="post-category"><NavLink to={`/recursos?tipo=${TIPOS.EVENTOS}`}><span>{TIPOS.EVENTOS}</span></NavLink> </li>
                                                </ul>
                                            </div>
                                            <div className="sx-post-title ">
                                                <h3 className="post-title">{item.evento_titulo}</h3>
                                            </div>
                                            <div className="sx-post-text">
                                                <div dangerouslySetInnerHTML={{ __html: item.evento_descripcion }}></div>                                                
                                            </div>                                            
                                        </div>                                                                               
                                    </div>
                                </div>
                                {/* SIDE BAR START */}
                                <div className="col-lg-4 col-md-12 col-sm-12 sticky_column">
                                    <BlogSidebar tipo={category}/>
                                </div>
                                {/* SIDE BAR END */}
                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT END */}
                </div>

                <Footer />
            </>
        );
      }  

    /* COMPONENTE PARA VIDEOS */      
      if (
        !loading_institucion &&
        !loading_static_data &&
        !loading_videos &&
        !loading_static_data_key &&
        category === TIPOS.VIDEOS
        ) 
        {

        /* DATOS OBTENIDOS DESDE LA STORE API */
        const {
            txt_content_banner_detail,
            txt_content_btn     
        } = staticData

        /* DATOS OBTENIDOS DESDE LA STORE STATICA*/
        const {
            institucion_iniciales,
            institucion_nombre,
            portada
        } = institucion

        const item = videos.find((e) => e.video_id === parseInt(id,10)) 

        const indiceAleatorio = Math.floor(Math.random() * portada.length);
        const imagenSeleccionada = portada[indiceAleatorio].portada_imagen;
        const img = `${process.env.REACT_APP_ROOT_API}/InstitucionUpea/Portada/${imagenSeleccionada}`;

        return (
            <>
                <Header4 />
                <div className="page-content ">
                <Banner title={category} pagename={category} description={txt_content_banner_detail} bgimage={img ?? images.BgOne} />
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-12 col-sm-12">
                                    <div className="blog-single-space max-w900 ml-auto mr-auto">
                                        {/* BLOG START */}
                                        <div className="blog-post blog-detail text-black">
                                            <div className="sx-post-media">
                                                <div className="portfolio-item">
                                                <iframe
                                                    width="100%" // Ancho deseado
                                                    height="" // Alto deseado
                                                    src={item.video_enlace} // URL de embed del video
                                                    title="Video Embed"
                                                    frameBorder="0"
                                                    allowFullScreen
                                                ></iframe>
                                                </div>
                                            </div>
                                            <div className="sx-post-meta  m-t20">
                                                <ul>
                                                    <li className="post-author"><NavLink to={"/"}><span>{institucion_nombre}</span></NavLink> </li>
                                                    <li className="post-category"><NavLink to={`/recursos?tipo=${TIPOS.VIDEOS}`}><span>{TIPOS.VIDEOS}</span></NavLink> </li>
                                                </ul>
                                            </div>
                                            <div className="sx-post-title ">
                                                <h3 className="post-title">{item.video_titulo}</h3>
                                            </div>
                                            <div className="sx-post-text">
                                                <div dangerouslySetInnerHTML={{ __html: item.video_breve_descripcion }}></div>                                                                                                
                                            </div>                                            
                                        </div>                                                                               
                                    </div>
                                </div>
                                {/* SIDE BAR START */}
                                <div className="col-lg-4 col-md-12 col-sm-12 sticky_column">
                                    <BlogSidebar tipo={category}/>
                                </div>
                                {/* SIDE BAR END */}
                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT END */}
                </div>

                <Footer />
            </>
        );
      } 
      
      /* COMPONENTE PARA CONVOCATORIAS - COMUNICADOS - AVISOS */      
      if (
        (!loading_institucion &&
        !loading_static_data &&
        !loading_convocatorias &&
        !loading_static_data_key
        ) &&
        (category === TIPOS.CONVOCATORIAS ||
        category === TIPOS.COMUNICADOS ||
        category === TIPOS.AVISOS 
        )
        ) 
        {

        /* DATOS OBTENIDOS DESDE LA STORE API */
        const {
            txt_content_banner_detail,
            txt_content_btn     
        } = staticData

        /* DATOS OBTENIDOS DESDE LA STORE STATICA*/
        const {
            institucion_iniciales,
            institucion_nombre,
            portada
        } = institucion

        const item = convocatorias.find((e) => e.idconvocatorias === parseInt(id,10)) 
        
        const indiceAleatorio = Math.floor(Math.random() * portada.length);
        const imagenSeleccionada = portada[indiceAleatorio].portada_imagen;
        const img = `${process.env.REACT_APP_ROOT_API}/InstitucionUpea/Portada/${imagenSeleccionada}`;

        return (
            <>
                <Header4 />
                <div className="page-content ">
                <Banner title={category} pagename={category} description={txt_content_banner_detail} bgimage={img ?? images.BgOne} />
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-12 col-sm-12">
                                    <div className="blog-single-space max-w900 ml-auto mr-auto">
                                        {/* BLOG START */}
                                        <div className="blog-post blog-detail text-black">
                                            <div className="sx-post-media">
                                                <div className="portfolio-item">
                                                    <img style={{width: '100%'}} className="img-responsive" src={`${process.env.REACT_APP_ROOT_API}/Convocatorias/${item.con_foto_portada}`} alt="" />
                                                </div>
                                            </div>
                                            <div className="sx-post-meta  m-t20">
                                                <ul>
                                                    <li className="post-date"><strong>{formatearFecha(item.con_fecha_inicio)}</strong> </li>
                                                    <li className="post-author"><NavLink to={"/"}><span>{institucion_nombre}</span></NavLink> </li>
                                                    <li className="post-category"><NavLink to={`/recursos?tipo=${category}`}><span>{category}</span></NavLink> </li>
                                                </ul>
                                            </div>
                                            <div className="sx-post-title ">
                                                <h3 className="post-title">{item.con_titulo}</h3>
                                            </div>
                                            <div className="sx-post-text">
                                                {/* <div dangerouslySetInnerHTML={{ __html: item.video_breve_descripcion }}></div>                                                                                                 */}
                                            </div>                                            
                                        </div>                                                                              
                                    </div>
                                </div>
                                {/* SIDE BAR START */}
                                <div className="col-lg-4 col-md-12 col-sm-12 sticky_column">
                                    <BlogSidebar tipo={category}/>
                                </div>
                                {/* SIDE BAR END */}
                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT END */}
                </div>

                <Footer />
            </>
        );
      } 

      /* COMPONENTE PARA CURSOS - SEMINARIOS */      
      if (
        (!loading_institucion &&
        !loading_static_data &&
        !loading_cursos &&
        !loading_static_data_key
        ) &&
        (category === TIPOS.CURSOS ||
        category === TIPOS.SEMINARIOS 
        )
        ) 
        {

        /* DATOS OBTENIDOS DESDE LA STORE API */
        const {
            txt_content_banner_detail,
            txt_content_btn     
        } = staticData

        /* DATOS OBTENIDOS DESDE LA STORE STATICA*/
        const {
            institucion_iniciales,
            institucion_nombre,
            portada
        } = institucion

        const item = cursos.find((e) => e.iddetalle_cursos_academicos === parseInt(id,10))

        const indiceAleatorio = Math.floor(Math.random() * portada.length);
        const imagenSeleccionada = portada[indiceAleatorio].portada_imagen;
        const img = `${process.env.REACT_APP_ROOT_API}/InstitucionUpea/Portada/${imagenSeleccionada}`;

        return (
            <>
                <Header4 />
                <div className="page-content ">
                <Banner title={category} pagename={category} description={txt_content_banner_detail} bgimage={img ?? images.BgOne} />
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-12 col-sm-12">
                                    <div className="blog-single-space max-w900 ml-auto mr-auto">
                                        {/* BLOG START */}
                                        <div className="blog-post blog-detail text-black">
                                            <div className="sx-post-media">
                                                <div className="portfolio-item">
                                                    <img style={{width: '100%'}} className="img-responsive" src={`${process.env.REACT_APP_ROOT_API}/Cursos/${item.det_img_portada}`} alt="" />
                                                </div>
                                            </div>
                                            <div className="sx-post-meta  m-t20">
                                                <ul>
                                                <li className="post-date"><strong>{formatearFecha(item.det_fecha_ini)}</strong> </li>
                                                    <li className="post-author"><NavLink to={"/"}><span>{institucion_nombre}</span></NavLink> </li>
                                                    <li className="post-category"><NavLink to={`/recursos?tipo=${category}`}><span>{category}</span></NavLink> </li>
                                                </ul>
                                            </div>
                                            <div className="sx-post-title ">
                                                <h3 className="post-title">{item.det_titulo}</h3>
                                            </div>
                                            <div className="sx-post-text">
                                                {/* <div dangerouslySetInnerHTML={{ __html: item.video_breve_descripcion }}></div>*/}
                                            </div>                                            
                                        </div>                                                                               
                                    </div>
                                </div>
                                {/* SIDE BAR START */}
                                <div className="col-lg-4 col-md-12 col-sm-12 sticky_column">
                                    <BlogSidebar tipo={category}/>
                                </div>
                                {/* SIDE BAR END */}
                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT END */}
                </div>

                <Footer />
            </>
        );
      } 

      return null
};

export default PostRightSidebar;