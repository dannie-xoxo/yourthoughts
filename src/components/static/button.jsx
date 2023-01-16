import React,{useState} from 'react';
import '../part3/part3.css'

function Button(props) {
  const[next, setNext] = useState('books');
  const[btnName, setBtnName]= useState('Read')

  const toggle = () => {
    props.data({next})
    next === 'books'
  ? setNext('books books-active')
  : setNext('books');

  btnName === 'Read'
  ? setBtnName('Return')
  : setBtnName('Read') 

 
  }
    return ( 
        <>
        <button className="read" onClick={toggle}>{btnName}</button> 
        </>
     );
}

export default Button;