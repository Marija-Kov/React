import React from 'react'

export default function OutputBox(props){

    return(
        <p className="box">{props.inputTxt[`inputBox${props.i}`]}</p>
    )
}