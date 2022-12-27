import React, {useState, useEffect}from 'react';
import '../part2/part2.css'
import content from './images'

function Part2() {
    const [count, setCount] = useState(0)
    // const [headerFade, setHeaderFade] = useState('head')
    const [fade, setFade] = useState({
        fade: 'fade-in'
    })
    useEffect (()=> {
        const timer = setInterval(() => {
           fade === 'fade-in'
           ? setFade('fade-out')
           : setFade('fade-in')
        },3000)
        console.log ('state changed...')
         return () => clearInterval(timer)
       },[fade])
    useEffect (() => { 
        const interval = setInterval(() => {
            setCount(content[Math.floor(Math.random()* content.length)]);
        },6000)
        console.log('updating state....')
        return () => clearInterval(interval);
    },[])
     
   
    return ( 
        <>
        <div className='container'>
        <p className="pg">poetry makes pain feel productive.<br></br>
        that's a dangerous silver linning.<br></br><br></br>rachel.h</p>
            <h1 className='head'> Poetry is a <span className='light'>language caught</span><br></br> alive...</h1>
            <div className="cont1">
            <img className={fade} src= {count} alt="" />
            </div>
        </div>
        </>
     );
}

export default Part2 ;