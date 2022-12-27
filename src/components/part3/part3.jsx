import React from 'react';
import '../part3/part3.css'
import cover1 from '../images/cover1.jpg'
import cover2 from '../images/cover2.jpg'
function Part3() {
    return ( 
        <>
        <div className="box">
        <div className="header1">latest poems</div>

        <h2 className="header2">Experience great poetry</h2>
        <div className="row">
        <div className="books">
            <h2 className='title'>Teach me to be whole</h2>
            <div className="underline"></div>
            <img src={cover1} alt="" className="cover" />
            <p className="author">By Daniel Orisaeke.</p>
        </div>
        <div className="books">
            <h2 className='title'>Toxic love</h2>
            <div className="underline"></div>
            <img src= {cover2} alt="" className="cover" />
            <p className="author">By Cynosure.</p>
        </div>
        <div className="books">
            <h2 className='title'>Clouds</h2>
            <div className="underline"></div>
            <img src="" alt="" className="cover" />
            <p className="author">By Daniel Orisaeke.</p>
        </div>
        <div className="books">
            <h2 className='title'>Before I Cease</h2>
            <div className="underline"></div>
            <img src="" alt="" className="cover" />
            <p className="author">By Stephanie.</p>
        </div>
        </div>
       
        </div>
        </>
     );
}

export default Part3;