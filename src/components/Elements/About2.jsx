import React, { useEffect } from 'react';
import { Document, Page, pdfjs } from "react-pdf";

import { getGacetas, getInstitucion, getStaticDataAcademia } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';

var bgimg1 = require('./../../images/background/bg5.jpg');

const About2 = ({tipo}) => {

    useEffect(() => { 
        
    pdfjs.GlobalWorkerOptions.workerSrc =`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;});

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

    /* OBTENCION DE INFORMACION DEL STORE STATICO */
    const { isLoading: loading_static_data, data: staticData } = useQuery({
        queryKey: ['staticDataAcademia'],
        queryFn: getStaticDataAcademia,
    });

    if(!loading_institucion && !loading_gacetas && !loading_static_data && tipo !== 'REGLAMENTO'){

        const {
            txt_content_btn,
            txt_content_calendario,
            txt_content_horario,
            txt_content_plan_de_estudio
        } = staticData            
                
        var item = null
        var content = ''

        if(tipo === "CALENDARIO"){
            /* OBTENEMOS EL CALENDARIO DE LA INSTITUCION */            
            item = gacetas.find((e) => e.gaceta_titulo.includes('CALENDARIO'))  
            content = txt_content_calendario                       
        }
        if(tipo === "HORARIO"){
            /* OBTENEMOS EL CALENDARIO DE LA INSTITUCION */            
            item = gacetas.find((e) => e.gaceta_titulo.includes('HORARIO'))                         
            content = txt_content_horario
        }
        if(tipo === "PLANESTUDIO"){
            /* OBTENEMOS EL CALENDARIO DE LA INSTITUCION */            
            item = gacetas.find((e) => e.gaceta_titulo.includes('PLAN'))                         
            content = txt_content_plan_de_estudio
        }        

        return (
            <>
                <div className="section-full mobile-page-padding p-t80 p-b80 bg-gray">
                        <div className="container">
                            <div className="section-content">
                                <div className="row">
                                    <div className="col-xl-5 col-lg-5 col-md-12 ">
                                    <Document file={`${process.env.REACT_APP_ROOT_API}/Gaceta/${item.gaceta_documento}`}>
                                        <Page pageNumber={1} width={400}/>
                                    </Document>
                                    </div>
                                    <div className="col-xl-7 col-lg-7 col-md-12">
                                        <div className="about-home-2">
                                            <h3 className="m-t0 sx-tilte">{item.gaceta_titulo}</h3>
                                            <p>{content}</p>
                                            <div className="text-left">
                                            <a href={`${process.env.REACT_APP_ROOT_API}/Gaceta/${item.gaceta_documento}`} target='_blank' className="site-button-link">{txt_content_btn}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }

    if(!loading_institucion && !loading_static_data && tipo === 'REGLAMENTO'){
        
        /* DATOS OBTENIDOS DESDE LA STORE STATICA*/
        const {
            institucion_sobre_ins
        } = institucion

        const {          
            txt_content_reglamento,
        } = staticData   
        return (
            <>
                <div className="section-full mobile-page-padding p-t80 p-b80 bg-gray">
                        <div className="container">
                            <div className="section-content">
                                <div className="row">
                                <div className="col-xl-5 col-lg-5 col-md-12 ">
                                        <div className="home-2-about bg-bottom-left bg-no-repeat bg-cover" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-7 col-md-12">
                                        <div className="about-home-2">
                                            <h3 className="m-t0 sx-tilte">{txt_content_reglamento}</h3>
                                            <div dangerouslySetInnerHTML={{ __html: institucion_sobre_ins }}></div>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
    return null
};

export default About2;