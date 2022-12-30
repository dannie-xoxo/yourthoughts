import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css' 
import "swiper/css/pagination";
import 'swiper/css/navigation';

import '../part3/part3.css'
import content from '../static/index'


function Part3() {
  
    return ( 
        <>
        <div className="box">
        <div className="header1">latest poems</div>
        <h2 className="header2">Experience great poetry</h2>
        <div className="slide-container">
        <div className="slide-content">
        

         <Swiper
        slidesPerView={3}
        spaceBetween= {20}
        grabCursor={'true'}
        navigation 
        pagination={{
          clickable: true,
          dynamicBullets: 'true',
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide changed')}
       breakpoints= {{
        0: {
          slidesPerView: 1
        },
        520: {
          slidesPerView: 2
        },
        950: {
          slidesPerView: 3
        }
       }}
        modules= {[Navigation, Pagination]}
        className='mySwiper'
         >
       <div className="row">
          {content.inputs.map((input, key) => {
            return (
              <SwiperSlide>  
              <div className="books" key={key}> 
              <h2 className='title'>{input.title}</h2>
                    <div className="underline"></div>
                    <img src= {input.img}alt="" className="cover" />
                    <p className="author">{input.author}</p>
                    </div>
                    
                    </SwiperSlide>
            )
          })}
          </div>
   </Swiper>
   </div>
   </div>
   </div>
    
       
        </>
   );
}
export default Part3;
// export { Swiper, SwiperSlide };