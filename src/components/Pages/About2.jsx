import React, { useEffect } from 'react';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import About3 from './../Elements/About3';
import WhatWeDo3 from './../Elements/WhatWeDo3';
import Statistics1 from './../Elements/Statistics1';
import Team1 from './../Elements/Team1';
import ClientsLogo1 from './../Elements/ClientsLogo1';
import { getStaticDataAbout } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';

var bnrimg = require('./../../images/banner/6.jpg');

const Home4 = () => {

    /* OBTENCION DE INFORMACION DEL STORE STATICO */
    const { isLoading: loading_static_data, data: staticData } = useQuery({
        queryKey: ['staticDataAbout'],
        queryFn: getStaticDataAbout,
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
    })    
    if(!loading_static_data){
        
        const {
            txt_content_about,
            txt_content_banner_about,            
        } = staticData

        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title={txt_content_about} pagename={txt_content_about} description={txt_content_banner_about} bgimage={bnrimg}/>
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