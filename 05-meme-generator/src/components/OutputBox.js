
import React from 'react'
import Draggable from 'react-draggable';
export default function OutputBox(props){

    return(
        <Draggable>
        <p name={`outputTxt${props.id}`} 
           id={`outputTxt${props.id}`} 
           className='box'>
               {props.inputTxt[`inputBox${props.id}`]}
               </p>
             </Draggable>  
    )
}