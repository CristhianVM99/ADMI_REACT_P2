import React, { useEffect } from 'react';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import GoogleMapReact from 'google-map-react';
import { getInstitucion, getStaticDataContact, getStaticImages } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';

const ContactUs = () => {


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
        queryKey: ['staticDataContact'],
        queryFn: getStaticDataContact,
    });

    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    const defaultProps = {
        center: {
          lat: 34.073280,
          lng: -118.251410
        },
        zoom: 12
    }

    useEffect(()=>{
        // Establecer colores si los datos están disponibles
        if (!loading_institucion) {
            const { colorinstitucion , institucion_logo, institucion_iniciales, institucion_nombre } = institucion;
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

    if(!loading_institucion && !loading_static_data && !loading_images){
        
        const {            
            institucion_celular1,
            institucion_celular2,
            institucion_telefono1,
            institucion_telefono2,
            institucion_correo1,
            institucion_correo2,
            institucion_direccion,    
            institucion_api_google_map,
            institucion_iniciales,     
            portada
        } = institucion

        const {
            txt_content_contact,
            txt_content_banner_contact,            
        } = staticData

        const indiceAleatorio = Math.floor(Math.random() * portada.length);
        const imagenSeleccionada = portada[indiceAleatorio].portada_imagen;
        const img = `${process.env.REACT_APP_ROOT_API}/InstitucionUpea/Portada/${imagenSeleccionada}`;

        const indiceAleatorio2 = Math.floor(Math.random() * portada.length);
        const imagenSeleccionada2 = portada[indiceAleatorio2].portada_imagen;
        const img2 = `${process.env.REACT_APP_ROOT_API}/InstitucionUpea/Portada/${imagenSeleccionada2}`;        

        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title={txt_content_contact} pagename={txt_content_contact} description={txt_content_banner_contact} bgimage={img ?? images.BgFour}/>
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        {/* LOCATION BLOCK*/}
                        <div className="container">
                            {/* GOOGLE MAP & CONTACT FORM */}
                            <div className="section-content">
                                {/* CONTACT FORM*/}
                                <div className="row">
                                    <div className="col-lg-8 col-md-12 col-sm-12">
                                        <form className="contact-form cons-contact-form bg-gray p-a30" method="post" action="#">
                                            <div className="contact-one">
                                                {/* TITLE START */}
                                                <div className="section-head">
                                                    <div className="sx-separator-outer separator-left">
                                                        <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(images/background/cross-line2.png)' }}>
                                                            <h3 className="sep-line-one">{institucion_iniciales}</h3>
                                                        </div>
                                                    </div>
                                                </div>   
                                                <img src={ img2 ?? images.BgOne} alt=""/>                                            
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12">
                                        <div className="contact-info block-shadow bg-white bg-center p-a40" style={{ backgroundImage: 'url(images/background/bg-map.png)' }}>
                                            <div>
                                                {/* TITLE START */}
                                                <div className="section-head">
                                                    <div className="sx-separator-outer separator-left">
                                                        <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(images/background/cross-line2.png)' }}>
                                                            <h3 className="sep-line-one">Informacion de la Institucion.</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* TITLE END */}
                                                <div className="sx-icon-box-wraper left p-b30">
                                                    <div className="icon-xs"><i className="fa fa-phone" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0">Celulares y Telefonos </h5>
                                                        <p>Cel : (+591) { institucion_celular1 }</p>
                                                        <p>Cel : (+591) { institucion_celular2 }</p>
                                                        <p>Tel : { institucion_telefono1 }</p>
                                                        <p>Tel : { institucion_telefono2 }</p>
                                                    </div>
                                                </div>
                                                <div className="sx-icon-box-wraper left p-b30">
                                                    <div className="icon-xs"><i className="fa fa-envelope" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0">Correos</h5>
                                                        <p>{ institucion_correo1 }</p>
                                                        <p>{ institucion_correo2 }</p>
                                                    </div>
                                                </div>                                                
                                                <div className="sx-icon-box-wraper left">
                                                    <div className="icon-xs"><i className="fa fa-map-marker" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0">Direccion</h5>
                                                        <p>{ institucion_direccion }</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gmap-outline">
                    <iframe
                        src={institucion_api_google_map}
                        width="100%"
                        height="400px"
                        loading="lazy"
                    ></iframe>                         
                    </div>
                    {/* SECTION CONTENT END */}
                </div>
                <Footer />
            </>
        ); 
    }
};

export default ContactUs;