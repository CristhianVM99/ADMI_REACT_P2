import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getInstitucion, getStaticDataIndex } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';

/* COMPONENTE PARA EL BANNER DE LA PAGINA PRINCIPAL */
const Slider1 = () => {

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

    /* CARGA DE CONFIGURACIONES */
    useEffect(()=>{

        /* FUNCION PARA EL LOADER */
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

        loadScript('./assets/js/rev-script-1.js');
    })
    
    /* COMPONENTE */
    if(!loading_institucion && !loading_static_data){

        /* DATOS DE LA INSTITUCION */
        const {
            institucion_nombre,
            institucion_facebook,
            institucion_youtube,
            institucion_twitter,
            institucion_iniciales,
            portada
        } = institucion

        /* DATOS STATICOS  */
        const {
            txt_content_banner_two,
            txt_content_banner,
            txt_content_btn,
            txt_content_banner_three
        } = staticData

        const Attributes = {
            'data-index' : "rs-72",
            'data-transition' : "fade",
            'data-slotamount' : "default",
            'data-hideafterloop' : 0,
            'data-hideslideonmobile' : "off",
            'data-easein' : "default",
            'data-easeout' : "default",
            'data-masterspeed' : 300,
            'data-thumb' : "require('./../../images/main-slider/slider1/slide3.jpg')",
            'data-rotate' : 0,
            'data-saveperformance' : "off",
            'data-param1' : 1,
        }

        const Attributes2 = {
            'data-index' : "rs-73",
            'data-transition' : "fade",
            'data-slotamount' : "default",
            'data-hideafterloop' : 0,
            'data-hideslideonmobile' : "off",
            'data-easein' : "default",
            'data-easeout' : "default",
            'data-masterspeed' : 300,
            'data-thumb' : "require('./../../images/main-slider/slider1/slide1.jpg')",
            'data-rotate' : 0,
            'data-saveperformance' : "off",
            'data-param1' : 1,
        }   

        const Attributes3 = {
            'data-index' : "rs-74",
            'data-transition' : "fade",
            'data-slotamount' : "default",
            'data-hideafterloop' : 0,
            'data-hideslideonmobile' : "off",
            'data-easein' : "default",
            'data-easeout' : "default",
            'data-masterspeed' : 300,
            'data-thumb' : "require('./../../images/main-slider/slider1/slide2.jpg')",
            'data-rotate' : 0,
            'data-saveperformance' : "off",
            'data-param1' : 1,
        }   

        const indiceAleatorio = Math.floor(Math.random() * portada.length);
        const imagenSeleccionada = portada[indiceAleatorio].portada_imagen;
        const img = `${process.env.REACT_APP_ROOT_API}/InstitucionUpea/Portada/${imagenSeleccionada}`;

        const indiceAleatorio2 = Math.floor(Math.random() * portada.length);
        const imagenSeleccionada2 = portada[indiceAleatorio2].portada_imagen;
        const img2 = `${process.env.REACT_APP_ROOT_API}/InstitucionUpea/Portada/${imagenSeleccionada2}`;            

        const indiceAleatorio3 = Math.floor(Math.random() * portada.length);
        const imagenSeleccionada3 = portada[indiceAleatorio3].portada_imagen;
        const img3 = `${process.env.REACT_APP_ROOT_API}/InstitucionUpea/Portada/${imagenSeleccionada3}`;    
        
        /* COMPONENTE */
        return (
            <>
                <div id="rev_slider_26_1_wrapper" className="rev_slider_wrapper fullscreen-container home-rev-slider" data-alias="mask-showcase" data-source="gallery">
                    {/* START REVOLUTION SLIDER 5.4.1 fullscreen mode */}
                    <div id="rev_slider_26_1" className="rev_slider fullscreenbanner" style={{ display: 'none' }} data-version="5.4.1">
                        <ul>
                            {/* SLIDE 1 */}
                            {img && <li {...Attributes} data-title data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                                {/* MAIN IMAGE */}
                                <img src={img} alt="" data-bgcolor="#f8f8f8" style={{}} data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="off" className="rev-slidebg" data-no-retina />
                                {/* LAYER 1  right image overlay dark*/}
                                <div className="tp-caption tp-shape tp-shapewrapper  rs-parallaxlevel-tobggroup" id="slide-75-layer-1" data-x="['right','right','right','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-fontweight="['100','100','400','400']" data-width="['full','full','full','full']" data-height="['full','full','full','full']" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:150,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 6, backgroundColor: 'rgba(0,0,0,0.7)' }}>
                                </div>
                                {/* LAYER 3  Thin text title*/}
                                <div className="tp-caption   tp-resizeme slider-tag-line" id="slide-72-layer-3" data-x="['left','left','center','center']" data-hoffset="['50','50','0','0']" data-y="['top','top','top','top']" data-voffset="['150','150','150','100']" data-fontsize="['22',22','20','16']" data-lineheight="['26','26','26','22']" data-width="['700','600','600','380']" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:300,&quot;speed&quot;:750,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                      {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;sfxcolor&quot;:&quot;#ffffff&quot;,&quot;sfx_effect&quot;:&quot;blocktoleft&quot;,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;z:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 10, fontWeight: 500, letterSpacing: 10, color: '#fff', fontFamily: '"Poppins", sans-serif', textTransform: 'uppercase' }}>{institucion_iniciales}</div>
                                {/* LAYER 4  Bold Title*/}
                                <div className="tp-caption   tp-resizeme" id="slide-72-layer-4" data-x="['left','left','center','center']" data-hoffset="['46','46','0','0']" data-y="['top','top','top','top']" data-voffset="['190','190','190','150']" data-fontsize="['64','54','44','34']" data-lineheight="['80','70','60','50']" data-width="['700','600','500','380']" data-height="none" data-whitespace="normal" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:200,&quot;speed&quot;:750,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                      {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;sfxcolor&quot;:&quot;#ffffff&quot;,&quot;sfx_effect&quot;:&quot;blocktoleft&quot;,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;z:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 10, whiteSpace: 'normal', fontWeight: 800, color: '#fff', fontFamily: '"Poppins", sans-serif' }}>{institucion_nombre}</div>
                                {/* LAYER 5  Paragraph*/}
                                <div className="tp-caption   tp-resizeme" id="slide-72-layer-5" data-x="['left','left','center','center']" data-hoffset="['50','50','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['30','60','50','70']" data-fontsize="['18','18','18','16']" data-lineheight="['30','30','30','30']" data-width="['600','600','500','380']" data-height="none" data-whitespace="normal" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:200,&quot;speed&quot;:750,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                      {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;sfxcolor&quot;:&quot;#ffffff&quot;,&quot;sfx_effect&quot;:&quot;blocktoleft&quot;,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;z:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 10, whiteSpace: 'normal', color: '#fff', fontFamily: '"Poppins", sans-serif' }}>{ txt_content_banner }</div>
                                {/* LAYER 6  Read More*/}
                                <div className="tp-caption rev-btn  tp-resizeme" id="slide-72-layer-6" data-x="['left','left','center','center']" data-hoffset="['50','50','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['120','140','140','150']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="button" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,
                      &quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                      {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;to&quot;:&quot;y:[-100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power1.easeIn&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 9, lineHeight: 30 }}><NavLink to={"/categoria"} className="site-button btn-half"><span>{txt_content_btn}</span></NavLink></div>
                                {/* Border left Part */}
                                <div className="tp-caption tp-shape tp-shapewrapper " id="slide-72-layer-8" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-visibility="['on','off','off','off']" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;delay&quot;:50,&quot;speed&quot;:100,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeIn&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 8, backgroundColor: 'rgba(0, 0, 0, 0)', borderLeft: '40px solid #eef1f2' }}> </div>
                                {/* Border bottom Part */}
                                <div className="tp-caption tp-shape tp-shapewrapper " id="slide-72-layer-7" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-visibility="['on','on','off','off']" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;delay&quot;:50,&quot;speed&quot;:100,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeIn&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 8, backgroundColor: 'rgba(0, 0, 0, 0)', borderBottom: '80px solid #eef1f2' }}> </div>
                            </li>}
                            {/* SLIDE 2 */}
                            {img2 && <li {...Attributes2} data-title data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                                {/* MAIN IMAGE */}
                                <img src={img2} alt="" data-bgcolor="#f8f8f8" style={{}} data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="off" className="rev-slidebg" data-no-retina />
                                {/* LAYER 1  right image overlay dark*/}
                                <div className="tp-caption tp-shape tp-shapewrapper  rs-parallaxlevel-tobggroup" id="slide-73-layer-1" data-x="['right','right','right','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-fontweight="['100','100','400','400']" data-width="['full','full','full','full']" data-height="['full','full','full','full']" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:150,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 6, backgroundColor: 'rgba(0,0,0,0.7)' }}>
                                </div>
                                {/* LAYER 3  Thin text title*/}
                                <div className="tp-caption   tp-resizeme slider-tag-line" id="slide-73-layer-3" data-x="['left','left','center','center']" data-hoffset="['50','50','0','0']" data-y="['top','top','top','top']" data-voffset="['150','150','150','100']" data-fontsize="['22',22','20','16']" data-lineheight="['26','26','26','22']" data-width="['700','600','600','380']" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:300,&quot;speed&quot;:750,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                      {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;sfxcolor&quot;:&quot;#ffffff&quot;,&quot;sfx_effect&quot;:&quot;blocktoleft&quot;,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;z:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 10, fontWeight: 500, letterSpacing: 10, color: '#fff', fontFamily: '"Poppins", sans-serif', textTransform: 'uppercase' }}>{ institucion_iniciales }</div>
                                {/* LAYER 4  Bold Title*/}
                                <div className="tp-caption   tp-resizeme" id="slide-73-layer-4" data-x="['left','left','center','center']" data-hoffset="['46','46','0','0']" data-y="['top','top','top','top']" data-voffset="['190','190','190','150']" data-fontsize="['64','54','44','34']" data-lineheight="['80','70','60','50']" data-width="['700','600','500','380']" data-height="none" data-whitespace="normal" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:200,&quot;speed&quot;:750,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                      {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;sfxcolor&quot;:&quot;#ffffff&quot;,&quot;sfx_effect&quot;:&quot;blocktoleft&quot;,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;z:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 10, whiteSpace: 'normal', fontWeight: 800, color: '#fff', fontFamily: '"Poppins", sans-serif' }}>{ institucion_nombre }</div>
                                {/* LAYER 5  Paragraph*/}
                                <div className="tp-caption   tp-resizeme" id="slide-73-layer-5" data-x="['left','left','center','center']" data-hoffset="['50','50','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['30','60','50','70']" data-fontsize="['18','18','18','16']" data-lineheight="['30','30','30','30']" data-width="['600','600','500','380']" data-height="none" data-whitespace="normal" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:200,&quot;speed&quot;:750,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                      {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;sfxcolor&quot;:&quot;#ffffff&quot;,&quot;sfx_effect&quot;:&quot;blocktoleft&quot;,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;z:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 10, whiteSpace: 'normal', color: '#fff', fontFamily: '"Poppins", sans-serif' }}>{ txt_content_banner_two }</div>
                                {/* LAYER 6  Read More*/}
                                <div className="tp-caption rev-btn  tp-resizeme" id="slide-73-layer-6" data-x="['left','left','center','center']" data-hoffset="['50','50','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['120','140','140','150']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="button" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,
                      &quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                      {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;to&quot;:&quot;y:[-100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power1.easeIn&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 9, lineHeight: 30 }}><NavLink to={"/categoria"} className="site-button btn-half"><span>{txt_content_btn}</span></NavLink></div>
                                {/* Border left Part */}
                                <div className="tp-caption tp-shape tp-shapewrapper " id="slide-73-layer-8" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-visibility="['on','off','off','off']" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;delay&quot;:50,&quot;speed&quot;:100,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeIn&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 8, backgroundColor: 'rgba(0, 0, 0, 0)', borderLeft: '40px solid #eef1f2' }}> </div>
                                {/* Border bottom Part */}
                                <div className="tp-caption tp-shape tp-shapewrapper " id="slide-73-layer-7" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-visibility="['on','on','off','off']" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;delay&quot;:50,&quot;speed&quot;:100,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeIn&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 8, backgroundColor: 'rgba(0, 0, 0, 0)', borderBottom: '80px solid #eef1f2' }}> </div>
                            </li>}
                            {/* SLIDE 3 */}
                            {img3 && <li {...Attributes3} data-title data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                                {/* MAIN IMAGE */}
                                <img src={img3} alt="" data-bgcolor="#f8f8f8" style={{}} data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="off" className="rev-slidebg" data-no-retina />
                                {/* LAYER 1  right image overlay dark*/}
                                <div className="tp-caption tp-shape tp-shapewrapper  rs-parallaxlevel-tobggroup" id="slide-74-layer-1" data-x="['right','right','right','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-fontweight="['100','100','400','400']" data-width="['full','full','full','full']" data-height="['full','full','full','full']" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:150,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 6, backgroundColor: 'rgba(0,0,0,0.7)' }}>
                                </div>
                                {/* LAYER 3  Thin text title*/}
                                <div className="tp-caption   tp-resizeme slider-tag-line" id="slide-74-layer-3" data-x="['left','left','center','center']" data-hoffset="['50','50','0','0']" data-y="['top','top','top','top']" data-voffset="['150','150','150','100']" data-fontsize="['22',22','20','16']" data-lineheight="['26','26','26','22']" data-width="['700','600','600','380']" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:300,&quot;speed&quot;:750,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                      {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;sfxcolor&quot;:&quot;#ffffff&quot;,&quot;sfx_effect&quot;:&quot;blocktoleft&quot;,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;z:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 10, fontWeight: 500, letterSpacing: 10, color: '#fff', fontFamily: '"Poppins", sans-serif', textTransform: 'uppercase' }}>{ institucion_iniciales }</div>
                                {/* LAYER 4  Bold Title*/}
                                <div className="tp-caption   tp-resizeme" id="slide-74-layer-4" data-x="['left','left','center','center']" data-hoffset="['46','46','0','0']" data-y="['top','top','top','top']" data-voffset="['190','190','190','150']" data-fontsize="['64','54','44','34']" data-lineheight="['80','70','60','50']" data-width="['700','600','500','380']" data-height="none" data-whitespace="normal" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:200,&quot;speed&quot;:750,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                      {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;sfxcolor&quot;:&quot;#ffffff&quot;,&quot;sfx_effect&quot;:&quot;blocktoleft&quot;,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;z:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 10, whiteSpace: 'normal', fontWeight: 800, color: '#fff', fontFamily: '"Poppins", sans-serif' }}>{ institucion_nombre }</div>
                                {/* LAYER 5  Paragraph*/}
                                <div className="tp-caption   tp-resizeme" id="slide-74-layer-5" data-x="['left','left','center','center']" data-hoffset="['50','50','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['30','60','50','70']" data-fontsize="['18','18','18','16']" data-lineheight="['30','30','30','30']" data-width="['600','600','500','380']" data-height="none" data-whitespace="normal" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:200,&quot;speed&quot;:750,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                      {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;sfxcolor&quot;:&quot;#ffffff&quot;,&quot;sfx_effect&quot;:&quot;blocktoleft&quot;,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;z:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 10, whiteSpace: 'normal', color: '#fff', fontFamily: '"Poppins", sans-serif' }}>{ txt_content_banner_three }</div>
                                {/* LAYER 6  Read More*/}
                                <div className="tp-caption rev-btn  tp-resizeme" id="slide-74-layer-6" data-x="['left','left','center','center']" data-hoffset="['50','50','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['120','140','140','150']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="button" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,
                      &quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                      {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;to&quot;:&quot;y:[-100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power1.easeIn&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 9, lineHeight: 30 }}><NavLink to={"/categoria"} className="site-button btn-half"><span>{txt_content_btn}</span></NavLink></div>
                                {/* Border left Part */}
                                <div className="tp-caption tp-shape tp-shapewrapper " id="slide-74-layer-8" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-visibility="['on','off','off','off']" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;delay&quot;:50,&quot;speed&quot;:100,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeIn&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 8, backgroundColor: 'rgba(0, 0, 0, 0)', borderLeft: '40px solid #eef1f2' }}> </div>
                                {/* Border bottom Part */}
                                <div className="tp-caption tp-shape tp-shapewrapper " id="slide-74-layer-7" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-visibility="['on','on','off','off']" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;delay&quot;:50,&quot;speed&quot;:100,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeIn&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 8, backgroundColor: 'rgba(0, 0, 0, 0)', borderBottom: '80px solid #eef1f2' }}> </div>
                            </li> }                                                       
                        </ul>
                        <div className="tp-bannertimer" />
                        {/* left side social bar*/}
                        <div className="slide-left-social">
                            <ul className="clearfix">
                                <li><a href={institucion_youtube} target="_blank" rel="noopener noreferrer" className="sx-title-swip" data-hover="YouTube">Youtube</a></li>
                                <li><a href={institucion_twitter} target="_blank"  rel="noopener noreferrer" className="sx-title-swip" data-hover="Twitter">Twitter</a></li>
                                <li><a href={institucion_facebook} target="_blank"  rel="noopener noreferrer" className="sx-title-swip" data-hover="Facebook">Facebook</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    return null        
};

/* =============================================================================
/
/    WEB DEVELOPER => CRISTHIAN VILLCA MAMANI
/    LINKEDIN => https://www.linkedin.com/in/cristhian-villca-mamani-06933b251/
/
================================================================================ */ 

export default Slider1;