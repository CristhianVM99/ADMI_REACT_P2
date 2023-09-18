import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home1 from './Pages/Home1';
import About1 from './Pages/About1';
import About2 from './Pages/About2';
import Services1 from './Pages/Services1';
import Error from './Pages/Error';
import ProjectGrid3 from './Pages/ProjectGrid3';
import BlogGrid from './Pages/BlogGrid';
import PostRightSidebar from './Pages/PostRightSidebar';
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