import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import { Document, Page, pdfjs } from "react-pdf";
import { getGacetas, getInstitucion, getStaticDataInstitucion, getStaticImages } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';
import { TIPOS } from '../../types/types';

const ProjectGrid3 = () => {

    /* OBTENEMOS EL TIPO DE CATEGORIA */
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('tipo').toUpperCase();

    /* OBTENCION DE INFORMACION DEL STORE IMAGES */
    const { isLoading: loading_images, data: images } = useQuery({
        queryKey: ['getStaticImages'],
        queryFn: getStaticImages,
    });

    /* OBTENCION DE INFORMACION DEL STORE STATICO CATEGORY */
    const { isLoading: loading_static_data, data: staticData } = useQuery({
        queryKey: ['staticDataInstitucion'],
        queryFn: getStaticDataInstitucion,
    });

    /* OBTENCION DE INFORMACION DEL STORE API INSTITUCION*/
    const { isLoading: loading_institucion, data: institucion } = useQuery({
        queryKey: ['institucion'],
        queryFn: getInstitucion,
    })

    /* OBTENCION DE INFORMACION DEL STORE API GACETAS*/
    const { isLoading: loading_gacetas, data: gacetas } = useQuery({
        queryKey: ['gacetas'],
        queryFn: getGacetas,
    })

    /* CATEGORIA PARA FILTRADOS */
    const filters = [
        { label: TIPOS.CONVENIOS, filter: "."+TIPOS.CONVENIOS },
        { label: TIPOS.PASANTIAS, filter: "."+TIPOS.PASANTIAS },
        { label: TIPOS.TRABAJOS, filter: "."+TIPOS.TRABAJOS },
    ];            

    useEffect(()=>{

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
            })
        };

        loadScript('./assets/js/custom.js');
    })

    if(!loading_institucion && !loading_static_data && !loading_gacetas && !loading_images){

        /* DATOS OBTENIDOS DESDE LA STORE API */
        const {
            txt_content_banner_institucion   
        } = staticData

        /* DATOS OBTENIDOS DESDE LA STORE STATICA*/
        const {
            institucion_iniciales,
            institucion_nombre
        } = institucion

        /* FILTRADOE DE CONVENIOS PARA GACETAS DE TIPO CONVENIO */
        const filterconvenios = gacetas.filter((e)=> e.gaceta_titulo.includes(TIPOS.CONVENIO))

        const convenios = filterconvenios.map((item) => {
            // Copiar el objeto existente y agregar el nuevo campo
            return {
              ...item, // Copiar el objeto existente
              filter: TIPOS.CONVENIOS
            };
        });

        /* FILTRADOE DE CONVENIOS PARA GACETAS DE TIPO PASANTIA */
        const filterpasantias = gacetas.filter((e)=> e.gaceta_titulo.includes(TIPOS.PASANTIA))

        const pasantias = filterpasantias.map((item) => {
            // Copiar el objeto existente y agregar el nuevo campo
            return {
              ...item, // Copiar el objeto existente
              filter: TIPOS.PASANTIAS
            };
        });

        /* FILTRADOE DE CONVENIOS PARA GACETAS DE TIPO TRABAJO DIRIGIDO */
        const filtertrabajos = gacetas.filter((e)=> e.gaceta_titulo.includes(TIPOS.TRABAJO_DIRIGIDO))

        const trabajos = filtertrabajos.map((item) => {
            // Copiar el objeto existente y agregar el nuevo campo
            return {
              ...item, // Copiar el objeto existente
              filter: TIPOS.TRABAJOS
            };
        });

        /* CONCATENACION DE CONVENIOS - PASANTIAS - TRABAJOS DIRIGIDOS */
        const items = convenios.concat(pasantias, trabajos);                

        return (
            <>
                <Header4 />
                {items && <div className="page-content">
                    <Banner title={category} pagename={category} description={txt_content_banner_institucion} bgimage={images.BgThree}/>
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        <div className="container">
                            {/* Filter Nav START */}
                            <div className="filter-wrap p-b30 text-center">
                                <ul className="filter-navigation masonry-filter clearfix">
                                    <li ><NavLink to={"#"} className="btn from-top" data-filter="*" data-hover="All">Todos</NavLink></li>
                                    {filters.map((item, index) => (
                                        <li key={index} className={`${item.filter === `.`+category ? `active`  : ""}`}><NavLink to={"#"} className={`btn from-top`} data-filter={item.filter} >{item.label}</NavLink></li>
                                    ))}
                                </ul>
                            </div>
                            {/* Filter Nav END */}
                            {/* GALLERY CONTENT START */}
                            <ul className="masonry-outer mfp-gallery work-grid row clearfix list-unstyled">
                                {items.map((item, index) => (
                                    <div key={index} className={`${item.filter} masonry-item  col-lg-4 col-md-6 col-sm-12 m-b30`} style={{ boxShadow: item.filter === category  ? '0px 0px 20px rgba(0,0,0,.5)' : 'none' }}>
                                        <div className="sx-box image-hover-block">
                                            <div className="sx-thum-bx" style={{ height: '500px', width: '100%' }}>
                                                <Document className="pdf" file={`${process.env.REACT_APP_ROOT_API}/Gaceta/${item.gaceta_documento}`}> 
                                                    <Page pageNumber={1} height={500}/> 
                                                </Document>
                                            </div>
                                            <div className="sx-info p-t20 text-white">
                                                <a href={`${process.env.REACT_APP_ROOT_API}/Gaceta/${item.gaceta_documento}`} target='_blank' rel="noopener noreferrer" style={{textAlign: 'center', display:'block', marginBottom: '3em'}}><i className="fa fa-download" style={{fontSize : '6em'}} /></a>
                                                <h4 className="sx-tilte"><a href={`${process.env.REACT_APP_ROOT_API}/Gaceta/${item.gaceta_documento}`} target='_blank' rel="noopener noreferrer">{item.gaceta_titulo}</a></h4>
                                                <p className="m-b0">{institucion_iniciales} - {institucion_nombre}</p>                                                
                                            </div>                                            
                                        </div>
                                    </div>
                                ))}
                            </ul>                                                        
                        </div>
                    </div>
                </div>}                
                <Footer />
            </>
        );
    }
};

/* =============================================================================
/
/    WEB DEVELOPER => CRISTHIAN VILLCA MAMANI
/    LINKEDIN => https://www.linkedin.com/in/cristhian-villca-mamani-06933b251/
/
================================================================================ */ 
export default ProjectGrid3;