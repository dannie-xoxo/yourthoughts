import React from 'react';
import '../part5/part5.css'
import cover3 from '../images/cover3.jpg'

function Part5() {
    return ( 
        <>
        <div className="big-box">
            <div className="small-box">
            <div className="content">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Quidem, odit. Dolores a assumenda doorem et delectus nisi laboriosam voluptas aliquam
                    reiciendis nemo id molestias at maxime dignissimos corrupti, similique quae totam tenetur
                    iure odit voluptatibus minus. Recusandae debitis iste, libero ab possimus quibusdam laudantium
                    qui earum. Enim repudiandae error officiis harum magnam, quaerat ex quod omnis quo aliquid libero
                    ipsam tempora quasi praesentium optio ab voluptas ut non, ducimus commodi.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, aperiam. Et omnis illo impedit. Recusandae inventore
                    voluptas sed quibusdam unde nulla tenetur qui exercitationem 
                    atque neque odio enim dolor eius aut, nam facere quidem praesentium, 
                    obcaecati reiciendis hic maiores similique. Fugiat dignissimos officia 
                    consequatur incidunt! Asperiores rerum atque officiis minima amet? Ducimus 
                    magni quidem sunt, obcaecati doloremque harum dolores fuga aperiam! Quod ea 
                    perferendis accusamus iusto voluptas placeat odio rerum est natus, quia fugit 
                    ut quisquam veritatis deserunt quos id ducimus voluptatum tenetur debitis cupiditate, 
                    alias earum commodi! Sint voluptas repellat odio repudiandae quasi fugit possimus animi, 
                    assumenda expedita dolor?</div>
                    
                <div className="case-1">
                    <p className="text">About</p>
                    <h1 className="big-h">Who we are</h1>
                <p className ='paragraph'> Our aim  is to expand access to poetry and 
                    educational poetry materials, gathering great
                    poems from across places, eras and traditions.
                </p>
                <button className="btn">Read more</button>
                </div>
                <div className="case-2">
                    <img src={cover3} alt="" className="about-cover" />
                </div>
            </div>
        </div>
        </>
     );
}

export default Part5;