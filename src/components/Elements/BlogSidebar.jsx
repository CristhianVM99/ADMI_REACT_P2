import React from 'react';
import { NavLink } from 'react-router-dom';
import { getConvocatorias, getCursos, getEventos, getGacetas, getInstitucion, getLinksInstExtAll, getOfertasAcademicas, getPublicaciones, getServicios, getVideos } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';
import { TIPOS } from '../../types/types';

const BlogSidebar = ({tipo}) => {

    /* OBTENCION DE INFORMACION DEL STORE API INSTITUCION*/
    const { isLoading: loading_institucion, data: institucion } = useQuery({
        queryKey: ['institucion'],
        queryFn: getInstitucion,
    })

    /* OBTENCION DE INFORMACION DEL STORE LINKS  */
    const { isLoading: loading_links_externos, data: links } = useQuery({
        queryKey: ['links_externos'],
        queryFn: getLinksInstExtAll,
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

    if(
        !loading_convocatorias &&
        !loading_cursos &&
        !loading_servicios &&
        !loading_ofertas &&
        !loading_publicaciones &&
        !loading_gacetas &&
        !loading_eventos &&
        !loading_videos &&
        !loading_institucion &&
        !loading_links_externos
    ){

        const convocatorias_cat = convocatorias.filter((e) => e.tipo_conv_comun.tipo_conv_comun_titulo === TIPOS.CONVOCATORIAS);
        const comunicados_cat = convocatorias.filter((e) => e.tipo_conv_comun.tipo_conv_comun_titulo === TIPOS.COMUNICADOS);
        const avisos_cat = convocatorias.filter((e) => e.tipo_conv_comun.tipo_conv_comun_titulo === TIPOS.AVISOS);
        const cursos_cat = cursos.filter((e) => e.tipo_curso_otro.tipo_conv_curso_nombre === TIPOS.CURSOS);
        const seminarios_cat = cursos.filter((e) => e.tipo_curso_otro.tipo_conv_curso_nombre === TIPOS.SEMINARIOS);

        const ultimosServicios = servicios.slice(0, 3).map((item) => {
            return <NavLink key={item.serv_id} to={`/detalle?id=${item.serv_id}&tipo=${tipo}`}>
                    <div className="widget-post clearfix">
                        <div className="sx-post-media">
                            <img style={{height: '120px'}} src={`${process.env.REACT_APP_ROOT_API}/Carrera/Servicios/${item.serv_imagen}`} alt=""/>
                        </div>
                        <div className="sx-post-info">
                            <div className="sx-post-header">
                                <h6 className="post-title">{item.serv_nombre}</h6>
                            </div>
                            <div className="sx-post-meta">
                                <ul>
                                    <li className="post-author">{formatearFecha(item.serv_registro)}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                <br />                    
            </NavLink>                                
        });

        const ultimosOfertas = ofertas.slice(0, 3).map((item) => {
            return <NavLink key={item.ofertas_id} to={`/detalle?id=${item.ofertas_id}&tipo=${tipo}`}>
                    <div className="widget-post clearfix">
                        <div className="sx-post-media">
                            <img style={{height: '120px'}} src={`${process.env.REACT_APP_ROOT_API}/Carrera/OfertasAcademicas/${item.ofertas_imagen}`} alt=""/>
                        </div>
                        <div className="sx-post-info">
                            <div className="sx-post-header">
                                <h6 className="post-title">{item.ofertas_titulo}</h6>
                            </div>
                            <div className="sx-post-meta">
                                <ul>
                                    <li className="post-author">{formatearFecha(item.ofertas_inscripciones_ini)}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                <br />                    
            </NavLink>                                
        });
        
        const ultimosPublicaciones = publicaciones.slice(0, 3).map((item) => {
            return <NavLink key={item.publicaciones_id} to={`/detalle?id=${item.publicaciones_id}&tipo=${tipo}`}>
                    <div className="widget-post clearfix">
                        <div className="sx-post-media">
                            <img style={{height: '120px'}} src={`${process.env.REACT_APP_ROOT_API}/Publicaciones/${item.publicaciones_imagen}`} alt=""/>
                        </div>
                        <div className="sx-post-info">
                            <div className="sx-post-header">
                                <h6 className="post-title">{item.publicaciones_titulo}</h6>
                            </div>
                            <div className="sx-post-meta">
                                <ul>
                                    <li className="post-author">{formatearFecha(item.publicaciones_fecha)}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                <br />                    
            </NavLink>                                
        });

        const ultimosEventos = eventos.slice(0, 3).map((item) => {
            return <NavLink key={item.evento_id} to={`/detalle?id=${item.evento_id}&tipo=${tipo}`}>
                    <div className="widget-post clearfix">
                        <div className="sx-post-media">
                            <img style={{height: '120px'}} src={`${process.env.REACT_APP_ROOT_API}/Eventos/${item.evento_imagen}`} alt=""/>
                        </div>
                        <div className="sx-post-info">
                            <div className="sx-post-header">
                                <h6 className="post-title">{item.evento_titulo}</h6>
                            </div>
                            <div className="sx-post-meta">
                                <ul>
                                    <li className="post-author">{formatearFecha(item.evento_fecha)}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                <br />                    
            </NavLink>                                
        });

        const ultimosVideos = videos.slice(0, 3).map((item) => {
            return <NavLink key={item.video_id} to={`/detalle?id=${item.video_id}&tipo=${tipo}`}>
                    <div className="widget-post clearfix">
                        <div className="sx-post-media">
                            <iframe
                                
                                src={item.video_enlace} // URL de embed del video
                                title="Video Embed"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="sx-post-info">
                            <div className="sx-post-header">
                                <h6 className="post-title">{item.video_titulo}</h6>
                            </div>                            
                        </div>
                    </div>
                <br />                    
            </NavLink>                                
        });

        const ultimosConvocatorias = convocatorias_cat.slice(0, 3).map((item) => {
            return <NavLink  key={item.idconvocatorias} to={`/detalle?id=${item.idconvocatorias}&tipo=${tipo}`}>
                    <div className="widget-post clearfix">
                        <div className="sx-post-media">
                            <img style={{height: '120px'}} src={`${process.env.REACT_APP_ROOT_API}/Convocatorias/${item.con_foto_portada}`} alt=""/>
                        </div>
                        <div className="sx-post-info">
                            <div className="sx-post-header">
                                <h6 className="post-title">{item.con_titulo}</h6>
                            </div>
                            <div className="sx-post-meta">
                                <ul>
                                    <li className="post-author">{formatearFecha(item.con_fecha_inicio)}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                <br />                    
            </NavLink>                                
        });        

        const ultimosComunicados = comunicados_cat.slice(0, 3).map((item) => {
            return <NavLink key={item.idconvocatorias} to={`/detalle?id=${item.idconvocatorias}&tipo=${tipo}`}>
                    <div className="widget-post clearfix">
                        <div className="sx-post-media">
                            <img style={{height: '120px'}} src={`${process.env.REACT_APP_ROOT_API}/Convocatorias/${item.con_foto_portada}`} alt=""/>
                        </div>
                        <div className="sx-post-info">
                            <div className="sx-post-header">
                                <h6 className="post-title">{item.con_titulo}</h6>
                            </div>
                            <div className="sx-post-meta">
                                <ul>
                                    <li className="post-author">{formatearFecha(item.con_fecha_inicio)}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                <br />                    
            </NavLink>                                
        });

        const ultimosAvisos = avisos_cat.slice(0, 3).map((item) => {
            return <NavLink key={item.idconvocatorias} to={`/detalle?id=${item.idconvocatorias}&tipo=${tipo}`}>
                    <div className="widget-post clearfix">
                        <div className="sx-post-media">
                            <img style={{height: '120px'}} src={`${process.env.REACT_APP_ROOT_API}/Convocatorias/${item.con_foto_portada}`} alt=""/>
                        </div>
                        <div className="sx-post-info">
                            <div className="sx-post-header">
                                <h6 className="post-title">{item.con_titulo}</h6>
                            </div>
                            <div className="sx-post-meta">
                                <ul>
                                    <li className="post-author">{formatearFecha(item.con_fecha_inicio)}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                <br />                    
            </NavLink>                                
        });

        const ultimosCursos = cursos_cat.slice(0, 3).map((item) => {
            return <NavLink key={item.iddetalle_cursos_academicos} to={`/detalle?id=${item.iddetalle_cursos_academicos}&tipo=${tipo}`}>
                    <div className="widget-post clearfix">
                        <div className="sx-post-media">
                            <img style={{height: '120px'}} src={`${process.env.REACT_APP_ROOT_API}/Cursos/${item.det_img_portada}`} alt=""/>
                        </div>
                        <div className="sx-post-info">
                            <div className="sx-post-header">
                                <h6 className="post-title">{item.det_titulo}</h6>
                            </div>
                            <div className="sx-post-meta">
                                <ul>
                                    <li className="post-author">{formatearFecha(item.det_fecha_ini)}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                <br />                    
            </NavLink>                                
        });

        const ultimosSeminarios = seminarios_cat.slice(0, 3).map((item) => {
            return <NavLink key={item.iddetalle_cursos_academicos} to={`/detalle?id=${item.iddetalle_cursos_academicos}&tipo=${tipo}`}>
                    <div className="widget-post clearfix">
                        <div className="sx-post-media">
                            <img style={{height: '120px'}} src={`${process.env.REACT_APP_ROOT_API}/Cursos/${item.det_img_portada}`} alt=""/>
                        </div>
                        <div className="sx-post-info">
                            <div className="sx-post-header">
                                <h6 className="post-title">{item.det_titulo}</h6>
                            </div>
                            <div className="sx-post-meta">
                                <ul>
                                    <li className="post-author">{formatearFecha(item.det_fecha_ini)}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                <br />                    
            </NavLink>                                
        });

        const links_filter = links.filter((e)=>e.ei_tipo===TIPOS.KARDEX)

        return (
            <>
                <div className="side-bar p-a30 bg-gray">
                    {/* SEARCH */}
                    {/* <div className="widget">
                        <h4 className="widget-title ">Buscar</h4>
                        <div className="search-bx p-a10 bg-white">
                            <form role="search" method="post" action="#">
                                <div className="input-group">
                                    <input name="news-letter" type="text" className="form-control bg-gray" placeholder="Write your text" />
                                    <span className="input-group-btn bg-gray">
                                        <button type="button" className="btn"><i className="fa fa-search" /></button>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div> */}
                    {/* RECENT POSTS */}
                    <div className="widget  recent-posts-entry">
                        <h4 className="widget-title  ">Lo ultimo de {tipo}</h4>
                        <div className="section-content p-a10 bg-white">
                            <div className="widget-post-bx">
                                {tipo === TIPOS.CONVOCATORIAS ?  ultimosConvocatorias  : <div></div>}
                                {tipo === TIPOS.COMUNICADOS ?  ultimosComunicados  : <div></div>}
                                {tipo === TIPOS.AVISOS ?  ultimosAvisos  : <div></div>}
                                {tipo === TIPOS.CURSOS ?  ultimosCursos  : <div></div>}
                                {tipo === TIPOS.SEMINARIOS ?  ultimosSeminarios  : <div></div>}
                                {tipo === TIPOS.SERVICIOS ?  ultimosServicios  : <div></div>}
                                {tipo === TIPOS.OFERTAS_ACADEMICAS ?  ultimosOfertas  : <div></div>}
                                {tipo === TIPOS.PUBLICACIONES ?  ultimosPublicaciones  : <div></div>}
                                {tipo === TIPOS.EVENTOS ?  ultimosEventos  : <div></div>}
                                {tipo === TIPOS.VIDEOS ?  ultimosVideos  : <div></div>}
                            </div>
                        </div>
                    </div>
                    {/* Categories  */}
                    <div className="widget widget_services ">
                        <h4 className="widget-title">Categorias</h4>
                        <ul className="p-a10 bg-white">
                            <li><NavLink to={"/recursos?tipo=convocatorias"}>Convocatorias<span> ({convocatorias_cat.length})</span></NavLink></li>
                            <li><NavLink to={"/recursos?tipo=comunicados"}>Comunicados<span> ({comunicados_cat.length})</span></NavLink></li>
                            <li><NavLink to={"/recursos?tipo=avisos"}>Avisos<span> ({avisos_cat.length})</span></NavLink></li>
                            <li><NavLink to={"/recursos?tipo=cursos"}>Cursos<span> ({cursos_cat.length})</span></NavLink></li>
                            <li><NavLink to={"/recursos?tipo=seminarios"}>Seminarios<span> ({seminarios_cat.length})</span></NavLink></li>
                            <li><NavLink to={"/recursos?tipo=servicios"}>Servicios<span> ({servicios.length})</span></NavLink></li>
                            <li><NavLink to={"/recursos?tipo=publicaciones"}>Publicaciones<span> ({publicaciones.length})</span></NavLink></li>
                            <li><NavLink to={"/recursos?tipo=ofertas_academicas"}>Ofertas Académicas<span> ({ofertas.length})</span></NavLink></li>
                            <li><NavLink to={"/recursos?tipo=gacetas"}>Gacetas<span> ({gacetas.length})</span></NavLink></li>
                            <li><NavLink to={"/recursos?tipo=eventos"}>Eventos<span> ({eventos.length})</span></NavLink></li>
                            <li><NavLink to={"/recursos?tipo=videos"}>Videos<span> ({videos.length})</span></NavLink></li>
                        </ul>
                    </div>                    
                    {/* OUR GALLERY  */}
                    <div className="widget widget_gallery mfp-gallery">
                        <h4 className="widget-title  ">Links de la Carrera</h4>
                        <ul className="p-a10 bg-white clearfix">
                            {links_filter.map((item, index) => (
                               <li>
                                    <div className="sx-post-thum" style={{background: '#fff',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <a href={item.ei_link} className="mfp-link" target='_blank' rel="noopener noreferrer"><img style={{objectFit: 'cover'}} src={`${process.env.REACT_APP_ROOT_API}/InstitucionUpea/LinksExternos/${item.ei_imagen}`} alt=""/></a>
                                    </div>
                                </li>         
                            ))}                                                        
                        </ul>
                    </div>
                    {/* TAGS */}
                    <div className="widget widget_tag_cloud">
                        <h4 className="widget-title">Otras Consultas</h4>
                        <div className="tagcloud p-a10 bg-white">
                            <NavLink to={"/academia?tipo=calendario"}>Calendario Académico</NavLink>
                            <NavLink to={"/academia?tipo=horario"}>Horario</NavLink>
                            <NavLink to={"/academia?tipo=planEstudio"}>Plan de Estudio</NavLink>
                            <NavLink to={"/academia?tipo=reglamento"}>Reglamento mod. De graduación</NavLink>
                            <NavLink to={"/institucion?tipo=convenios"}>Convenios Institucionales</NavLink>
                            <NavLink to={"/institucion?tipo=pasantias"}>Pasantías</NavLink>
                            <NavLink to={"/institucion?tipo=trabajos"}>Trabajos Dirigidos</NavLink>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default BlogSidebar;