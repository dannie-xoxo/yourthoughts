import React,{useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css' 
import "swiper/css/pagination";
import 'swiper/css/navigation';
import cover1 from '../images/cover1.jpg'
import cover2 from '../images/cover2.jpg'

import '../part3/part3.css'
// import content from '../static/index'
// import Button from '../static/button';





function Part3() {
 
 
  
  
 const[next, setNext] = useState('books')
 const[btnName, setBtnName]= useState('Read')
  const toggle1 = () => {
    next === 'books'
  ? setNext('books books-active')
  : setNext('books');

  btnName === 'Read'
  ? setBtnName('Return')
  : setBtnName('Read')
  }

  const[next2, setNext2] = useState('books')
  const[btnName2, setBtnName2]= useState('Read')
  const toggle2 = () => {
    next2 === 'books'
    ? setNext2('books books-active')
    : setNext2('books');

    btnName2 === 'Read'
  ? setBtnName2('Return')
  : setBtnName2('Read')
  
  }
  const[next3, setNext3] = useState('books');
  const[btnName3, setBtnName3]= useState('Read')
  const toggle3 = () => {
    next3 === 'books'
    ? setNext3('books books-active')
    : setNext3('books');

    btnName3 === 'Read'
  ? setBtnName3('Return')
  : setBtnName3('Read')
  
  }
  const[next4, setNext4] = useState('books');
  const[btnName4, setBtnName4]= useState('Read')
  const toggle4 = () => {
    next4 === 'books'
    ? setNext4('books books-active')
    : setNext4('books');

    btnName4 === 'Read'
  ? setBtnName4('Return')
  : setBtnName4('Read')
  
  }
  const[next5, setNext5] = useState('books');
  const[btnName5, setBtnName5]= useState('Read')
  const toggle5 = () => {
    next5 === 'books'
    ? setNext5('books books-active')
    : setNext5('books');

    btnName5 === 'Read'
  ? setBtnName5('Return')
  : setBtnName5('Read')
  
  }
  const[next6, setNext6] = useState('books');
  const[btnName6, setBtnName6]= useState('Read')
  const toggle6= () => {
    next6 === 'books'
    ? setNext6('books books-active')
    : setNext6('books');

    btnName6 === 'Read'
  ? setBtnName6('Return')
  : setBtnName6('Read')
  
  }

  const[next7, setNext7] = useState('books');
  const[btnName7, setBtnName7]= useState('Read')
  const toggle7 = () => {
    next7 === 'books'
    ? setNext7('books books-active')
    : setNext7('books');

    btnName7 === 'Read'
    ? setBtnName7('Return')
    : setBtnName7('Read')
    
  }



  
    return ( 
        <>
        <div className="box">
        <div className="header1">latest poems</div>
        <h2 className="header2">Experience great poetry</h2>
        <div className="slide-container">
       
        
       
         <Swiper
        slidesPerView={3}
        spaceBetween= {20}
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
        768: {
          slidesPerView: 3
        }
       }}
        modules= {[Navigation, Pagination]}
        className='mySwiper'
         >
           
           <div className="slide-content">
           <div className="row">
              <SwiperSlide>
                <div className= {next}>
                 <div className='side-b'><p>Lorem ipsum dolor sit amet
                   consectetur adipisicing elit. 
             Accusamus et quas delectus sed consequatur corporis 
             laudantium natus facilis earum error excepturi<br></br> 
             <br></br>
             Cumque ab libero eos ad quidem odio quis deleniti
             Lorem ipsum dolor sit amet consectetur, 
             adipisicing elit. Fugiat blanditiis ipsa nobis vitae
              a magnam commodi obcaecati sint cumque. <br></br>
              <br></br>
              Neque repellat illum aperiam sequi magnam.
               Expedita sequi laudantium ex nostrum?,
               Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
                Illum doloribus, praesentium vitae molestiae atque quis possimus voluptates! 
                Debitis eos quaerat, harum aut dolor nisi,
                 sint officia culpa ipsam nam impedit.</p></div>  
              <h2 className='title'>teach me to be whole</h2>
                    <div className="underline"></div>
                    <img src= {cover1} alt="" className="cover" />
                    <p className="author">By Daniel Orisaeke</p>
                    </div>
                    <button className="read" onClick={toggle1}>{btnName}</button>
                    </SwiperSlide>
                    
                    
                    <SwiperSlide>
                    <div className= {next2}>
                 <div className='side-b'><p>Lorem ipsum dolor sit amet
                   consectetur adipisicing elit. 
             Accusamus et quas delectus sed consequatur corporis 
             laudantium natus facilis earum error excepturi<br></br> 
             <br></br>
             Cumque ab libero eos ad quidem odio quis deleniti
             Lorem ipsum dolor sit amet consectetur, 
             adipisicing elit. Fugiat blanditiis ipsa nobis vitae
              a magnam commodi obcaecati sint cumque. <br></br>
              <br></br>
              Neque repellat illum aperiam sequi magnam.
               Expedita sequi laudantium ex nostrum?,
               Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
                Illum doloribus, praesentium vitae molestiae atque quis possimus voluptates! 
                Debitis eos quaerat, harum aut dolor nisi,
                 sint officia culpa ipsam nam impedit.</p></div>  
              <h2 className='title'>Toxic Love</h2>
                    <div className="underline"></div>
                    <img src= {cover2} alt="" className="cover" />
                    <p className="author">By Cynosure</p>
                    </div>
                    <button className="read" onClick={toggle2}>{btnName2}</button>
                   </SwiperSlide>
                    
                  <SwiperSlide>
                    <div className= {next3}>
                 <div className='side-b'><p>Lorem ipsum dolor sit amet
                   consectetur adipisicing elit. 
             Accusamus et quas delectus sed consequatur corporis 
             laudantium natus facilis earum error excepturi<br></br> 
             <br></br>
             Cumque ab libero eos ad quidem odio quis deleniti
             Lorem ipsum dolor sit amet consectetur, 
             adipisicing elit. Fugiat blanditiis ipsa nobis vitae
              a magnam commodi obcaecati sint cumque. <br></br>
              <br></br>
              Neque repellat illum aperiam sequi magnam.
               Expedita sequi laudantium ex nostrum?,
               Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
                Illum doloribus, praesentium vitae molestiae atque quis possimus voluptates! 
                Debitis eos quaerat, harum aut dolor nisi,
                 sint officia culpa ipsam nam impedit.</p></div>  
              <h2 className='title'>Clouds</h2>
                    <div className="underline"></div>
                    <img src= {cover1} alt="" className="cover" />
                    <p className="author">By Daniel Orisaeke</p>
                    </div>
                    <button className="read" onClick={toggle3}>{btnName3}</button>
                   </SwiperSlide>

                   <SwiperSlide>
                    <div className= {next4}>
                 <div className='side-b'><p>Lorem ipsum dolor sit amet
                   consectetur adipisicing elit. 
             Accusamus et quas delectus sed consequatur corporis 
             laudantium natus facilis earum error excepturi<br></br> 
             <br></br>
             Cumque ab libero eos ad quidem odio quis deleniti
             Lorem ipsum dolor sit amet consectetur, 
             adipisicing elit. Fugiat blanditiis ipsa nobis vitae
              a magnam commodi obcaecati sint cumque. <br></br>
              <br></br>
              Neque repellat illum aperiam sequi magnam.
               Expedita sequi laudantium ex nostrum?,
               Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
                Illum doloribus, praesentium vitae molestiae atque quis possimus voluptates! 
                Debitis eos quaerat, harum aut dolor nisi,
                 sint officia culpa ipsam nam impedit.</p></div>  
              <h2 className='title'>Before I Cease</h2>
                    <div className="underline"></div>
                    <img src= {cover2} alt="" className="cover" />
                    <p className="author">By Zahra</p>
                    </div>
                    <button className="read" onClick={toggle4}>{btnName4}</button>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className= {next5}>
                 <div className='side-b'><p>Lorem ipsum dolor sit amet
                   consectetur adipisicing elit. 
             Accusamus et quas delectus sed consequatur corporis 
             laudantium natus facilis earum error excepturi<br></br> 
             <br></br>
             Cumque ab libero eos ad quidem odio quis deleniti
             Lorem ipsum dolor sit amet consectetur, 
             adipisicing elit. Fugiat blanditiis ipsa nobis vitae
              a magnam commodi obcaecati sint cumque. <br></br>
              <br></br>
              Neque repellat illum aperiam sequi magnam.
               Expedita sequi laudantium ex nostrum?,
               Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
                Illum doloribus, praesentium vitae molestiae atque quis possimus voluptates! 
                Debitis eos quaerat, harum aut dolor nisi,
                 sint officia culpa ipsam nam impedit.</p></div>  
              <h2 className='title'>Before I Cease</h2>
                    <div className="underline"></div>
                    <img src= {cover2} alt="" className="cover" />
                    <p className="author">By Zahra</p>
                    </div>
                    <button className="read" onClick={toggle5}>{btnName5}</button>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className= {next6}>
                 <div className='side-b'><p>Lorem ipsum dolor sit amet
                   consectetur adipisicing elit. 
             Accusamus et quas delectus sed consequatur corporis 
             laudantium natus facilis earum error excepturi<br></br> 
             <br></br>
             Cumque ab libero eos ad quidem odio quis deleniti
             Lorem ipsum dolor sit amet consectetur, 
             adipisicing elit. Fugiat blanditiis ipsa nobis vitae
              a magnam commodi obcaecati sint cumque. <br></br>
              <br></br>
              Neque repellat illum aperiam sequi magnam.
               Expedita sequi laudantium ex nostrum?,
               Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
                Illum doloribus, praesentium vitae molestiae atque quis possimus voluptates! 
                Debitis eos quaerat, harum aut dolor nisi,
                 sint officia culpa ipsam nam impedit.</p></div>  
              <h2 className='title'>Before I Cease</h2>
                    <div className="underline"></div>
                    <img src= {cover2} alt="" className="cover" />
                    <p className="author">By Zahra</p>
                    </div>
                    <button className="read" onClick={toggle6}>{btnName6}</button>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className= {next7}>
                 <div className='side-b'><p>Lorem ipsum dolor sit amet
                   consectetur adipisicing elit. 
             Accusamus et quas delectus sed consequatur corporis 
             laudantium natus facilis earum error excepturi<br></br> 
             <br></br>
             Cumque ab libero eos ad quidem odio quis deleniti
             Lorem ipsum dolor sit amet consectetur, 
             adipisicing elit. Fugiat blanditiis ipsa nobis vitae
              a magnam commodi obcaecati sint cumque. <br></br>
              <br></br>
              Neque repellat illum aperiam sequi magnam.
               Expedita sequi laudantium ex nostrum?,
               Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
                Illum doloribus, praesentium vitae molestiae atque quis possimus voluptates! 
                Debitis eos quaerat, harum aut dolor nisi,
                 sint officia culpa ipsam nam impedit.</p></div>  
              <h2 className='title'>Before I Cease</h2>
                    <div className="underline"></div>
                    <img src= {cover2} alt="" className="cover" />
                    <p className="author">By Zahra</p>
                    </div>
                    <button className="read" onClick={toggle7}>{btnName7}</button>
                    </SwiperSlide>

                    </div> 
                    </div>
                    
                    
                   
                   
                  
                   
   </Swiper>
   </div>
    </div>
   
   
   

        
      
  
        </>
   );
}
export default Part3;
/* <div className= {next} key={key}>
                 <div className='side-b'>{input.poem} </div>  
              <h2 className='title'>{input.title}</h2>
                    <div className="underline"></div>
                    <img src= {input.img} alt="" className="cover" />
                    <p className="author">{input.author}</p>
                    </div>
                    <button className="read" onClick={toggle}>{btnName}</button> */
