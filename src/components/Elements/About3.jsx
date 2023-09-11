import React from 'react';
import { NavLink } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { getInstitucion, getStaticDataAbout, getStaticImages } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';

const About3 = (bgcolor) =>{

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
        queryKey: ['staticDataAbout'],
        queryFn: getStaticDataAbout,
    });

    if(!loading_institucion && !loading_static_data){

        const {                        
            institucion_mision,
            institucion_vision,
            institucion_objetivos,
            institucion_historia,
            institucion_nombre,
            institucion_link_video_vision,
            institucion_iniciales
        } = institucion


        return (
            <>
                <div className={`${bgcolor} section-full mobile-page-padding p-t80 p-b50`}>
                    <div className="container">
                        <div className="section-content">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="about-home-3 m-b30 bg-white">
                                        <h3 className="m-t0 m-b20 sx-tilte">{institucion_nombre}</h3>
                                        <div dangerouslySetInnerHTML={{ __html: institucion_historia  }}></div>                                                                                                
                                        <div className="row">                                    
                                        <div className="col-md-12">
                                            {/* Accordian */}
                                            <div className="sx-accordion acc-bg-gray" id="accordion5">
                                                <div className="panel sx-panel">
                                                    <div className="acod-head acc-actives">
                                                        <h4 className="acod-title">
                                                            <a data-toggle="collapse" href="#collapseOne5" data-parent="#accordion5">
                                                                Mision
                                                                <span className="indicator"><i className="fa fa-plus" /></span>
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseOne5" className="acod-body collapse show">
                                                        <div className="acod-content p-a15">
                                                        <div dangerouslySetInnerHTML={{ __html: institucion_mision }}></div>                                                                                                
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="panel sx-panel">
                                                    <div className="acod-head">
                                                        <h4 className="acod-title">
                                                            <a data-toggle="collapse" href="#collapseTwo5" className="collapsed" data-parent="#accordion5">
                                                                Vision
                                                                <span className="indicator"><i className="fa fa-plus" /></span>
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseTwo5" className="acod-body collapse">
                                                    <div dangerouslySetInnerHTML={{ __html: institucion_vision  }}></div>                                                                                                
                                                    </div>
                                                </div>
                                                <div className="panel sx-panel">
                                                    <div className="acod-head">
                                                        <h4 className="acod-title">
                                                            <a data-toggle="collapse" href="#collapseThree5" className="collapsed" data-parent="#accordion5">
                                                                Objetivos
                                                                <span className="indicator"><i className="fa fa-plus" /></span>
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseThree5" className="acod-body collapse">
                                                    <div dangerouslySetInnerHTML={{ __html: institucion_objetivos  }}></div>                                                                                                
                                                    </div>
                                                </div>                                                
                                            </div>
                                        </div>
                                        </div>
                                        <br />
                                        <ul className="list-angle-right anchor-line">                                            
                                            <li><NavLink to="/academia?tipo=calendario">Calendario Academico</NavLink></li>
                                            <li><NavLink to="/academia?tipo=horario">Horario Academico</NavLink></li>
                                            <li><NavLink to="/academia?tipo=planEstudio">Plan de Estudio</NavLink></li>
                                            <li><NavLink to="/academia?tipo=reglamento">Reglamento y Mod. de graduacion</NavLink></li>
                                        </ul>
                                        {/* <div className="text-left">
                                            <NavLink to="/about-1" className="site-button btn-half"><span>Read More</span></NavLink>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="video-section-full-v2">
                                        <div className="video-section-full bg-no-repeat bg-cover bg-center overlay-wraper m-b30" style={{ backgroundImage: 'url(' + images.BgOne + ')' }}>
                                            <div className="overlay-main bg-black opacity-04" />
                                            <div className="video-section-inner">
                                                <div className="video-section-content">
                                                    <NavLink to={"#"} className="play-now" data-toggle="modal" data-target="#myModal">
                                                        <i className="icon fa fa-play" />
                                                        <span className="ripple" />
                                                    </NavLink>

                                                    <div className="video-section-bottom">
                                                        <h3 className="sx-title text-white">{institucion_iniciales}<br /></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <ReactPlayer url={institucion_link_video_vision} />
                        </div>
                    </div>
                </div>
            </>
        );
    }
    return null
};

export default About3;