import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home1 from './Pages/Home1';
import Home2 from './Pages/Home2';
import Home3 from './Pages/Home3';
import Home4 from './Pages/Home4';
import Home5 from './Pages/Home5';
import Home6 from './Pages/Home6';

import About1 from './Pages/About1';
import About2 from './Pages/About2';

import Services1 from './Pages/Services1';
import Services2 from './Pages/Services2';
import ServiceDetail from './Pages/ServiceDetail';

import Team1 from './Pages/Team1';
import Team2 from './Pages/Team2';
import TeamDetail from './Pages/TeamDetail';

import OurHistory from './Pages/OurHistory';
import FontIcons from './Pages/FontIcons';
import Error from './Pages/Error';

import ProjectGrid3 from './Pages/ProjectGrid3';
import ProjectGridNoGap3 from './Pages/ProjectGridNoGap3';
import ProjectGrid4 from './Pages/ProjectGrid4';
import ProjectGridNoGap4 from './Pages/ProjectGridNoGap4';
import ProjectGrid5 from './Pages/ProjectGrid5';
import ProjectGridNoGap5 from './Pages/ProjectGridNoGap5';

import ProjectMasonary3 from './Pages/ProjectMasonary3';
import ProjectMasonaryNoGap3 from './Pages/ProjectMasonaryNoGap3';
import ProjectMasonary4 from './Pages/ProjectMasonary4';
import ProjectMasonaryNoGap4 from './Pages/ProjectMasonaryNoGap4';
import ProjectMasonary5 from './Pages/ProjectMasonary5';
import ProjectMasonaryNoGap5 from './Pages/ProjectMasonaryNoGap5';

import ProjectCorousel from './Pages/ProjectCorousel';
import ProjectDetail1 from './Pages/ProjectDetail1';
import ProjectDetail2 from './Pages/ProjectDetail2';

import BlogGrid from './Pages/BlogGrid';
import BlogListing from './Pages/BlogListing';
import BlogMasonary from './Pages/BlogMasonary';
import BlogSingle from './Pages/BlogSingle';
import PostRightSidebar from './Pages/PostRightSidebar';

import ShopGrid from './Pages/ShopGrid';
import ShopList from './Pages/ShopList';
import ShopDetail from './Pages/ShopDetail';
import ShopAccount from './Pages/ShopAccount';
import ShopCart from './Pages/ShopCart';
import ShopCheckout from './Pages/ShopCheckout';

import Faq from './Pages/Faq';
import ContactUs from './Pages/ContactUs';
import ScrollToTop from './Common/ScrollToTop';

const Components = () => {
    return (
        <BrowserRouter basename="/">
            <ScrollToTop />
            <div className="page-wraper">
                    <Routes>
                        <Route path='/' element={<Home1/>} />                        

                        <Route path='/academia' element={<About1/>} />
                        <Route path='/sobreNosotros' element={<About2/>} />
                        <Route path='/categoria' element={<Services1/>} />                                                                        
                        <Route path='/error-404' element={<Error/>} />
                        <Route path='/institucion' element={<ProjectGrid3/>} />                                                                        
                        <Route path='/recursos' element={<BlogGrid/>} />                        
                        <Route path='/detalle' element={<PostRightSidebar/>} />                        
                        <Route path='/contacto' element={<ContactUs/>} />
                        
                        <Route element={<Error/>} />
                    </Routes>
            </div>
        </BrowserRouter>
    );
};

/* =============================================================================
/
/    WEB DEVELOPER => CRISTHIAN VILLCA MAMANI
/    LINKEDIN => https://www.linkedin.com/in/cristhian-villca-mamani-06933b251/
/
================================================================================ */ 

export default Components;