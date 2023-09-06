import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { getInstitucion, getStaticDataIndex } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';

const About1 = () => {    

    const { isLoading: loading_institucion, data: institucion } = useQuery({
        queryKey: ['institucion'],
        queryFn: getInstitucion,
    })
    const { isLoading: loading_static_data, data: staticData } = useQuery({
        queryKey: ['staticDataIndex'],
        queryFn: getStaticDataIndex,
    });

    const images = [
        require('./../../images/about-slider/1.jpg'),
        require('./../../images/about-slider/2.jpg'),
        require('./../../images/about-slider/3.jpg'),
        require('./../../images/about-slider/4.jpg'),
        require('./../../images/about-slider/5.jpg')
    ]
    
    var bgimg1 = require('./../../images/background/bg-4.png');
    var bgimg2 = require('./../../images/background/cross-line2.png');

        const options = {
            loop: true,
            autoplay: true,
            margin: 30,
            nav: true,
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                991: {
                    items: 1
                }
            }
        };
        if(!loading_institucion && !loading_static_data){
            const {
                txt_content_sobre_la_institucion,
                txt_content_texto,
                txt_content_btn,
            } = staticData

            const {
                institucion_nombre,
                institucion_sobre_ins
            } = institucion

            return (
                <>
                    <div className="section-full mobile-page-padding p-t80 p-b80 bg-white bg-no-repeat bg-bottom-left" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className="sx-separator-outer separator-left">
                                    <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg2 + ')' }}>
                                        <h3 className="sep-line-one">{txt_content_sobre_la_institucion}</h3>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            <div className="section-content">
                                <div className="row">
                                    <div className="col-lg-5 col-md-12 col-sm-12">
                                        <div className="about-home-left">
                                            <h3 className="m-t0 sx-tilte">{institucion_nombre}</h3>
                                            <p>{txt_content_texto}</p>
                                            <div className="text-left">
                                                <NavLink to="/about-1" className="site-button-secondry btn-half"><span>{txt_content_btn}</span></NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-12 col-sm-12">
                                        <div className="about-home-right">
                                            <OwlCarousel className="owl-carousel about-home number-slider owl-btn-vertical-center" {...options}>
                                                {images.map((item, index) => (
                                                    <div className="item" key={index}>
                                                        <div className="sx-img-effect zoom-slow">
                                                        <NavLink to={"/about-1"}><img src={item} alt="" /></NavLink>
                                                        </div>
                                                    </div>
    
                                                ))}
    
                                            </OwlCarousel>
                                            <div className="about-home-before">
                                                <img src={require('./../../images/about-slider/1-ab.jpg')} alt="" />
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
        return null
};

export default About1;