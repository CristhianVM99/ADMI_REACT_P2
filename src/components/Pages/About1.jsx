import React, { useEffect } from 'react';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import About2 from './../Elements/About2';
import WhatWeDo6 from './../Elements/WhatWeDo6';
import Achievements1 from './../Elements/Achievements1';
import Team2 from './../Elements/Team2';
import Testimonials2 from './../Elements/Testimonials2';
import { getStaticDataAcademia, getStaticImages } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';

const About1 = () => {

    /* OBTENCION DE INFORMACION DEL STORE IMAGES */
    const { isLoading: loading_images, data: images } = useQuery({
        queryKey: ['getStaticImages'],
        queryFn: getStaticImages,
    });

    /* OBTENCION DE INFORMACION DEL STORE STATICO */
    const { isLoading: loading_static_data, data: staticData } = useQuery({
        queryKey: ['staticDataAcademia'],
        queryFn: getStaticDataAcademia,
    });

    /* OBTENEMOS EL TIPO DE CATEGORIA */
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    let tipo = searchParams.get('tipo').toUpperCase();
    var category = ''

    if(tipo === 'PLANESTUDIO'){
        category = 'PLAN DE ESTUDIO'
    }else{
        category = tipo
    }

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
    })

    if(!loading_static_data && !loading_images){

        /* DATOS ESTATICOS */
        const {
            txt_content_banner_academia
        } = staticData        

        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title={category} pagename={category} description={txt_content_banner_academia} bgimage={images.BgTwo}/>
                    <About2  tipo={tipo}/>
                    {/* <WhatWeDo6 />
                    <Achievements1 />
                    <Team2 />
                    <Testimonials2 separatoralignment="separator-center" /> */}
                </div>
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
export default About1;