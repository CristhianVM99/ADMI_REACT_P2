import React from 'react';
import { NavLink } from 'react-router-dom';
import { getStaticImages } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';
import { TIPOS } from '../../types/types';
const Services7 = () =>{

    /* OBTENCION DE INFORMACION DEL STORE IMAGES */
    const { isLoading: loading_images, data: images } = useQuery({
        queryKey: ['getStaticImages'],
        queryFn: getStaticImages,
    });

    if(!loading_images){

        const services = [
            {
                count: '01',
                title: 'Convocatorias',
                flaticon: 'flaticon-sketch',
                image: images.BgConvocatorias,
                description: 'Convocatorias de la Carrera',
                link: `/recursos?tipo=${TIPOS.CONVOCATORIAS}`
            },
            {
                count: '02',
                title: 'Comunicados',
                flaticon: 'flaticon-stairs',
                image: images.BgComunicados,
                description: 'Comunicados de la Carrera',
                link: `/recursos?tipo=${TIPOS.COMUNICADOS}`
            },
            {
                count: '03',
                title: 'Avisos',
                flaticon: 'flaticon-window',
                image: images.BgAvisos,
                description: 'Avisos de la Carrera',
                link: `/recursos?tipo=${TIPOS.AVISOS}`
            },
            {
                count: '04',
                title: 'Cursos',
                flaticon: 'flaticon-sketch',
                image: images.BgCursos,
                description: 'Cursos de la Carrera',
                link: `/recursos?tipo=${TIPOS.CURSOS}`
            },
            {
                count: '05',
                title: 'Seminarios',
                flaticon: 'flaticon-stairs',
                image: images.BgSeminarios,
                description: 'Seminarios de la Carrera',
                link: `/recursos?tipo=${TIPOS.SEMINARIOS}`
            },
            {
                count: '06',
                title: 'Servicios',
                flaticon: 'flaticon-window',
                image: images.BgServicios,
                description: 'Servicios de la Carrera',
                link: `/recursos?tipo=${TIPOS.SERVICIOS}`
            },
            {
                count: '07',
                title: 'Ofertas Academicas',
                flaticon: 'flaticon-sketch',
                image: images.BgOfertasAcademicas,
                description: 'Ofertas Academicas de la Carrera',
                link: `/recursos?tipo=${TIPOS.OFERTAS_ACADEMICAS}`
            },
            {
                count: '08',
                title: 'Publicaciones',
                flaticon: 'flaticon-stairs',
                image: images.BgPublicaciones,
                description: 'Publicaciones de la Carrera',
                link: `/recursos?tipo=${TIPOS.PUBLICACIONES}`
            },
            {
                count: '09',
                title: 'Gacetas',
                flaticon: 'flaticon-window',
                image: images.BgGacetas,
                description: 'Gacetas de la Carrera',
                link: `/recursos?tipo=${TIPOS.GACETAS}`
            },
            {
                count: '10',
                title: 'Eventos',
                flaticon: 'flaticon-sketch',
                image: images.BgEventos,
                description: 'Eventos de la Carrera',
                link: `/recursos?tipo=${TIPOS.EVENTOS}`
            },
            {
                count: '11',
                title: 'Videos',
                flaticon: 'flaticon-stairs',
                image: images.BgVideos,
                description: 'Videos de la Carrera',
                link: `/recursos?tipo=${TIPOS.VIDEOS}`
            },            
        ]
        
        return (
            <>
                <div className="section-full mobile-page-padding p-t80 p-b50 bg-white">
                    <div className="container">
                        <div className="row">
                            {services.map((item, index) => (                                
                            <div className="col-lg-4 col-md-12 m-b30" key={index}>
                                <NavLink to={item.link}>
                                <div className="bgcall-block d-flex flex-wrap justify-content-center align-content-end bg-cover overlay-wraper" style={{ backgroundImage: 'url(' + item.image + ')' }}>
                                    <div className="overlay-main bg-black opacity-05" />
                                    <div className="bg-content-mid-outer">
                                        <div className="bg-content-mid">
                                            <div className="sx-icon-box-wraper center   text-white">
                                                <div className="icon-lg m-b15">
                                                    <span className="icon-cell"><i className={item.flaticon} /></span>
                                                </div>
                                                <div className="icon-content m-b30">
                                                    <h4 className="sx-tilte"> <NavLink to={item.link}  className="sx-text-white">{item.title}</NavLink></h4>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                            <span className="bgcall-block-number">{item.count}</span>
                                            <div className="bg-overlay" />
                                        </div>
                                    </div>
                                </div>
                                </NavLink>
                            </div>                                
                            ))}
                        </div>
                    </div>
                </div>
            </>
        );
    }
    return null
};

export default Services7;