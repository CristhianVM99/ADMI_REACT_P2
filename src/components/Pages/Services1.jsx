import React, { useEffect } from 'react';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import WhatWeDo6 from './../Elements/WhatWeDo6';
import Services6 from './../Elements/Services6';
import Services7 from './../Elements/Services7';
import ClientsLogo2 from './../Elements/ClientsLogo2';
import { getInstitucion, getStaticDataVerMas, getStaticImages } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';

const Service1 = () => {

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

    /* OBTENCION DE INFORMACION DEL STORE STATICO */
    const { isLoading: loading_static_data, data: staticData } = useQuery({
        queryKey: ['staticDataVerMas'],
        queryFn: getStaticDataVerMas,
    });

    useEffect(()=>{
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

    if(!loading_images && !loading_static_data && !loading_institucion){

        /* DATOS ESTATICOS */
        const {
            txt_content_banner_ver_mas,
        } = staticData  

        /* DATOS DE LA INSTITUCION */
        const {                                  
            portada
        } = institucion

        const indiceAleatorio = Math.floor(Math.random() * portada.length);
        const imagenSeleccionada = portada[indiceAleatorio].portada_imagen;
        const img = `${process.env.REACT_APP_ROOT_API}/InstitucionUpea/Portada/${imagenSeleccionada}`;

        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title="CATEGORIA" pagename="CATEGORIA" description={txt_content_banner_ver_mas} bgimage={ img ?? images.BgTwo}/>
                    {/* <WhatWeDo6 /> */}
                    {/* <Services6 /> */}
                    <Services7 />
                    {/* <ClientsLogo2 bgcolor="bg-gray" /> */}
                </div>
                <Footer />
            </>
        );
    }
};

export default Service1;