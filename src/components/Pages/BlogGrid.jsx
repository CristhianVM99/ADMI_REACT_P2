import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import { getConvocatorias, getCursos, getEventos, getGacetas, getInstitucion, getOfertasAcademicas, getPublicaciones, getServicios, getStaticCategory, getStaticData, getStaticDataCategory, getStaticDataKey, getVideos } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';
import { AES } from 'crypto-js';
import { Document, Page, pdfjs } from "react-pdf";
const BlogGrid = () => {        
    
    /* OBTENEMOS EL TIPO DE CATEGORIA */
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('tipo').toUpperCase();

    /* TIPOS DE CATEGORIAS PERMITIDAS */
    const TYPE = {
        CONVOCATORIAS : 'CONVOCATORIAS',
        COMUNICADOS : 'COMUNICADOS',
        AVISOS : 'AVISOS',
        CURSOS : 'CURSOS',
        SEMINARIOS : 'SEMINARIOS',
        SERVICIOS : 'SERVICIOS',
        OFERTAS_ACADEMICAS : 'OFERTAS_ACADEMICAS',
        PUBLICACIONES: 'PUBLICACIONES',
        GACETAS: 'GACETAS',
        EVENTOS: 'EVENTOS',
        VIDEOS: 'VIDEOS',
    }

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
    
    const bnrimg = require('./../../images/banner/7.jpg');        

    useEffect(()=>{
        pdfjs.GlobalWorkerOptions.workerSrc =`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    })

    // SERVICIOS
    if(
        !loading_institucion &&
        !loading_static_data &&
        !loading_servicios &&
        !loading_static_data_key &&
        category === TYPE.SERVICIOS
    ){        

    /* CLAVE PARA ENCRYPTACION */    
    const secretKey = staticDataKey.CLAVE_ENCRYPTACION;
    
    /* Función para encriptar un ID */
    function encryptId(id) {
        const encrypted = AES.encrypt(id.toString(), secretKey).toString();
        return encrypted;
    }    

    /* DATOS OBTENIDOS DESDE LA STORE API */
    const {
        txt_content_btn,
        txt_content_banner_category        
    } = staticData

    /* DATOS OBTENIDOS DESDE LA STORE STATICA*/
    const {
        institucion_iniciales,
    } = institucion

    return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title={category} pagename={category} description={txt_content_banner_category} bgimage={bnrimg}/>
                   
                    <div className="section-full p-tb80 bg-white inner-page-padding">
                       
                    <div className="container">
                            <div className="masonry-outer mfp-gallery news-grid clearfix row ">
                                {servicios.map((item, index) => (
                                    <div className="masonry-item  col-lg-4 col-md-6 col-sm-12" key={index}>
                                    <div className="blog-post blog-grid date-style-2">
                                        <div className="sx-post-media sx-img-effect img-reflection">
                                            <NavLink to={`/post-right-sidebar?id=${item.serv_id}&tipo=${TYPE.SERVICIOS}`}><img src={`${process.env.REACT_APP_ROOT_API}/Carrera/Servicios/${item.serv_imagen}`} alt="" /></NavLink>
                                        </div>
                                        <div className="sx-post-info p-t30">
                                            <div className="sx-post-meta ">
                                                <ul>
                                                    <li className="post-date"><strong>{obtenerDiaDeFecha(item.serv_registro)}</strong> <span>{obtenerMesDeFecha(item.serv_registro)}</span> </li>
                                                    <li className="post-author"><NavLink to={`/post-right-sidebar?id=${item.serv_id}&tipo=${TYPE.SERVICIOS}`}><span>{institucion_iniciales}</span></NavLink> </li>
                                                    <li className="post-comment"> <NavLink to={`/post-right-sidebar?id=${item.serv_id}&tipo=${TYPE.SERVICIOS}`}>{TYPE.SERVICIOS}</NavLink> </li>
                                                </ul>
                                            </div>
                                            <div className="sx-post-title ">
                                                <h4 className="post-title"><NavLink to={`/post-right-sidebar?id=${item.serv_id}&tipo=${TYPE.SERVICIOS}`}>{item.serv_nombre}</NavLink></h4>
                                            </div>
                                            <div className="sx-post-readmore">
                                                <NavLink to={`/post-right-sidebar?id=${item.serv_id}&tipo=${TYPE.SERVICIOS}`} title="READ MORE" rel="bookmark" className="site-button-link">{txt_content_btn}</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                ))}
                            </div>                                
                        </div>
                       
                    </div>
                    
                </div>

                <Footer />
            </>
        );
    }

    // OFERTAS ACADEMICAS
    if(
        !loading_institucion &&
        !loading_static_data &&
        !loading_ofertas &&
        !loading_static_data_key &&
        category === TYPE.OFERTAS_ACADEMICAS      
    ){       
        
    /* CLAVE PARA ENCRYPTACION */    
    const secretKey = staticDataKey.CLAVE_ENCRYPTACION;
    
    /* Función para encriptar un ID */
    function encryptId(id) {
        const encrypted = AES.encrypt(id.toString(), secretKey).toString();
        return encrypted;
    } 

    /* DATOS OBTENIDOS DESDE LA STORE API */
    const {
        txt_content_btn,
        txt_content_banner_category        
    } = staticData

    /* DATOS OBTENIDOS DESDE LA STORE STATICA*/
    const {
        institucion_iniciales,
    } = institucion

        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title={"OFERTAS ACADEMICAS"} pagename={"OFERTAS ACADEMICAS"} description={txt_content_banner_category} bgimage={bnrimg}/>
                   
                    <div className="section-full p-tb80 bg-white inner-page-padding">
                       
                    <div className="container">
                            <div className="masonry-outer mfp-gallery news-grid clearfix row ">
                                {ofertas.map((item, index) => (
                                    <div className="masonry-item  col-lg-4 col-md-6 col-sm-12" key={index}>
                                    <div className="blog-post blog-grid date-style-2">
                                        <div className="sx-post-media sx-img-effect img-reflection">
                                            <NavLink to={`/post-right-sidebar?id=${item.ofertas_id}&tipo=${TYPE.OFERTAS_ACADEMICAS}`}><img src={`${process.env.REACT_APP_ROOT_API}/Carrera/OfertasAcademicas/${item.ofertas_imagen}`} alt="" /></NavLink>
                                        </div>
                                        <div className="sx-post-info p-t30">
                                            <div className="sx-post-meta ">
                                                <ul>
                                                    <li className="post-date"><strong>{obtenerDiaDeFecha(item.ofertas_inscripciones_ini)}</strong> <span>{obtenerMesDeFecha(item.ofertas_inscripciones_ini)}</span> </li>
                                                    <li className="post-author"><NavLink to={`/post-right-sidebar?id=${item.ofertas_id}&tipo=${TYPE.OFERTAS_ACADEMICAS}`}><span>{institucion_iniciales}</span></NavLink> </li>
                                                    <li className="post-comment"> <NavLink to={`/post-right-sidebar?id=${item.ofertas_id}&tipo=${TYPE.OFERTAS_ACADEMICAS}`}>{TYPE.OFERTAS_ACADEMICAS}</NavLink> </li>
                                                </ul>
                                            </div>
                                            <div className="sx-post-title ">
                                                <h4 className="post-title"><NavLink to={`/post-right-sidebar?id=${item.ofertas_id}&tipo=${TYPE.OFERTAS_ACADEMICAS}`}>{item.ofertas_titulo}</NavLink></h4>
                                            </div>
                                            <div className="sx-post-readmore">
                                                <NavLink to={`/post-right-sidebar?id=${item.ofertas_id}&tipo=${TYPE.OFERTAS_ACADEMICAS}`} title="READ MORE" rel="bookmark" className="site-button-link">{txt_content_btn}</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                ))}
                            </div>                                
                        </div>
                       
                    </div>
                    
                </div>

                <Footer />
            </>
        );
    }

    // PUBLICACIONES
    if(
        !loading_institucion &&
        !loading_static_data &&
        !loading_publicaciones &&
        !loading_static_data_key &&
        category === TYPE.PUBLICACIONES      
    ){

    /* CLAVE PARA ENCRYPTACION */    
    const secretKey = staticDataKey.CLAVE_ENCRYPTACION;
    
    /* Función para encriptar un ID */
    function encryptId(id) {
        const encrypted = AES.encrypt(id.toString(), secretKey).toString();
        return encrypted;
    } 

    /* DATOS OBTENIDOS DESDE LA STORE API */
    const {
        txt_content_btn,
        txt_content_banner_category        
    } = staticData

    /* DATOS OBTENIDOS DESDE LA STORE STATICA*/
    const {
        institucion_iniciales,
    } = institucion

        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title={category} pagename={category} description={txt_content_banner_category} bgimage={bnrimg}/>
                   
                    <div className="section-full p-tb80 bg-white inner-page-padding">
                       
                    <div className="container">
                            <div className="masonry-outer mfp-gallery news-grid clearfix row ">
                                {publicaciones.map((item, index) => (
                                    <div className="masonry-item  col-lg-4 col-md-6 col-sm-12" key={index}>
                                    <div className="blog-post blog-grid date-style-2">
                                        <div className="sx-post-media sx-img-effect img-reflection">
                                            <NavLink to={`/post-right-sidebar?id=${item.publicaciones_id}&tipo=${TYPE.PUBLICACIONES}`}><img src={`${process.env.REACT_APP_ROOT_API}/Publicaciones/${item.publicaciones_imagen}`} alt="" /></NavLink>
                                        </div>
                                        <div className="sx-post-info p-t30">
                                            <div className="sx-post-meta ">
                                                <ul>
                                                    <li className="post-date"><strong>{obtenerDiaDeFecha2(item.publicaciones_fecha)}</strong> <span>{obtenerMesDeFecha2(item.publicaciones_fecha)}</span> </li>
                                                    <li className="post-author"><NavLink to={`/post-right-sidebar?id=${item.publicaciones_id}&tipo=${TYPE.PUBLICACIONES}`}><span>{item.publicaciones_autor}</span></NavLink> </li>
                                                    <li className="post-comment"> <NavLink to={`/post-right-sidebar?id=${item.publicaciones_id}&tipo=${TYPE.PUBLICACIONES}`}>{TYPE.PUBLICACIONES}</NavLink> </li>
                                                </ul>
                                            </div>
                                            <div className="sx-post-title ">
                                                <h4 className="post-title"><NavLink to={`/post-right-sidebar?id=${item.publicaciones_id}&tipo=${TYPE.PUBLICACIONES}`}>{item.publicaciones_titulo}</NavLink></h4>
                                            </div>
                                            <div className="sx-post-readmore">
                                                <NavLink to={`/post-right-sidebar?id=${item.publicaciones_id}&tipo=${TYPE.PUBLICACIONES}`} title="READ MORE" rel="bookmark" className="site-button-link">{txt_content_btn}</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                ))}
                            </div>                                
                        </div>
                       
                    </div>
                    
                </div>

                <Footer />
            </>
        );
    }

    // GACETAS
    if(
        !loading_institucion &&
        !loading_static_data &&
        !loading_gacetas &&
        !loading_static_data_key &&
        category === TYPE.GACETAS      
    ){

    /* CLAVE PARA ENCRYPTACION */    
    const secretKey = staticDataKey.CLAVE_ENCRYPTACION;
    
    /* Función para encriptar un ID */
    function encryptId(id) {
        const encrypted = AES.encrypt(id.toString(), secretKey).toString();
        return encrypted;
    } 

    /* DATOS OBTENIDOS DESDE LA STORE API */
    const {
        txt_content_btn,
        txt_content_banner_category        
    } = staticData

    /* DATOS OBTENIDOS DESDE LA STORE STATICA*/
    const {
        institucion_iniciales,
    } = institucion

        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title={category} pagename={category} description={txt_content_banner_category} bgimage={bnrimg}/>
                   
                    <div className="section-full p-tb80 bg-white inner-page-padding">
                       
                    <div className="container">
                            <div className="masonry-outer mfp-gallery news-grid clearfix row ">
                                {gacetas.map((item, index) => (
                                    <div className="masonry-item  col-lg-4 col-md-6 col-sm-12" key={index}>
                                    <div className="blog-post blog-grid date-style-2">
                                        <div className="sx-post-media sx-img-effect img-reflection">
                                            <NavLink to={`/post-right-sidebar?id=${item.gaceta_id}&tipo=${TYPE.GACETAS}`}>
                                                <Document className="pdf" file={`${process.env.REACT_APP_ROOT_API}/Gaceta/${item.gaceta_documento}`}> 
                                                    <Page pageNumber={1} height={400}/> 
                                                </Document>
                                            </NavLink>
                                        </div>
                                        <div className="sx-post-info p-t30">
                                            <div className="sx-post-meta ">
                                                <ul>
                                                    <li className="post-date"><strong>{obtenerDiaDeFecha(item.gaceta_fecha)}</strong> <span>{obtenerMesDeFecha(item.gaceta_fecha)}</span> </li>
                                                    <li className="post-author"><NavLink to={`/post-right-sidebar?id=${item.gaceta_id}&tipo=${TYPE.GACETAS}`}><span>{institucion_iniciales}</span></NavLink> </li>
                                                    <li className="post-comment"> <NavLink to={`/post-right-sidebar?id=${item.gaceta_id}&tipo=${TYPE.GACETAS}`}>{TYPE.GACETAS}</NavLink> </li>
                                                </ul>
                                            </div>
                                            <div className="sx-post-title ">
                                                <h4 className="post-title"><NavLink to={`/post-right-sidebar?id=${item.gaceta_id}&tipo=${TYPE.GACETAS}`}>{item.gaceta_titulo}</NavLink></h4>
                                            </div>
                                            <div className="sx-post-readmore">
                                                <NavLink to={`/post-right-sidebar?id=${item.gaceta_id}&tipo=${TYPE.GACETAS}`} title="READ MORE" rel="bookmark" className="site-button-link">{txt_content_btn}</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                ))}
                            </div>                                
                        </div>
                       
                    </div>
                    
                </div>

                <Footer />
            </>
        );
    }

    // EVENTOS 
    if(
        !loading_institucion &&
        !loading_static_data &&
        !loading_eventos &&
        !loading_static_data_key &&
        category === TYPE.EVENTOS      
    ){

    /* CLAVE PARA ENCRYPTACION */    
    const secretKey = staticDataKey.CLAVE_ENCRYPTACION;
    
    /* Función para encriptar un ID */
    function encryptId(id) {
        const encrypted = AES.encrypt(id.toString(), secretKey).toString();
        return encrypted;
    }         
    
    /* DATOS OBTENIDOS DESDE LA STORE API */
    const {
        txt_content_btn,
        txt_content_banner_category        
    } = staticData

    /* DATOS OBTENIDOS DESDE LA STORE STATICA*/
    const {
        institucion_iniciales,
    } = institucion

        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title={category} pagename={category} description={txt_content_banner_category} bgimage={bnrimg}/>
                   
                    <div className="section-full p-tb80 bg-white inner-page-padding">
                       
                    <div className="container">
                            <div className="masonry-outer mfp-gallery news-grid clearfix row ">
                                {eventos.map((item, index) => (
                                    <div className="masonry-item  col-lg-4 col-md-6 col-sm-12" key={index}>
                                    <div className="blog-post blog-grid date-style-2">
                                        <div className="sx-post-media sx-img-effect img-reflection">
                                            <NavLink to={`/post-right-sidebar?id=${item.evento_id}&tipo=${TYPE.EVENTOS}`}><img src={`${process.env.REACT_APP_ROOT_API}/Eventos/${item.evento_imagen}`} alt="" /></NavLink>
                                        </div>
                                        <div className="sx-post-info p-t30">
                                            <div className="sx-post-meta ">
                                                <ul>
                                                    <li className="post-date"><strong>{obtenerDiaDeFecha2(item.evento_fecha)}</strong> <span>{obtenerMesDeFecha2(item.evento_fecha)}</span> </li>
                                                    <li className="post-author"><NavLink to={`/post-right-sidebar?id=${item.evento_id}&tipo=${TYPE.EVENTOS}`}><span>{institucion_iniciales}</span></NavLink> </li>
                                                    <li className="post-comment"> <NavLink to={`/post-right-sidebar?id=${item.evento_id}&tipo=${TYPE.EVENTOS}`}>{TYPE.EVENTOS}</NavLink> </li>
                                                </ul>
                                            </div>
                                            <div className="sx-post-title ">
                                                <h4 className="post-title"><NavLink to={`/post-right-sidebar?id=${item.evento_id}&tipo=${TYPE.EVENTOS}`}>{item.evento_titulo}</NavLink></h4>
                                            </div>
                                            <div className="sx-post-readmore">
                                                <NavLink to={`/post-right-sidebar?id=${item.evento_id}&tipo=${TYPE.EVENTOS}`} title="READ MORE" rel="bookmark" className="site-button-link">{txt_content_btn}</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                ))}
                            </div>                                
                        </div>
                       
                    </div>
                    
                </div>

                <Footer />
            </>
        );
    }

    // VIDEOS
    if(
        !loading_institucion &&
        !loading_static_data &&
        !loading_videos &&  
        !loading_static_data_key &&    
        category === TYPE.VIDEOS
    ){

    /* CLAVE PARA ENCRYPTACION */    
    const secretKey = staticDataKey.CLAVE_ENCRYPTACION;
    
    /* Función para encriptar un ID */
    function encryptId(id) {
        const encrypted = AES.encrypt(id.toString(), secretKey).toString();
        return encrypted;
    } 

    /* DATOS OBTENIDOS DESDE LA STORE API */
    const {
        txt_content_btn,
        txt_content_banner_category        
    } = staticData

    /* DATOS OBTENIDOS DESDE LA STORE STATICA*/
    const {
        institucion_iniciales,
    } = institucion

        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title={category} pagename={category} description={txt_content_banner_category} bgimage={bnrimg}/>
                   
                    <div className="section-full p-tb80 bg-white inner-page-padding">
                       
                    <div className="container">
                            <div className="masonry-outer mfp-gallery news-grid clearfix row ">
                                {videos.map((item, index) => (
                                    <div className="masonry-item  col-lg-4 col-md-6 col-sm-12" key={index}>
                                    <div className="blog-post blog-grid date-style-2">
                                        <div className="sx-post-media sx-img-effect img-reflection">
                                            <NavLink to={`/post-right-sidebar?id=${item.video_id}&tipo=${TYPE.VIDEOS}`}>
                                            <iframe
                                                width="560" // Ancho deseado
                                                height="315" // Alto deseado
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
                                                    <li className="post-author"><NavLink to={`/post-right-sidebar?id=${item.video_id}&tipo=${TYPE.VIDEOS}`}><span>{institucion_iniciales}</span></NavLink> </li>
                                                    <li className="post-comment"> <NavLink to={`/post-right-sidebar?id=${item.video_id}&tipo=${TYPE.VIDEOS}`}>{TYPE.VIDEOS}</NavLink> </li>
                                                </ul>
                                            </div>
                                            <div className="sx-post-title ">
                                                <h4 className="post-title"><NavLink to={`/post-right-sidebar?id=${item.video_id}&tipo=${TYPE.VIDEOS}`}>{item.video_titulo}</NavLink></h4>
                                            </div>
                                            <div className="sx-post-readmore">
                                                <NavLink to={`/post-right-sidebar?id=${item.video_id}&tipo=${TYPE.VIDEOS}`} title="READ MORE" rel="bookmark" className="site-button-link">{txt_content_btn}</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                ))}
                            </div>    
                            {/* <ul className="pagination m-t30 m-b0">
                                <li><NavLink to={"#"}>«</NavLink></li>
                                <li className="active"><NavLink to={"#"}>1</NavLink></li>
                                <li><NavLink to={"#"}>2</NavLink></li>
                                <li><NavLink to={"#"}>3</NavLink></li>
                                <li><NavLink to={"#"}>4</NavLink></li>
                                <li><NavLink to={"#"}>5</NavLink></li>
                                <li><NavLink to={"#"}>»</NavLink></li>
                            </ul> */}
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
        !loading_convocatorias 
        ) &&
        (category === TYPE.CONVOCATORIAS ||
        category === TYPE.COMUNICADOS ||
        category === TYPE.AVISOS
        )
    ){
        
    const items = convocatorias.filter((e) => e.tipo_conv_comun.tipo_conv_comun_titulo === category);

    /* DATOS OBTENIDOS DESDE LA STORE API */
    const {
        txt_content_btn,
        txt_content_banner_category        
    } = staticData

    /* DATOS OBTENIDOS DESDE LA STORE STATICA*/
    const {
        institucion_iniciales,
    } = institucion

        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title={category} pagename={category} description={txt_content_banner_category} bgimage={bnrimg}/>
                   
                    <div className="section-full p-tb80 bg-white inner-page-padding">
                       
                    <div className="container">
                            <div className="masonry-outer mfp-gallery news-grid clearfix row ">
                                {items.map((item, index) => (
                                    <div className="masonry-item  col-lg-4 col-md-6 col-sm-12" key={index}>
                                    <div className="blog-post blog-grid date-style-2">
                                        <div className="sx-post-media sx-img-effect img-reflection">
                                            <NavLink to={`/post-right-sidebar?id=${item.idconvocatorias}&tipo=${category}`}><img src={`${process.env.REACT_APP_ROOT_API}/Convocatorias/${item.con_foto_portada}`} alt="" /></NavLink>
                                        </div>
                                        <div className="sx-post-info p-t30">
                                            <div className="sx-post-meta ">
                                                <ul>
                                                    <li className="post-date"><strong>{obtenerDiaDeFecha(item.con_fecha_inicio)}</strong> <span>{obtenerMesDeFecha(item.con_fecha_inicio)}</span> </li>
                                                    <li className="post-author"><NavLink to={`/post-right-sidebar?id=${item.idconvocatorias}&tipo=${category}`}><span>{item.tipo_conv_comun.tipo_conv_comun_titulo}</span></NavLink> </li>
                                                    <li className="post-comment"> <NavLink to={`/post-right-sidebar?id=${item.idconvocatorias}&tipo=${category}`}>{ institucion_iniciales }</NavLink> </li>
                                                </ul>
                                            </div>
                                            <div className="sx-post-title ">
                                                <h4 className="post-title"><NavLink to={`/post-right-sidebar?id=${item.idconvocatorias}&tipo=${category}`}>{item.con_titulo}</NavLink></h4>
                                            </div>
                                            <div className="sx-post-readmore">
                                                <NavLink to={`/post-right-sidebar?id=${item.idconvocatorias}&tipo=${category}`} title="READ MORE" rel="bookmark" className="site-button-link">{ txt_content_btn }</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                ))}
                            </div>    
                            {/* <ul className="pagination m-t30 m-b0">
                                <li><NavLink to={"#"}>«</NavLink></li>
                                <li className="active"><NavLink to={"#"}>1</NavLink></li>
                                <li><NavLink to={"#"}>2</NavLink></li>
                                <li><NavLink to={"#"}>3</NavLink></li>
                                <li><NavLink to={"#"}>4</NavLink></li>
                                <li><NavLink to={"#"}>5</NavLink></li>
                                <li><NavLink to={"#"}>»</NavLink></li>
                            </ul> */}
                        </div>
                       
                    </div>
                    
                </div>

                <Footer />
            </>
        );
    }    

    // CURSOS - SEMINARIOS
    if(
        (!loading_institucion &&
        !loading_static_data &&
        !loading_static_data_key &&
        !loading_cursos
        ) &&            
        (category === TYPE.CURSOS ||
        category === TYPE.SEMINARIOS
        )
    ){

        const items = cursos.filter((e) => e.tipo_curso_otro.tipo_conv_curso_nombre === category);        
    
        /* DATOS OBTENIDOS DESDE LA STORE API */
        const {
            txt_content_btn,
            txt_content_banner_category        
        } = staticData

        /* DATOS OBTENIDOS DESDE LA STORE STATICA*/
        const {
            institucion_iniciales,
        } = institucion

        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title={category} pagename={category} description={txt_content_banner_category} bgimage={bnrimg}/>
                   
                    <div className="section-full p-tb80 bg-white inner-page-padding">
                       
                    <div className="container">
                            <div className="masonry-outer mfp-gallery news-grid clearfix row ">
                                {items.map((item, index) => (
                                    <div className="masonry-item  col-lg-4 col-md-6 col-sm-12" key={index}>
                                    <div className="blog-post blog-grid date-style-2">
                                        <div className="sx-post-media sx-img-effect img-reflection">
                                        <NavLink to={`/post-right-sidebar?id=${item.iddetalle_cursos_academicos}&tipo=${category}`}><img src={`${process.env.REACT_APP_ROOT_API}/Cursos/${item.det_img_portada}`} alt="" /></NavLink>
                                        </div>
                                        <div className="sx-post-info p-t30">
                                            <div className="sx-post-meta ">
                                                <ul>
                                                    <li className="post-date"><strong>{obtenerDiaDeFecha(item.det_fecha_ini)}</strong> <span>{obtenerMesDeFecha(item.det_fecha_ini)}</span> </li>
                                                    <li className="post-author"><NavLink to={`/post-right-sidebar?id=${item.iddetalle_cursos_academicos}&tipo=${category}`}><span>{item.tipo_curso_otro.tipo_conv_curso_nombre}</span></NavLink> </li>
                                                    <li className="post-comment"> <NavLink to={`/post-right-sidebar?id=${item.iddetalle_cursos_academicos}&tipo=${category}`}>{ institucion_iniciales }</NavLink> </li>
                                                </ul>
                                            </div>
                                            <div className="sx-post-title ">
                                                <h4 className="post-title"><NavLink to={`/post-right-sidebar?id=${item.iddetalle_cursos_academicos}&tipo=${category}`}>{item.det_titulo}</NavLink></h4>
                                            </div>
                                            <div className="sx-post-readmore">
                                                <NavLink to={`/post-right-sidebar?id=${item.iddetalle_cursos_academicos}&tipo=${category}`} title="READ MORE" rel="bookmark" className="site-button-link">{txt_content_btn}</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                ))}
                            </div>    
                            {/* <ul className="pagination m-t30 m-b0">
                                <li><NavLink to={"#"}>«</NavLink></li>
                                <li className="active"><NavLink to={"#"}>1</NavLink></li>
                                <li><NavLink to={"#"}>2</NavLink></li>
                                <li><NavLink to={"#"}>3</NavLink></li>
                                <li><NavLink to={"#"}>4</NavLink></li>
                                <li><NavLink to={"#"}>5</NavLink></li>
                                <li><NavLink to={"#"}>»</NavLink></li>
                            </ul> */}
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