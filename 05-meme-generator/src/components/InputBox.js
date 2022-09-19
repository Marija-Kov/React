import React from "react"

export default function InputBox(props){

    return(
        <input 
          type="text" 
          placeholder={`input box ${props.id}`} 
          name={`inputBox${props.id}`} 
          onChange={props.handleChange}/>
    )
    
}