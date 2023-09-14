import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { getLinksInstExtAll, getStaticDataIndex } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';
import { TIPOS } from '../../types/types';

const logos = [
    { image: require('./../../images/client-logo/1.png') },
    { image: require('./../../images/client-logo/2.png') },
    { image: require('./../../images/client-logo/3.png') },
    { image: require('./../../images/client-logo/4.png') },
    { image: require('./../../images/client-logo/5.png') },
    { image: require('./../../images/client-logo/6.png') }
]

const ClientsLogo2 = () =>{

    /* OBTENCION DE INFORMACON DE LINKS EXTERNOS */
    const { isLoading: loading_links_externos, data: links } = useQuery({
        queryKey: ['links_externos'],
        queryFn: getLinksInstExtAll,
    })    

    /* OBTENCION DE INFORMACION DEL STORE STATICO */
    const { isLoading: loading_static_data, data: staticData } = useQuery({
        queryKey: ['staticDataIndex'],
        queryFn: getStaticDataIndex,
    });

    if(!loading_links_externos && !loading_static_data){
        const options = {
            loop: true,
            margin: 30,
            autoplay: true,
            nav: false,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                767: {
                    items: 4
                },
                1000: {
                    items: 6
                }
            }
        };

        const {
            txt_content_links_externos,
            txt_content_links_btn,
        } = staticData

        const links_filter = links.filter((e)=>e.ei_tipo===TIPOS.KARDEX)

        return (
            <>
                <div className={`bg-white section-full`}>
                    <div className="container">
                        <div className="section-content p-tb10 owl-btn-vertical-center">
                            <OwlCarousel className="owl-carousel home-client-carousel-2" {...options}>
                                {links_filter.map((item, index) => (
                                    <div className="item" key={index}>
                                        <a href={item.ei_link} target='_blank' rel="noopener noreferrer" className="client-logo-pic">
                                            <img src={`${process.env.REACT_APP_ROOT_API}/InstitucionUpea/LinksExternos/${item.ei_imagen}`} alt="" style={{height: '100px', objectFit: 'contain'}}/>
                                            <div>
                                                <span>{txt_content_links_btn}</span>
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default ClientsLogo2;