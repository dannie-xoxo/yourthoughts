import React, { useState } from 'react';
import '../part4/part4.css'
import pom from '../images/pom.jpg'

function Part4() {
    const[reveal, setReveal] = useState('cont-2')
    const[btnName, setBtnName] = useState('Read')

    const toggler = () => {
      reveal === 'cont-2' 
      ?setReveal('cont-2 cont-2-active')  
      :setReveal('cont-2')

      btnName === 'Read'
      ?setBtnName('Return')
      :setBtnName('Read')
    }
    return ( 
        <>
        <div className="repo">
        <div className="piece">Lorem ipsum dolor sit amet,
                 consectetur adipisicing elit. Veritatis amet soluta sint mollitia
                  odit sunt eius id exercitationem esse nobis eum, quo doloribus
                   unde ducimus optio vitae hic perspiciatis tempora quos nihil illum 
                   architecto facere. Voluptas labore nemo veniam necessitatibus incidunt
                    odio quisquam unde animi quas asperiores laborum dolorum non nobis
                     cum odit suscipit aliquid, exercitationem id! Cumque, atque velit!<br></br>
                     <br></br>
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Autem maiores assumenda, dolorum facilis porro amet perferendis 
                    adipisci quasi tenetur! Dolore pariatur repellendus labore nemo
                    magni ex saepe voluptas iure molestias qui eos perspiciatis     
            accusantium assumenda, est animi eum. Sapiente iure recusandae
            eaque non dicta blanditiis suscipit ipsam at exercitationem!
         Quo illum, recusandae sequi distinctio debitis deserunt 
            dignissimos corrupti non molestias.<br></br>
            <br></br>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Sapiente obcaecati unde magnam minima ex rerum non nostrum,
          officiis reprehenderit laudantium, at, ipsam doloremque quam
         fugiat dicta nesciunt voluptatibus doloribus totam dolor.
          Vel, consequatur aspernatur. Iure nesciunt corrupti nisi
           illum porro. Est libero, eos minus accusamus esse eveniet,
            omnis hic velit voluptate ea architecto? Quae earum,
             quibusdam temporibus dolorem dolores mollitia!</div>
            <div className="cont-1">
            <img className='poem-cover'src={pom} alt="" />
           
            <div className= {reveal}>
            
                <p className="text">Poem of the month</p>
                <h1 className="p-title">The <br></br>Darkest Part</h1>
                <p className="author">By Daniel Orisaeke</p> 
            </div>
        </div>
        <button className="read" onClick={toggler}>{btnName}</button>
        </div>
        
        </>
     );
}

export default Part4;