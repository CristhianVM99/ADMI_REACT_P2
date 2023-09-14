import React, { useEffect } from 'react';
import { getInstitucion, getStaticImages } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';
import { Document, Page, pdfjs } from 'react-pdf';

const ContactUs1 = () =>{

    /* OBTENCION DE INFORMACION DEL STORE API */
    const { isLoading: loading_institucion, data: institucion } = useQuery({
        queryKey: ['institucion'],
        queryFn: getInstitucion,
    })

    /* OBTENCION DE INFORMACION DEL STORE IMAGES */
    const { isLoading: loading_images, data: images } = useQuery({
        queryKey: ['getStaticImages'],
        queryFn: getStaticImages,
    });

    useEffect(()=>{
        pdfjs.GlobalWorkerOptions.workerSrc =`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    })

    var bgimg2 = require('./../../images/background/cross-line2.png');
    var bgimg3 = require('./../../images/background/bg-map.png');

    if( !loading_institucion && !loading_images){

        /* DATOS DE LA INSTITUCION*/
        const {
            institucion_iniciales,
            institucion_nombre,
            portada,
            institucion_organigrama,
            institucion_logo
        } = institucion

        const indiceAleatorio = Math.floor(Math.random() * portada.length);
        const imagenSeleccionada = portada[indiceAleatorio].portada_imagen;
        const img = `${process.env.REACT_APP_ROOT_API}/InstitucionUpea/Portada/${imagenSeleccionada}`;

        const extension = institucion_organigrama.split('.').pop();

        console.log("pdf",`${process.env.REACT_APP_ROOT_API}/InstitucionUpea/${institucion_organigrama}`);

        return (
            <>
                <div className="section-full p-tb80 mobile-page-padding bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: 'url(' + img ?? images.BgOne + ')', backgroundSize: 'cover' }}>
                        <div className="section-content">
                            <div className="container get-in-touch-form">
                                {/* TITLE START */}
                                <div className="section-head">
                                    <div className="sx-separator-outer separator-left">
                                        <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg2 + ')' }}>
                                            <h3 className="sep-line-one">Plan de Estudio</h3>
                                        </div>
                                    </div>
                                </div>
                                {/* TITLE END */}
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="contact-home1-left contact-home1-left-v2 shadow-lg bg-white p-a30" style={{ backgroundImage: 'url(' + bgimg3 + ')' }}>
                                            <form className="cons-contact-form2 form-transparent" method="post" action="form-handler.php">
                                                <div>
                                                {extension === "pdf" ?
                                                <Document className="pdf" file={`${process.env.REACT_APP_ROOT_API}/InstitucionUpea/${institucion_organigrama}`} > 
                                                <Page pageNumber={1} height={600} /> 
                                                </Document> : 
                                                <img src={`${process.env.REACT_APP_ROOT_API}/InstitucionUpea/${institucion_organigrama}`} alt="" style={{ height: '400px'}}/>}                                                   
                                                </div>                                                
                                                <div className="text-left p-t10">
                                                    <p>{institucion_nombre} | {institucion_iniciales}</p>                                                    
                                                    <a className='site-button-secondry btn-half' href={`${process.env.REACT_APP_ROOT_API}/InstitucionUpea/${institucion_organigrama}`} target='_blank' rel="noopener noreferrer">
                                                        <span> Descargar </span>
                                                    </a>                                                                                                        
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-12 col-sm-12 container_animation_logo'>
                                        <img src={`${process.env.REACT_APP_ROOT_API}/InstitucionUpea/${institucion_logo}`} alt="" className="rotate_animation_logo"/>    
                                    </div>                                    
                                </div>                                
                            </div>
                        </div>
                    </div>
            </>
        );
    }
};

export default ContactUs1;