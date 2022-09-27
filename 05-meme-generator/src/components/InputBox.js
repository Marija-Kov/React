import React from "react"

export default function InputBox(props){
    return(
        <input 
          className={props.id > props.boxCount ? "hidden" : ""}
          type="text" 
          placeholder={`input box ${props.id}`} 
          id={`inputBox${props.id}`}
          name={`inputBox${props.id}`} 
          onChange={props.handleChange}
          value={props.inputTxt[`inputBox${props.id}`]} 
          />
    )
    
}