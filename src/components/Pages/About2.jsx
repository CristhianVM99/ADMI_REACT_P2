import React, { useEffect } from 'react';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import About3 from './../Elements/About3';
import WhatWeDo3 from './../Elements/WhatWeDo3';
import Statistics1 from './../Elements/Statistics1';
import Team1 from './../Elements/Team1';
import ClientsLogo1 from './../Elements/ClientsLogo1';
import { getInstitucion, getStaticDataAbout, getStaticImages } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';

var bnrimg = require('./../../images/banner/6.jpg');

const Home4 = () => {

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

    /* OBTENCION DE INFORMACION DEL STORE IMAGES */
    const { isLoading: loading_images, data: images } = useQuery({
        queryKey: ['getStaticImages'],
        queryFn: getStaticImages,
    });

    useEffect(()=>{
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

    if(!loading_static_data&& !loading_images && !loading_institucion){
        

        /* DATOS DE LA INSTITUCION */
        const {            
            portada
        } = institucion

        /* DATOS ESTATICOS */
        const {
            txt_content_about,
            txt_content_banner_about,            
        } = staticData

        const indiceAleatorio = Math.floor(Math.random() * portada.length);
        const imagenSeleccionada = portada[indiceAleatorio].portada_imagen;
        const img = `${process.env.REACT_APP_ROOT_API}/InstitucionUpea/Portada/${imagenSeleccionada}`;

        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title={txt_content_about} pagename={txt_content_about} description={txt_content_banner_about} bgimage={img ?? images.BgThree}/>
                    <About3 bgcolor="bg-gray" />
                    {/* <WhatWeDo3 />
                    <Statistics1 /> */}
                    <Team1 />
                    <ClientsLogo1 />
                </div>

                <Footer />
            </>
        );
    }
    return null
};

export default Home4;