import React from 'react';
import { NavLink } from 'react-router-dom';
import { getLinksInstExtAll, getStaticDataIndex } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';

const ClientsLogo1 = () =>{

    const { isLoading: loading_links_externos, data: links } = useQuery({
        queryKey: ['links_externos'],
        queryFn: getLinksInstExtAll,
    })

    const TIPO_LINK = {
        KARDEX : 'KARDEX'
    }


    /* OBTENCION DE INFORMACION DEL STORE STATICO */
    const { isLoading: loading_static_data, data: staticData } = useQuery({
        queryKey: ['staticDataIndex'],
        queryFn: getStaticDataIndex,
    });
    
    var bgimg1 = require('./../../images/background/bg-12.jpg');
    var bgimg2 = require('./../../images/background/cross-line2.png');

    if(!loading_links_externos && !loading_static_data){
        const {
            txt_content_links_externos,
            txt_content_links_btn,
        } = staticData

        const links_filter = links.filter((e)=>e.ei_tipo===TIPO_LINK.KARDEX)

        return (
            <>
                <div className="section-full  mobile-page-padding bg-gray  p-t80 p-b10 bg-repeat" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="sx-separator-outer separator-left">
                                <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg2 + ')' }}>
                                    <h3 className="sep-line-one">{txt_content_links_externos}</h3>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content">
                            <div className="client-grid m-b40">
                                <div className="row justify-content-center">
                                    {links_filter.map((item, index) => (
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 m-b30" key={index}>
                                            <NavLink to={"/about-1"} className="client-logo-pic">
                                                <img src={`${process.env.REACT_APP_ROOT_API}/InstitucionUpea/LinksExternos/${item.ei_imagen}`} alt=""/>
                                                <div>
                                                    <span>{txt_content_links_btn}</span>
                                                </div>
                                            </NavLink>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hilite-title text-left p-l50 text-uppercase">
                        <strong>Links</strong>
                    </div>
                </div>
            </>
        );
    }    
    return null
    }

export default ClientsLogo1;