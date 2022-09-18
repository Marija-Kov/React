import React from 'react'

export default function OutputBox(props){

    return(
        <p id={`outputTxt${props.i}`} className='box'>{props.inputTxt[`inputBox${props.i}`]}</p>
    )
}