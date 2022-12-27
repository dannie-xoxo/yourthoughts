import React from "react";
import "../part1/part1.css"

function Part1() {

    return ( 
        <>
        <nav className="keyNav">
        <h2 className="header">YourThoughts...</h2>
        <ul className='mainNav'>
           <li className='navItem'><a className='active' href="#Home" >Home</a></li>
                <li className='navItem'><a href="#menu-container" className='navLink'>Log In</a></li>
                <li className='navItem'><a href="signIn" className='navLink'>Sign In</a></li>
                </ul>
        </nav>
        </>
     );
}

export default Part1;