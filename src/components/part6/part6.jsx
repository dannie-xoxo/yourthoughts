import React from 'react';
import { useTypewriter, Cursor} from 'react-simple-typewriter';
import '../part6/part6.css'

function Part6() {
    const [words] = useTypewriter({
        words: ['~Our mission is to bring the legacy of poetry to a younger generation~',
         '~To allow writers to express thier emotions and allow readers to connect to those emotions~',
        '~To enlighten minds on the world and the various situations we find ourselves in~'],
        loop: {},
        typeSpeed: 200,
        deleteSpeed: 100,
        delaySpeed: 1000
    })
    return ( 
        <>
    
            <div className="vessel">
            <p className="text">Our Vision</p>
            <h1 className="vision">
            <span>
            {words} 
            <span><Cursor/></span>
            </span>
            </h1>
        </div>
        </>
     );
}

export default Part6;