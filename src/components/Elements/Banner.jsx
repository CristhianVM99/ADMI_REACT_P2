import React from 'react';
import { NavLink } from 'react-router-dom';

const Banner = ({title,description,pagename,bgimage})=> {
    return (
        <>
            <div className="sx-bnr-inr overlay-wraper bg-parallax bg-top-center" data-stellar-background-ratio="0.5" style={{ backgroundImage: 'url(' + bgimage + ')' }}>
                <div className="overlay-main bg-black opacity-07" />
                <div className="container">
                    <div className="sx-bnr-inr-entry">
                        <div className="banner-title-outer">
                            <div className="banner-title-name">
                                <h2 className="m-tb0">{title}</h2>                                <p>
                                    {description}
                                </p>
                            </div>
                        </div>
                        {/* BREADCRUMB ROW */}
                        <div>
                            <ul className="sx-breadcrumb breadcrumb-style-2">
                            <li><NavLink to={"/"}>INICIO</NavLink></li>
                                <li>{pagename}</li>
                            </ul>
                        </div>
                        {/* BREADCRUMB ROW END */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;