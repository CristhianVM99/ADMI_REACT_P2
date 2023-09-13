import React from 'react';
import { NavLink } from 'react-router-dom';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import { getInstitucion, getStaticDataIndex } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';



var bgimg1 = require("./../../images/background/cross-line2.png");

const Team2 = () =>{

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

        const teamMembers = [
            {
                image: require('./../../images/our-team5/1.jpg'),
                membername: 'Johnny Jackman',
                position: 'Architect'
            },
            {
                image: require('./../../images/our-team5/2.jpg'),
                membername: 'Daniel Rickman',
                position: 'Architect'
            },
            {
                image: require('./../../images/our-team5/3.jpg'),
                membername: 'Mark Norwich',
                position: 'Finances'
            },
        ]

        /* INFORMACION DE LA INSTITUCION */
        const {
          autoridad
        } = institucion;

        /* INFORMACION ESTATICA */
        const {
          txt_content_autoridades,
        }= staticData

        return (
            <>
                <div className="page-content">
                    {/* OUR EXPERTS SECTION START */}
                    {/* TITLE START */}
                    <div className="section-head">
                        <div className="sx-separator-outer separator-center">
                            <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                <h3 className="sep-line-one">{txt_content_autoridades}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="section-full p-t80 p-b50 mobile-page-padding">
                        <div className="container">
                            {/* IMAGE CAROUSEL START */}
                            <div className="section-content">
                                <div className="row">
                                    {autoridad.map((item, index) => (
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 m-b30" key={index}>
                                            <div className="our-team-3">
                                                <div className="our-team-info" >
                                                    <img style={{height: '400px', width: '100%', objectFit: 'cover',objectPosition: 'top'}} src={`${process.env.REACT_APP_ROOT_API}/InstitucionUpea/Autoridad/${item.foto_autoridad}`} alt="" />
                                                    <div className="our-team-content">
                                                        <h4 className="sx-team-name" style={{color: 'var(--color-primario)'}}>{item.nombre_autoridad}</h4>
                                                        <span className="sx-team-position text-white">{item.cargo_autoridad}</span>
                                                        <p>
                                                        <a href={item.facebook_autoridad} target="_blank" rel="noopener noreferrer">
                                                          <i className="fa fa-facebook" />
                                                        </a>
                                                        <a href={item.twiter_autoridad} target="_blank" rel="noopener noreferrer">
                                                          {" "}
                                                          <i className="fa fa-twitter" />
                                                        </a>
                                                        <a href={item.celular_autoridad} target="_blank" rel="noopener noreferrer">
                                                          {" "}
                                                          <i className="fa fa-whatsapp" />
                                                        </a>  
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* OUR EXPERTS SECTION END */}
                </div>                
            </>
        );
    }
};

export default Team2;