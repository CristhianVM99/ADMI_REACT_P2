import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { getInstitucion, getStaticDataIndex } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';

const Testimonials2 = ({separatoralignment}) => {

    /* OBTENCION DE INFORMACION DEL STORE API */
    const { isLoading: loading_institucion, data: institucion } = useQuery({
        queryKey: ['institucion'],
        queryFn: getInstitucion,
    })

    /* OBTENCION DE INFORMACION DEL STORE STATICO */
    const { isLoading: loading_static_data, data: staticData } = useQuery({
        queryKey: ['staticDataIndex'],
        queryFn: getStaticDataIndex,
    }); 

    if(!loading_institucion && !loading_static_data){

        const testimonials = [
            {
                image: require('./../../images/testimonials/pic1.jpg'),
                reviewername: 'Rosalina D. William',
                position: 'Architect',
                review: 'Great theme, just what we were looking for. Easy to install, easy to navigate. Well documented. Really enjoyed the support.'
            },
            {
                image: require('./../../images/testimonials/pic2.jpg'),
                reviewername: 'Mitchal Jhon',
                position: 'Architect',
                review: 'Amazing fast and reliable customer support! The team of willing to go mile for customer service! Thanks!'
            },
            {
                image: require('./../../images/testimonials/pic3.jpg'),
                reviewername: 'Barney Smith',
                position: 'Interior designer',
                review: 'Great theme, just what we were looking for. Easy to install, easy to navigate. Well documented. Really enjoyed the support.'
            },
            {
                image: require('./../../images/testimonials/pic4.jpg'),
                reviewername: 'Rosalina D. William',
                position: 'Architect',
                review: 'Amazing fast and reliable customer support! The team of willing to go mile for customer service! Thanks!'
            }
        ]
        
        var bgimg1 = require('./../../images/background/bg6.jpg');
        var bgimg2 = require('./../../images/background/cross-line2.png');

        const options = {
            loop: true,
            autoplay: false,
            margin: 30,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 2
                },
                991: {
                    items: 3
                }
            }
        };

          /* INFORMACION DE LA INSTITUCION */
        const {
          autoridad,
          institucion_nombre
        } = institucion;
    
        /* INFORMACION ESTATICA */
        const {
          txt_content_autoridades,
        }= staticData


        return (
            <>
                <div className="section-full mobile-page-padding bg-repeat p-t80 p-b80" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                    <div className="section-content">
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className={`${separatoralignment} sx-separator-outer`}>
                                    <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg2 + ')' }}>
                                        <h3 className="sep-line-one">{txt_content_autoridades}</h3>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            {/* TESTIMONIAL START */}
                            <OwlCarousel className="owl-carousel testimonial-home-two owl-btn-vertical-center" {...options}>
                                {autoridad.map((item, index) => (
                                    <div className="item" key={index}>
                                        <div className="testimonial-1 hover-animation-1 bg-gray">
                                            <div className="testimonial-detail clearfix">
                                                <div className="testimonial-pic  scale-in-center" style={{height: '400px', width: '100%', objectFit: 'cover'}}><img style={{height: '400px', width: '100%', objectFit: 'cover'}} src={`${process.env.REACT_APP_ROOT_API}/InstitucionUpea/Autoridad/${item.foto_autoridad}`} alt="" width={100} height={100} /></div>
                                                <span className="testimonial-position">{institucion_nombre}</span>
                                                <h4 className="testimonial-name">{item.nombre_autoridad}</h4>
                                                <span className="fa fa-quote-right" />
                                            </div>
                                            <div className="testimonial-text">
                                                <p>{item.cargo_autoridad}</p>
                                                <p>
                                                    <a href={item.facebook_autoridad} target="_blank" rel="noopener noreferrer">
                                                      <i className="fa fa-facebook" style={{fontSize: '2em',margin: '5px 10px'}}/>
                                                    </a>
                                                    <a href={item.twiter_autoridad} target="_blank" rel="noopener noreferrer">
                                                      {" "}
                                                      <i className="fa fa-twitter" style={{fontSize: '2em',margin: '5px 10px'}}/>
                                                    </a>
                                                    <a href={item.celular_autoridad} target="_blank" rel="noopener noreferrer">
                                                      {" "}
                                                      <i className="fa fa-whatsapp" style={{fontSize: '2em',margin: '5px 10px'}}/>
                                                    </a> 
                                                </p>
                                            </div>
                                        </div>
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

export default Testimonials2;